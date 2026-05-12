// excel-data.js
// Excellent Institute - MS Excel Complete Book Syllabus

const excelBookData = [
    {
        id: "chapter1",
        title: "Chapter 1: The Absolute Basics",
        topics: [
            {
                heading: "Finding and Opening MS Excel",
                text: "Look for a dark green icon with a white letter 'X' on your computer screen. This is the Microsoft Excel logo. Double-click it, and then click on 'Blank Workbook' to start fresh.",
                imgSrc: "images/excel-0-logo.jpg"
            },
            {
                heading: "What is MS Excel?",
                text: "Think of Excel as a massive, magical digital calculator combined with a notebook. It is filled with thousands of tiny boxes called 'Cells'. We use it to create mark sheets, keep track of money, and organize big lists of data.",
                imgSrc: "images/excel-1-intro.jpg"
            },
            {
                heading: "Rows, Columns, and Cells",
                text: "The page looks like a giant grid. The vertical lines (going up and down) are 'Columns', named with letters like A, B, and C. The horizontal lines (going left and right) are 'Rows', named with numbers 1, 2, and 3. Where they meet is a 'Cell'. For example, the very first box is Cell A1.",
                imgSrc: "images/excel-2-grid.jpg"
            },
            {
                heading: "How to Save Your Work",
                text: "To make sure you don't lose your numbers, click 'File' at the top left, then 'Save As'. Give your file a simple name like 'My First Spreadsheet'. Pro Tip: Press 'Ctrl + S' on your keyboard every 5 minutes to save quickly!",
                imgSrc: "images/excel-3-save.jpg"
            }
        ]
    },
    {
        id: "chapter2",
        title: "Chapter 2: Typing & Moving Data",
        topics: [
            {
                heading: "Typing in Cells",
                text: "Click on any box (like A1) and simply start typing a word or a number. When you are done, press the 'Enter' key on your keyboard. Pressing Enter always moves you down to the next box below it.",
                imgSrc: "images/excel-4-typing.jpg"
            },
            {
                heading: "Cut, Copy, and Paste",
                text: "If you need to type the same price 10 times, don't do it manually! Click the cell and press 'Ctrl+C' to Copy it. The box will get a marching dashed line around it. Click an empty box and press 'Ctrl+V' to Paste it.",
                imgSrc: "images/excel-5-copy.jpg"
            },
            {
                heading: "Autofill (The Magic Handle)",
                text: "This is Excel's best trick! If you type 'Monday' in a cell, click it, and look at the bottom right corner of the box. You will see a tiny green square. Click and drag that square downwards, and Excel will magically type Tuesday, Wednesday, Thursday automatically!",
                imgSrc: "images/excel-6-autofill.jpg"
            }
        ]
    },
    {
        id: "chapter3",
        title: "Chapter 3: Making it Look Good",
        topics: [
            {
                heading: "Adding Cell Borders",
                text: "When you print an Excel sheet, the grey grid lines you see on the screen usually do NOT print! To draw real lines around your work, highlight your boxes, look in the Home tab for the 'Borders' button (it looks like a little window), and choose 'All Borders'.",
                imgSrc: "images/excel-7-borders.jpg"
            },
            {
                heading: "Cell Colors and Text",
                text: "You can make headings stand out. Highlight the top row of your list, click the 'Paint Bucket' icon in the Home tab to make the background yellow, and click the 'B' button to make the text Bold.",
                imgSrc: "images/excel-8-colors.jpg"
            },
            {
                heading: "Merging Cells Together",
                text: "If you have a big main title (like 'Student Mark Sheet'), it needs to sit in the middle of the page. Highlight several boxes across the top row, and click the 'Merge & Center' button in the Home tab. It melts all the small boxes into one giant title box!",
                imgSrc: "images/excel-9-merge.jpg"
            },
            {
                heading: "Number Formats (Money & Decimals)",
                text: "If you type '500', is it money or just a number? Click the cell, go to the Home tab, and click the drop-down menu that says 'General'. Change it to 'Currency' to automatically add a ₹ or $ sign and perfect decimal points.",
                imgSrc: "images/excel-10-numbers.jpg"
            }
        ]
    },
    {
        id: "chapter4",
        title: "Chapter 4: Basic Math & Formulas",
        topics: [
            {
                heading: "The Golden Rule of Math",
                text: "Whenever you want Excel to do math, you MUST type the Equals sign (=) first. If you type 5+5, nothing happens. If you type =5+5 and press Enter, Excel instantly shows 10!",
                imgSrc: "images/excel-11-equals.jpg"
            },
            {
                heading: "Cell Addition and Subtraction",
                text: "Instead of typing numbers, we add the boxes! If cell A1 has 50, and cell B1 has 20, go to an empty box and type =A1+B1. Press Enter. It shows 70. Now, if you change A1 to 100, the answer magically updates to 120 all by itself!",
                imgSrc: "images/excel-12-math.jpg"
            },
            {
                heading: "AutoSum (The Lightning Calculator)",
                text: "If you have a long list of grocery prices and need the total, do not add them one by one. Highlight all the prices, plus one empty box at the bottom. Go to the Home tab and click the 'AutoSum' button (it looks like a weird 'E' / Σ). The total appears instantly!",
                imgSrc: "images/excel-13-autosum.jpg"
            },
            {
                heading: "Average, Min, and Max",
                text: "Excel has built-in formulas. Type =AVERAGE(A1:A5) to find the average marks of a student. Type =MAX(A1:A5) to instantly find the highest score in a list, or =MIN to find the lowest.",
                imgSrc: "images/excel-14-formulas.jpg"
            }
        ]
    },
    {
        id: "chapter5",
        title: "Chapter 5: Arranging & Printing",
        topics: [
            {
                heading: "Adjusting Column Widths",
                text: "Sometimes you type a long name, and it spills out of the box or hides. Look at the top where the letters are (A, B, C). Put your mouse exactly on the line between A and B, and double-click. The column will automatically stretch to fit your longest word perfectly.",
                imgSrc: "images/excel-15-width.jpg"
            },
            {
                heading: "Freezing Panes (Locking the Top)",
                text: "If you have a list of 500 students, when you scroll down, your top headings disappear! Go to the 'View' tab and click 'Freeze Panes', then 'Freeze Top Row'. Now, as you scroll down to student #500, the headings stay glued to the top of your screen.",
                imgSrc: "images/excel-16-freeze.jpg"
            },
            {
                heading: "Printing and Fit to Page",
                text: "Printing Excel sheets can be messy. Go to 'File' > 'Print'. If your table is too wide for the paper, look at the bottom of the settings and change 'No Scaling' to 'Fit All Columns on One Page'. You can also change the orientation from Portrait to Landscape.",
                imgSrc: "images/excel-17-print.jpg"
            }
        ]
    },
    {
        id: "chapter6",
        title: "Chapter 6: Organizing Big Data",
        topics: [
            {
                heading: "Sorting (A to Z)",
                text: "If your student names are all mixed up, you can fix it. Highlight your whole list, go to the 'Data' tab, and click 'Sort'. Choose to sort by the 'Name' column from A to Z. Excel neatly arranges everyone in perfect alphabetical order.",
                imgSrc: "images/excel-18-sort.jpg"
            },
            {
                heading: "Filtering (Searching for Specific Data)",
                text: "Imagine you have 100 students, and you only want to see the ones from 'Surada'. Highlight your top headings, go to the 'Data' tab, and click 'Filter'. Little arrows appear on your headings. Click the arrow above 'City', untick everything except 'Surada', and watch the list shrink to show exactly what you need!",
                imgSrc: "images/excel-19-filter.jpg"
            }
        ]
    },
    {
        id: "chapter7",
        title: "Chapter 7: Charts & Visuals",
        topics: [
            {
                heading: "Creating a Pie Chart",
                text: "Numbers can be hard to read. A chart fixes that. If you have a list of expenses (Rent, Electricity, Internet), highlight the words and the numbers. Go to the 'Insert' tab and click the 'Pie Chart' icon. It creates a beautiful colorful circle showing where your money goes.",
                imgSrc: "images/excel-20-pie.jpg"
            },
            {
                heading: "Creating a Bar Graph",
                text: "To compare students' marks, highlight their names and scores. Go to the 'Insert' tab and click the 'Column Chart' icon. It builds tall towers for high marks and short towers for low marks, making it very easy to see who is leading the class.",
                imgSrc: "images/excel-21-bar.jpg"
            }
        ]
    },
    {
        id: "chapter8",
        title: "Chapter 8: Smart Colors (Conditional Formatting)",
        topics: [
            {
                heading: "Highlighting Rules (Pass or Fail)",
                text: "You can make Excel color boxes automatically! Highlight a list of exam scores. Go to 'Conditional Formatting' > 'Highlight Cells Rules' > 'Less Than'. Type 30, and choose 'Light Red Fill'. Instantly, every student who failed turns bright red. You don't have to check manually!",
                imgSrc: "images/excel-22-highlight.jpg"
            },
            {
                heading: "Data Bars (Mini Charts)",
                text: "Highlight your numbers, go to 'Conditional Formatting', and click 'Data Bars'. Excel will put tiny blue loading bars right inside the cells. A big number gets a full bar, and a small number gets a tiny bar.",
                imgSrc: "images/excel-23-databars.jpg"
            }
        ]
    },
    {
        id: "chapter9",
        title: "Chapter 9: Intermediate Formulas",
        topics: [
            {
                heading: "The Magic IF Statement",
                text: "The IF formula lets Excel make decisions. Type =IF(A1>50, \"Pass\", \"Fail\"). This tells the computer: 'If the mark in box A1 is greater than 50, print the word Pass. Otherwise, print Fail.' It saves teachers hours of work!",
                imgSrc: "images/excel-24-if.jpg"
            },
            {
                heading: "COUNT vs COUNTA",
                text: "If you want to know how many students took a test, don't count by pointing your finger at the screen! Type =COUNT(A1:A50) to count boxes that have numbers inside. Use =COUNTA(A1:A50) to count boxes that have text (like names).",
                imgSrc: "images/excel-25-count.jpg"
            }
        ]
    },
    {
        id: "chapter10",
        title: "Chapter 10: Advanced Searching",
        topics: [
            {
                heading: "VLOOKUP (The Digital Phonebook)",
                text: "VLOOKUP is famous in offices. Imagine you have a student's ID number, but you need their Phone Number from a giant list. You type =VLOOKUP(ID_Number, Table, Column_Number, FALSE). Excel acts like a detective, searches the giant table for that ID, and brings back their phone number instantly!",
                imgSrc: "images/excel-26-vlookup.jpg"
            },
            {
                heading: "XLOOKUP (The Modern Upgrade)",
                text: "If you have the 2024 version of Excel, XLOOKUP is much easier. Type =XLOOKUP(What_To_Find, Column_To_Look_In, Column_To_Return). It is faster and never gets confused like VLOOKUP sometimes does.",
                imgSrc: "images/excel-27-xlookup.jpg"
            }
        ]
    },
    {
        id: "chapter11",
        title: "Chapter 11: The Ultimate Summary",
        topics: [
            {
                heading: "What is a Pivot Table?",
                text: "If you have a messy list of 5,000 sales showing different dates, items, and cities, it is impossible to read. A Pivot Table automatically squishes and summarizes that huge data into a tiny, neat summary showing total sales per city in exactly 3 seconds.",
                imgSrc: "images/excel-28-pivot-intro.jpg"
            },
            {
                heading: "Building Your First Pivot Table",
                text: "Click anywhere inside your messy data. Go to the 'Insert' tab and click 'PivotTable'. A new screen opens. On the right side, just drag 'City' into the 'Rows' box, and drag 'Sales' into the 'Values' box. Excel does all the crazy math for you instantly!",
                imgSrc: "images/excel-29-pivot-build.jpg"
            }
        ]
    },
    {
        id: "chapter12",
        title: "Chapter 12: Data Rules",
        topics: [
            {
                heading: "Creating Drop-Down Lists",
                text: "To stop people from making spelling mistakes when typing a City, force them to choose from a list! Click an empty box, go to the 'Data' tab, and click 'Data Validation'. Change 'Any Value' to 'List'. In the source box, type 'Surada, Aska, Berhampur'. Now, the box has a clickable drop-down menu!",
                imgSrc: "images/excel-30-dropdown.jpg"
            },
            {
                heading: "Removing Duplicates",
                text: "If someone accidentally entered the same student's name twice in a long list, you don't have to hunt for it. Highlight the list, go to the 'Data' tab, and click 'Remove Duplicates'. Excel finds the identical entries and deletes them safely.",
                imgSrc: "images/excel-31-duplicates.jpg"
            }
        ]
    },
    {
        id: "chapter13",
        title: "Chapter 13: Splitting & Combining",
        topics: [
            {
                heading: "Text to Columns (Splitting Names)",
                text: "If someone typed 'Pradeep Kumar' in one box, but you need 'Pradeep' in column A and 'Kumar' in column B, highlight the names. Go to 'Data' > 'Text to Columns', choose 'Delimited', and put a checkmark on 'Space'. Excel splits the names perfectly!",
                imgSrc: "images/excel-32-split.jpg"
            },
            {
                heading: "Flash Fill (The AI Typist)",
                text: "Flash Fill is like magic. If column A has first names, and column B has last names, type the full name yourself in column C just once. Press 'Enter', then press 'Ctrl+E'. Excel watches what you did, understands the pattern, and does the rest of the 100 names automatically!",
                imgSrc: "images/excel-33-flashfill.jpg"
            }
        ]
    },
    {
        id: "chapter14",
        title: "Chapter 14: Security & Passwords",
        topics: [
            {
                heading: "Protecting a Sheet (Locking Cells)",
                text: "If you spent hours writing formulas, you don't want a student to accidentally delete them! Go to the 'Review' tab and click 'Protect Sheet'. Type a password. Now, nobody can click or change the boxes unless they know the secret password.",
                imgSrc: "images/excel-34-protect.jpg"
            },
            {
                heading: "Locking the Entire File",
                text: "To stop someone from even opening the file, go to 'File' > 'Info' > 'Protect Workbook' > 'Encrypt with Password'. But warning: If you forget the password, all your hard work is locked away forever!",
                imgSrc: "images/excel-35-password.jpg"
            }
        ]
    },
    {
        id: "chapter15",
        title: "Chapter 15: Shortcuts & Tricks",
        topics: [
            {
                heading: "Essential Keyboard Shortcuts",
                text: "Work like a professional: Press Ctrl+A to select the entire sheet. Press Ctrl+F to open a search box and find a specific name. Press Ctrl+Arrow Keys to instantly jump to the very bottom or top of a massive list.",
                imgSrc: "images/excel-36-shortcuts.jpg"
            },
            {
                heading: "Undo and Redo",
                text: "If you accidentally delete a very important number, do not panic! Look at the top left corner for the backward arrow, or press 'Ctrl+Z'. This is the Undo button, and it acts like a time machine to reverse your mistake.",
                imgSrc: "images/excel-37-undo.jpg"
            }
        ]
    }
];

// ============================================================================
// 🛑 HOW TO ADD A WHOLE NEW CHAPTER AT THE END 🛑
// ============================================================================
// To add Chapter 16, paste the template below right above this closing bracket ];
// Make sure to add a comma `,` before pasting.
//
// ,{
//     id: "chapter16",
//     title: "Chapter 16: Macros",
//     topics: [
//         {
//             heading: "Recording a Macro",
//             text: "Explanation goes here.",
//             imgSrc: "images/excel-macro.jpg"
//         }
//     ]
// }
// ============================================================================
