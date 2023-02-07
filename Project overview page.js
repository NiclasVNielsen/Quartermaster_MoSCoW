/* Must have */
const CreateProject = "Create new project"
const FilterProjects = "Project / Company"
const DisplayProjects = {
    /* Little bar that displays most important things about each project */
    ProjectTitle : "Title of the project",
    ProjectDescription : "Short description of what the project is about",
    PeopleAssignedToProject : "People/Group of people assigned to the project",
    CompanyProject : "What Company Project is this project a part of (if any)",
    CommingDeadlinesYouAreAssignedTo : "Display most important upcomming deadline", /* (JS date library - ask Kristian) */
    Status : "Display overdue warning or project finished or ongoing",
    GoToProject : "Go to the specific project page to see EVERYTHING",
    ExtendedProjectInfo : {
        /* Expands the project view to show more details */
        QuickAccessToAFewAssignedTasks : {
            /* Show X amount of most relevant tasks you are assigned to with a quick access pannel */
            CheckTask : "Check box to quick complete the task",
            TitleAndDescription : "Title and Description of individual tasks",
            DueDate : "Deadline of individual tasks",
            EditTask : "Click button that gives you a quick edit pop up",
            ShowImportanceRatingOfTask : "Have other tasks assigned to relly on this task being done, Have individual task have a rating: important, nice to have, would be nice"
        }
    }
}

/* Should have */
const PersonalSettings = {
    CustomProjectDisplay: "FilterProjects should have a 'Custom setup' option, where you can group projects how ever you like"
}
