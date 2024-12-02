// Dashboard JSON Integration

// Create a JSON file for dashboard data
const dashboardData = {
    "performanceMetrics": [
        {
            "title": "Customer Satisfaction",
            "value": "92%",
            "icon": "fa-smile"
        },
        {
            "title": "Response Time",
            "value": "2.5 hrs",
            "icon": "fa-clock"
        },
        {
            "title": "Response Time",
            "value": "2.5 hrs",
            "icon": "fa-clock"
        }
    ],
    "unresolvedTickets": [
        {
            "status": "Design Update Needed",
            "count": 352
        },
        {
            "status": "Backend Integration",
            "count": 245
        },
        {
            "status": "Content Review",
            "count": 176
        },
        {
            "status": "Performance Optimization",
            "count": 89
        }
    ],
    "tasks": [
        {
            "description": "Refactor authentication module",
            "priority": "URGENT",
            "completed": false
        },
        {
            "description": "Update project documentations",
            "priority": "NEW",
            "completed": false
        },
        {
            "description": "Conduct user feedback analysis",
            "priority": "DEFAULT",
            "completed": true
        }
    ]
};

// Function to dynamically add performance metrics
function populatePerformanceMetrics() {
    const metricsSection = document.querySelector('section[aria-label="main-stats"]');

    if (metricsSection) {
        // Clear existing metrics
        metricsSection.innerHTML = '';

        // Populate with JSON data
        dashboardData.performanceMetrics.forEach(metric => {
            const metricCard = document.createElement('article');
            metricCard.className = 'art col-sm-6 col-lg-3 mb-lg-0';
            metricCard.innerHTML = `
                <div class="stats-card text-center">
                    <h3 class="h6 mb-2">
                        <i class="fa-solid ${metric.icon} me-2"></i>
                        ${metric.title}
                    </h3>
                    <p class="stats-value mb-0">${metric.value}</p>
                </div>
            `;
            metricsSection.appendChild(metricCard);
        });
    }
}

// Function to populate unresolved tickets table
function populateUnresolvedTickets() {
    const unresolvedTicketsTable = document.querySelector('.tikets-bd .table-responsive tbody');

    if (unresolvedTicketsTable) {
        // Clear existing rows
        unresolvedTicketsTable.innerHTML = '';

        // Populate with JSON data
        dashboardData.unresolvedTickets.forEach(ticket => {
            const row = document.createElement('tr');
            row.className = 'border-bottom task-item';
            row.innerHTML = `
                <td class="text-nowrap">${ticket.status}</td>
                <td class="text-end text-muted">${ticket.count}</td>
            `;
            unresolvedTicketsTable.appendChild(row);
        });
    }
}

// Function to populate tasks list
function populateTasks() {
    const tasksList = document.querySelector('.task-bd ul');

    if (tasksList) {
        // Clear existing tasks
        tasksList.innerHTML = '';

        // Populate with JSON data
        dashboardData.tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item d-flex justify-content-between align-items-center ' +
                (task.status !== 'last' ? 'border-bottom' : '');

            taskItem.innerHTML = `
                <div>
                    <label class="d-flex align-items-center">
                        <input type="checkbox" class="me-2" ${task.completed ? 'checked' : ''}>
                        <span>${task.description}</span>
                    </label>
                </div>
                <span class="badge bg-${task.priority === 'URGENT' ? 'warning' :
                    task.priority === 'NEW' ? 'success' : 'secondary'
                }">${task.priority}</span>
            `;

            tasksList.appendChild(taskItem);
        });
    }
}

// Initialize dashboard with JSON data when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    populatePerformanceMetrics();
    populateUnresolvedTickets();
    populateTasks();
});