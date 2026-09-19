import { lesson, p, h, syn, tip, note, warn } from "../_builder";

export const loopsLessons = [
  lesson({
    slug: "perform",
    courseId: "loops",
    title: "PERFORM Statement",
    description: "Paragraph/subroutine call karna.",
    objectives: ["PERFORM ka basic use", "PERFORM paragraph", "PERFORM THRU"],
    blocks: [
      p("PERFORM kisi paragraph ya section ko execute karta hai. Ye COBOL ka subroutine mechanism hai."),
      syn(`PROCEDURE DIVISION.
MAIN-PARA.
    PERFORM GREET-PARA
    STOP RUN.
GREET-PARA.
    DISPLAY "HELLO FROM PARAGRAPH".`),
      note("PERFORM ke baad control wapas call karne wale paragraph me aata hai."),
    ],
    practice: "Ek paragraph banao aur PERFORM se call karo.",
  }),

  lesson({
    slug: "perform-times",
    courseId: "loops",
    title: "PERFORM TIMES",
    description: "Fixed number of iterations.",
    objectives: ["PERFORM ... TIMES syntax", "Counter use"],
    blocks: [
      p("PERFORM n TIMES statement ko exactly n baar chalata hai."),
      syn(`PERFORM 5 TIMES
    DISPLAY "HELLO"
END-PERFORM`),
      note("Inline PERFORM ko END-PERFORM se band karte hain."),
    ],
    practice: "Apna naam 10 baar print karo PERFORM TIMES se.",
  }),

  lesson({
    slug: "perform-until",
    courseId: "loops",
    title: "PERFORM UNTIL",
    description: "Condition aane tak loop chalana.",
    objectives: ["PERFORM UNTIL syntax", "Test before vs test after", "Infinite loop se bachna"],
    blocks: [
      p("PERFORM UNTIL tab tak chalta hai jab tak condition true na ho jaye."),
      syn(`PERFORM UNTIL WS-COUNT > 10
    DISPLAY WS-COUNT
    ADD 1 TO WS-COUNT
END-PERFORM`),
      warn("Condition hamesha update karne wala statement andar rakho warna infinite loop ho jayega."),
    ],
    practice: "1 se 20 tak numbers print karo PERFORM UNTIL se.",
  }),

  lesson({
    slug: "perform-varying",
    courseId: "loops",
    title: "PERFORM VARYING",
    description: "Counter controlled loop (for loop style).",
    objectives: ["PERFORM VARYING syntax", "FROM/BY/UNTIL clauses", "Multiple varying"],
    blocks: [
      p("PERFORM VARYING counter ko initialize, increment aur test karta hai — jaise for loop."),
      syn(`PERFORM VARYING WS-I FROM 1 BY 1
        UNTIL WS-I > 10
    DISPLAY WS-I
END-PERFORM`),
      tip("Multiple counters bhi de sakte ho: VARYING I ... AFTER J ..."),
    ],
    practice: "1 se 10 tak ke squares print karo PERFORM VARYING se.",
  }),

  lesson({
    slug: "inline-perform",
    courseId: "loops",
    title: "Inline PERFORM",
    description: "Paragraph ke bina andar hi loop likhna.",
    objectives: ["Inline vs out-of-line PERFORM", "END-PERFORM ka scope"],
    blocks: [
      p("Inline PERFORM me loop body directly usi jagah likhi jati hai."),
      syn(`PERFORM VARYING WS-I FROM 1 BY 1 UNTIL WS-I > 3
    DISPLAY "ITERATION " WS-I
END-PERFORM`),
      note("Inline PERFORM modern aur readable hota hai."),
    ],
    practice: "Inline PERFORM se table of 5 print karo.",
  }),

  lesson({
    slug: "nested-loops",
    courseId: "loops",
    title: "Nested Loops",
    description: "Loop ke andar loop.",
    objectives: ["Nesting ka structure", "Performance sochna", "Break/exit ka pattern"],
    blocks: [
      p("Ek loop ke andar dusra loop nested loop kehlata hai."),
      syn(`PERFORM VARYING WS-I FROM 1 BY 1 UNTIL WS-I > 3
    PERFORM VARYING WS-J FROM 1 BY 1 UNTIL WS-J > 3
        DISPLAY WS-I " " WS-J
    END-PERFORM
END-PERFORM`),
      warn("Nested loops me complexity exponential ho sakti hai — performance dhyan rakho."),
    ],
    practice: "3x3 ka multiplication table nested loop se print karo.",
  }),

  lesson({
    slug: "loop-control",
    courseId: "loops",
    title: "Loop Control",
    description: "Loop se bahar nikalna / skip karna.",
    objectives: ["PERFORM UNTIL me exit condition", "GO TO se bachna", "Flag based control"],
    blocks: [
      p("COBOL me modern loop control flags aur conditions se hota hai."),
      syn(`MOVE "N" TO WS-DONE
PERFORM UNTIL WS-DONE = "Y"
    IF WS-FOUND
        MOVE "Y" TO WS-DONE
    END-IF
END-PERFORM`),
      warn("GO TO use karne se code unreadable ho jata hai — avoid karo."),
    ],
    practice: "Flag use karke loop ko condition meet hone par rok do.",
  }),

  lesson({
    slug: "loop-practical-examples",
    courseId: "loops",
    title: "Loop Practical Examples",
    description: "Real-world loop patterns.",
    objectives: ["Accumulator pattern", "Running total", "Table processing"],
    blocks: [
      p("Loops ka sabse common use hai kisi collection pe iterate karke total/average nikalna."),
      syn(`MOVE 0 TO WS-SUM
PERFORM VARYING WS-I FROM 1 BY 1 UNTIL WS-I > 10
    ADD WS-I TO WS-SUM
END-PERFORM
COMPUTE WS-AVG = WS-SUM / 10`),
    ],
    practice: "1 se 100 tak ka sum loop se nikaalo.",
  }),
];
