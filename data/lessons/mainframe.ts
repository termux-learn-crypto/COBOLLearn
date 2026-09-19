import { lesson, p, h, syn, tip, note, warn } from "../_builder";

export const mainframeLessons = [
  lesson({
    slug: "mainframe-introduction",
    courseId: "mainframe",
    title: "Mainframe Introduction",
    description: "Mainframe computer kya hai aur kyun use hota hai.",
    objectives: ["Mainframe ka concept", "Reliability/scalability", "Banking me mainframe"],
    blocks: [
      p("Mainframe ek powerful, high-reliability computer hai jo crores transactions per day handle karta hai."),
      {
        type: "list",
        items: [
          "Bahut high throughput (MIPS)",
          "99.999% availability",
          "Massive batch processing",
          "Strong security aur workload management",
        ],
      },
      note("Banks, insurance aur railway systems aaj bhi mainframe pe chalte hain."),
    ],
    practice: "Mainframe ke 3 advantages aur unka business reason likho.",
  }),

  lesson({
    slug: "zos-introduction",
    courseId: "mainframe",
    title: "z/OS Introduction",
    description: "IBM ka mainframe operating system.",
    objectives: ["z/OS kya hai", "Address spaces aur jobs", "TSO/ISPF basics"],
    blocks: [
      p("z/OS IBM ka enterprise operating system hai jo mainframe hardware pe chalta hai."),
      {
        type: "table",
        headers: ["Term", "Matlab"],
        rows: [
          ["Address Space", "Program ka memory region"],
          ["Job", "Execute hone wala kaam"],
          ["TSO", "Interactive terminal access"],
          ["ISPF", "Mainframe ka menu-based editor/utility"],
        ],
      },
      tip("ISPF mainframe developers ka daily working environment hai — file browse, edit, submit."),
    ],
    practice: "z/OS ke 4 key terms apne shabdon me explain karo.",
  }),

  lesson({
    slug: "jcl-introduction",
    courseId: "mainframe",
    title: "JCL Introduction",
    description: "Job Control Language ka basic idea.",
    objectives: ["JCL kya hai", "Job stream", "COBOL se JCL ka relation"],
    blocks: [
      p("JCL (Job Control Language) batata hai ki mainframe pe kaun sa program kaise run karna hai."),
      note("COBOL code logic deta hai, JCL usse execute karwata hai — dono mil kar kaam karte hain."),
    ],
    practice: "Socho COBOL aur JCL ka kya role hai ek job me.",
  }),

  lesson({
    slug: "jcl-job-exec-dd",
    courseId: "mainframe",
    title: "JCL JOB, EXEC, DD",
    description: "JCL ke teen main statements.",
    objectives: ["JOB statement", "EXEC statement (PGM=)", "DD statement (input/output)"],
    blocks: [
      p("Har JCL me teen main statement hote hain: JOB, EXEC aur DD."),
      syn(`//MYJOB    JOB (ACCT),'STUDENT',CLASS=A,MSGCLASS=X
//STEP1    EXEC PGM=HELLO
//SYSOUT   DD SYSOUT=*
//INPUT    DD DSN=USER.CUST.DATA,DISP=SHR
//OUTPUT   DD DSN=USER.CUST.REPORT,DISP=(NEW,CATLG,DELETE)`),
      {
        type: "table",
        headers: ["Statement", "Kaam"],
        rows: [
          ["JOB", "Job ki identity, accounting, class"],
          ["EXEC", "Kaun sa program (PGM=) run karna hai"],
          ["DD", "Data definition — input/output datasets"],
        ],
      },
    ],
    practice: "Ek JCL likho jo HELLO program run kare.",
  }),

  lesson({
    slug: "datasets",
    courseId: "mainframe",
    title: "Datasets",
    description: "Mainframe files (datasets) ka concept.",
    objectives: ["Sequential dataset", "Partitioned dataset (PDS/PDSE)", "Member concept"],
    blocks: [
      p("Mainframe pe files ko datasets kehte hain. Dataset names dot-separated hote hain."),
      syn(`USER.BANK.CUSTOMER.DATA
USER.BANK.COBOL.SOURCE
USER.BANK.LOADLIB`),
      {
        type: "table",
        headers: ["Type", "Use"],
        rows: [
          ["Sequential (PS)", "Simple flat file"],
          ["Partitioned (PDS/PDSE)", "Members wali library (source, JCL, load modules)"],
          ["VSAM", "Indexed/sequential advanced files"],
        ],
      },
      note("Load library me compiled programs (load modules) store hote hain."),
    ],
    practice: "5 dataset names likho jaise ek bank project me hote hain.",
  }),

  lesson({
    slug: "return-codes",
    courseId: "mainframe",
    title: "Return Codes",
    description: "Job aur step ka result code.",
    objectives: ["COND CODE", "Common return codes", "Error handling via RC"],
    blocks: [
      p("Return code (RC) batata hai ki job/step successful tha ya nahi."),
      {
        type: "table",
        headers: ["Code", "Meaning"],
        rows: [
          ["0000", "Success"],
          ["0004", "Warning"],
          ["0008", "Error"],
          ["0012", "Severe error"],
          ["0016+", "Critical/abend"],
        ],
      },
      syn(`//STEP1 EXEC PGM=MYPROG
//IF1   IF (STEP1.RC >= 8) THEN
//       EXEC PGM=NOTIFY
//ENDIF`),
      tip("Return codes ke basis pe JCL conditional steps bana sakte ho."),
    ],
    practice: "Return code 8 aane par conditional step chalane ka JCL likho.",
  }),

  lesson({
    slug: "cobol-jcl",
    courseId: "mainframe",
    title: "COBOL + JCL Integration",
    description: "COBOL program ko JCL se run karna aur files attach karna.",
    objectives: ["Compile + run flow", "DD se COBOL file assign", "End-to-end job"],
    blocks: [
      p("COBOL program JCL ke through run hota hai aur DD statements se uski files attach hoti hain."),
      syn(`//COBRUN  JOB (ACC),'RUN',CLASS=A
//COMPILE EXEC IGYWCL
//COBOL.SYSIN DD DSN=USER.COBOL(BANK01),DISP=SHR
//LKED.SYSLMOD DD DSN=USER.LOAD(BANK01),DISP=SHR
//RUN     EXEC PGM=BANK01
//CUSTFILE DD DSN=USER.BANK.CUSTOMER,DISP=SHR
//RPTOUT   DD SYSOUT=*`),
      note("COBOL me SELECT ke ASSIGN name DD name se match karta hai (external file name)."),
      tip("Ye pura flow samajh lo — mainframe developer ka daily kaam yahi hai."),
    ],
    practice: "Ek JCL likho jo COBOL program compile karke run kare aur ek input file attach kare.",
  }),
];
