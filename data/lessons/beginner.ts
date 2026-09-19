import { lesson, p, h, syn, code, out, list, tip, note, warn } from "../_builder";

export const beginnerLessons = [
  lesson({
    slug: "what-is-cobol",
    courseId: "beginner",
    title: "What is COBOL?",
    description:
      "COBOL kya hai, ye kis tarah ka language hai aur kyun aaj bhi relevant hai.",
    objectives: [
      "COBOL ka full form aur basic definition samajhna",
      "COBOL kis type ka language hai (compiled, English-like)",
      "COBOL ka business/mainframe domain me role",
    ],
    blocks: [
      p(
        "COBOL ka full form hai **COmmon Business Oriented Language**. Ye ek compiled, high-level programming language hai jo specially business, banking, insurance aur government applications ke liye 1959 me design kiya gaya tha."
      ),
      p(
        "COBOL English jaise statements use karta hai — isliye ise padhna aur samajhna aasan lagta hai. Ye procedural language hai, matlab program step-by-step execute hota hai."
      ),
      h("COBOL ki khaas baatein"),
      {
        type: "list",
        items: [
          "English-like syntax (READ, MOVE, DISPLAY, PERFORM)",
          "Business data processing ke liye optimized",
          "Strong decimal (fixed-point) arithmetic — paisa calculate karne me accurate",
          "Batch processing aur file handling me strong",
          "Aaj bhi banks, insurance aur government systems me run karta hai",
        ],
      },
      note(
        "COBOL ka moto hai: 'Do not write code for the machine, write code for the people.' Isliye iski readability bahut high hai."
      ),
      tip(
        "Agar aap banking ya mainframe job target kar rahe ho, to COBOL aaj bhi bahut demand me hai."
      ),
    ],
    examples: [
      {
        title: "Sabse simple COBOL program",
        code: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. HELLO.
       PROCEDURE DIVISION.
           DISPLAY "HELLO COBOL".
           STOP RUN.`,
        output: "HELLO COBOL",
      },
    ],
    commonMistakes: [
      "COBOL ko sirf purana language samajh lena — ye aaj bhi actively used hai",
      "Iske exact fixed-format rules ko ignore karna",
    ],
    practice:
      "Apne naam ka ek COBOL program likho jo DISPLAY se 'My name is <your name>' print kare.",
  }),

  lesson({
    slug: "history-of-cobol",
    courseId: "beginner",
    title: "History of COBOL",
    description: "COBOL kaise bana, kaun banaya aur iska evolution.",
    objectives: [
      "COBOL ke origin aur creators ke baare me jaanna",
      "Kisi bhi version (COBOL-60, -74, -85, -2002) ka basic idea",
      "Standardization bodies (ANSI, ISO) ka role",
    ],
    blocks: [
      p(
        "1959 me US Department of Defense ne ek common business language ki zaroorat dekhi. Grace Hopper jaise pioneers ke kaam se COBOL ka janm hua."
      ),
      h("Major milestones"),
      {
        type: "table",
        headers: ["Year", "Version", "Highlights"],
        rows: [
          ["1959", "CODASYL", "COBOL specification publish hui"],
          ["1960", "COBOL-60", "Pehla official compiler"],
          ["1974", "COBOL-74", "ANSI standard"],
          ["1985", "COBOL-85", "Modern structured COBOL, END-IF etc."],
          ["2002", "COBOL 2002", "Object-oriented features"],
          ["2014", "COBOL 2014", "Latest ISO standard update"],
        ],
      },
      note(
        "COBOL-85 sabse zyada use hone wala version hai aur aaj ke mainframe systems ki base hai."
      ),
    ],
    practice:
      "Ek chhota timeline banao jisme COBOL ke major versions aur unke saal likho.",
  }),

  lesson({
    slug: "where-cobol-is-used",
    courseId: "beginner",
    title: "Where COBOL is Used",
    description: "COBOL kis industry aur systems me use hota hai.",
    objectives: [
      "COBOL ke real-world domains identify karna",
      "Banking/ATM/insurance me COBOL ka role",
      "Daily life me COBOL ke hidden usage",
    ],
    blocks: [
      p(
        "Jab aap ATM se paise nikaalte ho, bank transfer karte ho ya insurance claim process hota hai — background me bahut baar COBOL chalta hai."
      ),
      h("Common domains"),
      {
        type: "list",
        items: [
          "Banking — core banking, ATM, transactions",
          "Insurance — policy aur claim processing",
          "Government — tax, pension, railway reservation",
          "Healthcare — patient billing systems",
          "Retail — large scale inventory and billing",
        ],
      },
      tip(
        "Duniya ki bahut badi percentage financial transactions aaj bhi COBOL systems se process hoti hain."
      ),
    ],
    practice:
      "Apne aas-paas ke 3 systems list karo jahan batch processing dikhti hai aur socho COBOL kahan fit ho sakta hai.",
  }),

  lesson({
    slug: "cobol-advantages",
    courseId: "beginner",
    title: "COBOL Advantages",
    description: "COBOL ke fayde aur kuch limitations.",
    objectives: [
      "COBOL ke strengths samajhna",
      "Kuch limitations aur unka reason samajhna",
    ],
    blocks: [
      p("COBOL decades se survive kyun kar raha hai? Iske kuch strong reasons hain."),
      h("Advantages"),
      {
        type: "list",
        items: [
          "Business calculations ke liye accurate decimal math",
          "Bahut high readability",
          "Proven reliability aur stability",
          "Huge existing codebase (legacy but critical)",
          "Strong file and report generation support",
        ],
      },
      h("Limitations"),
      {
        type: "list",
        items: [
          "Verbose syntax — code lamba hota hai",
          "Web/UI development ke liye suitable nahi",
          "Modern languages ke compared kam developers",
        ],
      },
      note("Legacy code hona weakness nahi — ye proven, tested code hota hai."),
    ],
    practice:
      "Ek table banao: COBOL advantages vs limitations, aur har point ka ek real example socho.",
  }),

  lesson({
    slug: "program-structure",
    courseId: "beginner",
    title: "COBOL Program Structure",
    description: "COBOL program ke char divisions aur unka kaam.",
    objectives: [
      "Char divisions ke naam aur purpose",
      "Har division ka order aur necessity",
      "Minimal valid program likhna",
    ],
    blocks: [
      p("Har COBOL program chaar divisions se milkar banta hai:"),
      {
        type: "table",
        headers: ["Division", "Purpose"],
        rows: [
          ["IDENTIFICATION", "Program ka naam aur metadata"],
          ["ENVIRONMENT", "Computer aur files ka environment"],
          ["DATA", "Variables aur data structures"],
          ["PROCEDURE", "Executable logic (statements)"],
        ],
      },
      syn(
        `IDENTIFICATION DIVISION.
PROGRAM-ID. SAMPLE.
ENVIRONMENT DIVISION.
DATA DIVISION.
PROCEDURE DIVISION.
    DISPLAY "STRUCTURE".
    STOP RUN.`
      ),
      warn(
        "Divisions ka order fixed hai — IDENTIFICATION pehle, PROCEDURE last."
      ),
    ],
    examples: [
      {
        title: "Four divisions",
        code: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. STRUCT.
       ENVIRONMENT DIVISION.
       DATA DIVISION.
       PROCEDURE DIVISION.
           DISPLAY "FOUR DIVISIONS".
           STOP RUN.`,
        output: "FOUR DIVISIONS",
      },
    ],
    commonMistakes: ["Divisions ka order galat karna", "PROGRAM-ID bhoolna"],
    practice: "Char divisions use karke ek program likho jo 'COBOL READY' print kare.",
  }),

  lesson({
    slug: "cobol-syntax",
    courseId: "beginner",
    title: "COBOL Syntax & Format",
    description: "Fixed vs free format, columns aur basic syntax rules.",
    objectives: [
      "COBOL ke column rules samajhna",
      "Areas A aur Area B ka difference",
      "Statement terminators (period) ka role",
    ],
    blocks: [
      p(
        "Classic COBOL **fixed format** hota hai jisme columns ka special matlab hota hai."
      ),
      {
        type: "table",
        headers: ["Columns", "Area", "Use"],
        rows: [
          ["1-6", "Sequence", "Line numbers (optional)"],
          ["7", "Indicator", "*, /, - special markers"],
          ["8-11", "Area A", "Division, Section, paragraph names, 01 levels"],
          ["12-72", "Area B", "Statements aur other data levels"],
          ["73-80", "Identification", "Ignored by compiler"],
        ],
      },
      syn(`Area A: DIVISION, SECTION, 01 levels
Area B: DISPLAY, MOVE, PERFORM, 05 10 levels`),
      p(
        "Modern compilers **free format** bhi support karte hain jisme columns matter nahi karte."
      ),
      note("Aapke notes me Area A aur Area B ka difference interview me poocha jata hai."),
    ],
    commonMistakes: [
      "Area A me statement likhna",
      "Har statement ke baad period dena (zaroori nahi, sirf paragraph end pe)",
    ],
    practice:
      "Fixed format ke hisaab se likho aur batao kaun sa line Area A me aayega.",
  }),

  lesson({
    slug: "identification-division",
    courseId: "beginner",
    title: "IDENTIFICATION DIVISION",
    description: "Program ka identity aur metadata kaise define karein.",
    objectives: [
      "PROGRAM-ID ka use",
      "AUTHOR, DATE-WRITTEN jaisi optional entries",
      "Naming rules",
    ],
    blocks: [
      p("Ye pehla division hai jo program ko identify karta hai."),
      syn(`IDENTIFICATION DIVISION.
PROGRAM-ID. PROGRAM-NAME.
AUTHOR. YOUR-NAME.
DATE-WRITTEN. 2026-09-19.`),
      note("Sirf PROGRAM-ID mandatory hai, baaki entries optional hain."),
      tip("Program name me hyphen use kar sakte ho, space nahi."),
    ],
    examples: [
      {
        title: "Identification entries",
        code: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. IDENTDEMO.
       AUTHOR. STUDENT.
       PROCEDURE DIVISION.
           DISPLAY "ID DIVISION".
           STOP RUN.`,
        output: "ID DIVISION",
      },
    ],
    practice: "Apna naam aur aaj ki date dalke IDENTIFICATION DIVISION likho.",
  }),

  lesson({
    slug: "environment-division",
    courseId: "beginner",
    title: "ENVIRONMENT DIVISION",
    description: "Computer aur file environment configure karna.",
    objectives: [
      "CONFIGURATION SECTION samajhna",
      "INPUT-OUTPUT SECTION aur FILE-CONTROL",
      "Kab environment division zaroori hai",
    ],
    blocks: [
      p(
        "ENVIRONMENT DIVISION batata hai ki program kis 'computer' aur kis input/output setup pe chalega."
      ),
      syn(`ENVIRONMENT DIVISION.
CONFIGURATION SECTION.
SOURCE-COMPUTER. IBM-390.
OBJECT-COMPUTER. IBM-390.
INPUT-OUTPUT SECTION.
FILE-CONTROL.
    SELECT EMP-FILE ASSIGN TO "emp.dat".`),
      note(
        "Chhote programs me environment division skip ho sakta hai, lekin file handling me zaroori hai."
      ),
    ],
    practice:
      "FILE-CONTROL me ek SELECT statement likho jo 'student.dat' file ko assign kare.",
  }),

  lesson({
    slug: "data-division",
    courseId: "beginner",
    title: "DATA DIVISION",
    description: "Variables aur data structures define karna.",
    objectives: [
      "WORKING-STORAGE SECTION ka use",
      "Level numbers ke saath variables declare karna",
      "Data items ko name dena",
    ],
    blocks: [
      p("DATA DIVISION me hum apne saare variables define karte hain."),
      syn(`DATA DIVISION.
WORKING-STORAGE SECTION.
01 WS-NAME   PIC X(20).
01 WS-AGE    PIC 9(03).
01 WS-SALARY PIC 9(07)V99.`),
      {
        type: "table",
        headers: ["Section", "Use"],
        rows: [
          ["WORKING-STORAGE", "Program ke andar use hone wale variables"],
          ["FILE SECTION", "File records ka structure"],
          ["LINKAGE", "Called program se aane wala data"],
        ],
      },
    ],
    examples: [
      {
        title: "Working storage variables",
        code: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. DATADEMO.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-MSG PIC X(20).
       PROCEDURE DIVISION.
           MOVE "COBOL DATA" TO WS-MSG
           DISPLAY WS-MSG
           STOP RUN.`,
        output: "COBOL DATA",
      },
    ],
    practice:
      "Teen variables banao: naam (X(30)), umar (9(02)) aur fees (9(05)V99).",
  }),

  lesson({
    slug: "procedure-division",
    courseId: "beginner",
    title: "PROCEDURE DIVISION",
    description: "Executable statements aur program logic.",
    objectives: [
      "PROCEDURE DIVISION ka structure",
      "Paragraph aur statement execution",
      "STOP RUN ka role",
    ],
    blocks: [
      p(
        "PROCEDURE DIVISION me actual executable code likha jata hai. Ye program ka brain hai."
      ),
      syn(`PROCEDURE DIVISION.
MAIN-PARA.
    DISPLAY "HELLO"
    STOP RUN.`),
      p(
        "Aap paragraphs bana sakte ho aur unhe PERFORM se call kar sakte ho — ye code organization me help karta hai."
      ),
      note("STOP RUN program ko terminate karta hai aur control return karta hai."),
    ],
    examples: [
      {
        title: "Paragraph based program",
        code: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. PROC.
       PROCEDURE DIVISION.
       MAIN-PARA.
           DISPLAY "IN MAIN"
           PERFORM GREET-PARA
           STOP RUN.
       GREET-PARA.
           DISPLAY "IN PARAGRAPH".`,
        output: "IN MAIN\nIN PARAGRAPH",
      },
    ],
    practice: "Do paragraphs banao: ek message print kare, dusra uska naam print kare.",
  }),

  lesson({
    slug: "comments",
    courseId: "beginner",
    title: "Comments in COBOL",
    description: "Comment kaise likhein aur kab use karein.",
    objectives: [
      "Fixed format comment marker (*) ka use",
      "Inline comment (*>) ka use",
      "Good commenting practices",
    ],
    blocks: [
      p("Comments code ko explain karte hain aur compiler inhe ignore karta hai."),
      h("Fixed format"),
      syn(`      * Ye ek comment line hai (column 7 me asterisk)`),
      h("Inline comment"),
      syn(`DISPLAY "HELLO"  *> Ye inline comment hai`),
      tip(
        "Why comment karein, not what — code khud 'what' bata deta hai, 'why' important hai."
      ),
    ],
    practice:
      "Ek program likho jisme header comment block aur ek inline comment ho.",
  }),

  lesson({
    slug: "variables",
    courseId: "beginner",
    title: "Variables",
    description: "COBOL me variables declare aur use karna.",
    objectives: [
      "Variable declaration ka syntax",
      "Naming conventions",
      "Variable me value assign karna",
    ],
    blocks: [
      p(
        "COBOL me variables ko **data items** kehte hain. Inhe level number aur PIC clause ke saath declare karte hain."
      ),
      syn(`01 WS-COUNTER PIC 9(03) VALUE 0.
01 WS-NAME    PIC X(25) VALUE SPACES.`),
      note(
        "Prefix WS- (Working Storage) ek common convention hai jisse variable identify karna aasan hota hai."
      ),
      warn("COBOL me variable name me underscore nahi, hyphen use hota hai."),
    ],
    examples: [
      {
        title: "Variable use",
        code: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. VARS.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-CITY PIC X(15).
       PROCEDURE DIVISION.
           MOVE "MUMBAI" TO WS-CITY
           DISPLAY "CITY: " WS-CITY
           STOP RUN.`,
        output: "CITY: MUMBAI",
      },
    ],
    commonMistakes: ["Hyphen ki jagah underscore lagana", "PIC bhoolna"],
    practice: "Apne naam, sheher aur pin code ke liye variables banao aur print karo.",
  }),

  lesson({
    slug: "pic-clause",
    courseId: "beginner",
    title: "PIC Clause",
    description: "PICTURE clause se data ka type aur size define karna.",
    objectives: [
      "X, 9, V, S symbols ka matlab",
      "Numeric vs alphanumeric PIC",
      "Decimal handling (V)",
    ],
    blocks: [
      p("PIC (PICTURE) clause batata hai data item ki type aur length."),
      {
        type: "table",
        headers: ["Symbol", "Meaning", "Example"],
        rows: [
          ["9", "Numeric digit", "PIC 9(03) -> 001"],
          ["X", "Alphanumeric", "PIC X(10) -> text"],
          ["V", "Implied decimal point", "PIC 9(05)V99"],
          ["S", "Sign", "PIC S9(04)"],
          ["A", "Alphabetic", "PIC A(20)"],
        ],
      },
      syn(`01 WS-AMOUNT PIC 9(07)V99.   *> 1234567.89
01 WS-NAME   PIC X(30).     *> text
01 WS-BAL    PIC S9(07)V99. *> signed balance`),
      note(
        "V memory me store nahi hota — ye sirf compiler ko decimal position batata hai."
      ),
      tip("PIC 9(05)V99 ka matlab total 7 digits, 2 decimal ke baad."),
    ],
    examples: [
      {
        title: "PIC examples",
        code: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. PICDEMO.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-QTY  PIC 9(03) VALUE 25.
       01 WS-RATE PIC 9(03)V99 VALUE 149.50.
       PROCEDURE DIVISION.
           DISPLAY "QTY : " WS-QTY
           DISPLAY "RATE: " WS-RATE
           STOP RUN.`,
        output: "QTY : 025\nRATE: 14950",
      },
    ],
    commonMistakes: [
      "V ki jagah dot (.) lagana",
      "Length galat dena jisse data truncate ho jaye",
    ],
    practice:
      "Aisa PIC banao jo 8 digit ka mobile number store kare aur ek jo 6 digit decimal (2 decimal places) store kare.",
  }),

  lesson({
    slug: "value-clause",
    courseId: "beginner",
    title: "VALUE Clause",
    description: "Variables ko initial value dena.",
    objectives: [
      "VALUE clause ka syntax",
      "Literal types (numeric, alphanumeric, figurative constants)",
      "SPACES, ZEROS, LOW-VALUE ka use",
    ],
    blocks: [
      p("VALUE clause variable ki initial value set karta hai."),
      syn(`01 WS-COUNT PIC 9(03) VALUE 0.
01 WS-NAME  PIC X(20) VALUE "UNKNOWN".
01 WS-BLANK PIC X(10) VALUE SPACES.`),
      {
        type: "table",
        headers: ["Figurative Constant", "Meaning"],
        rows: [
          ["SPACES", "Blank spaces"],
          ["ZEROS", "Zero value"],
          ["LOW-VALUE", "Lowest collating value"],
          ["HIGH-VALUE", "Highest collating value"],
        ],
      },
      warn("VALUE clause sirf DATA DIVISION me diya jata hai, PROCEDURE me nahi."),
    ],
    examples: [
      {
        title: "Initial values",
        code: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. VALDEMO.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-STATUS PIC X(10) VALUE "ACTIVE".
       01 WS-TOTAL  PIC 9(05) VALUE 1000.
       PROCEDURE DIVISION.
           DISPLAY "STATUS: " WS-STATUS
           DISPLAY "TOTAL : " WS-TOTAL
           STOP RUN.`,
        output: "STATUS: ACTIVE   \nTOTAL : 01000",
      },
    ],
    commonMistakes: ["ZERO ki jagah 0 likhna", "Alphanumeric value ko quotes ke bina likhna"],
    practice: "Ek variable banao jo default 'PENDING' store kare aur print karo.",
  }),

  lesson({
    slug: "display",
    courseId: "beginner",
    title: "DISPLAY Statement",
    description: "Screen ya output pe data print karna.",
    objectives: [
      "DISPLAY ka syntax",
      "Multiple items ek saath display karna",
      "String literal aur variable mix karna",
    ],
    blocks: [
      p("DISPLAY output device (usually terminal) pe data print karta hai."),
      syn(`DISPLAY "HELLO WORLD"
DISPLAY "NAME: " WS-NAME
DISPLAY WS-A WS-B`),
      tip(
        "DISPLAY ko debugging ke liye bahut use karte hain — values check karne ke liye."
      ),
    ],
    examples: [
      {
        title: "Display variations",
        code: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. DISPDEMO.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-NAME PIC X(10) VALUE "RAHUL".
       01 WS-AGE  PIC 9(02) VALUE 21.
       PROCEDURE DIVISION.
           DISPLAY "HELLO WORLD"
           DISPLAY "NAME: " WS-NAME
           DISPLAY "AGE : " WS-AGE
           STOP RUN.`,
        output: "HELLO WORLD\nNAME: RAHUL     \nAGE : 21",
      },
    ],
    commonMistakes: ["Literal ko quotes ke bina likhna", "Statement end pe period galat lagana"],
    practice: "Apni details (naam, city, course) DISPLAY se print karo.",
  }),

  lesson({
    slug: "accept",
    courseId: "beginner",
    title: "ACCEPT Statement",
    description: "User se input lena.",
    objectives: [
      "ACCEPT ka syntax",
      "ACCEPT FROM CONSOLE aur DATE/TIME",
      "Input validation ka basic idea",
    ],
    blocks: [
      p("ACCEPT keyboard/console se input leta hai aur variable me store karta hai."),
      syn(`ACCEPT WS-NAME
ACCEPT WS-AGE
ACCEPT WS-DATE FROM DATE`),
      note(
        "Basic ACCEPT simple input ke liye hai. Enterprise COBOL me input usually files/JCL se aata hai."
      ),
    ],
    examples: [
      {
        title: "Take input and display",
        code: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. ACCDEMO.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-NAME PIC X(20).
       PROCEDURE DIVISION.
           DISPLAY "ENTER NAME: "
           ACCEPT WS-NAME
           DISPLAY "HELLO " WS-NAME
           STOP RUN.`,
        output: "ENTER NAME: \n(RAHUL input)\nHELLO RAHUL",
      },
    ],
    commonMistakes: ["Input ki length se chhota PIC dena", "ACCEPT ke baad value validate na karna"],
    practice: "User se do numbers input lekar unhe display karo.",
  }),

  lesson({
    slug: "move",
    courseId: "beginner",
    title: "MOVE Statement",
    description: "Data ko ek variable se dusre me copy karna.",
    objectives: [
      "MOVE ka syntax",
      "Numeric aur alphanumeric move ka behaviour",
      "Truncation aur padding rules",
    ],
    blocks: [
      p("MOVE statement source value ko destination me copy karta hai."),
      syn(`MOVE "HELLO" TO WS-NAME
MOVE WS-A TO WS-B
MOVE 100 TO WS-TOTAL`),
      h("Important rules"),
      {
        type: "list",
        items: [
          "Alphanumeric move me left se fill hota hai, bacha hua right side spaces se fill",
          "Numeric move me value right align hoti hai, aage zeros se pad hoti hai",
          "Destination chhota ho to data truncate ho jata hai",
        ],
      },
      warn("MOVE data ko replace karta hai, append nahi — append ke liye STRING use karein."),
    ],
    examples: [
      {
        title: "Move rules",
        code: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. MOVEDEMO.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-SRC PIC X(10) VALUE "COBOL".
       01 WS-DST PIC X(10).
       01 WS-NUM PIC 9(05) VALUE 42.
       PROCEDURE DIVISION.
           MOVE WS-SRC TO WS-DST
           DISPLAY "DST: [" WS-DST "]"
           DISPLAY "NUM: [" WS-NUM "]"
           STOP RUN.`,
        output: "DST: [COBOL     ]\nNUM: [00042]",
      },
    ],
    commonMistakes: [
      "MOVE TO ki jagah MOVE IN likhna",
      "Chhote destination me bada value move karke truncation ignore karna",
    ],
    practice:
      "Do variables banao, ek me value daalo, MOVE se dusre me copy karke dono print karo.",
  }),
];
