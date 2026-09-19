import { lesson, p, h, syn, out, tip, note, warn } from "../_builder";

export const fundamentalsLessons = [
  lesson({
    slug: "data-types",
    courseId: "fundamentals",
    title: "Data Types in COBOL",
    description: "COBOL ke main data categories aur unka use.",
    objectives: [
      "Numeric, alphanumeric, alphabetic aur edited data types",
      "Har type ka real-world use case",
    ],
    blocks: [
      p("COBOL me data mainly four categories me aata hai:"),
      {
        type: "table",
        headers: ["Type", "PIC", "Use"],
        rows: [
          ["Alphabetic", "A", "Sirf letters"],
          ["Numeric", "9, S9, V", "Calculation wala data"],
          ["Alphanumeric", "X", "Text, mixed data"],
          ["Numeric-edited", "Z, $, comma", "Reports me formatted output"],
        ],
      },
      syn(`01 WS-NAME    PIC A(20).
01 WS-AMOUNT  PIC 9(05)V99.
01 WS-ADDRESS PIC X(50).
01 WS-SALARY  PIC $99,999.99.`),
    ],
    practice: "Har data type ka ek variable banao aur batao kis type ka hai.",
  }),

  lesson({
    slug: "numeric-data",
    courseId: "fundamentals",
    title: "Numeric Data",
    description: "Numeric fields, sign aur decimal positions.",
    objectives: [
      "Signed vs unsigned numeric fields",
      "V (implied decimal) ka concept",
      "USAGE (DISPLAY, COMP, COMP-3)",
    ],
    blocks: [
      p("Numeric data calculations ke liye use hota hai. Isme sirf digits aur optional sign hota hai."),
      syn(`01 WS-QTY  PIC 9(05).        *> unsigned
01 WS-TEMP PIC S9(03).       *> signed
01 WS-RATE PIC 9(03)V99.     *> 2 decimal places
01 WS-BIG  PIC S9(09) COMP-3. *> packed decimal`),
      h("USAGE types"),
      {
        type: "list",
        items: [
          "DISPLAY — human readable (default)",
          "COMP / COMP-4 — binary",
          "COMP-3 — packed decimal (common in banking)",
        ],
      },
      note("COMP-3 banking me bahut use hota hai kyunki ye space efficient aur accurate hai."),
    ],
    practice: "Ek signed aur ek packed decimal numeric field banao.",
  }),

  lesson({
    slug: "alphanumeric-data",
    courseId: "fundamentals",
    title: "Alphanumeric Data",
    description: "X type fields aur text handling.",
    objectives: ["PIC X ka use", "SPACES se padding", "Text compare ka basic idea"],
    blocks: [
      p("Alphanumeric fields me letters, digits aur special characters sab store ho sakte hain."),
      syn(`01 WS-NAME    PIC X(30).
01 WS-ADDRESS PIC X(60).
01 WS-CODE    PIC X(05) VALUE "A1B2C".`),
      note("X fields pe arithmetic nahi kar sakte."),
    ],
    practice: "Ek address field banao jisme text value daalo aur display karo.",
  }),

  lesson({
    slug: "numeric-edited-data",
    courseId: "fundamentals",
    title: "Numeric Edited Data",
    description: "Reports ke liye formatted numeric output.",
    objectives: [
      "Z, comma, $, decimal editing symbols",
      "Report-friendly output banana",
    ],
    blocks: [
      p("Numeric-edited fields sirf display ke liye hote hain — inpe calculation nahi hoti."),
      {
        type: "table",
        headers: ["Symbol", "Effect", "Example"],
        rows: [
          ["Z", "Leading zero suppress", "ZZZ9 -> 123"],
          [",", "Comma insertion", "ZZ,ZZ9"],
          ["$", "Currency sign", "$ZZ,ZZ9.99"],
          [".", "Actual decimal point", "9(3).99"],
        ],
      },
      syn(`01 WS-SALARY PIC $ZZ,ZZ9.99.
MOVE 125000.50 TO WS-SALARY
DISPLAY WS-SALARY`),
    ],
    examples: [
      {
        title: "Edited output",
        code: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. EDITDEMO.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-AMT PIC $ZZ,ZZ9.99.
       PROCEDURE DIVISION.
           MOVE 54321.75 TO WS-AMT
           DISPLAY "AMOUNT: " WS-AMT
           STOP RUN.`,
        output: "AMOUNT:  $54,321.75",
      },
    ],
    commonMistakes: ["Edited field me arithmetic karna"],
    practice: "Salary ko $ZZ,ZZZ.99 format me print karo.",
  }),

  lesson({
    slug: "level-numbers",
    courseId: "fundamentals",
    title: "Level Numbers",
    description: "01 se 88 tak ke level numbers aur hierarchy.",
    objectives: [
      "Level numbers ki hierarchy",
      "Group vs elementary items",
      "Level 77 aur 88 ka use",
    ],
    blocks: [
      p("Level numbers data items ke relationship ko define karte hain — jaise ek tree."),
      syn(`01 WS-EMPLOYEE.
   05 WS-EMP-ID   PIC 9(05).
   05 WS-EMP-NAME PIC X(30).
   05 WS-SALARY.
      10 WS-BASIC  PIC 9(07)V99.
      10 WS-HRA    PIC 9(05)V99.`),
      {
        type: "list",
        items: [
          "01 — top level record",
          "02-49 — sub-levels (group/elementary)",
          "66 — RENAMES",
          "77 — independent item",
          "88 — condition name",
        ],
      },
      tip("Group item ko move karke poore structure ko ek saath copy kar sakte ho."),
    ],
    practice: "Ek student record banao: id, naam aur marks group ke saath.",
  }),

  lesson({
    slug: "filler",
    courseId: "fundamentals",
    title: "FILLER",
    description: "Naam ke bina reserved fields.",
    objectives: ["FILLER ka purpose", "Report layout me spacing", "FILLER ke rules"],
    blocks: [
      p("FILLER ek aisa field hai jise naam nahi dete — sirf layout/spacing ke liye hota hai."),
      syn(`01 WS-REPORT.
   05 FILLER PIC X(05) VALUE SPACES.
   05 WS-NAME PIC X(20).
   05 FILLER PIC X(10) VALUE SPACES.
   05 WS-AMT  PIC 9(05).`),
      note("FILLER ko directly reference nahi kar sakte — isliye iska naam nahi hota."),
    ],
    practice: "Ek report line banao jisme FILLER se naam aur amount ke beech gap ho.",
  }),

  lesson({
    slug: "renames",
    courseId: "fundamentals",
    title: "RENAMES (Level 66)",
    description: "Ek data item ko naya naam dena.",
    objectives: ["66 level ka use", "REDEFINES se difference", "Practical example"],
    blocks: [
      p("RENAMES ek existing field ya group ko naya naam deta hai — bina naya memory allocate kiye."),
      syn(`01 WS-EMP.
   05 WS-FIRST PIC X(10).
   05 WS-LAST  PIC X(10).
66 WS-FULL-NAME RENAMES WS-FIRST THRU WS-LAST.`),
      note("RENAMES must be 66 level aur usse sirf group items pe use karte hain."),
    ],
    practice: "First aur last name ko RENAMES se full name banao.",
  }),

  lesson({
    slug: "value-clause-fundamentals",
    courseId: "fundamentals",
    title: "VALUE Clause (Advanced)",
    description: "VALUE ka deeper use, literals aur constants.",
    objectives: ["Numeric vs figurative constants", "Condition names (88) ke saath VALUE"],
    blocks: [
      p("VALUE clause initialization ke alawa 88 condition names ke saath bhi use hota hai."),
      syn(`01 WS-STATUS PIC X(01) VALUE "A".
   88 STATUS-ACTIVE VALUE "A".
   88 STATUS-CLOSED VALUE "C".`),
      note("88 level se code readable ban jata hai: IF STATUS-ACTIVE ..."),
    ],
    practice: "Ek 88 condition banao jo 'Y'/'N' check kare.",
  }),

  lesson({
    slug: "redefines",
    courseId: "fundamentals",
    title: "REDEFINES",
    description: "Same memory ko different layout me use karna.",
    objectives: ["REDEFINES ka concept", "Kab use karein", "Length constraints"],
    blocks: [
      p("REDEFINES same memory area ko do ya zyada tarike se interpret karne deta hai."),
      syn(`01 WS-DATA    PIC X(10).
01 WS-NUMERIC REDEFINES WS-DATA.
   05 WS-N1 PIC 9(05).
   05 WS-N2 PIC 9(05).`),
      warn("Redefining item original se bada nahi ho sakta."),
      note("REDEFINES se record ki multiple views banate hain — jaise fixed vs variable record."),
    ],
    practice:
      "Ek X(08) field ko do numeric fields me REDEFINES karke interpret karo.",
  }),

  lesson({
    slug: "initialize",
    courseId: "fundamentals",
    title: "INITIALIZE",
    description: "Group items ko bulk me reset karna.",
    objectives: ["INITIALIZE syntax", "Default reset values", "REPLACING option"],
    blocks: [
      p("INITIALIZE group ke saare elementary fields ko reset karta hai."),
      syn(`INITIALIZE WS-EMPLOYEE
INITIALIZE WS-EMPLOYEE REPLACING NUMERIC BY ZERO`),
      note("Numeric fields zero se, alphanumeric fields spaces se reset hote hain."),
    ],
    examples: [
      {
        title: "Initialize a group",
        code: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. INITDEMO.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-EMP.
          05 WS-ID   PIC 9(03) VALUE 101.
          05 WS-NAME PIC X(10) VALUE "AMIT".
       PROCEDURE DIVISION.
           DISPLAY "BEFORE: " WS-ID " " WS-NAME
           INITIALIZE WS-EMP
           DISPLAY "AFTER : " WS-ID " [" WS-NAME "]"
           STOP RUN.`,
        output: "BEFORE: 101 AMIT      \nAFTER : 000 [          ]",
      },
    ],
    commonMistakes: ["INITIALIZE ko single elementary item pe karna (VALUE better hai)"],
    practice: "Ek record bharo, phir INITIALIZE karke dikhao ki values reset ho gayi.",
  }),

  lesson({
    slug: "compute",
    courseId: "fundamentals",
    title: "COMPUTE",
    description: "Arithmetic expressions evaluate karna.",
    objectives: ["COMPUTE syntax", "Expression evaluation", "ROUNDED option"],
    blocks: [
      p("COMPUTE ek arithmetic expression ko evaluate karke result store karta hai."),
      syn(`COMPUTE WS-TOTAL = WS-QTY * WS-RATE
COMPUTE WS-NET = WS-BASIC + WS-HRA - WS-TAX
COMPUTE WS-AVG ROUNDED = WS-SUM / WS-COUNT`),
      tip("ROUNDED decimal results ko round kar deta hai — banking me useful."),
    ],
    examples: [
      {
        title: "Compute total",
        code: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. COMPDEMO.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-QTY   PIC 9(03) VALUE 5.
       01 WS-RATE  PIC 9(03)V99 VALUE 149.50.
       01 WS-TOTAL PIC 9(07)V99.
       PROCEDURE DIVISION.
           COMPUTE WS-TOTAL = WS-QTY * WS-RATE
           DISPLAY "TOTAL: " WS-TOTAL
           STOP RUN.`,
        output: "TOTAL: 0074750",
      },
    ],
    commonMistakes: ["Expression me spaces na dena", "Result field ki size chhoti rakhna"],
    practice: "Qty * rate ka total COMPUTE se nikaalo aur display karo.",
  }),

  lesson({
    slug: "add",
    courseId: "fundamentals",
    title: "ADD Statement",
    description: "Values add karna.",
    objectives: ["ADD syntax variants", "ADD TO vs ADD GIVING", "ON SIZE ERROR"],
    blocks: [
      p("ADD numeric values ko jodta hai."),
      syn(`ADD 10 TO WS-COUNT
ADD WS-A WS-B TO WS-SUM
ADD WS-A TO WS-B GIVING WS-RESULT
ADD 1 TO WS-COUNT ON SIZE ERROR DISPLAY "OVERFLOW"`),
      note("ADD TO destination ko update karta hai, ADD GIVING naya result deta hai."),
    ],
    examples: [
      {
        title: "Add numbers",
        code: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. ADDDEMO.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-A PIC 9(03) VALUE 10.
       01 WS-B PIC 9(03) VALUE 20.
       01 WS-R PIC 9(04).
       PROCEDURE DIVISION.
           ADD WS-A TO WS-B GIVING WS-R
           DISPLAY "SUM: " WS-R
           STOP RUN.`,
        output: "SUM: 0030",
      },
    ],
    commonMistakes: ["ON SIZE ERROR ignore karna jisse overflow silently ho jata hai"],
    practice: "Do numbers add karke result print karo.",
  }),

  lesson({
    slug: "subtract",
    courseId: "fundamentals",
    title: "SUBTRACT Statement",
    description: "Values subtract karna.",
    objectives: ["SUBTRACT syntax", "SUBTRACT FROM vs GIVING"],
    blocks: [
      p("SUBTRACT ek ya zyada values ko minus karta hai."),
      syn(`SUBTRACT 5 FROM WS-TOTAL
SUBTRACT WS-A WS-B FROM WS-TOTAL
SUBTRACT WS-A FROM WS-B GIVING WS-DIFF`),
    ],
    examples: [
      {
        title: "Subtract",
        code: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. SUBDEMO.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-BAL PIC 9(05) VALUE 5000.
       01 WS-AMT PIC 9(05) VALUE 1200.
       PROCEDURE DIVISION.
           SUBTRACT WS-AMT FROM WS-BAL
           DISPLAY "BALANCE: " WS-BAL
           STOP RUN.`,
        output: "BALANCE: 03800",
      },
    ],
    practice: "Bank balance me se withdraw amount subtract karke print karo.",
  }),

  lesson({
    slug: "multiply",
    courseId: "fundamentals",
    title: "MULTIPLY Statement",
    description: "Values multiply karna.",
    objectives: ["MULTIPLY BY vs GIVING"],
    blocks: [
      p("MULTIPLY do values ka product nikalta hai."),
      syn(`MULTIPLY WS-QTY BY WS-RATE
MULTIPLY WS-QTY BY WS-RATE GIVING WS-TOTAL`),
    ],
    examples: [
      {
        title: "Multiply",
        code: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. MULDdemo.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-Q  PIC 9(03) VALUE 12.
       01 WS-R  PIC 9(03) VALUE 25.
       01 WS-P  PIC 9(06).
       PROCEDURE DIVISION.
           MULTIPLY WS-Q BY WS-R GIVING WS-P
           DISPLAY "PRODUCT: " WS-P
           STOP RUN.`,
        output: "PRODUCT: 000300",
      },
    ],
    practice: "Price aur quantity multiply karke total nikaalo.",
  }),

  lesson({
    slug: "divide",
    courseId: "fundamentals",
    title: "DIVIDE Statement",
    description: "Division aur remainder handling.",
    objectives: ["DIVIDE INTO vs GIVING", "REMAINDER option"],
    blocks: [
      p("DIVIDE values ko divide karta hai."),
      syn(`DIVIDE WS-TOTAL BY WS-COUNT GIVING WS-AVG
DIVIDE 10 INTO WS-VALUE
DIVIDE WS-A BY WS-B GIVING WS-Q REMAINDER WS-REM`),
      tip("REMAINDER se mod (baaki) nikal sakte ho."),
    ],
    examples: [
      {
        title: "Divide with remainder",
        code: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. DIVDEMO.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-A PIC 9(03) VALUE 17.
       01 WS-B PIC 9(03) VALUE 5.
       01 WS-Q PIC 9(03).
       01 WS-R PIC 9(03).
       PROCEDURE DIVISION.
           DIVIDE WS-A BY WS-B GIVING WS-Q REMAINDER WS-R
           DISPLAY "QUOTIENT: " WS-Q
           DISPLAY "REMAINDER: " WS-R
           STOP RUN.`,
        output: "QUOTIENT: 003\nREMAINDER: 002",
      },
    ],
    commonMistakes: ["Zero se divide karna (runtime error)"],
    practice: "17 ko 5 se divide karke quotient aur remainder print karo.",
  }),

  lesson({
    slug: "arithmetic-expressions",
    courseId: "fundamentals",
    title: "Arithmetic Expressions",
    description: "Operator precedence aur complex calculations.",
    objectives: ["Operator precedence", "Parentheses ka use", "ROUNDED with COMPUTE"],
    blocks: [
      p("COMPUTE me arithmetic expression evaluate hoti hai. Precedence: ** > * / > + -"),
      syn(`COMPUTE WS-RESULT = (WS-A + WS-B) * WS-C
COMPUTE WS-AVG ROUNDED = WS-SUM / WS-N`),
      warn("Galat precedence se galat result aata hai — parentheses use karo."),
    ],
    examples: [
      {
        title: "Precedence example",
        code: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. EXPR.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-A PIC 9(03) VALUE 2.
       01 WS-B PIC 9(03) VALUE 3.
       01 WS-C PIC 9(03) VALUE 4.
       01 WS-R1 PIC 9(04).
       01 WS-R2 PIC 9(04).
       PROCEDURE DIVISION.
           COMPUTE WS-R1 = WS-A + WS-B * WS-C
           COMPUTE WS-R2 = (WS-A + WS-B) * WS-C
           DISPLAY "R1: " WS-R1
           DISPLAY "R2: " WS-R2
           STOP RUN.`,
        output: "R1: 0014\nR2: 0020",
      },
    ],
    practice: "Ek expression likho jo average nikaale aur ROUNDED use kare.",
  }),
];
