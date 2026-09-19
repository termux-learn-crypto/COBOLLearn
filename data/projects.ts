import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "student-management",
    slug: "student-management",
    title: "Student Management System",
    description:
      "Students ko add karna, unke marks store karna aur report generate karna — beginner project.",
    difficulty: "Beginner",
    concepts: ["MOVE", "DISPLAY", "IF", "PERFORM", "OCCURS"],
    requirements: [
      "Student ka id, naam aur 3 subject marks store karo",
      "Total aur percentage calculate karo",
      "Pass/Fail decision dikhao",
      "Class average report print karo",
    ],
    steps: [
      {
        title: "Step 1 — Data define karo",
        body: "Student record ke liye group item banao jisme id, naam aur marks ho.",
        code: `01 WS-STUDENT.
   05 WS-ID    PIC 9(03).
   05 WS-NAME  PIC X(20).
   05 WS-MARKS PIC 9(03) OCCURS 3 TIMES.`,
      },
      {
        title: "Step 2 — Total nikaalo",
        body: "PERFORM loop se marks ka total calculate karo.",
        code: `MOVE 0 TO WS-TOTAL
PERFORM VARYING WS-I FROM 1 BY 1 UNTIL WS-I > 3
    ADD WS-MARKS(WS-I) TO WS-TOTAL
END-PERFORM`,
      },
      {
        title: "Step 3 — Result decide karo",
        body: "Percentage ke basis pe Pass/Fail print karo.",
        code: `COMPUTE WS-PERCENT = WS-TOTAL / 3
IF WS-PERCENT >= 40
    DISPLAY "RESULT: PASS"
ELSE
    DISPLAY "RESULT: FAIL"
END-IF`,
      },
    ],
    finalCode: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. STUDENT.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-STUDENT.
          05 WS-ID    PIC 9(03).
          05 WS-NAME  PIC X(20).
          05 WS-MARKS PIC 9(03) OCCURS 3 TIMES.
       01 WS-I       PIC 9(01).
       01 WS-TOTAL   PIC 9(05) VALUE 0.
       01 WS-PERCENT PIC 9(03)V99.
       PROCEDURE DIVISION.
           MOVE 101 TO WS-ID
           MOVE "RAHUL" TO WS-NAME
           MOVE 78 TO WS-MARKS(1)
           MOVE 85 TO WS-MARKS(2)
           MOVE 66 TO WS-MARKS(3)
           PERFORM VARYING WS-I FROM 1 BY 1 UNTIL WS-I > 3
               ADD WS-MARKS(WS-I) TO WS-TOTAL
           END-PERFORM
           COMPUTE WS-PERCENT = WS-TOTAL / 3
           DISPLAY "STUDENT: " WS-NAME
           DISPLAY "TOTAL  : " WS-TOTAL
           DISPLAY "PERCENT: " WS-PERCENT
           IF WS-PERCENT >= 40
               DISPLAY "RESULT : PASS"
           ELSE
               DISPLAY "RESULT : FAIL"
           END-IF
           STOP RUN.`,
    expectedOutput:
      "STUDENT: RAHUL\nTOTAL  : 00229\nPERCENT: 076.33\nRESULT : PASS",
  },
  {
    id: "employee-management",
    slug: "employee-management",
    title: "Employee Management System",
    description:
      "Employee salary calculate karna, HRA/DA nikalna aur salary report banana.",
    difficulty: "Beginner+",
    concepts: ["COMPUTE", "IF", "EVALUATE", "Group items"],
    requirements: [
      "Employee ka basic salary input lo",
      "HRA = 20%, DA = 15%, PF = 12% calculate karo",
      "Net salary nikaalo",
      "Salary slab ke hisaab se tax dikhao",
    ],
    steps: [
      {
        title: "Step 1 — Salary fields define karo",
        body: "Basic, HRA, DA, PF, gross aur net ke fields banao.",
        code: `01 WS-EMP.
   05 WS-ID     PIC 9(05).
   05 WS-NAME   PIC X(30).
   05 WS-BASIC  PIC 9(07)V99.
   05 WS-HRA    PIC 9(07)V99.
   05 WS-DA     PIC 9(07)V99.
   05 WS-PF     PIC 9(07)V99.
   05 WS-GROSS  PIC 9(08)V99.
   05 WS-NET    PIC 9(08)V99.`,
      },
      {
        title: "Step 2 — Calculations",
        body: "COMPUTE se allowances aur deductions nikaalo.",
        code: `COMPUTE WS-HRA   = WS-BASIC * 0.20
COMPUTE WS-DA    = WS-BASIC * 0.15
COMPUTE WS-PF    = WS-BASIC * 0.12
COMPUTE WS-GROSS = WS-BASIC + WS-HRA + WS-DA
COMPUTE WS-NET   = WS-GROSS - WS-PF`,
      },
    ],
    finalCode: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. EMPLOYEE.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-EMP.
          05 WS-ID     PIC 9(05).
          05 WS-NAME   PIC X(30).
          05 WS-BASIC  PIC 9(07)V99.
          05 WS-HRA    PIC 9(07)V99.
          05 WS-DA     PIC 9(07)V99.
          05 WS-PF     PIC 9(07)V99.
          05 WS-GROSS  PIC 9(08)V99.
          05 WS-NET    PIC 9(08)V99.
       PROCEDURE DIVISION.
           MOVE 1001 TO WS-ID
           MOVE "AMIT SHARMA" TO WS-NAME
           MOVE 50000 TO WS-BASIC
           COMPUTE WS-HRA   = WS-BASIC * 0.20
           COMPUTE WS-DA    = WS-BASIC * 0.15
           COMPUTE WS-PF    = WS-BASIC * 0.12
           COMPUTE WS-GROSS = WS-BASIC + WS-HRA + WS-DA
           COMPUTE WS-NET   = WS-GROSS - WS-PF
           DISPLAY "EMPLOYEE: " WS-NAME
           DISPLAY "BASIC   : " WS-BASIC
           DISPLAY "HRA     : " WS-HRA
           DISPLAY "DA      : " WS-DA
           DISPLAY "GROSS   : " WS-GROSS
           DISPLAY "PF      : " WS-PF
           DISPLAY "NET PAY : " WS-NET
           STOP RUN.`,
    expectedOutput:
      "EMPLOYEE: AMIT SHARMA\nBASIC   : 5000000\nHRA     : 1000000\nDA      : 0750000\nGROSS   : 6750000\nPF      : 0600000\nNET PAY : 6150000",
  },
  {
    id: "bank-account-management",
    slug: "bank-account-management",
    title: "Bank Account Management",
    description:
      "Account create, deposit aur withdraw operations menu-based program se implement karo.",
    difficulty: "Intermediate",
    concepts: ["EVALUATE", "PERFORM UNTIL", "IF", "Arithmetic"],
    requirements: [
      "Menu se Deposits/Withdraw/Balance/Exit choose karo",
      "Minimum balance maintain karo (1000)",
      "Insufficient balance handle karo",
      "Har transaction ka statement print karo",
    ],
    steps: [
      {
        title: "Step 1 — Menu loop banao",
        body: "PERFORM UNTIL se menu based loop banao jo Exit tak chale.",
        code: `PERFORM UNTIL WS-CHOICE = 4
    DISPLAY "1.DEPOSIT 2.WITHDRAW 3.BALANCE 4.EXIT"
    ACCEPT WS-CHOICE
    EVALUATE WS-CHOICE
        WHEN 1 PERFORM DEPOSIT-PARA
        WHEN 2 PERFORM WITHDRAW-PARA
        WHEN 3 PERFORM BALANCE-PARA
        WHEN OTHER DISPLAY "INVALID CHOICE"
    END-EVALUATE
END-PERFORM`,
      },
      {
        title: "Step 2 — Withdraw validation",
        body: "Insufficient balance aur minimum balance check karo.",
        code: `WITHDRAW-PARA.
    DISPLAY "ENTER AMOUNT: "
    ACCEPT WS-AMT
    IF WS-AMT > WS-BALANCE - 1000
        DISPLAY "INSUFFICIENT BALANCE / MIN BALANCE BREACH"
    ELSE
        SUBTRACT WS-AMT FROM WS-BALANCE
        DISPLAY "WITHDRAWN. NEW BALANCE: " WS-BALANCE
    END-IF.`,
      },
    ],
    finalCode: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. BANKACCT.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-BALANCE PIC 9(09)V99 VALUE 5000.00.
       01 WS-CHOICE  PIC 9(01).
       01 WS-AMT     PIC 9(09)V99.
       PROCEDURE DIVISION.
       MAIN-PARA.
           PERFORM UNTIL WS-CHOICE = 4
               DISPLAY "1.DEPOSIT 2.WITHDRAW 3.BALANCE 4.EXIT"
               ACCEPT WS-CHOICE
               EVALUATE WS-CHOICE
                   WHEN 1 PERFORM DEPOSIT-PARA
                   WHEN 2 PERFORM WITHDRAW-PARA
                   WHEN 3 PERFORM BALANCE-PARA
                   WHEN 4 DISPLAY "BYE"
                   WHEN OTHER DISPLAY "INVALID CHOICE"
               END-EVALUATE
           END-PERFORM
           STOP RUN.
       DEPOSIT-PARA.
           DISPLAY "ENTER AMOUNT: "
           ACCEPT WS-AMT
           ADD WS-AMT TO WS-BALANCE
           DISPLAY "NEW BALANCE: " WS-BALANCE.
       WITHDRAW-PARA.
           DISPLAY "ENTER AMOUNT: "
           ACCEPT WS-AMT
           IF WS-AMT > WS-BALANCE - 1000
               DISPLAY "INSUFFICIENT BALANCE / MIN BALANCE BREACH"
           ELSE
               SUBTRACT WS-AMT FROM WS-BALANCE
               DISPLAY "NEW BALANCE: " WS-BALANCE
           END-IF.
       BALANCE-PARA.
           DISPLAY "CURRENT BALANCE: " WS-BALANCE.`,
    expectedOutput: "Menu loop jo user ke choice ke hisaab se balance update karega.",
  },
  {
    id: "atm-transaction-system",
    slug: "atm-transaction-system",
    title: "ATM Transaction System",
    description:
      "PIN validation, withdrawal limits aur transaction logging ke saath ATM simulation.",
    difficulty: "Intermediate",
    concepts: ["IF", "PERFORM", "File handling", "Validation"],
    requirements: [
      "3 attempts me PIN validate karo",
      "Per transaction limit 20000",
      "Daily limit 50000",
      "Transaction file me log karo",
    ],
    steps: [
      {
        title: "Step 1 — PIN validation",
        body: "Teen attempts ka loop banao jo sahi PIN pe ruke.",
        code: `PERFORM VARYING WS-ATTEMPT FROM 1 BY 1
        UNTIL WS-ATTEMPT > 3 OR WS-PIN-OK = "Y"
    ACCEPT WS-PIN
    IF WS-PIN = WS-STORED-PIN
        MOVE "Y" TO WS-PIN-OK
    ELSE
        DISPLAY "WRONG PIN"
    END-IF
END-PERFORM`,
      },
      {
        title: "Step 2 — Limits check",
        body: "Transaction aur daily limit validate karo.",
        code: `IF WS-AMT > 20000
    DISPLAY "PER TXN LIMIT EXCEEDED"
ELSE IF WS-DAILY + WS-AMT > 50000
    DISPLAY "DAILY LIMIT EXCEEDED"
ELSE
    SUBTRACT WS-AMT FROM WS-BALANCE
END-IF`,
      },
    ],
    finalCode: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. ATMSYS.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-STORED-PIN PIC 9(04) VALUE 1234.
       01 WS-PIN        PIC 9(04).
       01 WS-PIN-OK     PIC X(01) VALUE "N".
       01 WS-ATTEMPT    PIC 9(01).
       01 WS-BALANCE    PIC 9(09)V99 VALUE 75000.00.
       01 WS-DAILY      PIC 9(09)V99 VALUE 0.
       01 WS-AMT        PIC 9(09)V99.
       PROCEDURE DIVISION.
           PERFORM VARYING WS-ATTEMPT FROM 1 BY 1
                   UNTIL WS-ATTEMPT > 3 OR WS-PIN-OK = "Y"
               DISPLAY "ENTER PIN: "
               ACCEPT WS-PIN
               IF WS-PIN = WS-STORED-PIN
                   MOVE "Y" TO WS-PIN-OK
               ELSE
                   DISPLAY "WRONG PIN, ATTEMPT " WS-ATTEMPT
               END-IF
           END-PERFORM
           IF WS-PIN-OK = "Y"
               DISPLAY "ENTER AMOUNT: "
               ACCEPT WS-AMT
               IF WS-AMT > 20000
                   DISPLAY "PER TXN LIMIT EXCEEDED"
               ELSE
                   IF WS-DAILY + WS-AMT > 50000
                       DISPLAY "DAILY LIMIT EXCEEDED"
                   ELSE
                       SUBTRACT WS-AMT FROM WS-BALANCE
                       ADD WS-AMT TO WS-DAILY
                       DISPLAY "DISPENSING " WS-AMT
                       DISPLAY "BALANCE: " WS-BALANCE
                   END-IF
               END-IF
           ELSE
               DISPLAY "CARD BLOCKED"
           END-IF
           STOP RUN.`,
    expectedOutput: "PIN sahi hone pe cash dispense aur balance display.",
  },
  {
    id: "loan-management-system",
    slug: "loan-management-system",
    title: "Loan Management System",
    description:
      "Loan eligibility, EMI calculation aur amortization schedule generate karo.",
    difficulty: "Intermediate+",
    concepts: ["COMPUTE", "PERFORM", "Intrinsic functions"],
    requirements: [
      "Loan eligibility income ke hisaab se decide karo",
      "EMI formula se EMI calculate karo",
      "12 mahine ka schedule print karo",
      "Total interest calculate karo",
    ],
    steps: [
      {
        title: "Step 1 — EMI calculate karo",
        body: "EMI = P * r * (1+r)^n / ((1+r)^n - 1).",
        code: `COMPUTE WS-MONTHLY-RATE = WS-RATE / 12 / 100
COMPUTE WS-POW = (1 + WS-MONTHLY-RATE) ** WS-MONTHS
COMPUTE WS-EMI = WS-LOAN * WS-MONTHLY-RATE *
                 WS-POW / (WS-POW - 1)`,
      },
      {
        title: "Step 2 — Schedule print karo",
        body: "PERFORM loop se har month ka interest aur principal nikaalo.",
        code: `PERFORM VARYING WS-M FROM 1 BY 1 UNTIL WS-M > WS-MONTHS
    COMPUTE WS-INT = WS-PRINCIPAL * WS-MONTHLY-RATE
    COMPUTE WS-PRIN-PART = WS-EMI - WS-INT
    SUBTRACT WS-PRIN-PART FROM WS-PRINCIPAL
    DISPLAY WS-M " INT:" WS-INT " PRIN:" WS-PRIN-PART
END-PERFORM`,
      },
    ],
    finalCode: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. LOANSYS.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-LOAN       PIC 9(09)V99.
       01 WS-RATE       PIC 9(03)V99.
       01 WS-MONTHS     PIC 9(03).
       01 WS-M-RATE     PIC 9(03)V99.
       01 WS-EMI        PIC 9(09)V99.
       01 WS-PRINCIPAL  PIC 9(09)V99.
       01 WS-INT        PIC 9(09)V99.
       01 WS-PRIN-PART  PIC 9(09)V99.
       01 WS-M          PIC 9(03).
       01 WS-POW        PIC 9(09)V99.
       PROCEDURE DIVISION.
           MOVE 500000 TO WS-LOAN
           MOVE 9.50   TO WS-RATE
           MOVE 12     TO WS-MONTHS
           COMPUTE WS-M-RATE = WS-RATE / 12 / 100
           COMPUTE WS-POW = (1 + WS-M-RATE) ** WS-MONTHS
           COMPUTE WS-EMI = WS-LOAN * WS-M-RATE *
                            WS-POW / (WS-POW - 1)
           DISPLAY "EMI: " WS-EMI
           MOVE WS-LOAN TO WS-PRINCIPAL
           PERFORM VARYING WS-M FROM 1 BY 1 UNTIL WS-M > WS-MONTHS
               COMPUTE WS-INT = WS-PRINCIPAL * WS-M-RATE
               COMPUTE WS-PRIN-PART = WS-EMI - WS-INT
               SUBTRACT WS-PRIN-PART FROM WS-PRINCIPAL
               DISPLAY "MONTH " WS-M
                       " INTEREST " WS-INT
                       " PRINCIPAL " WS-PRIN-PART
           END-PERFORM
           STOP RUN.`,
    expectedOutput: "EMI ke saath 12 mahine ka amortization schedule.",
  },
  {
    id: "banking-core-system",
    slug: "banking-core-system",
    title: "Final Project — Banking Core System",
    description:
      "Customer, account aur transaction management ka complete banking system — capstone project.",
    difficulty: "Advanced",
    concepts: ["EVALUATE", "PERFORM", "OCCURS", "IF", "Validation", "Reports"],
    requirements: [
      "Customer create/search/update/delete",
      "Account open/deposit/withdraw/balance",
      "Credit/Debit/Transfer transactions",
      "Minimum balance aur transaction validation",
      "Reports: customer, account aur transaction",
    ],
    steps: [
      {
        title: "Step 1 — Customer aur Account structures",
        body: "Customers aur accounts ke tables (OCCURS) banao.",
        code: `01 WS-CUSTOMER-TABLE.
   05 WS-CUSTOMER OCCURS 50 TIMES.
      10 WS-CUST-ID    PIC 9(05).
      10 WS-CUST-NAME  PIC X(30).
      10 WS-CUST-COUNT PIC 9(02).
01 WS-ACCOUNT-TABLE.
   05 WS-ACCOUNT OCCURS 100 TIMES.
      10 WS-ACCT-NO    PIC 9(09).
      10 WS-CUST-REF   PIC 9(05).
      10 WS-ACCT-BAL   PIC S9(11)V99.`,
      },
      {
        title: "Step 2 — Transaction validation",
        body: "Deposit/withdraw me amount aur minimum balance validate karo.",
        code: `DEPOSIT-PARA.
    DISPLAY "ACCOUNT NO: "
    ACCEPT WS-ACCT-NO
    PERFORM FIND-ACCOUNT
    IF WS-FOUND = "N"
        DISPLAY "INVALID ACCOUNT"
    ELSE
        DISPLAY "AMOUNT: "
        ACCEPT WS-AMT
        ADD WS-AMT TO WS-ACCT-BAL(WS-ACCT-IDX)
        DISPLAY "NEW BALANCE: " WS-ACCT-BAL(WS-ACCT-IDX)
    END-IF.`,
      },
      {
        title: "Step 3 — Transfer",
        body: "Ek account se dusre me amount transfer karo — atomic validation ke saath.",
        code: `TRANSFER-PARA.
    DISPLAY "FROM ACCOUNT: " ACCEPT WS-FROM
    PERFORM FIND-FROM
    DISPLAY "TO ACCOUNT: " ACCEPT WS-TO
    PERFORM FIND-TO
    DISPLAY "AMOUNT: " ACCEPT WS-AMT
    IF WS-AMT <= WS-ACCT-BAL(WS-FROM-IDX) - 1000
        SUBTRACT WS-AMT FROM WS-ACCT-BAL(WS-FROM-IDX)
        ADD WS-AMT TO WS-ACCT-BAL(WS-TO-IDX)
        DISPLAY "TRANSFER SUCCESSFUL"
    ELSE
        DISPLAY "INSUFFICIENT BALANCE"
    END-IF.`,
      },
      {
        title: "Step 4 — Reports",
        body: "Customers, accounts aur transactions ki report print karo.",
        code: `CUSTOMER-REPORT.
    DISPLAY "===== CUSTOMER REPORT ====="
    PERFORM VARYING WS-I FROM 1 BY 1 UNTIL WS-I > WS-CUST-COUNT
        DISPLAY WS-CUST-ID(WS-I) " " WS-CUST-NAME(WS-I)
    END-PERFORM.`,
      },
    ],
    finalCode: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. BANKCORE.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-CUSTOMER-TABLE.
          05 WS-CUSTOMER OCCURS 50 TIMES.
             10 WS-CUST-ID    PIC 9(05).
             10 WS-CUST-NAME  PIC X(30).
       01 WS-ACCOUNT-TABLE.
          05 WS-ACCOUNT OCCURS 100 TIMES.
             10 WS-ACCT-NO    PIC 9(09).
             10 WS-CUST-REF   PIC 9(05).
             10 WS-ACCT-BAL   PIC S9(11)V99.
       01 WS-CUST-COUNT  PIC 9(02) VALUE 0.
       01 WS-ACCT-COUNT  PIC 9(02) VALUE 0.
       01 WS-CHOICE      PIC 9(01).
       01 WS-AMT         PIC 9(11)V99.
       01 WS-I           PIC 9(03).
       01 WS-FOUND       PIC X(01).

       PROCEDURE DIVISION.
       MAIN-PARA.
           MOVE 1 TO WS-CUST-COUNT
           MOVE 101 TO WS-CUST-ID(1)
           MOVE "RAHUL VERMA" TO WS-CUST-NAME(1)
           MOVE 1 TO WS-ACCT-COUNT
           MOVE 100000001 TO WS-ACCT-NO(1)
           MOVE 101 TO WS-CUST-REF(1)
           MOVE 50000.00 TO WS-ACCT-BAL(1)

           PERFORM UNTIL WS-CHOICE = 9
               DISPLAY "1.DEPOSIT 2.WITHDRAW 3.BALANCE 9.EXIT"
               ACCEPT WS-CHOICE
               EVALUATE WS-CHOICE
                   WHEN 1 PERFORM DEPOSIT-PARA
                   WHEN 2 PERFORM WITHDRAW-PARA
                   WHEN 3 PERFORM BALANCE-PARA
                   WHEN 9 DISPLAY "THANK YOU"
                   WHEN OTHER DISPLAY "INVALID CHOICE"
               END-EVALUATE
           END-PERFORM
           STOP RUN.

       DEPOSIT-PARA.
           DISPLAY "ENTER AMOUNT: "
           ACCEPT WS-AMT
           ADD WS-AMT TO WS-ACCT-BAL(1)
           DISPLAY "NEW BALANCE: " WS-ACCT-BAL(1).

       WITHDRAW-PARA.
           DISPLAY "ENTER AMOUNT: "
           ACCEPT WS-AMT
           IF WS-AMT > WS-ACCT-BAL(1) - 1000
               DISPLAY "MIN BALANCE / INSUFFICIENT BALANCE"
           ELSE
               SUBTRACT WS-AMT FROM WS-ACCT-BAL(1)
               DISPLAY "NEW BALANCE: " WS-ACCT-BAL(1)
           END-IF.

       BALANCE-PARA.
           DISPLAY "ACCOUNT " WS-ACCT-NO(1)
           DISPLAY "CUSTOMER " WS-CUST-NAME(1)
           DISPLAY "BALANCE  " WS-ACCT-BAL(1).`,
    expectedOutput:
      "Menu driven banking system jo deposit/withdraw/balance handle karega.",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
