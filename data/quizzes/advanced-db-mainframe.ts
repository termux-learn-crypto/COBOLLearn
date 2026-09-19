import { quiz } from "./_builder";

export const advancedQuizzes = [
  quiz("subprograms", [
    ["Subprogram ko call karne ke liye kaun sa statement?", ["CALL", "PERFORM", "COPY", "LINK"], 0, "CALL statement subprogram execute karta hai."],
  ]),
  quiz("call-using", [
    ["CALL me default parameter passing kaunsa hai?", ["BY REFERENCE", "BY CONTENT", "BY VALUE", "BY NAME"], 0, "Default BY REFERENCE hota hai."],
  ]),
  quiz("linkage-section", [
    ["Subprogram parameters kis section me define hote hain?", ["LINKAGE SECTION", "WORKING-STORAGE", "FILE SECTION", "PROCEDURE"], 0, "LINKAGE SECTION parameters ke liye hai."],
  ]),
  quiz("copybook", [
    ["Copybook include karne ke liye kaun sa statement?", ["COPY", "INCLUDE", "IMPORT", "PULL"], 0, "COPY statement copybook include karta hai."],
  ]),
  quiz("sort-merge", [
    ["SORT me input aur output dene ke liye kaun se clause?", ["USING / GIVING", "OPEN / CLOSE", "READ / WRITE", "IN / OUT"], 0, "USING/GIVING se files attach karte hain."],
  ]),
  quiz("intrinsic-functions", [
    ["Text ko uppercase karne ke liye kaun sa function?", ["UPPER-CASE", "LOWER-CASE", "TRIM", "LENGTH"], 0, "UPPER-CASE function text uppercase karta hai."],
  ]),
  quiz("error-handling", [
    ["Arithmetic overflow handle karne ke liye kya use karein?", ["ON SIZE ERROR", "AT END", "INVALID KEY", "GO TO"], 0, "ON SIZE ERROR overflow handle karta hai."],
  ]),
  quiz("debugging", [
    ["COBOL me sabse simple debugging technique?", ["DISPLAY statements", "Breakpoints only", "Print stack", "Watching"], 0, "DISPLAY se values trace karte hain."],
  ]),
];

export const databaseQuizzes = [
  quiz("database-fundamentals", [
    ["Har row ka unique identifier kya kehlata hai?", ["Primary key", "Foreign key", "Column", "Index"], 0, "Primary key row ko uniquely identify karta hai."],
  ]),
  quiz("db2-introduction", [
    ["DB2 kis company ka database hai?", ["IBM", "Microsoft", "Oracle", "Google"], 0, "DB2 IBM ka hai."],
  ]),
  quiz("embedded-sql", [
    ["COBOL me SQL block kaise likhte hain?", ["EXEC SQL ... END-EXEC", "SQL ... END-SQL", "[SQL] ... [/SQL]", "RUN SQL"], 0, "EXEC SQL ... END-EXEC pattern use hota hai."],
    ["Host variable kaise identify karte hain?", ["Colon (:) prefix", "@ prefix", "No prefix", "$ prefix"], 0, "Host variables colon (:) se likhte hain."],
  ]),
  quiz("sql-select-insert", [
    ["Naya record database me daalne ke liye kaun sa SQL?", ["INSERT", "SELECT", "UPDATE", "DELETE"], 0, "INSERT naya row banata hai."],
  ]),
  quiz("sql-update-delete", [
    ["UPDATE/DELETE me WHERE bhoolne se kya hoga?", ["Saari rows affect hongi", "Kuch nahi", "Sirf ek row", "Error"], 0, "WHERE ke bina saari rows update/delete ho jayengi."],
  ]),
  quiz("commit-rollback", [
    ["Changes permanent karne ke liye kya use karein?", ["COMMIT", "ROLLBACK", "SAVE", "OPEN"], 0, "COMMIT changes permanent karta hai."],
  ]),
  quiz("cursors", [
    ["Cursor ke steps ka sahi order kya hai?", ["DECLARE, OPEN, FETCH, CLOSE", "OPEN, DECLARE, CLOSE, FETCH", "FETCH, OPEN, CLOSE, DECLARE", "CLOSE, OPEN, FETCH, DECLARE"], 0, "DECLARE -> OPEN -> FETCH -> CLOSE."],
  ]),
];

export const mainframeQuizzes = [
  quiz("mainframe-introduction", [
    ["Mainframe ki khaas baat kya hai?", ["High throughput aur availability", "Gaming graphics", "Mobile apps", "Low cost"], 0, "Mainframe high throughput aur 99.999% availability deta hai."],
  ]),
  quiz("zos-introduction", [
    ["Mainframe developers ka daily environment kya hai?", ["TSO/ISPF", "VS Code", "Xcode", "Eclipse"], 0, "TSO/ISPF mainframe me common hai."],
  ]),
  quiz("jcl-introduction", [
    ["JCL ka full form kya hai?", ["Job Control Language", "Java Control Language", "Job Compile Language", "Just Control Logic"], 0, "JCL = Job Control Language."],
  ]),
  quiz("jcl-job-exec-dd", [
    ["Program run karne ke liye kaun sa JCL statement?", ["EXEC PGM=", "JOB", "DD", "IF"], 0, "EXEC PGM= program specify karta hai."],
    ["Input/output dataset ke liye kaun sa statement?", ["DD", "JOB", "EXEC", "SYSIN"], 0, "DD data definition ke liye hai."],
  ]),
  quiz("datasets", [
    ["Source code library ke liye kaunsa dataset type?", ["Partitioned (PDS)", "Sequential", "VSAM", "Temporary"], 0, "PDS me members (source/JCL) store karte hain."],
  ]),
  quiz("return-codes", [
    ["Return code 0000 ka matlab?", ["Success", "Error", "Warning", "Abend"], 0, "0000 success batata hai."],
  ]),
  quiz("cobol-jcl", [
    ["COBOL file ka ASSIGN name JCL me kisse match karta hai?", ["DD name", "JOB name", "EXEC name", "STEP name"], 0, "SELECT ka ASSIGN name DD name se match karta hai."],
  ]),
];
