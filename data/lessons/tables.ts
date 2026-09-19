import { lesson, p, h, syn, tip, note, warn } from "../_builder";

export const tablesLessons = [
  lesson({
    slug: "occurs-clause",
    courseId: "tables",
    title: "OCCURS Clause",
    description: "Table (array) declare karna.",
    objectives: ["OCCURS syntax", "Fixed occurrences", "Index access"],
    blocks: [
      p("OCCURS ek field ko multiple baar repeat karta hai — ye COBOL ka array hai."),
      syn(`01 WS-MARKS.
   05 WS-MARK PIC 9(03) OCCURS 5 TIMES.`),
      note("OCCURS se banaye fields ko subscript ya index se access karte hain."),
    ],
    practice: "5 subjects ke marks ke liye OCCURS table banao.",
  }),

  lesson({
    slug: "one-dimensional-tables",
    courseId: "tables",
    title: "One Dimensional Tables",
    description: "Simple array declare aur process karna.",
    objectives: ["Subscript ka use", "PERFORM se table bharna/print karna"],
    blocks: [
      p("One-dimensional table ek single list hoti hai jise subscript se access karte hain."),
      syn(`01 WS-NAMES.
   05 WS-NAME PIC X(10) OCCURS 3 TIMES.
...
MOVE "AMIT" TO WS-NAME(1)
MOVE "RAVI" TO WS-NAME(2)
DISPLAY WS-NAME(2)`),
      warn("Subscript 1 se shuru hota hai, 0 se nahi."),
    ],
    practice: "3 students ke naam table me daalo aur loop se print karo.",
  }),

  lesson({
    slug: "multi-dimensional-tables",
    courseId: "tables",
    title: "Multi Dimensional Tables",
    description: "2D tables (rows aur columns).",
    objectives: ["Nested OCCURS", "Double subscript", "Row/column processing"],
    blocks: [
      p("Do OCCURS nested karke 2D table banti hai — jaise marks[row][col]."),
      syn(`01 WS-GRID.
   05 WS-ROW OCCURS 3 TIMES.
      10 WS-VAL PIC 9(03) OCCURS 4 TIMES.
...
MOVE 95 TO WS-VAL(2, 3)`),
      tip("2D table me pehla subscript outer OCCURS, dusra inner OCCURS hota hai."),
    ],
    practice: "3x3 matrix declare karo aur ek value access karke print karo.",
  }),

  lesson({
    slug: "search-statement",
    courseId: "tables",
    title: "SEARCH Statement",
    description: "Linear search se table me value dhoondhna.",
    objectives: ["SEARCH syntax", "SET aur INDEXED BY", "AT END handling"],
    blocks: [
      p("SEARCH linearly table ko scan karta hai jab tak match na mile."),
      syn(`SET WS-IDX TO 1
SEARCH WS-EMP-TABLE
    AT END DISPLAY "NOT FOUND"
    WHEN WS-EMP-ID(WS-IDX) = WS-SEARCH-ID
        DISPLAY "FOUND AT " WS-IDX
END-SEARCH`),
      note("SEARCH sorted hone ki guarantee nahi mangta (linear)."),
    ],
    practice: "Marks table me 75 dhoondho SEARCH se.",
  }),

  lesson({
    slug: "search-all-statement",
    courseId: "tables",
    title: "SEARCH ALL",
    description: "Binary search for sorted tables.",
    objectives: ["SEARCH ALL syntax", "ASCENDING/DESCENDING KEY", "Performance benefit"],
    blocks: [
      p("SEARCH ALL binary search karta hai — table sorted honi chahiye."),
      syn(`01 WS-EMP-TABLE.
   05 WS-EMP OCCURS 100 TIMES
      ASCENDING KEY IS WS-EMP-ID
      INDEXED BY WS-IDX.
...
SEARCH ALL WS-EMP-TABLE
    AT END DISPLAY "NOT FOUND"
    WHEN WS-EMP-ID(WS-IDX) = WS-SEARCH-ID
        DISPLAY "FOUND"
END-SEARCH`),
      warn("Unsorted table pe SEARCH ALL galat result de sakta hai."),
    ],
    practice: "Sorted table banao aur SEARCH ALL se ek key dhoondho.",
  }),

  lesson({
    slug: "indexed-by",
    courseId: "tables",
    title: "INDEXED BY",
    description: "Table ke liye index declare karna.",
    objectives: ["INDEXED BY ka use", "SET se index control", "Index vs subscript"],
    blocks: [
      p("INDEXED BY table ke liye ek index naam banata hai jo SEARCH ke liye zaroori hai."),
      syn(`01 WS-TABLE.
   05 WS-ITEM PIC X(10) OCCURS 10 TIMES
      INDEXED BY WS-IDX.
...
SET WS-IDX TO 1
DISPLAY WS-ITEM(WS-IDX)`),
      note("SET index ko move karta hai; index internal offset store karta hai."),
    ],
    practice: "INDEXED BY ke saath table banao aur SET se index badal ke print karo.",
  }),
];
