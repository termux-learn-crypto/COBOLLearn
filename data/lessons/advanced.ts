import { lesson, p, h, syn, tip, note, warn } from "../_builder";

export const advancedLessons = [
  lesson({
    slug: "subprograms",
    courseId: "advanced",
    title: "Subprograms",
    description: "Modular programming ke liye alag programs banana.",
    objectives: ["Main vs subprogram", "CALL ka concept", "Modularity ka fayda"],
    blocks: [
      p("Subprogram ek alag compiled program hota hai jise dusre program se call karte hain."),
      syn(`CALL "CALCINT" USING WS-PRINCIPAL WS-RATE WS-INTEREST`),
      tip("Common logic ko subprogram me daalo — reuse aur maintenance aasan ho jata hai."),
    ],
    practice: "Socho kaun sa logic subprogram ban sakta hai aapke project me.",
  }),

  lesson({
    slug: "call-using",
    courseId: "advanced",
    title: "CALL and USING",
    description: "Program ko call karna aur parameters pass karna.",
    objectives: ["CALL syntax", "USING parameters", "BY REFERENCE vs BY CONTENT"],
    blocks: [
      p("CALL program ko execute karta hai aur USING se data pass hota hai."),
      syn(`CALL "INTEREST-CALC" USING WS-AMOUNT WS-RATE WS-RESULT
CALL "VALIDATE" USING BY CONTENT WS-INPUT`),
      {
        type: "list",
        items: [
          "BY REFERENCE (default) — address pass hota hai, changes wapas dikhte hain",
          "BY CONTENT — copy pass hoti hai, called program change nahi kar sakta",
          "BY VALUE — value pass (mostly non-COBOL calls)",
        ],
      },
      warn("USING parameters ki order aur size called program ke LINKAGE se exactly match honi chahiye."),
    ],
    practice: "Ek CALL statement likho jo do numbers aur result pass kare.",
  }),

  lesson({
    slug: "linkage-section",
    courseId: "advanced",
    title: "LINKAGE SECTION",
    description: "Subprogram me parameters receive karna.",
    objectives: ["LINKAGE SECTION ka use", "PROCEDURE DIVISION USING", "Parameter mapping"],
    blocks: [
      p("LINKAGE SECTION subprogram me aane wale parameters ko define karta hai."),
      syn(`IDENTIFICATION DIVISION.
PROGRAM-ID. INTEREST-CALC.
DATA DIVISION.
LINKAGE SECTION.
01 LK-PRINCIPAL PIC 9(09)V99.
01 LK-RATE      PIC 9(02)V99.
01 LK-INTEREST  PIC 9(09)V99.
PROCEDURE DIVISION USING LK-PRINCIPAL LK-RATE LK-INTEREST.
    COMPUTE LK-INTEREST = LK-PRINCIPAL * LK-RATE / 100
    GOBACK.`),
      note("LINKAGE fields ko VALUE nahi dete — memory caller deta hai."),
    ],
    practice: "Ek subprogram likho jo do numbers ka sum return kare.",
  }),

  lesson({
    slug: "copybook",
    courseId: "advanced",
    title: "COPYBOOK",
    description: "Reusable code aur definitions share karna.",
    objectives: ["COPYBOOK kya hai", "COPY statement", "Common layouts"],
    blocks: [
      p("COPYBOOK ek reusable code segment hota hai jo COPY statement se include hota hai."),
      syn(`       COPY EMPREC.        *> emp layout
       COPY DBDATE.        *> date fields`),
      tip("Common record layouts ko copybook me rakho — sab programs consistent rehte hain."),
    ],
    practice: "Socho aapke banking project me kaun sa layout copybook banega.",
  }),

  lesson({
    slug: "sort-merge",
    courseId: "advanced",
    title: "SORT and MERGE",
    description: "Records ko sort aur merge karna.",
    objectives: ["SORT syntax", "USING/GIVING", "MERGE ka use"],
    blocks: [
      p("SORT records ko key pe arrange karta hai, MERGE do sorted files ko combine karta hai."),
      syn(`SORT SORT-FILE
    ON ASCENDING KEY SORT-NAME
    USING INPUT-FILE
    GIVING OUTPUT-FILE.

MERGE MERGE-FILE
    ON ASCENDING KEY KEY-A
    USING FILE-1 FILE-2
    GIVING MERGED-FILE.`),
      note("SORT ke input/output ya to USING/GIVING se die jate hain ya INPUT/OUTPUT PROCEDURE se."),
    ],
    practice: "Ek employee file ko naam ke ascending order me sort karne ka code likho.",
  }),

  lesson({
    slug: "intrinsic-functions",
    courseId: "advanced",
    title: "Intrinsic Functions",
    description: "Built-in functions jaise UPPER-CASE, LENGTH, CURRENT-DATE.",
    objectives: ["Common intrinsic functions", "FUNCTION keyword", "Nesting functions"],
    blocks: [
      p("Intrinsic functions built-in utilities hain jo COMPUTE / MOVE me use hote hain."),
      {
        type: "table",
        headers: ["Function", "Use"],
        rows: [
          ["FUNCTION UPPER-CASE(text)", "Uppercase"],
          ["FUNCTION LOWER-CASE(text)", "Lowercase"],
          ["FUNCTION LENGTH(text)", "Length nikalna"],
          ["FUNCTION CURRENT-DATE", "Aaj ki date/time"],
          ["FUNCTION TRIM(text)", "Spaces hatana"],
          ["FUNCTION NUMVAL(text)", "Text se number"],
        ],
      },
      syn(`MOVE FUNCTION UPPER-CASE(WS-NAME) TO WS-NAME
COMPUTE WS-LEN = FUNCTION LENGTH(WS-CODE)`),
      tip("Functions ko nest bhi kar sakte ho: FUNCTION TRIM(FUNCTION UPPER-CASE(X))."),
    ],
    practice: "Naam ko uppercase karke uski length print karo.",
  }),

  lesson({
    slug: "error-handling",
    courseId: "advanced",
    title: "Error Handling",
    description: "Runtime errors aur file errors gracefully handle karna.",
    objectives: ["ON SIZE ERROR", "INVALID KEY", "FILE STATUS based handling"],
    blocks: [
      p("Robust program errors ko gracefully handle karta hai."),
      syn(`ADD WS-A TO WS-B
    ON SIZE ERROR
        DISPLAY "OVERFLOW OCCURRED"
END-ADD

READ CUST-FILE
    INVALID KEY DISPLAY "KEY ERROR"
END-READ`),
      note("Enterprise COBOL me proper error handling mandatory hai — colors me ignore nahi karte."),
    ],
    practice: "Arithmetic overflow aur invalid key dono handle karne wala code likho.",
  }),

  lesson({
    slug: "debugging",
    courseId: "advanced",
    title: "Debugging",
    description: "COBOL program debug karne ke tarike.",
    objectives: ["DISPLAY debugging", "Compiler options", "Common bug patterns"],
    blocks: [
      p("COBOL me debugging ka sabse simple tarika DISPLAY statements aur proper file status checks hain."),
      {
        type: "list",
        items: [
          "DISPLAY se intermediate values print karo",
          "FILE STATUS har operation ke baad check karo",
          "Compiler debug option se line mapping",
          "Boundary values (0, negative, max) test karo",
        ],
      },
      tip("Bug reproduce karne ke liye smallest possible input banao."),
    ],
    practice: "Apne kisi program me DISPLAY daal ke values trace karo.",
  }),
];
