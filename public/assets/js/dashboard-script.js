

// An asynchronous function to fetch and load the json data to the dashboard.
async function dynamicUpload() {
  try {
    await fetch("./assets/json/dashboard-data.json")
      .then((response) => response.json())
      .then((data) => {
        // Dynamically populate Stats Overview Section
        const statsOverviewSection = document.querySelector(
          'section[aria-label="main-stats"]'
        )
        // Clear existing content
        // statsOverviewSection.innerHTML = "" 

        data.statsOverview.forEach((stat) => {
          const statArticle = document.createElement("article")
          statArticle.className = "art col-sm-6 col-lg-3 mb-lg-2"
          statArticle.innerHTML = statArticle.innerHTML + `
                    <div class="stats-card text-center">
                        <h3 class="h6 mb-2">${stat.title}</h3>
                        <p class="stats-value mb-0">${stat.value}</p>
                        <i class="${stat.icon} fa-2x text-primary"></i>
                    </div>
                `
          statsOverviewSection.appendChild(statArticle)
        })

        // Dynamically add Additional Info Cards Section
        const additionalInfoSection = document.createElement("section")
        additionalInfoSection.className = "row mb-4 additional-info"

        data.additionalInfoCards.forEach((card) => {
          const cardArticle = document.createElement("article")
          cardArticle.className = "art col-sm-6 col-lg-4 mb-lg-0"
          cardArticle.innerHTML = `
                    <div class="stats-card text-center">
                        <div class="mb-3">
                            <i class="${card.icon} fa-2x text-primary"></i>
                        </div>
                        <h3 class="h5 mb-2">${card.title}</h3>
                        <p class="stats-value mb-1">${card.value}</p>
                        <p class="text-muted small">${card.description}</p>
                    </div>
                `
          additionalInfoSection.appendChild(cardArticle)
        })

        // Insert the additional info section after the main stats
        statsOverviewSection.after(additionalInfoSection)

        // Dynamically populate Unresolved Tickets Section
        const unresolvedTicketsTable = document.querySelector(
          ".tikets-bd .table-responsive tbody"
        )
        console.log(unresolvedTicketsTable)
        unresolvedTicketsTable.innerHTML = "" // Clear existing content

        data.unresolvedTickets.forEach((ticket) => {
          const ticketRow = document.createElement("tr")
          ticketRow.className = "border-bottom task-item"
          ticketRow.innerHTML = `
                    <td class="text-nowrap">${ticket.status}</td>
                    <td class="text-end text-muted">${ticket.count}</td>
                `
          unresolvedTicketsTable.appendChild(ticketRow)
        })

        // Dynamically populate Tasks Section
        const tasksList = document.querySelector(".task-bd ul")
        tasksList.innerHTML = "" // Clear existing content

        data.tasks.forEach((task) => {
          const taskItem = document.createElement("li")
          taskItem.className =
            "task-item d-flex justify-content-between align-items-center " +
            (task.status === "last" ? "" : "border-bottom")
          taskItem.innerHTML = `
                    <div>
                        <label class="d-flex align-items-center">
                            <input type="checkbox" class="me-2" ${
                              task.completed ? "checked" : ""
                            } aria-label="${task.description}">
                            <span>${task.description}</span>
                        </label>
                    </div>
                    <span class="badge ${task.priorityClass}">${
            task.priority
          }</span>
                `
          tasksList.appendChild(taskItem)
        })
      })
      .catch((error) => {
        console.error("Error loading dashboard data:", error)
      })
  } catch (error) {
    console.error("Error loading dashboard data:", error)
  }
}

// calling the function

dynamicUpload()
