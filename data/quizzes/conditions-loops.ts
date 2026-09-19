import { quiz } from "./_builder";

export const conditionsQuizzes = [
  quiz("if-statement", [
    ["IF block ko close karne ke liye kya use karte hain?", ["END-IF", "END-PERFORM", "END-EVALUATE", "STOP"], 0, "IF ko END-IF se close karte hain."],
  ]),
  quiz("else-end-if", [
    ["ELSE kab execute hota hai?", ["Jab condition false ho", "Jab condition true ho", "Hamesha", "Kabhi nahi"], 0, "ELSE tab chalta hai jab IF condition false ho."],
  ]),
  quiz("evaluate", [
    ["EVALUATE me default case ke liye kya likhte hain?", ["WHEN OTHER", "ELSE", "DEFAULT", "END-IF"], 0, "WHEN OTHER default case hai."],
  ]),
  quiz("nested-conditions", [
    ["Nested IF se better kab hota hai EVALUATE?", ["Jab bahut saari conditions ho", "Kabhi nahi", "Sirf 1 condition", "Sirf arithmetic me"], 0, "Bahut saari branches ke liye EVALUATE zyada readable hai."],
  ]),
  quiz("and-or-not", [
    ["Dono conditions true hone chahiye to kaun sa operator?", ["AND", "OR", "NOT", "XOR"], 0, "AND dono true hone pe true hota hai."],
  ]),
  quiz("comparison-operators", [
    ["'IS GREATER THAN' ka symbol kya hai?", [">", "<", "=", ">="], 0, "> greater than ke liye hai."],
  ]),
  quiz("class-conditions", [
    ["Input sirf numbers hai ye check karne ke liye kya use karein?", ["IS NUMERIC", "IS ALPHABETIC", "IS POSITIVE", "IS ZERO"], 0, "IS NUMERIC class condition use hoti hai."],
  ]),
  quiz("sign-conditions", [
    ["Balance negative hai ye check karne ke liye kya likhein?", ["IF WS-BAL IS NEGATIVE", "IF WS-BAL = 0", "IF WS-BAL IS ALPHABETIC", "IF WS-BAL > 0"], 0, "IS NEGATIVE sign condition use hoti hai."],
  ]),
];

export const loopsQuizzes = [
  quiz("perform", [
    ["PERFORM ka kaam kya hai?", ["Paragraph/subroutine execute karna", "File open karna", "Variable declare", "Sort karna"], 0, "PERFORM paragraph/section ko execute karta hai."],
  ]),
  quiz("perform-times", [
    ["PERFORM 5 TIMES kitni baar chalega?", ["5 baar", "4 baar", "6 baar", "Infinite"], 0, "Exactly 5 baar."],
  ]),
  quiz("perform-until", [
    ["PERFORM UNTIL kab rukta hai?", ["Jab condition true ho jaye", "Jab condition false ho", "Kabhi nahi", "Fixed 10 baar"], 0, "Jab tak condition true na ho, loop chalta hai."],
    ["Infinite loop se bachne ke liye kya karein?", ["Loop me condition variable update karo", "Period lagao", "END-PERFORM hatao", "STOP RUN lagao"], 0, "Condition update karna zaroori hai."],
  ]),
  quiz("perform-varying", [
    ["PERFORM VARYING me BY clause kya karta hai?", ["Increment value", "Initial value", "End condition", "Reset"], 0, "BY increment batata hai."],
  ]),
  quiz("inline-perform", [
    ["Inline PERFORM ko kya close karta hai?", ["END-PERFORM", "END-IF", "END-EVALUATE", "STOP RUN"], 0, "END-PERFORM inline loop close karta hai."],
  ]),
  quiz("nested-loops", [
    ["Nested loop me total iterations kaise calculate karte hain?", ["Outer * Inner", "Outer + Inner", "Outer - Inner", "Inner only"], 0, "Nested loops multiply hote hain (agar ranges independent hain)."],
  ]),
  quiz("loop-control", [
    ["COBOL me GO TO ke baare me best practice kya hai?", ["Avoid karo", "Hamesha use karo", "Sirf loops me", "Sirf files me"], 0, "GO TO code ko unreadable banata hai, avoid karo."],
  ]),
  quiz("loop-practical-examples", [
    ["Running total ke liye loop me kya karte hain?", ["Accumulator me ADD", "MULTIPLY", "RESET", "CLOSE"], 0, "Accumulator variable me ADD karte hain."],
  ]),
];
