// excel-data.js
// Excellent Institute - Ultimate MS Excel Masterclass Syllabus

const excelBookData = [
    {
        id: "chapter1",
        title: "Chapter 1: The Absolute Basics",
        topics: [
            {
                heading: "Finding and Opening MS Excel",
                text: "Look for a dark green icon with a white letter 'X' on your computer screen or Start menu. This is the Microsoft Excel program. Double-click it, and click on 'Blank Workbook' to get a clean, fresh page to work on.",
                shortcut: "Win Key, type 'Excel', press Enter",
                imgSrc: "images/ex-01-open.jpg"
            },
            {
                heading: "What is MS Excel?",
                text: "Think of Excel as a massive, magical digital notebook combined with a calculator. It is filled with thousands of tiny boxes called 'Cells'. Offices use it to create mark sheets, keep track of money, and organize big lists of names.",
                shortcut: "Ctrl + N (To open a new workbook anytime)",
                imgSrc: "images/ex-02-intro.jpg"
            },
            {
                heading: "Rows, Columns, and Cells",
                text: "The page looks like a giant grid. The vertical lines (going up and down) are 'Columns', named with letters like A, B, and C. The horizontal lines (going left and right) are 'Rows', named with numbers 1, 2, and 3. Where they meet is a 'Cell'. The very first box in the top left is called Cell A1.",
                shortcut: "Arrow Keys (To move between cells)",
                imgSrc: "images/ex-03-grid.jpg"
            },
            {
                heading: "How to Save Your Work",
                text: "If the electricity goes out, you will lose your numbers! Click 'File' at the top left, then 'Save As'. Choose a folder on your computer and give your file a simple name like 'My First Spreadsheet'. Save your work every 10 minutes.",
                shortcut: "Ctrl + S",
                imgSrc: "images/ex-04-save.jpg"
            }
        ]
    },
    {
        id: "chapter2",
        title: "Chapter 2: Typing & Moving Data",
        topics: [
            {
                heading: "Typing and Editing inside Cells",
                text: "Click on any box (like A1) and simply start typing a word or a number. When you are done, press the 'Enter' key. If you made a spelling mistake, do not start typing again—it will erase the whole box! Instead, 'double-click' the box to fix just the wrong letter.",
                shortcut: "F2 (To jump inside a cell to fix a spelling mistake)",
                imgSrc: "images/ex-05-typing.jpg"
            },
            {
                heading: "Cut, Copy, and Paste",
                text: "If you need to type the same school fee amount 50 times, do not do it manually! Click the cell and copy it. The box will get a marching dashed line around it. Click an empty box (or highlight 50 empty boxes) and paste it. It saves hours of typing.",
                shortcut: "Ctrl + C (Copy), Ctrl + V (Paste), Ctrl + X (Cut)",
                imgSrc: "images/ex-06-copy.jpg"
            },
            {
                heading: "Undo and Redo (The Time Machine)",
                text: "If you accidentally delete a very important list of student names, do not panic! Use the Undo button. It acts like a time machine to reverse your mistake like it never happened.",
                shortcut: "Ctrl + Z (Undo), Ctrl + Y (Redo)",
                imgSrc: "images/ex-07-undo.jpg"
            },
            {
                heading: "Autofill Magic (The Green Square)",
                text: "This is Excel's best trick. If you type 'Monday' in a cell, click it, and look at the bottom right corner of the box. You will see a tiny green square. Click and drag that square downwards, and Excel will magically type Tuesday, Wednesday, Thursday automatically!",
                shortcut: "Ctrl + D (To copy the cell directly above)",
                imgSrc: "images/ex-08-autofill.jpg"
            }
        ]
    },
    {
        id: "chapter3",
        title: "Chapter 3: Making it Look Professional",
        topics: [
            {
                heading: "Bold, Italic, and Font Colors",
                text: "You can make your main headings stand out so the page is easy to read. Highlight your top row, and use the tools in the Home tab to make the text Bold (thicker), change the text color to white, and use the 'Paint Bucket' to make the background box blue.",
                shortcut: "Ctrl + B (Bold), Ctrl + I (Italic), Ctrl + U (Underline)",
                imgSrc: "images/ex-09-fonts.jpg"
            },
            {
                heading: "Drawing Real Borders",
                text: "When you print an Excel sheet, the grey grid lines you see on the screen usually do NOT print! You will just get floating text on blank paper. To draw real black lines around your boxes, highlight them, click the 'Borders' button in the Home tab, and choose 'All Borders'.",
                shortcut: "Alt + H, B, A (Draws all borders instantly)",
                imgSrc: "images/ex-10-borders.jpg"
            },
            {
                heading: "Merging Cells Together",
                text: "If you have a big main title (like 'Excellent Institute Result Sheet'), it needs to sit in the middle of the page. Highlight several boxes across the top row, and click the 'Merge & Center' button in the Home tab. It melts all the small boxes into one giant title box!",
                shortcut: "Alt + H, M, C (Merge and Center)",
                imgSrc: "images/ex-11-merge.jpg"
            },
            {
                heading: "Money and Number Formats",
                text: "If you type '500', is it money, a date, or just a number? Click the cell, go to the Home tab, and change the format drop-down from 'General' to 'Currency'. Excel will automatically add the ₹ or $ sign and perfect decimal points.",
                shortcut: "Ctrl + Shift + $ (Changes number to Currency)",
                imgSrc: "images/ex-12-money.jpg"
            }
        ]
    },
    {
        id: "chapter4",
        title: "Chapter 4: Basic Math & Formulas",
        topics: [
            {
                heading: "The Golden Rule of Math (The Equals Sign)",
                text: "Whenever you want Excel to do math, you MUST type the Equals sign (=) first. If you type 5+5 in a box, it just stays as text. If you type =5+5 and press Enter, Excel instantly shows the answer 10!",
                shortcut: "Type = to start any formula",
                imgSrc: "images/ex-13-equals.jpg"
            },
            {
                heading: "Adding and Subtracting Cells",
                text: "We do not add numbers; we add the boxes! If cell A1 has 50, and cell B1 has 20, go to an empty box and type =A1+B1. It shows 70. The magic part: If you change A1 to 100 later, the answer updates to 120 all by itself! You can use + for add, - for subtract, * for multiply, and / for divide.",
                shortcut: "Double-click the cell to see the colored formula boxes",
                imgSrc: "images/ex-14-math.jpg"
            },
            {
                heading: "AutoSum (The Lightning Calculator)",
                text: "If you have a long list of grocery prices and need the total, do not add them one by one. Highlight all the prices, plus one empty box at the bottom. Go to the Home tab and click the 'AutoSum' button (it looks like a weird 'E' / Σ). The total appears instantly!",
                shortcut: "Alt + = (Instantly calculates the total of a list)",
                imgSrc: "images/ex-15-autosum.jpg"
            },
            {
                heading: "AVERAGE, MIN, and MAX",
                text: "Excel has built-in smart formulas. Type =AVERAGE(A1:A5) to quickly find the average marks of a student. Type =MAX(A1:A5) to instantly find the highest score in a classroom list, or =MIN to find the lowest score.",
                shortcut: "Shift + F3 (Opens the formula helper menu)",
                imgSrc: "images/ex-16-average.jpg"
            }
        ]
    },
    {
        id: "chapter5",
        title: "Chapter 5: Managing the Grid",
        topics: [
            {
                heading: "Adjusting Column Widths",
                text: "Sometimes you type a long name like 'Pradeep Kumar Behera', and it spills over into the next box or gets cut off. Put your mouse exactly on the line between the letters (like between A and B) at the top of the screen and double-click. The column will automatically stretch to fit perfectly.",
                shortcut: "Alt + H, O, I (Auto-fits the column width)",
                imgSrc: "images/ex-17-width.jpg"
            },
            {
                heading: "Inserting and Deleting Rows",
                text: "If you forgot to add a student in the middle of your list, you don't have to erase everything. Right-click the row number (like the number 5 on the left side) and click 'Insert'. It pushes everything down and gives you a brand new empty row.",
                shortcut: "Ctrl + Shift + + (Insert Row), Ctrl + - (Delete Row)",
                imgSrc: "images/ex-18-insert-row.jpg"
            },
            {
                heading: "Freezing Panes (Locking the Top Row)",
                text: "If you have a list of 500 students, when you scroll down, your top headings (Name, Age, Mark) disappear! Go to the 'View' tab and click 'Freeze Panes', then 'Freeze Top Row'. Now, as you scroll down to student #500, the headings stay glued to the top of your screen.",
                shortcut: "Alt + W, F, F (Freezes panels where your mouse is)",
                imgSrc: "images/ex-19-freeze.jpg"
            },
            {
                heading: "Working with Multiple Sheets",
                text: "One Excel file is called a 'Workbook' because it can hold many pages, called 'Sheets'. Look at the very bottom left corner. You will see 'Sheet1'. Click the little '+' button next to it to create 'Sheet2'. You can double-click the name to rename it to 'Class 8th', 'Class 9th', etc.",
                shortcut: "Shift + F11 (Instantly creates a new blank sheet)",
                imgSrc: "images/ex-20-sheets.jpg"
            }
        ]
    },
    {
        id: "chapter6",
        title: "Chapter 6: Organizing Big Lists",
        topics: [
            {
                heading: "Sorting (A to Z)",
                text: "If your student names are entered randomly, you can fix it. Highlight your whole list, go to the 'Data' tab, and click 'Sort'. Choose to sort by the 'Name' column from A to Z. Excel neatly arranges everyone in perfect alphabetical order.",
                shortcut: "Alt + A, S, A (Sorts A to Z instantly)",
                imgSrc: "images/ex-21-sort.jpg"
            },
            {
                heading: "Filtering (Searching for Specific Data)",
                text: "Imagine you have 1,000 students, and you only want to see the ones taking the 'BCA' course. Highlight your top headings, go to the 'Data' tab, and click 'Filter'. Little arrows appear on your headings. Click the arrow above 'Course', untick everything except 'BCA', and watch the massive list shrink to show exactly what you need!",
                shortcut: "Ctrl + Shift + L (Turns filters on and off)",
                imgSrc: "images/ex-22-filter.jpg"
            },
            {
                heading: "Find and Replace",
                text: "If a teacher spelled 'Surada' wrong 50 times as 'Surda', do not fix them one by one. Use Find and Replace. Tell Excel the wrong word, and tell it the right word. Click 'Replace All', and it fixes the entire workbook in one second.",
                shortcut: "Ctrl + H (Opens the Replace menu)",
                imgSrc: "images/ex-23-find.jpg"
            }
        ]
    },
    {
        id: "chapter7",
        title: "Chapter 7: Data Cleanup & Rules",
        topics: [
            {
                heading: "Removing Duplicates",
                text: "If an office worker accidentally typed the same student's admission form twice, you don't have to hunt for it with your eyes. Highlight the list, go to the 'Data' tab, and click 'Remove Duplicates'. Excel finds the identical entries and deletes them safely.",
                shortcut: "Alt + A, M (Opens the remove duplicates window)",
                imgSrc: "images/ex-24-duplicates.jpg"
            },
            {
                heading: "Creating Drop-Down Lists (Data Validation)",
                text: "To stop people from making spelling mistakes when typing a City, force them to choose from a list! Click a box, go to the 'Data' tab, and click 'Data Validation'. Change 'Any Value' to 'List'. In the box, type 'Surada, Aska, Berhampur'. Now, the box has a clickable drop-down menu!",
                shortcut: "Alt + A, V, V (Opens the Data Validation menu)",
                imgSrc: "images/ex-25-dropdown.jpg"
            },
            {
                heading: "Text to Columns (Splitting Words)",
                text: "If someone typed 'Pradeep Kumar' in one single box, but you need 'Pradeep' in column A and 'Kumar' in column B, highlight the names. Go to 'Data' > 'Text to Columns', choose 'Delimited', and check the box for 'Space'. Excel splits the names perfectly into two boxes!",
                shortcut: "Alt + A, E (Opens the Text to Columns wizard)",
                imgSrc: "images/ex-26-split.jpg"
            },
            {
                heading: "Flash Fill (The AI Typist)",
                text: "Flash Fill is like magic. If column A has first names, and column B has last names, type the full name yourself in column C just once. Press 'Enter', then press the shortcut. Excel watches what you did, understands the pattern, and types out the rest of the 100 names automatically!",
                shortcut: "Ctrl + E (Triggers the Flash Fill magic)",
                imgSrc: "images/ex-27-flashfill.jpg"
            }
        ]
    },
    {
        id: "chapter8",
        title: "Chapter 8: Presenting Data (Charts)",
        topics: [
            {
                heading: "Creating a Bar Graph",
                text: "To compare students' marks easily, highlight their names and scores. Go to the 'Insert' tab and click the 'Column Chart' icon. It builds tall towers for high marks and short towers for low marks, making it very easy for parents to see who is leading the class.",
                shortcut: "Alt + F1 (Instantly creates a Bar Chart on your sheet)",
                imgSrc: "images/ex-28-barchart.jpg"
            },
            {
                heading: "Creating a Pie Chart",
                text: "A pie chart is perfect for showing percentages (like how a business spends its money). Highlight your list of expenses (Rent, Electricity, Salaries) and the numbers. Go to 'Insert' and click the 'Pie Chart' icon. It creates a beautiful circle sliced up like a pizza.",
                shortcut: "Alt + N, Q (Opens the Pie chart menu)",
                imgSrc: "images/ex-29-piechart.jpg"
            }
        ]
    },
    {
        id: "chapter9",
        title: "Chapter 9: Smart Colors (Conditional Formatting)",
        topics: [
            {
                heading: "Highlighting Pass or Fail Automatically",
                text: "You can make Excel color boxes automatically! Highlight a list of exam scores. Go to 'Conditional Formatting' > 'Highlight Cells Rules' > 'Less Than'. Type 30, and choose 'Light Red Fill'. Instantly, every student who failed turns bright red. You don't have to check them manually!",
                shortcut: "Alt + H, L, H (Opens Highlight Rules)",
                imgSrc: "images/ex-30-highlight.jpg"
            },
            {
                heading: "Adding Data Bars",
                text: "Highlight your numbers, go to 'Conditional Formatting', and click 'Data Bars'. Excel will put tiny blue loading bars right inside the cells, behind the numbers. A big number gets a full bar, and a small number gets a tiny bar, turning your table into a mini chart.",
                shortcut: "Alt + H, L, D (Opens Data Bars menu)",
                imgSrc: "images/ex-31-databars.jpg"
            }
        ]
    },
    {
        id: "chapter10",
        title: "Chapter 10: Logic and Counting Formulas",
        topics: [
            {
                heading: "The Magic IF Statement",
                text: "The IF formula lets Excel make smart decisions. Type =IF(A1>50, \"Pass\", \"Fail\"). This tells the computer: 'If the mark in box A1 is greater than 50, print the word Pass. Otherwise, print the word Fail.' It saves teachers hours of manual grading!",
                shortcut: "Type =IF( to begin the logic test",
                imgSrc: "images/ex-32-if.jpg"
            },
            {
                heading: "COUNT vs COUNTA",
                text: "If you want to know how many students took a test, don't count by pointing your finger at the screen! Type =COUNT(A1:A50) to count boxes that have numbers inside. But if you want to count a list of student names (which are words, not numbers), you must use =COUNTA(A1:A50).",
                shortcut: "Type =COUNTA( to count text boxes",
                imgSrc: "images/ex-33-count.jpg"
            }
        ]
    },
    {
        id: "chapter11",
        title: "Chapter 11: Advanced Searching (Lookups)",
        topics: [
            {
                heading: "VLOOKUP (The Digital Phonebook)",
                text: "VLOOKUP is the most famous formula in office jobs. Imagine you have a student's ID number, but you need their Phone Number from a giant list of 5,000 students. You type =VLOOKUP(ID_Number, Table, Column_Number, FALSE). Excel acts like a detective, searches the giant table for that ID, and brings back their phone number instantly!",
                shortcut: "Type =VLOOKUP( to start searching vertically",
                imgSrc: "images/ex-34-vlookup.jpg"
            },
            {
                heading: "XLOOKUP (The Modern Upgrade)",
                text: "If you have a modern version of Excel, XLOOKUP replaces VLOOKUP. It is much easier to use. You just type =XLOOKUP(What_To_Find, Column_To_Look_In, Column_To_Return). It never breaks even if you add new columns to your list later.",
                shortcut: "Type =XLOOKUP( to start the modern search",
                imgSrc: "images/ex-35-xlookup.jpg"
            }
        ]
    },
    {
        id: "chapter12",
        title: "Chapter 12: The Ultimate Summary (Pivot Tables)",
        topics: [
            {
                heading: "What is a Pivot Table?",
                text: "If you have a messy, massive list of 10,000 student fee payments showing different dates, courses, and amounts, it is impossible to read. A Pivot Table automatically squishes that huge data into a tiny, neat summary table showing exactly how much money each course made.",
                shortcut: "Alt + N, V (Instantly creates a new Pivot Table)",
                imgSrc: "images/ex-36-pivot-intro.jpg"
            },
            {
                heading: "Building Your First Pivot Table",
                text: "Click anywhere inside your messy data. Go to the 'Insert' tab and click 'PivotTable'. A new screen opens. On the right side, just drag 'Course Name' into the 'Rows' box, and drag 'Amount Paid' into the 'Values' box. Excel does all the crazy math for you in 3 seconds!",
                shortcut: "Use the mouse to drag and drop fields on the right side",
                imgSrc: "images/ex-37-pivot-build.jpg"
            }
        ]
    },
    {
        id: "chapter13",
        title: "Chapter 13: Printing & Sharing",
        topics: [
            {
                heading: "Fit to One Page",
                text: "Printing wide Excel sheets can be a disaster (half the table prints on a second piece of paper). Go to 'File' > 'Print'. Look at the bottom of the settings and change 'No Scaling' to 'Fit All Columns on One Page'. Also, change the paper Orientation to 'Landscape' (wide).",
                shortcut: "Ctrl + P (Opens the Print menu)",
                imgSrc: "images/ex-38-fitprint.jpg"
            },
            {
                heading: "Setting the Print Area",
                text: "If you have a huge spreadsheet, but you only want to print a tiny table in the corner, highlight just that table. Go to the 'Page Layout' tab, click 'Print Area', and select 'Set Print Area'. Now, Excel will ignore everything else and only print what you highlighted.",
                shortcut: "Alt + P, R, S (Sets the Print Area)",
                imgSrc: "images/ex-39-printarea.jpg"
            },
            {
                heading: "Paste Special (Values Only)",
                text: "If you copy a box that has a formula inside it (like =A1+B1) and paste it somewhere else, it might break and show '#REF!'. To fix this, copy it, right-click where you want to paste, and choose 'Paste as Values' (the clipboard icon with a 123 on it). This drops only the final number, leaving the math behind.",
                shortcut: "Ctrl + Alt + V (Opens Paste Special menu)",
                imgSrc: "images/ex-40-pastespecial.jpg"
            }
        ]
    },
    {
        id: "chapter14",
        title: "Chapter 14: Security & Automation",
        topics: [
            {
                heading: "Protecting a Sheet (Locking Cells)",
                text: "If you spent hours writing hard math formulas, you don't want someone to accidentally delete them! Go to the 'Review' tab and click 'Protect Sheet'. Type a secret password. Now, nobody can click or change the boxes unless they know the password.",
                shortcut: "Alt + R, P, S (Protects the active sheet)",
                imgSrc: "images/ex-41-protect.jpg"
            },
            {
                heading: "Locking the Entire File",
                text: "To stop someone from even opening the Excel file (like an office payroll list), go to 'File' > 'Info' > 'Protect Workbook' > 'Encrypt with Password'. Warning: If you forget the password, all your hard work is locked away forever! Microsoft cannot recover it.",
                shortcut: "Alt + F, I, P, E (Encrypts the file with a password)",
                imgSrc: "images/ex-42-encrypt.jpg"
            },
            {
                heading: "Recording a Basic Macro",
                text: "A Macro is an invisible robot that records your mouse clicks. If you format a table the exact same way every day (make it blue, bold, and draw borders), go to 'View' > 'Macros' > 'Record Macro'. Excel watches you do it once. The next day, you just click 'Play', and the robot does all the formatting for you in one second!",
                shortcut: "Alt + W, M, R (Starts recording a Macro)",
                imgSrc: "images/ex-43-macro.jpg"
            }
        ]
    }
];
