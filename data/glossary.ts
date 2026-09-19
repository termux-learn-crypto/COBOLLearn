import type { GlossaryTerm } from "@/types";

const t = (
  term: string,
  slug: string,
  definition: string,
  syntax: string,
  example: string,
  relatedLessons: string[] = []
): GlossaryTerm => ({ term, slug, definition, syntax, example, relatedLessons });

export const glossary: GlossaryTerm[] = [
  t("PIC", "pic", "PICTURE clause jo data item ka type aur size define karta hai.", "PIC 9(n) | X(n) | S9(n)V99", `01 WS-AGE PIC 9(03).`, ["pic-clause", "numeric-data", "alphanumeric-data"]),
  t("VALUE", "value", "Variable ko initial value dene ke liye use hota hai.", `01 WS-STATUS PIC X(01) VALUE "A".`, `01 WS-NAME PIC X(10) VALUE "COBOL".`, ["value-clause", "variables"]),
  t("MOVE", "move", "Ek data item ki value dusre me copy karta hai.", "MOVE source TO destination", `MOVE "HELLO" TO WS-MSG`, ["move", "variables"]),
  t("DISPLAY", "display", "Output device pe data print karta hai.", `DISPLAY "HELLO" WS-NAME`, `DISPLAY "TOTAL: " WS-TOTAL`, ["display"]),
  t("ACCEPT", "accept", "Input device (console) se data leta hai.", "ACCEPT variable", "ACCEPT WS-NAME", ["accept"]),
  t("PERFORM", "perform", "Paragraph/section ko execute karta hai ya loop banata hai.", "PERFORM para-name", "PERFORM CALC-PARA", ["perform", "perform-until", "perform-varying"]),
  t("OCCURS", "occurs", "Field ko multiple baar repeat karke table banata hai.", "PIC X(10) OCCURS n TIMES", "05 WS-NAME PIC X(10) OCCURS 5 TIMES.", ["occurs-clause", "one-dimensional-tables"]),
  t("REDEFINES", "redefines", "Same memory area ko different layout me interpret karta hai.", "level REDEFINES original", `01 WS-NUM REDEFINES WS-DATA.`, ["redefines"]),
  t("COPYBOOK", "copybook", "Reusable code segment jo COPY se include hota hai.", "COPY member-name.", "COPY EMPREC.", ["copybook"]),
  t("LINKAGE", "linkage", "Subprogram me aane wale parameters ka section.", "LINKAGE SECTION", "LINKAGE SECTION. 01 LK-ID PIC 9(05).", ["linkage-section", "subprograms"]),
  t("COMP", "comp", "Binary usage — numeric data ko binary me store karta hai.", "PIC S9(05) COMP", "01 WS-N PIC 9(04) COMP.", ["numeric-data"]),
  t("COMP-3", "comp-3", "Packed decimal usage — banking me commonly used.", "PIC S9(09) COMP-3", "01 WS-BAL PIC S9(09)V99 COMP-3.", ["numeric-data"]),
  t("JCL", "jcl", "Job Control Language — mainframe pe job run karne ke liye.", "//name EXEC PGM=prog", "//STEP1 EXEC PGM=HELLO", ["jcl-introduction", "jcl-job-exec-dd"]),
  t("DB2", "db2", "IBM ka relational database jo mainframe pe use hota hai.", "EXEC SQL ... END-EXEC", "EXEC SQL SELECT ... END-EXEC.", ["db2-introduction", "embedded-sql"]),
  t("VSAM", "vsam", "Virtual Storage Access Method — mainframe ka indexed file system.", "ORGANIZATION IS INDEXED", "SELECT F ASSIGN TO X ORGANIZATION IS INDEXED.", ["vsam-introduction"]),
  t("88 Level", "88-level", "Condition name define karta hai jo readable condition deta hai.", `88 STATUS-ACTIVE VALUE "A".`, `IF STATUS-ACTIVE ...`, ["value-clause-fundamentals", "level-numbers"]),
  t("EVALUATE", "evaluate", "Multiple conditions ko clean tarike se handle karta hai.", "EVALUATE var WHEN ... END-EVALUATE", `EVALUATE WS-G WHEN "A" DISPLAY "TOP" END-EVALUATE.`, ["evaluate"]),
  t("INITIALIZE", "initialize", "Group item ke fields ko default values pe reset karta hai.", "INITIALIZE group-item", "INITIALIZE WS-EMP", ["initialize"]),
  t("INSPECT", "inspect", "String me count/replace/convert karta hai.", "INSPECT text REPLACING ALL a BY b", `INSPECT WS-T REPLACING ALL "A" BY "B"`, ["inspect-statement"]),
  t("STRING", "string", "Multiple strings ko concatenate karta hai.", "STRING a b INTO c", `STRING WS-A WS-B INTO WS-C`, ["string-statement"]),
  t("UNSTRING", "unstring", "String ko delimiters pe split karta hai.", "UNSTRING src INTO a b", `UNSTRING WS-NAME INTO WS-F WS-L`, ["unstring-statement"]),
  t("SEARCH", "search", "Table me linear search karta hai.", "SEARCH table AT END ... WHEN ... END-SEARCH", "SEARCH WS-TBL WHEN ... END-SEARCH", ["search-statement"]),
  t("SEARCH ALL", "search-all", "Sorted table me binary search karta hai.", "SEARCH ALL table ...", "SEARCH ALL WS-TBL ... END-SEARCH", ["search-all-statement"]),
  t("INDEXED BY", "indexed-by", "Table ke liye index declare karta hai (SEARCH ke liye zaroori).", "OCCURS n TIMES INDEXED BY idx", "OCCURS 10 TIMES INDEXED BY WS-I.", ["indexed-by"]),
  t("FILE STATUS", "file-status", "File operation ka result code deta hai.", "FILE STATUS IS ws-status", "FILE STATUS IS WS-FS.", ["file-status"]),
  t("FD", "fd", "File Description — file ka record structure define karta hai.", "FD file-name.", "FD CUST-FILE.", ["file-definition"]),
  t("CALL", "call", "Subprogram ko execute karta hai.", "CALL 'prog' USING args", `CALL "CALC" USING WS-A WS-B`, ["subprograms", "call-using"]),
  t("EXEC SQL", "exec-sql", "COBOL ke andar embedded SQL block.", "EXEC SQL ... END-EXEC", "EXEC SQL SELECT ... END-EXEC.", ["embedded-sql"]),
  t("SQLCODE", "sqlcode", "SQL operation ka status code.", "IF SQLCODE = 0", "IF SQLCODE = 100 DISPLAY 'NOT FOUND'.", ["embedded-sql", "cursors"]),
  t("Cursor", "cursor", "Multiple SQL rows ko ek-ek karke process karne ka mechanism.", "DECLARE ... CURSOR FOR", "DECLARE C CURSOR FOR SELECT ...", ["cursors"]),
  t("Return Code", "return-code", "JOB/step ka result code.", "STEP1.RC", "IF (STEP1.RC >= 8) THEN", ["return-codes"]),
  t("Dataset", "dataset", "Mainframe file ka naam.", "DSN=data.set.name", "DSN=USER.BANK.DATA", ["datasets"]),
  t("PDS", "pds", "Partitioned Data Set — members wali library.", "DSN=USER.COBOL(BANK01)", "DSN=USER.COBOL(BANK01)", ["datasets"]),
];

export const getGlossaryTerm = (slug: string) =>
  glossary.find((g) => g.slug === slug);
