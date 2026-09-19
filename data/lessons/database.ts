import { lesson, p, h, syn, tip, note, warn } from "../_builder";

export const databaseLessons = [
  lesson({
    slug: "database-fundamentals",
    courseId: "database",
    title: "Database Fundamentals",
    description: "Relational database aur SQL ka basic idea.",
    objectives: ["Table, row, column", "Primary key", "COBOL se database ka connection"],
    blocks: [
      p("Relational database me data tables me store hota hai. Banks me customer/account/transaction tables hoti hain."),
      {
        type: "table",
        headers: ["Concept", "Matlab"],
        rows: [
          ["Table", "Rows aur columns ka collection"],
          ["Row", "Ek record"],
          ["Column", "Field/attribute"],
          ["Primary Key", "Har row ka unique identifier"],
        ],
      },
      note("COBOL programs DB2 (mainframe) ya other RDBMS se embedded SQL ke through baat karte hain."),
    ],
    practice: "Bank ke liye 3 tables ke naam aur columns socho.",
  }),

  lesson({
    slug: "db2-introduction",
    courseId: "database",
    title: "DB2 Introduction",
    description: "IBM DB2 aur mainframe database.",
    objectives: ["DB2 kya hai", "Tablespace/database concepts", "DB2 precompile process"],
    blocks: [
      p("DB2 IBM ka relational database hai jo mainframe (z/OS) pe widely use hota hai."),
      {
        type: "list",
        items: [
          "Structured, relational data store",
          "SQL support",
          "High availability aur performance",
          "COBOL programs embedded SQL use karte hain",
        ],
      },
      note("COBOL source me SQL statements ko DB2 precompiler process karta hai build se pehle."),
    ],
    practice: "DB2 aur normal file ke 3 differences likho.",
  }),

  lesson({
    slug: "embedded-sql",
    courseId: "database",
    title: "Embedded SQL",
    description: "COBOL me SQL likhna (EXEC SQL).",
    objectives: ["EXEC SQL ... END-EXEC", "SQLCA", "Host variables"],
    blocks: [
      p("Embedded SQL COBOL ke andar SQL block ki tarah likha jata hai."),
      syn(`EXEC SQL
    SELECT CUST_NAME
    INTO :WS-CUST-NAME
    FROM CUSTOMER
    WHERE CUST_ID = :WS-CUST-ID
END-EXEC.`),
      {
        type: "list",
        items: [
          "Host variables :WS-NAME ki tarah colon se likhte hain",
          "SQLCA (SQL Communication Area) result/status deta hai",
          "SQLCODE 0 = success, 100 = not found, negative = error",
        ],
      },
      warn("EXEC SQL aur END-EXEC ke beech COBOL statement nahi likh sakte."),
    ],
    practice: "Ek SELECT likho jo customer naam host variable me laaye.",
  }),

  lesson({
    slug: "sql-select-insert",
    courseId: "database",
    title: "SQL SELECT and INSERT",
    description: "Data read aur insert karna.",
    objectives: ["SELECT INTO", "INSERT syntax", "WHERE clause"],
    blocks: [
      p("SELECT data padhta hai, INSERT naya record banata hai."),
      syn(`EXEC SQL
    INSERT INTO CUSTOMER (CUST_ID, CUST_NAME, BALANCE)
    VALUES (:WS-ID, :WS-NAME, :WS-BAL)
END-EXEC.

EXEC SQL
    SELECT BALANCE INTO :WS-BAL
    FROM ACCOUNT
    WHERE CUST_ID = :WS-ID
END-EXEC.`),
      note("SELECT INTO sirf ek row return honi chahiye — multiple rows ke liye cursor chahiye."),
    ],
    practice: "Naya customer INSERT karne ka SQL likho.",
  }),

  lesson({
    slug: "sql-update-delete",
    courseId: "database",
    title: "SQL UPDATE and DELETE",
    description: "Data update aur delete karna.",
    objectives: ["UPDATE syntax", "DELETE syntax", "WHERE ke bina danger"],
    blocks: [
      p("UPDATE existing rows ko badalta hai, DELETE rows hatata hai."),
      syn(`EXEC SQL
    UPDATE ACCOUNT
    SET BALANCE = :WS-NEW-BAL
    WHERE ACCT_NO = :WS-ACCT
END-EXEC.

EXEC SQL
    DELETE FROM TRANSACTION
    WHERE TXN_ID = :WS-TXN
END-EXEC.`),
      warn("WHERE bhoolne se saari rows update/delete ho jayengi — production disaster!"),
    ],
    practice: "Balance update karne ka SQL likho.",
  }),

  lesson({
    slug: "commit-rollback",
    courseId: "database",
    title: "COMMIT and ROLLBACK",
    description: "Transaction control.",
    objectives: ["COMMIT ka use", "ROLLBACK ka use", "Unit of work concept"],
    blocks: [
      p("COMMIT changes ko permanent karta hai, ROLLBACK unhe undo kar deta hai."),
      syn(`EXEC SQL UPDATE ... END-EXEC.
IF SQLCODE = 0
    EXEC SQL COMMIT END-EXEC
ELSE
    EXEC SQL ROLLBACK END-EXEC
END-IF.`),
      note("Banking me transfer ek unit of work hota hai — debit aur credit dono ya to ho ya dono rollback."),
    ],
    practice: "Ek transfer ka commit/rollback flow likho.",
  }),

  lesson({
    slug: "cursors",
    courseId: "database",
    title: "Cursors",
    description: "Multiple rows ko process karna.",
    objectives: ["DECLARE CURSOR", "OPEN/FETCH/CLOSE", "Loop through rows"],
    blocks: [
      p("Cursor multiple rows ko ek-ek karke process karne deta hai."),
      syn(`EXEC SQL
    DECLARE CUST-CUR CURSOR FOR
        SELECT CUST_ID, CUST_NAME FROM CUSTOMER
        WHERE STATUS = 'A'
END-EXEC.

EXEC SQL OPEN CUST-CUR END-EXEC.
PERFORM UNTIL WS-EOF = "Y"
    EXEC SQL
        FETCH CUST-CUR INTO :WS-ID, :WS-NAME
    END-EXEC
    IF SQLCODE = 0
        DISPLAY WS-ID " " WS-NAME
    ELSE
        MOVE "Y" TO WS-EOF
    END-IF
END-PERFORM.
EXEC SQL CLOSE CUST-CUR END-EXEC.`),
      tip("Cursor process karne ka order: DECLARE -> OPEN -> FETCH loop -> CLOSE."),
    ],
    practice: "Ek cursor banao jo saare active customers ko fetch kare.",
  }),
];
