// // Define an enum for the months
// enum Month {
//     January,
//     February,
//     March,
//     April,
//     May,
//     June,
//     July,
//     August,
//     September,
//     October,
//     November,
//     December,
//   }
  
//   // Define the current month and year
//   let currentMonth: Month = Month.January;
//   let currentYear: number = 2023;
  
//   // Function to render the calendar
//   function renderCalendar(month: Month, year: number) {
//     const calendarDiv = document.getElementById('calendar');
//     if (!calendarDiv) return;
  
//     // Clear the calendar
//     calendarDiv.innerHTML = '';
  
//     // Create a header for the month and year
//     const header = document.createElement('h2');
//     header.textContent = `${Month[month]} ${year}`;
//     calendarDiv.appendChild(header);
  
//     // Create a table for the calendar
//     const table = document.createElement('table');
//     calendarDiv.appendChild(table);
  
//     // Create the table header
//     const tableHeader = document.createElement('thead');
//     const headerRow = document.createElement('tr');
//     tableHeader.appendChild(headerRow);
//     table.appendChild(tableHeader);
  
//     // Create the table body
//     const tableBody = document.createElement('tbody');
//     table.appendChild(tableBody);
  
//     // Create the days of the week header
//     const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     daysOfWeek.forEach(day => {
//       const th = document.createElement('th');
//       th.textContent = day;
//       headerRow.appendChild(th);
//     });
  
//     // Get the number of days in the month
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
  
//     // Calculate the starting day of the month
//     const startingDay = new Date(year, month, 1).getDay();
  
//     // Create the calendar cells
//     let date = 1;
//     for (let i = 0; i < 6; i++) {
//       const row = document.createElement('tr');
  
//       for (let j = 0; j < 7; j++) {
//         const cell = document.createElement('td');
//         if (i === 0 && j < startingDay) {
//           // Add empty cells before the starting day
//           cell.textContent = '';
//         } else if (date > daysInMonth) {
//           // Add empty cells after the last day of the month
//           cell.textContent = '';
//         } else {
//           // Add the date to the cell
//           cell.textContent = date.toString();
//           date++;
//         }
//         row.appendChild(cell);
//       }
  
//       tableBody.appendChild(row);
//     }
//   }
  
//   // Render the initial calendar
//   renderCalendar(currentMonth, currentYear);
  
//   // Add event listeners to the back and forward buttons
//   const backBtn = document.getElementById('backBtn');
//   if (backBtn) {
//     backBtn.addEventListener('click', () => {
//       if (currentMonth === Month.January) {
//         currentMonth = Month.December;
//         currentYear--;
//       } else {
//         currentMonth--;
//       }
//       renderCalendar(currentMonth, currentYear);
//     });
//   }
  
//   const forwardBtn = document.getElementById('forwardBtn');
//   if (forwardBtn) {
//     forwardBtn.addEventListener('click', () => {
//       if (currentMonth === Month.December) {
//         currentMonth = Month.January;
//         currentYear++;
//       } else {
//         currentMonth++;
//       }
//       renderCalendar(currentMonth, currentYear);
//     });
//   }

interface Month {
    name: string;
    year: number;
    days: number;
  }
  
  const months: Month[] = [
    { name: "January", year: 2023, days: 31 },
    { name: "February", year: 2023, days: 28 },
    { name: "March", year: 2023, days: 31 },
    { name: "April", year: 2023, days: 30 },
    { name: "May", year: 2023, days: 31 },
    { name: "June", year: 2023, days: 30 },
    { name: "July", year: 2023, days: 31 },
    { name: "August", year: 2023, days: 31 },
    { name: "September", year: 2023, days: 30 },
    { name: "October", year: 2023, days: 31 },
    { name: "November", year: 2023, days: 30 },
    { name: "December", year: 2023, days: 31 }
  ];
  const currDate = new Date();
  const currMonth = currDate.getMonth();
  let currentMonthIndex = currMonth;

  function generateCalendar(monthIndex: number): void {
    const calendarElement = document.getElementById("calendar");
    if (!calendarElement) return;
  
    const month = months[monthIndex];
  
    // Update the current month header
    const currentMonthHeader = document.getElementById("current-month");
    if (currentMonthHeader) {
      currentMonthHeader.innerHTML = `${month.name}<br><span style="font-size:18px">${month.year}</span>`;
    }
  
    // Clear previous month's days
    calendarElement.innerHTML = "";
  
    // Calculate the first day of the month
    const firstDay = new Date(month.year, monthIndex, 1).getDay();
  
    // Generate empty slots for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      const emptyDayElement = document.createElement("li");
      emptyDayElement.innerText = "&nbsp";
      calendarElement.appendChild(emptyDayElement);
    }
  
    // Generate new month's days
    for (let i = 1; i <= month.days; i++) {
      const dayElement = document.createElement("li");
      const dayLinkBox = document.createElement("span");
      const dayLink = document.createElement("a");
      dayLink.href = `todo.html?month=${month.name}&date=${i}&year=${month.year}`;
      dayLink.textContent = i.toString();
      dayElement.appendChild(dayLinkBox);
      dayLinkBox.appendChild(dayLink);

      const currentDate = new Date();
      if (
        currentDate.getFullYear() === month.year &&
        currentDate.getMonth() === monthIndex &&
        i === currentDate.getDate()
      ) {
        dayLinkBox.classList.add("highlight");
      }
      calendarElement.appendChild(dayElement);
    }



    //     // Get the current date
    // const currentDate = new Date();

    // // Set the active day
    // const activeDay = currentDate.getDate(); // Replace this with the day you want to make active

    // // Loop through the days and create list items
    // for (let i = 1; i <= month.days; i++) {
    //     const dayElement = document.createElement("li");
    //     dayElement.innerText = i.toString();

    //     // Add the "active" class to the active day
    //     if (i === activeDay) {
    //         dayElement.classList.add("active");
    //     }

    //     calendarElement.appendChild(dayElement);
    // }

  }
  
  function showPreviousMonth(): void {
    if (currentMonthIndex > 0) {
      currentMonthIndex--;
      generateCalendar(currentMonthIndex);
    }
  }
  
  function showNextMonth(): void {
    if (currentMonthIndex < months.length - 1) {
      currentMonthIndex++;
      generateCalendar(currentMonthIndex);
    }
  }
  
  // Event listeners for previous and next buttons
  document.querySelector(".prev")?.addEventListener("click", showPreviousMonth);
  document.querySelector(".next")?.addEventListener("click", showNextMonth);
  
  // Event listener for background color picker
  document.getElementById("bgColorPicker")?.addEventListener("input", (event: Event) => {
    const header = document.querySelector(".month") as HTMLElement;
    if (header) {
      header.style.background = (event.target as HTMLInputElement).value;
    }
  });
  
  // Generate the initial calendar
  generateCalendar(currentMonthIndex);

  
