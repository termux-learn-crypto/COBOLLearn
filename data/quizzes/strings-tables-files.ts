import { quiz } from "./_builder";

export const stringsQuizzes = [
  quiz("string-statement", [
    ["STRING statement kya karta hai?", ["Strings jodta hai", "String todta hai", "File padhta hai", "Sort karta hai"], 0, "STRING multiple strings concatenate karta hai."],
  ]),
  quiz("unstring-statement", [
    ["UNSTRING kya karta hai?", ["String ko parts me todta hai", "Jodta hai", "Reverse karta hai", "Count karta hai"], 0, "UNSTRING string ko delimiters pe split karta hai."],
  ]),
  quiz("inspect-statement", [
    ["INSPECT me character replace karne ke liye kaun sa clause?", ["REPLACING", "TALLYING", "CONVERTING", "MOVING"], 0, "REPLACING characters replace karta hai."],
  ]),
  quiz("reference-modification", [
    ["Reference modification ka syntax kya hai?", ["(start:length)", "[start:length]", "start,length", "(start,length)"], 0, "Format (start:length) hota hai, 1-based."],
  ]),
  quiz("string-validation", [
    ["Input numeric hai ye check karne ka aasan tarika?", ["IS NUMERIC", "IS ALPHA", "LENGTH", "TRIM"], 0, "IS NUMERIC class condition use karo."],
  ]),
];

export const tablesQuizzes = [
  quiz("occurs-clause", [
    ["OCCURS clause kya banata hai?", ["Table/array", "File", "Condition", "Index"], 0, "OCCURS array (table) banata hai."],
  ]),
  quiz("one-dimensional-tables", [
    ["COBOL table subscript kahan se shuru hota hai?", ["1", "0", "-1", "Compiler pe depend"], 0, "COBOL subscript 1 se shuru hota hai."],
  ]),
  quiz("multi-dimensional-tables", [
    ["2D table ke liye kya karte hain?", ["Nested OCCURS", "Double FD", "REDEFINES only", "SORT"], 0, "Nested OCCURS se 2D table banti hai."],
  ]),
  quiz("search-statement", [
    ["SEARCH statement kaunsa search karta hai?", ["Linear", "Binary", "Hash", "Random"], 0, "SEARCH linear search karta hai."],
  ]),
  quiz("search-all-statement", [
    ["SEARCH ALL ke liye table kaisa hona chahiye?", ["Sorted", "Unsorted", "Empty", "VSAM"], 0, "SEARCH ALL binary search hai, table sorted honi chahiye."],
  ]),
  quiz("indexed-by", [
    ["SEARCH ke liye kaun sa clause zaroori hai?", ["INDEXED BY", "REDEFINES", "RENAMES", "VALUE"], 0, "SEARCH ke liye INDEXED BY chahiye."],
  ]),
];

export const filesQuizzes = [
  quiz("file-concepts", [
    ["COBOL ka bada strength kya hai?", ["Batch file processing", "Web UI", "Mobile apps", "AI"], 0, "Batch/file processing COBOL ka core strength hai."],
  ]),
  quiz("sequential-files", [
    ["Sequential file me records kaise read hote hain?", ["Order me ek-ek", "Random", "Reverse", "Parallel"], 0, "Sequential order me read hote hain."],
  ]),
  quiz("file-definition", [
    ["File record structure kahan define hota hai?", ["FILE SECTION me FD ke baad", "PROCEDURE me", "ENVIRONMENT me", "JCL me"], 0, "FD ke baad DATA DIVISION ke FILE SECTION me."],
  ]),
  quiz("open-close", [
    ["Existing file padhne ke liye kaun sa mode?", ["INPUT", "OUTPUT", "EXTEND", "I-O"], 0, "INPUT mode padhne ke liye hai."],
  ]),
  quiz("read-write", [
    ["End of file handle karne ke liye READ me kya likhte hain?", ["AT END", "ON ERROR", "INVALID KEY", "NOT FOUND"], 0, "AT END EOF handle karta hai."],
  ]),
  quiz("rewrite-delete", [
    ["Record update karne ke liye kaun sa statement?", ["REWRITE", "WRITE", "READ", "MOVE"], 0, "REWRITE existing record update karta hai."],
  ]),
  quiz("file-status", [
    ["File status '00' ka matlab kya hai?", ["Successful", "End of file", "Not found", "Duplicate"], 0, "'00' success batata hai."],
    ["File status '10' ka matlab?", ["End of file", "Success", "Error", "Duplicate"], 0, "'10' end-of-file batata hai."],
  ]),
  quiz("vsam-introduction", [
    ["VSAM me random/keyed access ke liye kaun sa type?", ["KSDS", "ESDS", "RRDS", "PS"], 0, "KSDS key sequenced indexed access deta hai."],
  ]),
];
