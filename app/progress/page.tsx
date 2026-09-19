import type { Metadata } from "next";
import ProgressDashboard from "@/components/progress/ProgressDashboard";

export const metadata: Metadata = {
  title: "Progress",
  description:
    "Aapki COBOL learning progress — completed lessons, quiz scores aur streak.",
};

export default function ProgressPage() {
  return (
    <div className="container-app py-10">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Your Progress
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Progress aapke browser me save hoti hai — wahi device pe wapas aao to
          continue kar sakte ho.
        </p>
      </header>
      <div className="mt-6">
        <ProgressDashboard />
      </div>
    </div>
  );
}
