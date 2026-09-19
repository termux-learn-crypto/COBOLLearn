import { quiz } from "./_builder";

export const fundamentalsQuizzes = [
  quiz("data-types", [
    ["Sirf letters store karne ke liye kaun sa PIC use hota hai?", ["A", "X", "9", "V"], 0, "PIC A alphabetic data ke liye hai."],
  ]),
  quiz("numeric-data", [
    ["Banking me kaun sa USAGE commonly use hota hai?", ["COMP-3", "COMP-1", "POINTER", "INDEX"], 0, "COMP-3 (packed decimal) banking me common hai."],
    ["PIC S9(03)V99 me V kya batata hai?", ["2 decimal places", "Sign", "3 digits", "Negative"], 0, "V ke baad 99 matlab 2 decimal places."],
  ]),
  quiz("alphanumeric-data", [
    ["Alphanumeric field pe arithmetic kar sakte hain?", ["Nahi", "Haan", "Sirf addition", "Sirf division"], 0, "X fields pe arithmetic allowed nahi hai."],
  ]),
  quiz("numeric-edited-data", [
    ["ZZZ9 me Z ka kaam kya hai?", ["Leading zero suppress", "Currency", "Decimal", "Sign"], 0, "Z leading zeros ko suppress karta hai."],
  ]),
  quiz("level-numbers", [
    ["Condition name ke liye kaun sa level use hota hai?", ["88", "77", "66", "01"], 0, "88 level condition names ke liye hota hai."],
    ["Independent working-storage item ke liye kaun sa level hai?", ["77", "88", "66", "49"], 0, "77 independent items ke liye hai."],
  ]),
  quiz("filler", [
    ["FILLER field ko directly reference kar sakte hain?", ["Nahi", "Haan", "Sirf MOVE se", "Sirf DISPLAY se"], 0, "FILLER ka naam nahi hota, isliye directly reference nahi hota."],
  ]),
  quiz("renames", [
    ["RENAMES ke liye kaun sa level use hota hai?", ["66", "77", "88", "01"], 0, "RENAMES 66 level pe likha jata hai."],
  ]),
  quiz("value-clause-fundamentals", [
    ["88 level kya define karta hai?", ["Condition name", "Record", "File", "Index"], 0, "88 condition names define karta hai."],
  ]),
  quiz("redefines", [
    ["REDEFINES ka fayda kya hai?", ["Same memory ka different view", "Naya memory allocate", "File open", "Sort"], 0, "REDEFINES same memory ko different layout me interpret karta hai."],
  ]),
  quiz("initialize", [
    ["INITIALIZE numeric fields ko kya banata hai?", ["ZERO", "SPACES", "HIGH-VALUE", "LOW-VALUE"], 0, "Numeric fields zero se reset hote hain."],
  ]),
  quiz("compute", [
    ["ROUNDED ka kaam kya hai?", ["Decimal result round karna", "Expression ignore", "Overflow", "Truncate integers"], 0, "ROUNDED decimal results round karta hai."],
  ]),
  quiz("add", [
    ["ADD A TO B GIVING C me kya hota hai?", ["B change nahi hota, C me result", "B update hota hai", "A update hota hai", "Sab update hote hain"], 0, "GIVING use karne pe destination fields change nahi hote."],
  ]),
  quiz("subtract", [
    ["SUBTRACT 5 FROM WS-TOTAL ka matlab?", ["WS-TOTAL = WS-TOTAL - 5", "WS-TOTAL = 5", "WS-TOTAL = 5 - TOTAL", "No change"], 0, "FROM value me se subtract hota hai."],
  ]),
  quiz("multiply", [
    ["MULTIPLY A BY B GIVING C me kya hota hai?", ["C = A * B", "B = A * B", "A = A * B", "C = A + B"], 0, "GIVING C me product store hota hai."],
  ]),
  quiz("divide", [
    ["Remainder nikalne ke liye kya use karte hain?", ["REMAINDER", "ROUNDED", "GIVING", "ON SIZE ERROR"], 0, "REMAINDER division ka baaki deta hai."],
  ]),
  quiz("arithmetic-expressions", [
    ["Expression me kaun sa precedence higher hai?", ["* / ", "+ -", "= ", "Sab equal"], 0, "Multiplication/division pehle, addition/subtraction baad me."],
  ]),
];
