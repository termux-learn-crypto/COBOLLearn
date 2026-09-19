#!/usr/bin/env node
/**
 * Applies the Termux/Android SWC workaround for Next.js on install.
 *
 * Next.js uses SWC native binaries which do not ship a prebuilt package for
 * Android arm64. This patch flips `loadBindings` to WASM-first on Android so
 * `next build`/`next dev` can compile via @next/swc-wasm-nodejs.
 *
 * Idempotent: safe to run after every `npm install` (wired as a postinstall
 * hook). No-ops on every other platform.
 */
const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const swcIndex = path.join(repoRoot, "node_modules", "next", "dist", "build", "swc", "index.js");
const packageJson = JSON.parse(fs.readFileSync(path.join(repoRoot, "package.json"), "utf8"));
const nextVersion = (packageJson.dependencies && packageJson.dependencies.next) ||
  (packageJson.devDependencies && packageJson.devDependencies.next);

const OLD = "useWasmBinary = false";
const NEW = 'useWasmBinary = PlatformName === "android"';

function main() {
  const isAndroid = process.platform === "android";
  const force = process.env.NEXT_FORCE_SWC_PATCH === "1";

  if (!isAndroid && !force) {
    console.log("[patch-next-swc] not Android — no-op");
    return;
  }

  if (!fs.existsSync(swcIndex)) {
    console.warn("[patch-next-swc] next/dist/build/swc/index.js not found — is Next.js installed?");
    return;
  }

  const code = fs.readFileSync(swcIndex, "utf8");

  if (code.includes(NEW)) {
    console.log("[patch-next-swc] already patched — no-op");
    return;
  }

  if (!code.includes("async function loadBindings(" + OLD + ")")) {
    console.error(
      "[patch-next-swc] could not find loadBindings signature (Next version changed?). " +
        "Expected: `async function loadBindings(" + OLD + ")`."
    );
    process.exit(1);
  }

  const patched = code.replace(OLD, NEW);
  fs.writeFileSync(swcIndex, patched);

  console.log("[patch-next-swc] applied WASM-first fallback for Android");

  const wasmPkg = path.join(repoRoot, "node_modules", "@next", "swc-wasm-nodejs");
  if (!fs.existsSync(wasmPkg)) {
    console.log(
      "[patch-next-swc] note: @next/swc-wasm-nodejs is not installed. " +
        "Run `npm i -D @next/swc-wasm-nodejs@" + (nextVersion || "<next-version>").replace(/^[\^~]/, "") +
        " --no-save` to enable the WASM fallback."
    );
  }
}

main();