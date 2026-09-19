import { lesson, p, h, syn, code, out, list, tip, note, warn, table } from "../_builder";

export const moveLesson = lesson({
  slug: "move",
  courseId: "beginner",
  title: "MOVE Statement",
  description:
    "MOVE statement ki complete guide — data copy ke rules, alignment, truncation, padding, group move aur real-world usage.",
  objectives: [
    "MOVE statement ka exact syntax aur uske rules samajhna",
    "Numeric vs alphanumeric move ka alignment difference samajhna",
    "Padding aur truncation ke rules master karna",
    "Elementary aur group move ka difference samajhna",
    "Real enterprise code me MOVE ka usage dekhna",
  ],
  blocks: [
    h("Introduction"),
    p(
      "MOVE COBOL ke sabse fundamental statements me se ek hai. Iska kaam ek source data item ki value ko destination data item me copy karna hai. Aap soch sakte ho ki ye assignment operator ka hi COBOL version hai — jaise C me 'x = y' likha jata hai, waise hi COBOL me 'MOVE y TO x' likha jata hai. Lekin dhyan rakho: COBOL me '=' assignment ke liye nahi hota; MOVE hi aapka assignment operator hai. Ye statements itne common hain ki lagbhag har COBOL program me aayenge."
    ),
    p(
      "MOVE ka use teen tarah hota hai: literal copy karna (jaise MOVE 100 TO WS-TOTAL), variable se variable copy karna (jaise MOVE WS-A TO WS-B), aur special constants copy karna (jaise MOVE SPACES TO WS-NAME ya MOVE ZEROS TO WS-TOTAL). Har case me rule same hota hai: source ki value destination me copy hoti hai, aur destination ki purani value overwrite ho jati hai."
    ),
    p(
      "MOVE ki sabse important samajhne wali baat ye hai ki ye *copy* karta hai, move karke delete nahi karta. Matlab source me value waisi hi rehti hai aur destination me uski copy ban jati hai. Aur dusri baat, COBOL me MOVE ke bahut saare rules padding (extra spaces ya zeros bharne) aur truncation (value katna) se judte hain jo har data type ke liye alag hote hain. Yehi rules is topic ko tricky banate hain, aur yehi rules interview questions me sabse zyada pooche jate hain."
    ),
    h("Prerequisites"),
    p(
      "MOVE ko achhe se samajhne ke liye aapko pehle DATA DIVISION, WORKING-STORAGE SECTION, level numbers (01, 05, 77), PICTURE clause (PIC 9, PIC X, PIC S9, PIC V), aur literal vs variable ka difference aana chahiye. PIC clause ke bina MOVE ke padding aur truncation rules ko samajhna mushkil hai, kyunki MOVE ka behavior poori tarah source aur destination ke PICTURE par depend karta hai. Agar aapne abhi tak 'variables', 'pic-clause' aur 'value-clause' lessons nahi padhe hain, to pehle unhe padh lo, phir is lesson par aao."
    ),
    h("Basic Concept"),
    p(
      "MOVE statement ka basic syntax hai: MOVE source TO destination. Source koi literal ho sakta hai (MOVE 100 TO WS-X), koi variable ho sakta hai (MOVE WS-A TO WS-B), ya figurative constant ho sakta hai (MOVE SPACES TO WS-NAME, MOVE ZEROS TO WS-TOTAL). Ek MOVE statement me ek se zyada destinations bhi ho sakte hain: MOVE 0 TO WS-A WS-B WS-C — isse teeno variables zero ho jate hain."
    ),
    h("Syntax"),
    syn(`MOVE identifier-1 TO identifier-2
MOVE literal       TO identifier-2
MOVE figurative-constant TO identifier-2
MOVE source        TO dest-1 dest-2 dest-3`),
    p(
      "MOVE ke result par teen cheezein asar karti hain: source ki category (numeric, alphanumeric, alphabetic), destination ka PICTURE, aur dono ki length. COBOL source aur destination ki categories dekhta hai aur decide karta hai ki kaunsa nipush apply hoga — numeric alignment, ya alphanumeric padding, ya group (bloc-level) copy."
    ),
    table(
      ["Move type", "Alignment", "Padding", "Example"],
      [
        ["Numeric (PIC 9)", "Right aligned", "Zeros aage", "7 → 9(05) → 00007"],
        ["Alphanumeric (PIC X)", "Left aligned", "Spaces baad", "\"HI\" → X(05) → HI   "],
        ["Numeric edited", "Per picture symbols", "Zeros/suppress", "1234 → ZZZ9 → 1234"],
        ["Group move", "Byte-by-byte", "As-is copy", "record copy"],
      ]
    ),
    note(
      "Padding aur truncation rules ko yaad rakhne ka sabse easy tarika: alphanumeric left-align hota hai (spaces se pad karta hai), numeric right-align hota hai (zeros se pad karta hai). Ye ek line me yaad ho jata hai."
    ),
    h("Alphanumeric Move"),
    p(
      "Alphanumeric move tab hota hai jab dono items PIC X (ya alphabetic) category ke hon, ya dono me se koi ek non-numeric ho. Is move me source ko left-aligned kiya jata hai — source ka pehla character destination ke pehle byte par jaata hai, aur agar source chhota hai to destination ki bachi hui jagah spaces se bhar jati hai."
    ),
    syn(`01 WS-SRC PIC X(05) VALUE "HELLO".
01 WS-DST PIC X(10).
MOVE WS-SRC TO WS-DST
*> WS-DST = "HELLO     " (HELLO + 5 spaces)`),
    p(
      "Agar destination source se chhota ho, to reverse hota hai: source ki value ka sirf utna hissa copy hota hai jitna destination me fit hota hai, aur baaki ka data *truncate* (kat) jata hai. Matlab 'WELCOME' ko PIC X(03) me move karne par sirf 'WEL' aayega. Ye silent truncation hai — koi error nahi aata, isliye production me hamesha buffer sizes match karne par dhyan diya jata hai."
    ),
    h("Numeric Move"),
    p(
      "Numeric move me source ko right-aligned karke copy kiya jata hai. Matlab source ki sabse right wali digit destination ki sabse right wali digit position par jaati hai, aur aage ki bachi hui jagah zeros se pad hoti hai. Ye alphanumeric move se bilkul ulta behavior hai, isliye bahut se beginners confuse ho jate hain."
    ),
    syn(`01 WS-NUM PIC 9(03) VALUE 7.
01 WS-DST PIC 9(05).
MOVE WS-NUM TO WS-DST
*> WS-DST = "00007"  (right-aligned, aage 4 zeros)`),
    p(
      "Numeric move me decimal point (V) bhi respect hota hai. Cobol decimal alignment karta hai — source ka implied decimal point destination ke decimal point ke saath align karta hai. Agar source PIC 9(03)V99 hai aur destination PIC 9(05)V99 hai, to values sahi decimal position par align hongi. Agar alag-alag decimal positions hain, to Cobol data ko appropriately scale karta hai."
    ),
    h("Group Move"),
    p(
      "Jab aap ek group item (01 level wala record) ko doosre group me move karte ho, to use group move kehte hain. Group move me source ke saare bytes character-by-character destination me copy hote hain — koi alignment ya padding rule apply nahi hota. Isliye group move me often paired NULL-style layout data exchange hota hai: ek group ko ek buffer me copy karo, file me likho, aur phir read karke wapas copy karo."
    ),
    syn(`01 WS-EMP-GROUP.
    05 WS-EMP-NAME PIC X(20).
    05 WS-EMP-SAL  PIC 9(07)V99.
01 WS-EMP-BUFFER PIC X(30).
MOVE WS-EMP-GROUP TO WS-EMP-BUFFER
MOVE WS-EMP-BUFFER TO WS-EMP-GROUP`),
    warn(
      "Group move me numeric values bhi byte-by-byte copy hoti hain — matlab alignment rules apply nahi hote. Agar do groups ki layout alag hai, to silent data corruption ho sakti hai. Hamesha do group items ki layout match honi chahiye."
    ),
    h("MOVE SPACES aur MOVE ZEROS"),
    p(
      "MOVE SPACES TO field ka matlab field ke saare bytes ko space se bhar dena. MOVE ZEROS ka matlab saare digits ko zero karna. Ye dono figurative constants bait-ke reminder me bohat use hote hain: ek report line banane se pehle MOVE SPACES TO WS-REPORT-LINE karke line ko clean karte hain, taaki pichhle record ka data na chhupte rahe."
    ),
    p(
      "Iske alawa HIGH-VALUES aur LOW-VALUES bhi hota hai — file processing me end-of-file markers ke liye. Sort merge me HIGH-VALUES se bohot kaam hota hai. MOVE ALL '*' TO WS-LINE se aap poori line ko stars se bhar sakte ho — ye report separators ke liye use hota hai."
    ),
    h("Basic Examples"),
    p("Ab hum practical examples dekhte hain. Har example me problem, code, explanation aur output diya gaya hai."),
    code(`       IDENTIFICATION DIVISION.
       PROGRAM-ID. MOVEBASIC.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-NAME PIC X(10) VALUE "COBOL".
       01 WS-CITY PIC X(10).
       01 WS-AGE  PIC 9(03) VALUE 25.
       01 WS-TEMP PIC 9(05).
       PROCEDURE DIVISION.
           MOVE WS-NAME TO WS-CITY
           MOVE WS-AGE  TO WS-TEMP
           DISPLAY "CITY: [" WS-CITY "]"
           DISPLAY "TEMP: [" WS-TEMP "]"
           STOP RUN.`, "Example 1: Variable se variable copy — alphanumeric + numeric"),
    out(`CITY: [COBOL     ]
TEMP: [00025]`, "Output 1"),
    p(
      "Is example me WS-NAME se WS-CITY me alphanumeric move hua — left aligned, bachi jagah spaces se bhar gayi (isliye COBOL ke baad 5 spaces dikhte hain). WS-AGE se WS-TEMP me numeric move hua — 25 ko PIC 9(05) ke 5-digit field me '00025' bana, kyunki numeric move right-align hota hai aur aage zeros pad hoti hain."
    ),
    code(`       IDENTIFICATION DIVISION.
       PROGRAM-ID. MOVETRUNC.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-SMALL PIC X(03).
       01 WS-TINY  PIC 9(02).
       PROCEDURE DIVISION.
           MOVE "WELCOME" TO WS-SMALL
           DISPLAY "SMALL: [" WS-SMALL "]"
           MOVE 9876 TO WS-TINY
           DISPLAY "TINY : [" WS-TINY "]"
           STOP RUN.`, "Example 2: Truncation — destination chhota hone par"),
    out(`SMALL: [WEL]
TINY : [76]`, "Output 2"),
    p(
      "Yahan alphanumeric truncation me 'WELCOME' ka sirf pehla 3-char hissa 'WEL' bacha, baaki 'COME' kat gaya. Numeric truncation me 9876 ko PIC 9(02) me move karne par COBOL right-aligned karta hai, isliye right ke 2 digits '76' destination me aate hain aur aage ke '98' kat jaate hain. Ye behaviour COBOL ka standard hai aur interviews me isi tarah ke output-ka-sawaal puche jaate hain."
    ),
    code(`       IDENTIFICATION DIVISION.
       PROGRAM-ID. MOVELIT.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-MSG PIC X(15).
       01 WS-CNT PIC 9(04).
       PROCEDURE DIVISION.
           MOVE "HELLO" TO WS-MSG
           MOVE 42 TO WS-CNT
           DISPLAY "[" WS-MSG "]"
           DISPLAY "[" WS-CNT "]"
           STOP RUN.`, "Example 3: Literal move — alphanumeric literal + numeric literal"),
    out(`[HELLO          ]
[0042]`, "Output 3"),
    p(
      "Literal move bhi same rules follow karta hai. 'HELLO' (5 chars) PIC X(15) me left-aligned hokar bachi 10 jagah spaces se bhari. Numeric literal 42 PIC 9(04) me right-aligned hokar '0042' bana. Iske conclusion: literal ho ya variable, move ke rules wahi rehte hain — category aur length decide karte hain."
    ),
    h("Line-by-Line Explanation"),
    p("Ab ek program ko line-by-line samjhte hain taaki har statement ka role clear ho."),
    code(`       IDENTIFICATION DIVISION.
       PROGRAM-ID. LINEMOVE.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-A       PIC X(05) VALUE "ABCDE".
       01 WS-B       PIC X(05).
       01 WS-N       PIC 9(03) VALUE 5.
       01 WS-M       PIC 9(03).
       PROCEDURE DIVISION.
           MOVE WS-A TO WS-B
           MOVE WS-N TO WS-M
           DISPLAY WS-B " | " WS-M
           STOP RUN.`, "Line-by-line: Move demo"),
    out(`ABCDE | 005`, "Output"),
    ...list([
      "IDENTIFICATION DIVISION aur PROGRAM-ID: program ki pehchan, required but yahan no logic.",
      "DATA DIVISION / WORKING-STORAGE SECTION: saare variables yahan declare hote hain.",
      "01 WS-A PIC X(05) VALUE \"ABCDE\": 5-character alphanumeric field, starting value ABCDE.",
      "01 WS-B PIC X(05): same size destination, abhi empty hai (spaces se initialized).",
      "01 WS-N PIC 9(03) VALUE 5: 3-digit numeric field with value 005 (padded).",
      "01 WS-M PIC 9(03): 3-digit numeric destination.",
      "MOVE WS-A TO WS-B: alphanumeric copy — same length, isliye ABCDE seedha copy hua.",
      "MOVE WS-N TO WS-M: numeric copy — 005 ko 005 hi copy kiya (same size, no padding change).",
      "DISPLAY WS-B \" | \" WS-M: output line print karta hai — alphabetic value aur numeric value column delimiter ke saath.",
      "STOP RUN: program ko terminate karta hai aur control OS ko wapas deta hai.",
    ], true),
    h("Intermediate Example"),
    p(
      "Ab ek practical intermediate example: kisi customer ka naam aur balance ka record mera working storage me hai, aur hume usse alag fields me set karke DISPLAY karna hai. Isme MOVE ke alag-alag types combine honge."
    ),
    code(`       IDENTIFICATION DIVISION.
       PROGRAM-ID. MOVECUST.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-CUST-NAME PIC X(25).
       01 WS-BALANCE   PIC 9(07)V99.
       01 WS-ACTIVE    PIC X(01).
       01 WS-REPORT-LINE.
          05 WS-R-NAME PIC X(25).
          05 FILLER    PIC X(02) VALUE SPACES.
          05 WS-R-BAL  PIC Z(6)9.99.
       PROCEDURE DIVISION.
           MOVE "RAM KUMAR" TO WS-CUST-NAME
           MOVE 12500.50   TO WS-BALANCE
           MOVE "Y"        TO WS-ACTIVE
           MOVE WS-CUST-NAME TO WS-R-NAME
           MOVE WS-BALANCE   TO WS-R-BAL
           IF WS-ACTIVE = "Y"
              DISPLAY WS-REPORT-LINE
           END-IF
           STOP RUN.`, "Intermediate: Customer record assembly"),
    out(`RAM KUMAR                    12500.50`, "Output"),
    p(
      "Is example me MOVE ka upyog har type ke data bharne ke liye hua. Alphanumeric literal (name), numeric literal with decimals (balance), single-char flag (active) teeno MOVE ki madad se WS fields me daale gaye. Phir unhe report line ke subfields (group move ke through) me copy kiya — edited picture Z(6)9.99 se balance '12500.50' aise print hota hai bina leading zeros ke."
    ),
    h("Advanced Example"),
    p(
      "Advanced example me hum do-paas processing ka pattern dikhate hain: ek transaction amount ko balance me add karke, aur use report field me formatted print karna. Isme MOVE ko COMPUTE aur edited pictures ke saath jodte hain."
    ),
    code(`       IDENTIFICATION DIVISION.
       PROGRAM-ID. ADVPAYROLL.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-GROSS   PIC 9(05)V99 VALUE 50000.00.
       01 WS-TAX     PIC 9(04)V99.
       01 WS-NET     PIC 9(05)V99.
       01 WS-PRINT-GROSS PIC ZZZ,ZZ9.99.
       01 WS-PRINT-NET   PIC ZZZ,ZZ9.99.
       PROCEDURE DIVISION.
           COMPUTE WS-TAX = WS-GROSS * 0.20
           COMPUTE WS-NET = WS-GROSS - WS-TAX
           MOVE WS-GROSS TO WS-PRINT-GROSS
           MOVE WS-NET   TO WS-PRINT-NET
           DISPLAY "GROSS: " WS-PRINT-GROSS
           DISPLAY "TAX  : " WS-PRINT-NET
           DISPLAY "NET  : " WS-PRINT-NET
           STOP RUN.`, "Advanced: Payroll calculation + formatted MOVE"),
    out(`GROSS: 50,000.00
TAX  : 40,000.00
NET  : 40,000.00`, "Output"),
    p(
      "Yahan COMPUTE se tax aur net calculate hote hain, phir MOVE se raw numeric values ko edited pictures me copy kiya jata hai. Numeric-to-edited move me ZZZ,ZZ9.99 jaisi picture leading zeros ko suppress karke comma aur decimal format deti hai. Isi tarah production reports me currency formatting hoti hai — USD, INR sab edited pictures se hi milte hain."
    ),
    h("Real-World Example"),
    p(
      "Banking domain ek real-world use case lete hain: ATM transaction me balance update karke customer ke mini statement line me formatted balance print karna."
    ),
    code(`       IDENTIFICATION DIVISION.
       PROGRAM-ID. ATMBALANCE.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-ACCOUNT   PIC 9(08) VALUE 10002345.
       01 WS-BALANCE   PIC 9(09)V99 VALUE 250000.50.
       01 WS-WITHDRW   PIC 9(07)V99 VALUE 5000.00.
       01 WS-NEW-BAL   PIC 9(09)V99.
       01 WS-PRINT-BAL PIC $$$,$$$,$$9.99.
       01 WS-STMT-LINE PIC X(40).
       PROCEDURE DIVISION.
           COMPUTE WS-NEW-BAL = WS-BALANCE - WS-WITHDRW
           MOVE WS-NEW-BAL TO WS-PRINT-BAL
           MOVE SPACES     TO WS-STMT-LINE
           STRING "ACCT " WS-ACCOUNT
                  " BAL " WS-PRINT-BAL
             INTO WS-STMT-LINE
           END-STRING
           DISPLAY WS-STMT-LINE
           STOP RUN.`, "Real-world: ATM balance statement line"),
    out(`ACCT 10002345 BAL $245,000.50`, "Output"),
    p(
      "Is production-style example me MOVE ka upyog teeno tarah hua: raw balance calculation result ko edited currency field me move kiya, STRING se report line assembly me MOVE SPACES se buffer clear kiya, aur common pattern dikhaya jo real COBOL-Banking programs me daily chalta hai."
    ),
    h("Internal Understanding"),
    p(
      "Compiler ki nazar se MOVE ka kaam kya hai? MOVE ek data-transfer operation hai jo compile-time pe source aur destination ke data category aur length ko dekhta hai. Is base par compiler decide karta hai ki simple byte copy karni hai (group move), ya alignment/padding logic chahiye (numeric/alphanumeric move)."
    ),
    p(
      "Storage representation asar karti hai. Display (default) format me numeric values ASCII digits ke roop me store hoti hain, isliye MOVE easy hai. Agar USAGE COMP-3 (packed-decimal) ho, to MOVE me packed format conversion hota hai. Numeric-to-alphanumeric move me bhi conversion hota hai. Ise samajhna important hai kyunki iska direct effect performance aur accuracy par padta hai large-scale batch jobs me."
    ),
    warn(
      "MOVE numeric move me compiler overflow ya truncation ki report nahi karta agar size chhota ho — data silently kat jata hai. Production code me isliye validation (size check) explicitly karna padta hai."
    ),
    h("Common Mistakes"),
    ...list([
      "MOVE WS-A TO WS-B me WS-B ko declare karna bhoolna — compiler error 'data item not defined' aayega.",
      "MOVE numeric literal ko PIC X field me karna — numeric value chars ki tarah store hogi, calculations me problem aayegi.",
      "Group move me layouts match nahi karna — silent data corruption hoti hai.",
      "Destination ki capacity se zyada data bhejna aur truncation ko ignore karna.",
      "MOVE SPACES ko numeric field par karna — numeric field me spaces invalid hai.",
      "MOVE ZEROS ko alphanumeric field par karna, taaki report me '0000' print ho.",
      "MOVE statement ke end me period ki jagah kisi aur jagah period dekar paragraph break karna.",
      "MOVED, MOVES jaise galat spellings — COBOL keywords case-insensitive hain par exact 'MOVE' hi likho.",
      "Multiple destination MOVE ke order ko galat samajhna — saare destinations ko same single source value milti hai.",
      "V (implied decimal) wale field ko normal numeric ke saath move karke scale mismatch ko ignore karna.",
    ]),
    h("Edge Cases"),
    p("MOVE ke kuch tricky edge cases bhi hote hain jo beginners ko confuse karte hain:"),
    ...list([
      "Zero-length destinations: COBOL me zero-length data items invalid hain.",
      "RENAMES ke through move — renamed group ka move allowed hai.",
      "88-level condition names ko move nahi kar sakte.",
      "Index (OCCURS ke saath) ko move karte waqt index data items special handling require karte hain.",
      "USAAGE COMP vs DISPLAY move — conversion overhead aur rounding.",
      "Alphanumeric literal with trailing spaces — literal ke trailing spaces compiler waise bhi trim karta hai.",
      "SIGN IS SEPARATE ke saath numeric move — sign alag byte me, species special handling.",
      "MOVE TO 88-LEVEL: allowed nahi; condition names ko value nahi de sakte.",
    ]),
    h("Debugging"),
    p(
      "Debugging ke liye DISPLAY statement sabse common tool hai. MOVE ke baad hamesha value DISPLAY karke check karo. Production me zyada serious issues ke liye interactive debugger (abend-analysis, program trace) use hota hai. Hint: MOVE ke turant baad DISPLAY 'AFTER MOVE' '[' WS-FIELD ']' pattern output me boundary characters ke saath dikhata hai ki actual spaces ya zeros kahan hain."
    ),
    h("Best Practices"),
    ...list([
      "Data item naming me WS- prefix (Working-Storage) use karo taaki scope clear ho.",
      "MOVE se pehle source validate karo — khaas kar ke file se aaya data.",
      "Destination buffer ka size hamesha source se bada ya barabar rakho.",
      "Alphanumeric aur numeric move ko confused mat karo — compiler kuch nahi rokega.",
      "Group move sirf tab karo jab layouts guaranteed match karte hon.",
      "Truncation se bachne ke liye PIC sizes ka review checklist banao.",
      "Production code me MOVE ke baad FILE-STATUS ya validation fields check karo.",
      "Literal ko directly DISPLAY karne ke bajaye pehle working-storage me move karke use karo — isse readability aur maintainability behtar hai.",
      "Edited picture (ZZZ,9.99) se output formatting MOVE se hi karo, manual concatenation se nahi.",
      "MOVE SPACES / MOVE ZEROS default value initialization ke liye use karo, na ki redundant store operations.",
    ]),
    h("Real Enterprise Usage"),
    p(
      "Real COBOL systems me MOVE lagbhag har jagah hota hai. Example flow: JCL se program invoke hota hai → file (VSAM/sequential) READ hoti hai → record ke fields ko WORKING-STORAGE me MOVE kiya jata hai → DB2 query ka result bhi move hota hai → calculations (COMPUTE/ADD) hote hain → results ko report line / output file ke fields me MOVE karte hain → file WRITE. Yeh pattern har banking, insurance, payroll system me repeat hota hai."
    ),
    p(
      "MOVE ka performance bhi matter karta hai. Large batch jobs me hazaaron records process hote hain, isliye unnecessary group moves (jo poore buffer copy karte hain) se bachna chahiye. Compilers modern versions me MOVE operations ko optimize karte hain, par logic aur data layout ko behtar design karna developer ki zimmedari hai."
    ),
    h("Practice Exercises"),
    p("Neeche exercises di gayi hain — pehle khud try karo, phir solutions check karo."),
    ...list([
      "BEGINNER 1: Do alphanumeric variables banake ek literal value MOVE karke DISPLAY karo — ",
      "BEGINNER 2: Ek numeric variable jisme value 123 hai, usse 5-digit field me MOVE karke output dekho — right-aligned 00123 hona chahiye.",
      "BEGINNER 3: MOVE SPACES aur MOVE ZEROS ke sath experiment karo — alphanumeric aur numeric dono par.",
      "INTERMEDIATE 1: Ek customer record (name, age, balance) ko MOVE ki madad se report line fields me set karo.",
      "INTERMEDIATE 2: Two 01-level groups banao (same layout) aur group move karke data copy karo, phir DISPLAY karo.",
      "ADVANCED 1: Payroll-style program — gross, tax, net calculate karke edited pictures me MOVE karke format karo.",
      "ADVANCED 2: ATM scenario — balance me transaction add/subtract karke NEW-BALANCE ko currency format ($$$) me MOVE karo.",
      "DEBUGGING 1: Ek program jo intentional size mismatch se truncation kare — output ke through deficiency identify karo.",
      "DEBUGGING 2: MOVE SPACES ko numeric field par karke dekho — validation kya dikhata hai, fix karke correct code likho.",
    ]),
    h("Interview Questions"),
    ...list([
      "Q: MOVE statement kya karta hai? A: Source ki value destination me copy karta hai; data replace hota hai, source unchanged rehta hai.",
      "Q: Numeric move aur alphanumeric move me kya difference hai? A: Numeric right-align (zeros pad) hota hai, alphanumeric left-align (spaces pad) hota hai.",
      "Q: MOVE TO me multiple destinations kaise kaam karta hai? A: MOVE X TO A B C — teeno me X ki value copy hoti hai.",
      "Q: Group move kya hota hai? A: Byte-by-byte copy of a record; no alignment/padding rules apply.",
      "Q: Truncation kya hai? A: Destination ki length se zyada data source se aaye to excess drop hota hai — silent.",
      "Q: MOVE SPACES TO numeric field ka kya hota hai? A: Invalid data — numeric fields spaces accept nahi karte; runtime error aa sakta hai.",
      "Q: V (implied decimal) wale field me MOVE kaise hota hai? A: Decimal alignment hota hai — source ka decimal point destination ke decimal point ke saath align karta hai.",
      "Q: MOVE aur COMPUTE me kya difference hai? A: MOVE pure copy/data transfer hai; COMPUTE arithmetic evaluation karta hai.",
      "Q: MOVE literal TO multiple destinations ke syntax si rules — multiple TO allowed ya sources? A: Multiple destinations allowed; multiple sources nahi.",
      "Q: Edited picture me MOVE ka output kya hota hai? A: ZZZ,9.99 jaisi edited picture formatting apply karti hai — zero suppression, commas, decimal points.",
    ]),
    h("Glossary"),
    table(
      ["Term", "Meaning"],
      [
        ["MOVE", "Source ki value ko destination me copy karne wala statement"],
        ["Destination", "Jis data item me value copy hoti hai"],
        ["Source", "Jahan se value copy hoti hai (literal/variable/constant)"],
        ["Padding", "Destination ki extra jagah bharne ka process (spaces/zeros)"],
        ["Truncation", "Destination se lambi value ka excess part drop ho jana"],
        ["Redefined", "Ek memory area ko multiple layouts me describe karna"],
        ["Edited picture", "Report/display friendly output format e.g. ZZZ,ZZ9.99"],
        ["Figurative constant", "SPACES, ZEROS, HIGH-VALUES etc. predefined constants"],
        ["Group move", "Poori group record ki byte-by-byte copy"],
        ["Elementary item", "Aisa data item jiske aur koi subordinate na ho"],
      ]
    ),
    h("Summary"),
    ...list([
      "MOVE COBOL ka assignment operator hai — '=' nahi hota.",
      "Syntax: MOVE source TO destination; multiple destinations allowed.",
      "Source literal, variable ya figurative constant ho sakta hai.",
      "Alphanumeric move left-align hota hai, spaces se pad karta hai.",
      "Numeric move right-align hota hai, zeros se pad karta hai.",
      "Destination chhota ho to silent truncation hota hai — error nahi aata.",
      "Group move bytes copy karta hai, alignment rules apply nahi hote.",
      "MOVE SPACES / ZEROS report lines aur counters reset karne ke liye use hota hai.",
      "Edited pictures (ZZZ,ZZ9.99) output formatting provide karte hain.",
      "V (implied decimal) ke saath decimal alignment hota hai.",
      "Numeric edited move me zero suppression hota hai.",
      "MOVE ki category decide karte hain: source type + destination picture.",
      "Production me MOVE ke baad validation zaroori hai.",
      "Multiple destinations me source ki value saare destinations ko milti hai.",
      "MOVE data copy karta hai, source ko delete nahi karta.",
      "USAGE COMP-3 field me move karte waqt packed conversion hoti hai.",
      "Debugging me DISPLAY '[' field ']' se spaces/zeros dikh jaate hain.",
      "MOVE ke baad abend se bachne ke liye size-check best practice hai.",
    ]),
    h("Quiz"),
    p(
      "Neeche diye gaye 10-question quiz ko attempt karo — isse aap apni MOVE ki samajh ka test ho jayega. Har question ke explanation se concepts aur clear honge."
    ),
    h("Next Topic"),
    p(
      "MOVE ke baad agla logical step INITIALIZE statement hai (fundamentals course), jo multiple fields ko ek saath default values dene ke liye hota hai. Wahan se predefine to REDEFINE tak concepts badhte jayenge. Agar tumne MOVE achhe se samajh liya hai, to INITIALIZE tumhe 2 minute me samajh aa jayega."
    ),
  ],
  examples: [
    {
      title: "Move rules",
      code: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. MOVEDEMO.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-SRC PIC X(10) VALUE "COBOL".
       01 WS-DST PIC X(10).
       01 WS-NUM PIC 9(05) VALUE 42.
       PROCEDURE DIVISION.
           MOVE WS-SRC TO WS-DST
           DISPLAY "DST: [" WS-DST "]"
           DISPLAY "NUM: [" WS-NUM "]"
           STOP RUN.`,
      output: "DST: [COBOL     ]\nNUM: [00042]",
    },
  ],
  commonMistakes: [
    "MOVE TO ki jagah MOVE IN likhna",
    "Chhote destination me bada value move karke truncation ignore karna",
  ],
  practice:
    "Do variables banao, ek me value daalo, MOVE se dusre me copy karke dono print karo.",
  prerequisites: [
    "DATA DIVISION aur WORKING-STORAGE SECTION ka basic knowledge",
    "PICTURE clause (PIC 9, PIC X, PIC V) ka samajhna",
    "Level numbers (01, 05) aur elementary vs group item ka difference",
    "Literal (alphanumeric vs numeric) ka concept",
    "VALUE clause se variable initialization ka idea",
  ],
  edgeCases: [
    {
      problem: "Destination chhota ho aur source bada ho",
      explanation:
        "Silent truncation hota hai. Alphanumeric me left ke chars bachte hain, numeric me right ke digits bachte hain. Koi error message nahi aata.",
    },
    {
      problem: "Numeric field par MOVE SPACES",
      explanation:
        "Numeric field me spaces invalid hai. Runtime IBM COBOL me data exception (S0C7) abend ho sakta hai agar aage arithmetic use karein.",
    },
    {
      problem: "Group move me layout mismatch",
      explanation:
        "Bytes as-is copy hote hain, numeric alignment nahi hoti. Do groups ki layout same honi chahiye warna silent corruption.",
    },
    {
      problem: "Value with decimal ko int destination me move",
      explanation:
        "Decimal positions match nahi hone par COBOL scale adjust karta hai, isliye result unexpected ho sakta hai. Explicit V setup karo.",
    },
    {
      problem: "88-level condition name ko move karna",
      explanation: "88-level condition names assignment target nahi hote — us par MOVE invalid hai.",
    },
  ],
  debugging: [
    {
      code: `MOVE "SHIVA" TO WS-NAME
DISPLAY WS-NAME`,
      error: "WS-NAME declare nahi kiya — compiler error: data name not defined",
      reason: "Har data item ko DATA DIVISION me declare karna zaroori hai.",
      fix: "WORKING-STORAGE me 01 WS-NAME PIC X(10) declare karo.",
      correctCode: `DATA DIVISION.
WORKING-STORAGE SECTION.
01 WS-NAME PIC X(10).
PROCEDURE DIVISION.
    MOVE "SHIVA" TO WS-NAME
    DISPLAY WS-NAME
    STOP RUN.`,
    },
    {
      code: `MOVE WS-SALARY TO WS-DISPLAY-SALARY
DISPLAY WS-DISPLAY-SALARY`,
      error: "Wrong output — 1250 ke bajaye 001250 dikh raha hai",
      reason: "Raw numeric field me leading zeros dikh rahe hain; user display format expect kar raha tha.",
      fix: "Edited picture e.g. PIC ZZZ,ZZ9.99 use karke formatted field me MOVE karo.",
      correctCode: `01 WS-DISPLAY-SALARY PIC ZZZ,ZZ9.99.
MOVE WS-SALARY TO WS-DISPLAY-SALARY
DISPLAY WS-DISPLAY-SALARY
*> Output: 1,250.00`,
    },
  ],
  bestPractices: [
    "Naming convention: WS- prefix for working-storage items",
    "MOVE se pehle source validate karo — khaas kar file/DB se aaya data",
    "Destination buffer ka size source se bada ya equal rakho",
    "Group move tab hi karo jab layout match guaranteed ho",
    "Truncation risk waale parse review checklist rakho",
    "Edited pictures se report output MOVE karke format karo",
    "Production code me MOVE ke baad FILE-STATUS / validation check karo",
    "MOVE SPACES / ZEROS se counters aur report lines reset karo",
  ],
  exercises: [
    { level: "beginner", task: "Do alphanumeric variables banayein — ek me literal MOVE karke DISPLAY karein." },
    { level: "beginner", task: "Ek numeric variable (123) ko 5-digit field me MOVE karke '00123' output verify karein." },
    { level: "beginner", task: "MOVE SPACES aur MOVE ZEROS ke effect ko alphanumeric aur numeric dono par test karein." },
    { level: "beginner", task: "Same-size source aur destination me MOVE karke padding vs no-padding observe karein." },
    { level: "beginner", task: "Literal 'WELCOME' ko PIC X(03) me MOVE karke truncation dekh kar output likhein." },
    { level: "intermediate", task: "Customer record (name, age, balance) ko MOVE se report-line fields me set karein." },
    { level: "intermediate", task: "Do same-layout 01 groups bana kar group move se data copy karke DISPLAY karein." },
    { level: "intermediate", task: "MOVE ZEROS se 3 counters ek saath reset karke print karein." },
    { level: "intermediate", task: "V wale field me decimal alignment check karein — source 2 decimal, destination 2 decimal." },
    { level: "intermediate", task: "Edited picture (ZZZ,ZZ9.99) me raw numeric MOVE karke formatted output likhein." },
    { level: "advanced", task: "Payroll scenario — gross, tax (20%), net compute karke formatted MOVE se report banayein." },
    { level: "advanced", task: "ATM scenario — balance me transaction apply karke currency format me print karein." },
    { level: "advanced", task: "Group move + STRING combine karke multi-field statement line assemble karein." },
    { level: "advanced", task: "Hierarchical record (customer -> account -> balance) me MOVE se nested values set karein." },
    { level: "advanced", task: "Numeric edited move me $, zero-suppression aur comma ke adult behavior handle karein." },
    { level: "debugging", task: "Ek intentional truncation program bana kar deficiency identify karke fix karein." },
    { level: "debugging", task: "MOVE SPACES to numeric field — runtime behaviour explain karke correct code likhiye." },
    { level: "debugging", task: "2 layouts mismatch group move — output corruption dekhiye aur fix karein." },
    { level: "debugging", task: "Multiple destination move me accidental TO ki jagah 'TO' miss karke error reproduce karein." },
    { level: "debugging", task: "PIC mismatch (numeric literal to alpha field) — behaviour explain karke fix karein." },
  ],
  interviewQA: [
    {
      question: "MOVE statement kya karta hai?",
      answer:
        "MOVE source ki value ko destination me copy karta hai. Data replace hota hai; source ki value wahi rehti hai. Ye COBOL ka assignment mechanism hai — '=' signature COBOL me nahi hai.",
    },
    {
      question: "Numeric move aur alphanumeric move me kya difference hai?",
      answer:
        "Numeric move right-aligned hota hai aur aage zeros se pad hota hai (7 → 00007). Alphanumeric move left-aligned hota hai aur aage spaces se pad hota hai ('HI' → 'HI    ').",
    },
    {
      question: "Multiple destinations wala MOVE kaise kaam karta hai?",
      answer:
        "MOVE X TO A B C me X ki value teeno destinations me copy hoti hai. Source ek hi hota hai; destinations multiple ho sakte hain.",
    },
    {
      question: "Group move kya hota hai?",
      answer:
        "Group move 01-level ke record ko byte-by-byte copy karta hai, bina alignment/padding rules ke. Ye record buffer copy ke liye use hota hai.",
    },
    {
      question: "Truncation kis condition me hota hai?",
      answer:
        "Jab source destination se lamba ho. Alphanumeric me left ke chars bachte hain; numeric me right ke digits bachte hain. Ye silent hai — koi warning nahi aati.",
    },
    {
      question: "MOVE SPACES ko numeric field par kya hota hai?",
      answer:
        "Numeric field me spaces invalid data hai. Aage arithmetic me data exception (S0C7 abend) ho sakta hai. Numeric fields ko ZEROS, alphanumeric ko SPACES se pad karo.",
    },
    {
      question: "Edited picture me MOVE kya karta hai?",
      answer:
        "Numeric source ko formatted output me convert karta hai — zero suppression (Z), comma aur decimal placement, currency symbols. Ye report printing mein standard hai.",
    },
    {
      question: "V (implied decimal) wale field me MOVE kaise hota hai?",
      answer:
        "Decimal alignment hota hai — source ka V destination ke V ke saath align karta hai. Scale mismatch ke case me COBOL value ko adjust karta hai.",
    },
    {
      question: "MOVE aur COMPUTE me kya difference hai?",
      answer:
        "MOVE pure data transfer hai, koi calculation nahi. COMPUTE arithmetic expression evaluate karta hai aur result store karta hai.",
    },
    {
      question: "Literal move me trailing spaces ka kya hota hai?",
      answer:
        "Alphanumeric literals ke trailing spaces compiler trim kar deta hai — 'ABC   ' clearly 'ABC' ban jaata hai, baad me padding destination ke PICTURE se decide hoti hai.",
    },
  ],
  glossaryTerms: [
    { term: "MOVE", definition: "Source ki value ko destination me copy karne wala COBOL assignment statement." },
    { term: "Destination", definition: "Jis data item me value transfer hoti hai." },
    { term: "Padding", definition: "Destination ki extra jagah bharne ka process — alphanumeric me spaces, numeric me zeros." },
    { term: "Truncation", definition: "Destination se zyada length wale data ka excess part silent drop ho jana." },
    { term: "Group move", definition: "Poori group record ki byte-by-byte copy, bina alignment rules ke." },
    { term: "Edited picture", definition: "Report/display-friendly formatting picture jisse printing me zero suppression, commas aur currency milti hai." },
    { term: "Figurative constant", definition: "SPACES, ZEROS, HIGH-VALUES jaisi predefined COBOL constants." },
    { term: "Elementary item", definition: "Data item jiske koi subordinate na ho." },
    { term: "Redefined", definition: "Memory area ko multiple layouts me describe karna (REDEFINES)." },
    { term: "Decimal alignment", definition: "MOVE numeric me source aur destination ke decimal points ko align karne ka behavior." },
  ],
  summaryPoints: [
    "MOVE COBOL ka assignment operator hai.",
    "Syntax: MOVE source TO destination; multiple destinations allowed.",
    "Alphanumeric move left-align + spaces padding karta hai.",
    "Numeric move right-align + zeros padding karta hai.",
    "Destination chhota ho to silent truncation hoti hai.",
    "Group move bytes copy karta hai, alignment rules apply nahi hote.",
    "MOVE SPACES / ZEROS report lines aur counters reset karne me use hota hai.",
    "Edited pictures se formatted output milta hai.",
    "V (implied decimal) ke saath decimal alignment hota hai.",
    "MOVE data copy karta hai, source ko delete nahi karta.",
    "USAGE COMP-3 field me move packed conversion hoti hai.",
    "Truncation se bachne ke liye size-match validation zaroori hai.",
    "Production me MOVE ke baad validation fields check karo.",
    "Debugging me DISPLAY '[' field ']' se padding dikh jaati hai.",
    "Multiple destinations me source ki same value sabhi ko milti hai.",
  ],
  nextTopic:
    "MOVE ke baad agla logical step INITIALIZE statement hai, jo multiple fields ko ek saath default values dene ka structured tarika hai. Fundamentals course ke 'initialize' lesson se start karo.",
});