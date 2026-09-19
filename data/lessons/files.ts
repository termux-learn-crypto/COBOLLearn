import { lesson, p, h, syn, tip, note, warn } from "../_builder";

export const filesLessons = [
  lesson({
    slug: "file-concepts",
    courseId: "files",
    title: "File Concepts",
    description: "COBOL me file processing ka basic idea.",
    objectives: [
      "File kya hai aur kyun zaroori hai",
      "Batch processing me files ka role",
      "File organization types",
    ],
    blocks: [
      p(
        "COBOL ka sabse bada strength file aur batch processing hai. Aaj bhi banks me lakhs of records files se process hote hain."
      ),
      {
        type: "table",
        headers: ["Organization", "Access", "Use"],
        rows: [
          ["Sequential", "Sequential", "Reports, batch jobs"],
          ["Indexed (VSAM KSDS)", "Sequential/Random", "Master data"],
          ["Relative", "Random", "Fixed record lookup"],
        ],
      },
      note("Sequential file sabse simple aur common hai — records order me read hote hain."),
    ],
    practice: "Socho aapke bank statement ka data kis tarah ki file me hoga.",
  }),

  lesson({
    slug: "sequential-files",
    courseId: "files",
    title: "Sequential Files",
    description: "Sequential file ka structure aur processing.",
    objectives: ["Sequential file ka concept", "Read order", "End of file handling"],
    blocks: [
      p("Sequential file me records ek ke baad ek store hote hain aur usi order me read hote hain."),
      syn(`SELECT EMP-FILE ASSIGN TO "emp.dat"
    ORGANIZATION IS SEQUENTIAL.
...
FD EMP-FILE.
01 EMP-REC.
   05 EMP-ID   PIC 9(05).
   05 EMP-NAME PIC X(30).`),
      note("Sequential file me random access nahi hota."),
    ],
    practice: "Ek employee sequential file ka record structure likho.",
  }),

  lesson({
    slug: "file-definition",
    courseId: "files",
    title: "File Definition",
    description: "SELECT, FD aur file record define karna.",
    objectives: ["ENVIRONMENT me SELECT", "DATA DIVISION me FD", "Record structure"],
    blocks: [
      p("File define karne ke liye ENVIRONMENT me SELECT aur DATA DIVISION me FD likhte hain."),
      syn(`ENVIRONMENT DIVISION.
INPUT-OUTPUT SECTION.
FILE-CONTROL.
    SELECT CUST-FILE ASSIGN TO "customer.dat"
        ORGANIZATION IS LINE SEQUENTIAL.

DATA DIVISION.
FILE SECTION.
FD CUST-FILE.
01 CUST-REC.
   05 CUST-ID   PIC 9(05).
   05 CUST-NAME PIC X(30).`),
      tip("LINE SEQUENTIAL text files ke liye aasan hai."),
    ],
    practice: "Ek customer file define karo jisme id aur naam ho.",
  }),

  lesson({
    slug: "open-close",
    courseId: "files",
    title: "OPEN and CLOSE",
    description: "File ko open aur close karna.",
    objectives: ["OPEN INPUT/OUTPUT/I-O/EXTEND", "CLOSE ka role", "Mode selection"],
    blocks: [
      p("File use karne se pehle OPEN aur baad me CLOSE karna zaroori hai."),
      syn(`OPEN INPUT CUST-FILE
OPEN OUTPUT REPORT-FILE
OPEN EXTEND LOG-FILE
...
CLOSE CUST-FILE
CLOSE REPORT-FILE`),
      {
        type: "table",
        headers: ["Mode", "Use"],
        rows: [
          ["INPUT", "Existing file padhna"],
          ["OUTPUT", "Nayi file banana/likhna"],
          ["I-O", "Read + update"],
          ["EXTEND", "Existing file ke end me add karna"],
        ],
      },
      warn("Bina OPEN kiye READ/WRITE runtime error dega."),
    ],
    practice: "Input aur output file open karke close karne wala code likho.",
  }),

  lesson({
    slug: "read-write",
    courseId: "files",
    title: "READ and WRITE",
    description: "File se records padhna aur likhna.",
    objectives: ["READ syntax", "WRITE syntax", "EOF loop pattern"],
    blocks: [
      p("READ agla record leta hai, WRITE record ko file me likhta hai."),
      syn(`OPEN INPUT CUST-FILE
PERFORM UNTIL WS-EOF = "Y"
    READ CUST-FILE
        AT END MOVE "Y" TO WS-EOF
        NOT AT END
            DISPLAY CUST-ID " " CUST-NAME
    END-READ
END-PERFORM
CLOSE CUST-FILE`),
      note("AT END / NOT AT END se end-of-file handle karte hain."),
    ],
    practice: "Input file ka har record READ karke display karo.",
  }),

  lesson({
    slug: "rewrite-delete",
    courseId: "files",
    title: "REWRITE and DELETE",
    description: "Existing records ko update aur delete karna.",
    objectives: ["REWRITE ka use", "DELETE ka use", "I-O mode requirement"],
    blocks: [
      p("REWRITE record ko uski jagah update karta hai, DELETE use hata deta hai."),
      syn(`OPEN I-O CUST-FILE
READ CUST-FILE
    INVALID KEY DISPLAY "NOT FOUND"
    NOT INVALID KEY
        MOVE WS-NEW-NAME TO CUST-NAME
        REWRITE CUST-REC
END-READ

DELETE CUST-FILE
    INVALID KEY DISPLAY "DELETE FAILED"`),
      warn("REWRITE/DELETE ke liye file I-O mode me open honi chahiye (indexed files me)."),
    ],
    practice: "Read karke record update (REWRITE) karne ka flow likho.",
  }),

  lesson({
    slug: "file-status",
    courseId: "files",
    title: "File Status",
    description: "File operations ka result check karna.",
    objectives: ["FILE STATUS clause", "Common status codes", "Error handling"],
    blocks: [
      p("FILE STATUS ek do-character code deta hai jo operation ka result batata hai."),
      syn(`SELECT CUST-FILE ASSIGN TO "cust.dat"
    FILE STATUS IS WS-FILE-STATUS.

...
IF WS-FILE-STATUS NOT = "00"
    DISPLAY "FILE ERROR: " WS-FILE-STATUS
END-IF`),
      {
        type: "table",
        headers: ["Status", "Meaning"],
        rows: [
          ["00", "Successful"],
          ["10", "End of file"],
          ["22", "Duplicate key"],
          ["23", "Record not found"],
          ["35", "File not found (open)"],
        ],
      },
      tip("Every file operation ke baad FILE STATUS check karna best practice hai."),
    ],
    practice: "File status check karke error message print karne wala code likho.",
  }),

  lesson({
    slug: "vsam-introduction",
    courseId: "files",
    title: "VSAM Introduction",
    description: "Mainframe ka Virtual Storage Access Method.",
    objectives: ["VSAM kya hai", "KSDS/ESDS/RRDS", "COBOL SELECT me VSAM"],
    blocks: [
      p("VSAM mainframe pe high-performance file system hai jo indexed aur random access provide karta hai."),
      {
        type: "table",
        headers: ["Type", "Full Form", "Use"],
        rows: [
          ["KSDS", "Key Sequenced Data Set", "Indexed random access (most common)"],
          ["ESDS", "Entry Sequenced Data Set", "Sequential only"],
          ["RRDS", "Relative Record Data Set", "Relative record number access"],
        ],
      },
      syn(`SELECT CUST-FILE ASSIGN TO CUSTVSAM
    ORGANIZATION IS INDEXED
    ACCESS MODE IS RANDOM
    RECORD KEY IS CUST-ID
    FILE STATUS IS WS-STATUS.`),
      note("KSDS me RECORD KEY mandatory hai — isi se record lookup hota hai."),
    ],
    practice: "Ek VSAM KSDS file ka SELECT statement likho.",
  }),
];
