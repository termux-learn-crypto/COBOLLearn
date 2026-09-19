import { lesson, p, h, syn, tip, note, warn } from "../_builder";

export const conditionsLessons = [
  lesson({
    slug: "if-statement",
    courseId: "conditions",
    title: "IF Statement",
    description: "Conditional execution ka basic building block.",
    objectives: ["IF syntax", "Condition kaise likhein", "Single statement IF"],
    blocks: [
      p("IF statement condition true hone par code execute karta hai."),
      syn(`IF WS-AGE >= 18
    DISPLAY "ELIGIBLE"
END-IF.`),
      note("END-IF use karna best practice hai — purane COBOL me period se scope decide hota tha."),
    ],
    practice: "IF se check karo ki marks 40 se zyada hain ya nahi.",
  }),

  lesson({
    slug: "else-end-if",
    courseId: "conditions",
    title: "ELSE and END-IF",
    description: "Do alternate paths aur proper scope closing.",
    objectives: ["ELSE ka use", "END-IF ka importance", "Nested vs flat structure"],
    blocks: [
      p("ELSE condition false hone par ka code chalata hai."),
      syn(`IF WS-MARKS >= 40
    DISPLAY "PASS"
ELSE
    DISPLAY "FAIL"
END-IF.`),
      warn("END-IF bhoolne se statements galat scope me chale jate hain."),
    ],
    practice: "Pass/Fail IF-ELSE likho.",
  }),

  lesson({
    slug: "evaluate",
    courseId: "conditions",
    title: "EVALUATE",
    description: "Multiple conditions ko clean tarike se handle karna.",
    objectives: ["EVALUATE TRUE ka use", "EVALUATE variable ka use", "WHEN OTHER"],
    blocks: [
      p("EVALUATE nested IF se zyada readable hota hai."),
      syn(`EVALUATE WS-GRADE
    WHEN "A" DISPLAY "EXCELLENT"
    WHEN "B" DISPLAY "GOOD"
    WHEN "C" DISPLAY "AVERAGE"
    WHEN OTHER DISPLAY "INVALID"
END-EVALUATE.`),
      tip("EVALUATE TRUE se range conditions bhi handle kar sakte ho."),
    ],
    practice: "Grade A/B/C ke liye EVALUATE likho.",
  }),

  lesson({
    slug: "nested-conditions",
    courseId: "conditions",
    title: "Nested Conditions",
    description: "IF ke andar IF aur structure.",
    objectives: ["Nesting ka concept", "Indentation", "Readability maintain karna"],
    blocks: [
      p("IF ke andar dusra IF nested condition kehlata hai."),
      syn(`IF WS-MARKS >= 40
    IF WS-MARKS >= 75
        DISPLAY "DISTINCTION"
    ELSE
        DISPLAY "PASS"
    END-IF
ELSE
    DISPLAY "FAIL"
END-IF.`),
      tip("Nesting 2-3 level se zyada na karo — EVALUATE use karo."),
    ],
    practice: "Nested IF se check karo marks >= 60 aur attendance >= 75.",
  }),

  lesson({
    slug: "and-or-not",
    courseId: "conditions",
    title: "AND, OR, NOT",
    description: "Logical operators se complex conditions.",
    objectives: ["AND/OR/NOT logic", "Short-circuit behaviour", "Parentheses ka use"],
    blocks: [
      p("Logical operators multiple conditions ko combine karte hain."),
      syn(`IF WS-AGE >= 18 AND WS-CITIZEN = "Y"
    DISPLAY "ELIGIBLE"
END-IF.

IF NOT WS-ACTIVE
    DISPLAY "INACTIVE"
END-IF.`),
      warn("AND/OR mix karte waqt parentheses use karo warna precedence confusing ho jata hai."),
    ],
    practice: "AND aur OR combine karke loan eligibility condition likho.",
  }),

  lesson({
    slug: "comparison-operators",
    courseId: "conditions",
    title: "Comparison Operators",
    description: "COBOL ke comparison operators aur shorthand.",
    objectives: ["=, <, >, <=, >=", "IS EQUAL TO jaisa verbose form", "Alphanumeric comparison"],
    blocks: [
      {
        type: "table",
        headers: ["Symbol", "Verbose", "Meaning"],
        rows: [
          ["=", "IS EQUAL TO", "Barabar"],
          [">", "IS GREATER THAN", "Bada"],
          ["<", "IS LESS THAN", "Chhota"],
          [">=", "IS GREATER OR EQUAL", "Bada ya barabar"],
          ["<=", "IS LESS OR EQUAL", "Chhota ya barabar"],
          ["NOT =", "IS NOT EQUAL", "Barabar nahi"],
        ],
      },
      note("Alphanumeric comparison ASCII/EBCDIC collating sequence se hoti hai."),
    ],
    practice: "Har operator ka ek chhota example likho.",
  }),

  lesson({
    slug: "class-conditions",
    courseId: "conditions",
    title: "Class Conditions",
    description: "NUMERIC, ALPHABETIC, ALPHANUMERIC checks.",
    objectives: ["IS NUMERIC ka use", "IS ALPHABETIC", "Input validation"],
    blocks: [
      p("Class conditions data ki nature check karte hain."),
      syn(`IF WS-INPUT IS NUMERIC
    DISPLAY "VALID NUMBER"
ELSE
    DISPLAY "INVALID"
END-IF.

IF WS-NAME IS ALPHABETIC DISPLAY "ONLY LETTERS".`),
      tip("Class conditions input validation ke liye bahut useful hain."),
    ],
    practice: "Check karo ki input numeric hai ya nahi.",
  }),

  lesson({
    slug: "sign-conditions",
    courseId: "conditions",
    title: "Sign Conditions",
    description: "POSITIVE, NEGATIVE, ZERO checks.",
    objectives: ["IS POSITIVE/NEGATIVE/ZERO", "Signed fields ke saath use"],
    blocks: [
      p("Sign conditions numeric value ke sign ko check karte hain."),
      syn(`IF WS-BALANCE IS NEGATIVE
    DISPLAY "OVERDRAWN"
ELSE
    DISPLAY "OK"
END-IF.`),
    ],
    practice: "Bank balance negative hone par 'OVERDRAWN' print karo.",
  }),
];
