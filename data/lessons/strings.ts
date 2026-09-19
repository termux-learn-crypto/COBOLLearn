import { lesson, p, h, syn, tip, note, warn } from "../_builder";

export const stringsLessons = [
  lesson({
    slug: "string-statement",
    courseId: "strings",
    title: "STRING Statement",
    description: "Multiple strings ko jodna (concatenate).",
    objectives: ["STRING syntax", "DELIMITED BY option", "POINTER use"],
    blocks: [
      p("STRING multiple fields ko ek destination field me copy karta hai."),
      syn(`STRING WS-FIRST DELIMITED BY SPACE
       " " DELIMITED BY SIZE
       WS-LAST  DELIMITED BY SPACE
    INTO WS-FULL-NAME
END-STRING`),
      note("DELIMITED BY SIZE poora field copy karta hai, DELIMITED BY SPACE sirf content tak."),
    ],
    practice: "First aur last name STRING se jodkar full name banao.",
  }),

  lesson({
    slug: "unstring-statement",
    courseId: "strings",
    title: "UNSTRING Statement",
    description: "Ek string ko todkar multiple fields me split karna.",
    objectives: ["UNSTRING syntax", "DELIMITED BY ka use", "COUNT IN option"],
    blocks: [
      p("UNSTRING ek string ko delimiter ke basis pe parts me todta hai."),
      syn(`UNSTRING WS-FULL-NAME
    DELIMITED BY ","
    INTO WS-FIRST WS-LAST
END-UNSTRING`),
    ],
    practice: "CSV line ko comma pe UNSTRING karke fields me todo.",
  }),

  lesson({
    slug: "inspect-statement",
    courseId: "strings",
    title: "INSPECT Statement",
    description: "String me count, replace aur conversion.",
    objectives: ["TALLYING", "REPLACING", "CONVERTING"],
    blocks: [
      p("INSPECT string ke characters pe operations karta hai."),
      syn(`INSPECT WS-TEXT TALLYING WS-COUNT FOR ALL "A"
INSPECT WS-TEXT REPLACING ALL "A" BY "B"
INSPECT WS-TEXT CONVERTING "abc" TO "ABC"`),
      tip("INSPECT data cleaning aur validation me bahut useful hai."),
    ],
    practice: "Ek string me kitne spaces hain wo INSPECT se count karo.",
  }),

  lesson({
    slug: "reference-modification",
    courseId: "strings",
    title: "Reference Modification",
    description: "String ke ek part ko directly access karna.",
    objectives: ["(start:length) syntax", "Substring nikalna", "Bounds careful rehna"],
    blocks: [
      p("Reference modification se string ka koi bhi portion access kar sakte ho."),
      syn(`MOVE WS-CODE(1:3) TO WS-PREFIX
DISPLAY WS-NAME(5:10)`),
      warn("Start position 1-based hai. Bounds se bahar access karne pe runtime error aa sakta hai."),
    ],
    practice: "Ek 10-character code ke pehle 3 aur last 4 characters nikaalo.",
  }),

  lesson({
    slug: "string-validation",
    courseId: "strings",
    title: "String Validation",
    description: "Input ko clean aur validate karna.",
    objectives: ["Trailing spaces trim concept", "Numeric validation", "INSPECT + class conditions"],
    blocks: [
      p("Real programs me input validation zaroori hai — galat data se production issues aate hain."),
      syn(`INSPECT WS-INPUT TALLYING WS-DIGITS
    FOR ALL "0" "1" "2" "3" "4" "5" "6" "7" "8" "9"

IF WS-INPUT IS NUMERIC
    DISPLAY "VALID"
ELSE
    DISPLAY "INVALID INPUT"
END-IF`),
    ],
    practice: "Ek input lo aur check karo ki wo sirf digits hai ya nahi.",
  }),
];
