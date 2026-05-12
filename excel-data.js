// excel-data.js
// Excellent Institute - Ultimate MS Excel Masterclass Syllabus

const excelBookData = [
    {
        id: "chapter1",
        title: "Chapter 1: The Absolute Basics",
        topics: [
            {
                heading: "Finding and Opening MS Excel",
                text: "Look for a dark green icon with a white letter 'X' on your computer screen. This is Microsoft Excel. Double-click it, and click on 'Blank Workbook'. Think of a 'Workbook' as a fresh, empty notebook ready for your math and lists.",
                shortcut: "Win Key, type 'Excel', press Enter",
                imgSrc: "images/ex-01-open.jpg"
            },
            {
                heading: "What is MS Excel?",
                text: "Imagine a giant graph paper that is also a super-fast calculator. It is filled with thousands of tiny boxes called 'Cells'. We use Excel to create school mark sheets, track pocket money, and organize big lists of names easily.",
                shortcut: "Ctrl + N (To open a new empty notebook anytime)",
                imgSrc: "images/ex-02-intro.jpg"
            },
            {
                heading: "Rows, Columns, and Cells",
                text: "The page looks like a giant grid. The lines going up and down are 'Columns' (named A, B, C). The lines going left to right are 'Rows' (named 1, 2, 3). Where a letter and number meet is a 'Cell'. For example, the very first box at the top left is Cell A1.",
                shortcut: "Arrow Keys (To move your selector between boxes)",
                imgSrc: "images/ex-03-grid.jpg"
            },
            {
                heading: "How to Save Your Work",
                text: "If the computer turns off, you will lose your hard work! Click 'File' at the top left, then 'Save As'. Choose a folder and give it a simple name like '8th Class List'. Make a habit of saving your work every 10 minutes.",
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
                heading: "Typing inside Boxes (Cells)",
                text: "Click on any box (like A1) and start typing your name. Press 'Enter' when you are done. If you make a spelling mistake, do NOT just click and type again—it will erase the whole box! Instead, 'double-click' the box to fix just the wrong letter.",
                shortcut: "F2 (To jump inside a box to fix a spelling mistake)",
                imgSrc: "images/ex-05-typing.jpg"
            },
            {
                heading: "Cut, Copy, and Paste",
                text: "If you need to type the word 'Present' for 50 students, do not type it 50 times! Click the box with 'Present' and Copy it (it will get a marching dashed line around it). Highlight 50 empty boxes and Paste it. It saves hours of typing.",
                shortcut: "Ctrl + C (Copy), Ctrl + V (Paste), Ctrl + X (Cut)",
                imgSrc: "images/ex-06-copy.jpg"
            },
            {
                heading: "Undo and Redo (The Time Machine)",
                text: "If you accidentally press delete and wipe out your whole homework, do not cry! Just use the Undo button. It acts like a time machine to reverse your mistake, bringing everything back exactly how it was.",
                shortcut: "Ctrl + Z (Undo), Ctrl + Y (Redo)",
                imgSrc: "images/ex-07-undo.jpg"
            },
            {
                heading: "Autofill Magic (The Green Square)",
                text: "This is Excel's best magic trick. If you type 'Monday' in a box, click it, and look at the bottom right corner. You will see a tiny green dot. Click and pull that dot downwards. Excel will magically guess the pattern and type Tuesday, Wednesday, Thursday for you!",
                shortcut: "Ctrl + D (To instantly copy what is in the box above)",
                imgSrc: "images/ex-08-autofill.jpg"
            }
        ]
    },
    {
        id: "chapter3",
        title: "Chapter 3: Making it Look Beautiful",
        topics: [
            {
                heading: "Bold, Italic, and Colors",
                text: "You should make your main headings (like Name, Roll No, Marks) stand out. Highlight the top boxes, and use the Home tab to make the words Bold (thicker), change the word color, and use the 'Paint Bucket' to color the background of the box.",
                shortcut: "Ctrl + B (Bold), Ctrl + I (Italic), Ctrl + U (Underline)",
                imgSrc: "images/ex-09-fonts.jpg"
            },
            {
                heading: "Drawing Real Borders",
                text: "When you print an Excel sheet, the light grey grid lines you see on the screen usually do NOT print! To draw real dark lines around your boxes, highlight them, click the 'Borders' button (it looks like a 4-square window) in the Home tab, and choose 'All Borders'.",
                shortcut: "Alt + H, B, A (Draws dark borders around highlighted boxes)",
                imgSrc: "images/ex-10-borders.jpg"
            },
            {
                heading: "Merging (Melting) Cells Together",
                text: "If you have a big title (like 'Excellent Institute Routine'), it needs to sit in the middle of the top row. Highlight 5 or 6 small boxes across the top, and click 'Merge & Center' in the Home tab. It melts all those small boxes into one giant title box!",
                shortcut: "Alt + H, M, C (Merge and Center)",
                imgSrc: "images/ex-11-merge.jpg"
            },
            {
                heading: "Money and Number Styles",
                text: "If you type '500', the computer doesn't know if it's 500 apples or 500 rupees. Click the box, go to the Home tab, and change the drop-down menu from 'General' to 'Currency'. Excel will magically add the ₹ or $ symbol and perfectly align the numbers.",
                shortcut: "Ctrl + Shift + $ (Changes plain numbers to Money)",
                imgSrc: "images/ex-12-money.jpg"
            }
        ]
    },
    {
        id: "chapter4",
        title: "Chapter 4: Basic Math & Formulas",
        topics: [
            {
                heading: "The Golden Rule (The Equals Sign)",
                text: "Excel is a calculator, but you must wake it up first! If you type 5+5, nothing happens. But if you type the Equals sign first (=5+5) and press Enter, Excel instantly shows the answer 10!",
                shortcut: "Type = to tell Excel you are about to do Math",
                imgSrc: "images/ex-13-equals.jpg"
            },
            {
                heading: "Adding and Subtracting Boxes",
                text: "In Excel, we do not add numbers; we add the boxes! If box A1 has 50, and box B1 has 20, go to an empty box and type =A1+B1. It shows 70. The best part? If you change box A1 to 100 later, the answer magically updates to 120 all by itself!",
                shortcut: "Double-click the answer box to see the colorful formula",
                imgSrc: "images/ex-14-math.jpg"
            },
            {
                heading: "AutoSum (The Lightning Calculator)",
                text: "If you have a shopping list with 20 items, do not add them one by one. Highlight all the prices, plus one empty box at the very bottom. Go to the Home tab and click 'AutoSum' (it looks like a weird 'E'). The total sum appears instantly in the empty box!",
                shortcut: "Alt + = (Instantly calculates the total of a whole list)",
                imgSrc: "images/ex-15-autosum.jpg"
            },
            {
                heading: "AVERAGE, MIN, and MAX",
                text: "Excel has smart math words built in. Type =AVERAGE(A1:A5) to find the average marks of a student. Type =MAX(A1:A5) to instantly find the highest score in the class, or =MIN to find the lowest score.",
                shortcut: "Shift + F3 (Opens a helper menu to find math words)",
                imgSrc: "images/ex-16-average.jpg"
            }
        ]
    },
    {
        id: "chapter5",
        title: "Chapter 5: Managing the Grid",
        topics: [
            {
                heading: "Making Columns Wider",
                text: "Sometimes you type a long name, and it spills out of the box or hides behind the next box. Look at the top where the letters are (A, B, C). Put your mouse exactly on the line between A and B, and double-click. The box will automatically stretch to fit perfectly.",
                shortcut: "Alt + H, O, I (Auto-stretches the column to the perfect size)",
                imgSrc: "images/ex-17-width.jpg"
            },
            {
                heading: "Inserting New Rows",
                text: "If you forgot to add a new student in the middle of your alphabetical list, don't erase anything! Right-click the row number on the left side (like the number 5) and click 'Insert'. It gently pushes everyone down and gives you a brand new empty row.",
                shortcut: "Ctrl + Shift + + (Add a Row), Ctrl + - (Delete a Row)",
                imgSrc: "images/ex-18-insert-row.jpg"
            },
            {
                heading: "Freezing Panes (Locking the Headings)",
                text: "If you have a huge list of 500 students, when you scroll down, your top headings (Name, Class, Marks) disappear! Go to the 'View' tab and click 'Freeze Panes', then 'Freeze Top Row'. Now, as you scroll down, the headings stay glued to the top of your screen.",
                shortcut: "Alt + W, F, F (Locks the screen exactly where you want)",
                imgSrc: "images/ex-19-freeze.jpg"
            },
            {
                heading: "Working with Multiple Sheets (Pages)",
                text: "One Excel file can hold many pages, called 'Sheets'. Look at the very bottom left corner. You will see 'Sheet1'. Click the little '+' button next to it to create a second page. You can double-click the name to rename them to '8th Class', '9th Class', etc.",
                shortcut: "Shift + F11 (Instantly adds a new blank page)",
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
                text: "If your student names are all mixed up, fix it easily. Highlight your whole list, go to the 'Data' tab, and click 'Sort'. Choose the 'Name' column and tell it to sort from A to Z. Excel will perfectly arrange everyone in alphabetical order without mixing up their marks.",
                shortcut: "Alt + A, S, A (Sorts A to Z instantly)",
                imgSrc: "images/ex-21-sort.jpg"
            },
            {
                heading: "Filtering (The Magic Strainer)",
                text: "Imagine you have 1,000 students, but you only want to see the 8th Class. Highlight your top headings, go to 'Data', and click 'Filter'. Little arrows appear. Click the arrow above 'Class', uncheck everything except '8th', and watch the massive list shrink to show exactly what you need!",
                shortcut: "Ctrl + Shift + L (Turns the Filter arrows on and off)",
                imgSrc: "images/ex-22-filter.jpg"
            },
            {
                heading: "Find and Replace",
                text: "If you spelled a city name wrong 50 times in a huge list, do not fix them one by one. Tell Excel to find the wrong word, and tell it the correct spelling. Click 'Replace All', and it fixes the entire workbook in one second.",
                shortcut: "Ctrl + H (Opens the Find and Replace menu)",
                imgSrc: "images/ex-23-find.jpg"
            }
        ]
    },
    {
        id: "chapter7",
        title: "Chapter 7: Data Cleanup Tricks",
        topics: [
            {
                heading: "Removing Duplicates",
                text: "If someone accidentally entered the exact same student twice in a massive list, you don't have to hunt for it with your eyes. Highlight the list, go to the 'Data' tab, and click 'Remove Duplicates'. Excel finds the identical twins and deletes the extra one safely.",
                shortcut: "Alt + A, M (Opens the remove duplicates window)",
                imgSrc: "images/ex-24-duplicates.jpg"
            },
            {
                heading: "Drop-Down Lists (Data Validation)",
                text: "To stop people from spelling things wrong, force them to choose from a list! Click a box, go to the 'Data' tab, and click 'Data Validation'. Change 'Any Value' to 'List'. Type 'Pass, Fail'. Now, that box has a clickable drop-down menu with only those two choices!",
                shortcut: "Alt + A, V, V (Opens the Data Validation menu)",
                imgSrc: "images/ex-25-dropdown.jpg"
            },
            {
                heading: "Splitting Words (Text to Columns)",
                text: "If someone typed 'Rahul Sharma' in one box, but you want 'Rahul' in box A and 'Sharma' in box B, you can split them! Highlight the names, go to 'Data' > 'Text to Columns', choose 'Delimited', and check 'Space'. Excel slices the words at the space perfectly.",
                shortcut: "Alt + A, E (Opens the Text to Columns wizard)",
                imgSrc: "images/ex-26-split.jpg"
            },
            {
                heading: "Flash Fill (The AI Typist)",
                text: "Flash Fill is an incredibly smart robot. If column A has first names, and column B has last names, manually type the full name in column C just once. Press 'Enter', then press the shortcut. Excel watches your pattern and types the rest of the 100 names automatically!",
                shortcut: "Ctrl + E (Triggers the Flash Fill robot)",
                imgSrc: "images/ex-27-flashfill.jpg"
            }
        ]
    },
    {
        id: "chapter8",
        title: "Chapter 8: Drawing Charts (Graphs)",
        topics: [
            {
                heading: "Creating a Bar Graph",
                text: "To easily see who got the highest marks, highlight the student names and their scores. Go to the 'Insert' tab and click the 'Column Chart' icon. It draws tall towers for high marks and short towers for low marks, making it very easy to understand.",
                shortcut: "Alt + F1 (Instantly creates a Bar Chart on your page)",
                imgSrc: "images/ex-28-barchart.jpg"
            },
            {
                heading: "Creating a Pie Chart",
                text: "A pie chart is perfect for showing fractions (like how many boys vs girls are in a class). Highlight the labels and the numbers. Go to 'Insert' and click 'Pie Chart'. It creates a beautiful circle sliced up like a pizza.",
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
                heading: "Coloring Pass or Fail Automatically",
                text: "You can teach Excel to color boxes by itself! Highlight a list of exam scores. Go to 'Conditional Formatting' > 'Highlight Cells Rules' > 'Less Than'. Type 30, and choose 'Red'. Instantly, every student who failed turns bright red so teachers can see them easily.",
                shortcut: "Alt + H, L, H (Opens Highlight Rules)",
                imgSrc: "images/ex-30-highlight.jpg"
            },
            {
                heading: "Adding Data Bars",
                text: "Highlight your numbers, go to 'Conditional Formatting', and click 'Data Bars'. Excel will paint tiny blue loading bars right inside the boxes. A big number gets a full bar, and a small number gets a tiny bar.",
                shortcut: "Alt + H, L, D (Opens Data Bars menu)",
                imgSrc: "images/ex-31-databars.jpg"
            }
        ]
    },
    {
        id: "chapter10",
        title: "Chapter 10: Logic & Counting Math",
        topics: [
            {
                heading: "The Magic 'IF' Rule",
                text: "The 'IF' formula lets Excel make smart choices. Type =IF(A1>50, \"Pass\", \"Fail\"). This tells the computer: 'If the mark in box A1 is bigger than 50, show the word Pass. If not, show the word Fail.' It grades the whole class for you!",
                shortcut: "Type =IF( to begin the logic test",
                imgSrc: "images/ex-32-if.jpg"
            },
            {
                heading: "COUNT vs COUNTA",
                text: "If you want to know how many students took a test, don't count with your finger! Type =COUNT(A1:A50) to count boxes that have Numbers. But if you want to count a list of student Names (which are words), you must use =COUNTA(A1:A50).",
                shortcut: "Type =COUNTA( to count boxes that have words in them",
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
                text: "Imagine you only know a student's Roll Number, but you need their Phone Number from a giant school list. You type =VLOOKUP(Roll_Number, Big_Table, Column_Number, FALSE). Excel searches the giant table for that Roll Number and brings back their phone number instantly!",
                shortcut: "Type =VLOOKUP( to start searching the table",
                imgSrc: "images/ex-34-vlookup.jpg"
            },
            {
                heading: "XLOOKUP (The Modern Upgrade)",
                text: "If you have the newest version of Excel, XLOOKUP is much easier. You just type =XLOOKUP(What_To_Find, Where_To_Look, What_To_Bring_Back). It never gets confused and is much faster than the old VLOOKUP.",
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
                text: "If you have a messy list of 10,000 fee payments showing different dates and classes, it is impossible to read. A Pivot Table takes that huge mess and automatically squishes it into a tiny, neat summary. It can answer questions like 'How much money did Class 8 pay in total?' in 3 seconds.",
                shortcut: "Alt + N, V (Instantly creates a new Pivot Table)",
                imgSrc: "images/ex-36-pivot-intro.jpg"
            },
            {
                heading: "Building Your First Pivot Table",
                text: "Click anywhere inside your messy data. Go to 'Insert' and click 'PivotTable'. A new screen opens. On the right side, just drag 'Class Name' into the 'Rows' box, and drag 'Money Paid' into the 'Values' box. Excel does all the crazy math instantly!",
                shortcut: "Use the mouse to drag and drop words on the right side panel",
                imgSrc: "images/ex-37-pivot-build.jpg"
            }
        ]
    },
    {
        id: "chapter13",
        title: "Chapter 13: Printing & Copying Secrets",
        topics: [
            {
                heading: "Fit to One Page (For Printing)",
                text: "Printing wide Excel sheets can be a disaster (half the table prints on a second piece of paper). Go to 'File' > 'Print'. Look at the bottom settings and change 'No Scaling' to 'Fit All Columns on One Page'. The computer will shrink it to fit perfectly on the paper.",
                shortcut: "Ctrl + P (Opens the Print menu)",
                imgSrc: "images/ex-38-fitprint.jpg"
            },
            {
                heading: "Setting the Print Area",
                text: "If you have a huge spreadsheet, but you only want to print a tiny table in the corner, highlight just that table. Go to the 'Page Layout' tab, click 'Print Area', and select 'Set Print Area'. Now, the printer will ignore everything else.",
                shortcut: "Alt + P, R, S (Sets the Print Area)",
                imgSrc: "images/ex-39-printarea.jpg"
            },
            {
                heading: "Paste Special (Values Only)",
                text: "If you copy a box that has math inside it (like =A1+B1) and paste it somewhere else, it might break and show an error. To fix this, copy it, right-click where you want to paste, and choose 'Paste as Values' (the icon with a 123). This drops only the final answer, leaving the math behind.",
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
                heading: "Protecting a Sheet (Glass Cover)",
                text: "If you spent hours writing hard formulas, you don't want a student to accidentally delete them! Go to the 'Review' tab and click 'Protect Sheet'. Type a secret password. It places an invisible glass cover over your work. People can see it, but they cannot click or change the boxes.",
                shortcut: "Alt + R, P, S (Protects the current page)",
                imgSrc: "images/ex-41-protect.jpg"
            },
            {
                heading: "Locking the Entire File",
                text: "To stop someone from even opening the Excel file (like a private exam paper), go to 'File' > 'Info' > 'Protect Workbook' > 'Encrypt with Password'. Warning: If you forget the password, the file is locked forever! Microsoft cannot open it for you.",
                shortcut: "Alt + F, I, P, E (Locks the file with a password)",
                imgSrc: "images/ex-42-encrypt.jpg"
            },
            {
                heading: "Macros (The Invisible Robot)",
                text: "A Macro is an invisible robot you can train. If you paint a box blue and make it bold every single day, go to 'View' > 'Macros' > 'Record Macro'. Excel watches you do it once. The next day, you just click 'Play', and the robot does all the formatting for you in one second!",
                shortcut: "Alt + W, M, R (Starts training the robot)",
                imgSrc: "images/ex-43-macro.jpg"
            }
        ]
    }
    ,{
        id: "chapter15",
        title: "Chapter 15: The Secret Pro Tools",
        topics: [
            {
                heading: "Locking a Box (The Dollar Sign $)",
                text: "Sometimes when you drag the green Autofill dot, your math formula breaks because the boxes move down! To 'lock' a box in place so it never moves, put Dollar signs in front of the letter and number (like $A$1). Now it is glued in place forever!",
                shortcut: "F4 (Press this while typing a formula to add the $ signs instantly)",
                imgSrc: "images/ex-44-dollarsign.jpg"
            },
            {
                heading: "The Format Painter (Magic Brush)",
                text: "If you painted a box yellow, made the text bold, and drew a thick border, you don't have to repeat those steps for the next box. Click the finished box, click the 'Format Painter' brush icon, and wipe it over the new box to copy the design instantly!",
                shortcut: "Alt + H, F, P (Selects the Format Painter)",
                imgSrc: "images/ex-45-formatpainter.jpg"
            },
            {
                heading: "Wrapping Text (Fitting Big Sentences)",
                text: "If you type a really long sentence in a box, it spills over and hides behind the next box. Instead of making the column super wide, click the box and hit 'Wrap Text' in the Home tab. It makes the box taller and stacks the words neatly inside!",
                shortcut: "Alt + H, W (Wraps the text instantly)",
                imgSrc: "images/ex-46-wraptext.jpg"
            }
        ]
    },
    {
        id: "chapter16",
        title: "Chapter 16: Speedy Navigation",
        topics: [
            {
                heading: "Teleporting Around Huge Lists",
                text: "If your list has 5,000 students, do not use the mouse scroll wheel—it will take forever! Hold the 'Ctrl' key and press the 'Down Arrow' to instantly teleport to the very bottom of the list. Press 'Up Arrow' to teleport back to the top.",
                shortcut: "Ctrl + Arrow Keys (Teleport to the edges of your data)",
                imgSrc: "images/ex-47-teleport.jpg"
            },
            {
                heading: "Selecting Whole Rows or Columns",
                text: "To select an entire row to delete it or paint it, you don't need to carefully drag your mouse all the way across the screen. Just click any box and use these quick keyboard buttons to highlight the entire line in one blink of an eye.",
                shortcut: "Shift + Space (Select Row) | Ctrl + Space (Select Column)",
                imgSrc: "images/ex-48-selectall.jpg"
            }
        ]
    }
];
