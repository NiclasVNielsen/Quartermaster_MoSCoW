/* Must have */
const Kanban = {
    lanes : {
        /* Example: ToDo, Doing, Done */
        LaneTitles : "Title of the lanes",
        MultipleOptionsPrLane : "Example in Doing lane there could be a section for each member or sub group of the project", /* Could be done with drop downs like the explorer in vs code */
    },
    cartSettings : {
        /* The task cards */
        Title : "Title of the task",
        Description : "Description of the task",
        Responsible : "The person / People / sub group responsible for the task",
        Reliance : "What tasks it relies on being completed before it can be done", /* Can be from other projects */
        EstimatedTime : "Estimated time it will take to complete the task", /* Should also be able to be auto generated through checklist */
        Deadline : "Time where task is expected to be done so other tasks that relly on this one can start",
        Checklist : {
            /* Break down a task into bullet points */
            BulletPoint : "Each sub-task",
            EstimatedTime : "Estimated time it takes to complete sub-task"
        },
        Start : "Starts the task and updates the time schedule",
        Done : "Puts the started task in done"
    }
}

/* Should have */
const SubGroups = "Be able to split into groups that the individual tasks can be assigned to"
const ProjectOverview = "Auto generate a time schedule based on cards in the project"

/* 
    Carts should have estimated time and a click to start button
    This would be able to auto generate a dynamic schedule
*/