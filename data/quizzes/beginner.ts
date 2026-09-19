import { quiz } from "./_builder";

export const beginnerQuizzes = [
  quiz("what-is-cobol", [
    ["COBOL ka full form kya hai?", ["Common Business Oriented Language", "Common Basic Object Language", "Computer Business Operating Language", "Common Binary Oriented Language"], 0, "COBOL = COmmon Business Oriented Language."],
    ["COBOL kis type ka language hai?", ["Compiled high-level language", "Markup language", "Query language", "Scripting language"], 0, "COBOL ek compiled, English-like high-level language hai."],
  ]),
  quiz("history-of-cobol", [
    ["COBOL ka pehla official version kaun sa tha?", ["COBOL-60", "COBOL-74", "COBOL-85", "COBOL 2002"], 0, "1960 me COBOL-60 pehla official version tha."],
    ["Aaj ke mainframe systems me sabse zyada kaun sa COBOL version use hota hai?", ["COBOL-85", "COBOL-60", "COBOL 2002", "COBOL 2014"], 0, "COBOL-85 aaj bhi sabse widely used version hai."],
  ]),
  quiz("where-cobol-is-used", [
    ["Inme se kaun COBOL ka common domain nahi hai?", ["Game development", "Banking", "Insurance", "Government systems"], 0, "COBOL business processing ke liye hai, game development ke liye nahi."],
  ]),
  quiz("cobol-advantages", [
    ["COBOL ka bada advantage kya hai?", ["Accurate decimal arithmetic", "Web UI development", "Mobile apps", "Machine learning"], 0, "COBOL business/financial decimal calculations me accurate hai."],
    ["COBOL ki ek limitation kya hai?", ["Verbose syntax", "Decimal support", "File handling", "Readability"], 0, "COBOL ka syntax verbose (lamba) hota hai."],
  ]),
  quiz("program-structure", [
    ["COBOL program me kitne divisions hote hain?", ["4", "3", "5", "2"], 0, "IDENTIFICATION, ENVIRONMENT, DATA, PROCEDURE."],
    ["Sabse pehla division kaun sa hai?", ["IDENTIFICATION DIVISION", "DATA DIVISION", "PROCEDURE DIVISION", "ENVIRONMENT DIVISION"], 0, "IDENTIFICATION DIVISION pehle aata hai."],
  ]),
  quiz("cobol-syntax", [
    ["COBOL fixed format me Area A kaunsa column range hai?", ["8-11", "1-6", "12-72", "73-80"], 0, "Area A columns 8-11 me hota hai."],
    ["Statements kis area me likhe jate hain?", ["Area B", "Area A", "Sequence area", "Indicator area"], 0, "Statements Area B (12-72) me likhte hain."],
  ]),
  quiz("identification-division", [
    ["IDENTIFICATION DIVISION me mandatory entry kaun si hai?", ["PROGRAM-ID", "AUTHOR", "DATE-WRITTEN", "INSTALLATION"], 0, "Sirf PROGRAM-ID mandatory hai."],
  ]),
  quiz("environment-division", [
    ["Files ka SELECT statement kis section me likha jata hai?", ["FILE-CONTROL", "WORKING-STORAGE", "LINKAGE", "PROCEDURE"], 0, "SELECT FILE-CONTROL me likha jata hai."],
  ]),
  quiz("data-division", [
    ["Program variables kaun se section me declare hote hain?", ["WORKING-STORAGE SECTION", "FILE SECTION", "LINKAGE SECTION", "PROCEDURE"], 0, "WORKING-STORAGE variables ke liye hai."],
  ]),
  quiz("procedure-division", [
    ["Program ko terminate karne ke liye kya use karte hain?", ["STOP RUN", "EXIT", "CLOSE", "GOBACK ONLY"], 0, "STOP RUN program terminate karta hai."],
  ]),
  quiz("comments", [
    ["Fixed format me comment line ke column 7 me kya hota hai?", ["*", "/", "-", "$"], 0, "Column 7 me asterisk (*) comment batata hai."],
    ["Inline comment ka marker kya hai?", ["*>", "--", "//", "#"], 0, "*> inline comment ke liye use hota hai."],
  ]),
  quiz("variables", [
    ["COBOL variable name me kya allowed hai?", ["Hyphen (-)", "Underscore (_)", "Space", "Dot (.)"], 0, "COBOL me hyphen use hota hai, underscore nahi."],
  ]),
  quiz("pic-clause", [
    ["PIC 9(03) ka matlab kya hai?", ["3-digit numeric", "3-letter text", "3 decimal places", "Signed number"], 0, "9 digit ko darshata hai, isliye 3-digit numeric."],
    ["PIC me V ka kya matlab hai?", ["Implied decimal point", "Actual dot", "Variable", "Sign"], 0, "V implied decimal position batata hai."],
  ]),
  quiz("value-clause", [
    ["Blank value ke liye kaun sa figurative constant use hota hai?", ["SPACES", "ZEROS", "HIGH-VALUE", "LOW-VALUE"], 0, "SPACES blank spaces deta hai."],
    ["VALUE clause kahan likha jata hai?", ["DATA DIVISION me", "PROCEDURE DIVISION me", "ENVIRONMENT me", "JCL me"], 0, "VALUE clause DATA DIVISION me diya jata hai."],
  ]),
  quiz("display", [
    ["Output print karne ke liye kaun sa statement use hota hai?", ["DISPLAY", "ACCEPT", "MOVE", "READ"], 0, "DISPLAY output print karta hai."],
  ]),
  quiz("accept", [
    ["User input lene ke liye kaun sa statement use hota hai?", ["ACCEPT", "DISPLAY", "MOVE", "COMPUTE"], 0, "ACCEPT input leta hai."],
  ]),
  quiz("move", [
    ["MOVE kaam kya karta hai?", ["Value copy karta hai", "Value add karta hai", "Input leta hai", "File kholta hai"], 0, "MOVE source ki value destination me copy karta hai."],
    ["Numeric move me value kaise align hoti hai?", ["Right aligned with zero padding", "Left aligned with spaces", "Center aligned", "Random"], 0, "Numeric move right align hoti hai aur zeros se pad hoti hai."],
  ]),
];
