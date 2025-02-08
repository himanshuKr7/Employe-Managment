localStorage.clear();

const employees = [
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskId": 1,
                "taskTitle": "Project Proposal",
                "taskDescription": "Draft a proposal for the new project.",
                "taskDate": "2025-02-10",
                "category": "Documentation",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskId": 2,
                "taskTitle": "Client Meeting",
                "taskDescription": "Attend a meeting with the client to discuss requirements.",
                "taskDate": "2025-02-12",
                "category": "Meetings",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "tasksCompleted": {
            "Documentation": 0,
            "Meetings": 0
        },
        "taskStats": {
            "totalTasks": 2,
            "newTasksCount": 1,
            "completedTasksCount": 0,
            "activeTasksCount": 1,
            "failedTasksCount": 0
        }
    },
    {
        "id": 2,
        "firstName": "Vihaan",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskId": 3,
                "taskTitle": "Code Review",
                "taskDescription": "Review the code for the authentication module.",
                "taskDate": "2025-02-11",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskId": 4,
                "taskTitle": "Database Optimization",
                "taskDescription": "Optimize the database queries for better performance.",
                "taskDate": "2025-02-14",
                "category": "Database",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskId": 5,
                "taskTitle": "Unit Testing",
                "taskDescription": "Write unit tests for the API endpoints.",
                "taskDate": "2025-02-15",
                "category": "Testing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "tasksCompleted": {
            "Development": 0,
            "Database": 1,
            "Testing": 0
        },
        "taskStats": {
            "totalTasks": 3,
            "newTasksCount": 0,
            "completedTasksCount": 1,
            "activeTasksCount": 2,
            "failedTasksCount": 0
        }
    },
    {
        "id": 3,
        "firstName": "Aditya",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskId": 6,
                "taskTitle": "Design Mockups",
                "taskDescription": "Create UI mockups for the new dashboard.",
                "taskDate": "2025-02-13",
                "category": "Design",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskId": 7,
                "taskTitle": "Bug Fixing",
                "taskDescription": "Fix reported UI bugs in the dashboard.",
                "taskDate": "2025-02-14",
                "category": "Bug Fixing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "tasksCompleted": {
            "Design": 1,
            "Bug Fixing": 0
        },
        "taskStats": {
            "totalTasks": 2,
            "newTasksCount": 0,
            "completedTasksCount": 1,
            "activeTasksCount": 1,
            "failedTasksCount": 0
        }
    },
    {
        "id": 4,
        "firstName": "Arjun",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskId": 8,
                "taskTitle": "Security Audit",
                "taskDescription": "Perform a security audit on the application.",
                "taskDate": "2025-02-16",
                "category": "Security",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskId": 9,
                "taskTitle": "API Integration",
                "taskDescription": "Integrate third-party APIs into the application.",
                "taskDate": "2025-02-17",
                "category": "Development",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "tasksCompleted": {
            "Security": 0,
            "Development": 0
        },
        "taskStats": {
            "totalTasks": 2,
            "newTasksCount": 1,
            "completedTasksCount": 0,
            "activeTasksCount": 1,
            "failedTasksCount": 0
        }
    },
    {
        "id": 5,
        "firstName": "Reyansh",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskId": 10,
                "taskTitle": "Marketing Strategy",
                "taskDescription": "Plan a marketing strategy for product launch.",
                "taskDate": "2025-02-20",
                "category": "Marketing",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskId": 11,
                "taskTitle": "Team Training",
                "taskDescription": "Conduct training sessions for the new hires.",
                "taskDate": "2025-02-22",
                "category": "Training",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "tasksCompleted": {
            "Marketing": 0,
            "Training": 0
        },
        "taskStats": {
            "totalTasks": 2,
            "newTasksCount": 1,
            "completedTasksCount": 0,
            "activeTasksCount": 1,
            "failedTasksCount": 0
        }
    }
];


const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setlocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));

}

export const getlocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem("admin"));

    
    return {employees,admin}
   
    
};

