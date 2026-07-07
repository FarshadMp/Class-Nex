export const academicsFeature = {
  slug: "academics",
  name: "Academics & Classroom Management",
  tagline: "Unify lesson planning, timetable schedules, and assignment desks.",
  stat: "Real-time Sync",
  statLabel: "Parent & Teacher Portal Updates",
  description: "Manage class timetables, teacher allocations, dynamic scheduling conflicts, digital diaries, and student grading profiles from a single integrated command desk.",
  iconName: "GraduationCap",
  benefits: [
    "Reduce classroom scheduling conflicts to zero",
    "Keep parents up-to-date with daily digital diaries",
    "Streamline gradebooks and report card configurations"
  ],
  subFeatures: [
    { title: "Class Timetables", description: "Configurable schedules with automated conflict resolution and teacher substitution alerts." },
    { title: "Assignments Desk", description: "Publish homework, track submissions, and grade directly from the online teacher portal." },
    { title: "Digital Diary Logs", description: "Daily diaries synchronizing curriculum milestones and student behavior profiles directly to parents." },
    { title: "Exam Configurator", description: "Setup marks templates, grade scales, and weightage factors for different terms." }
  ],
  workflow: [
    { step: "01", title: "Roster Setup", description: "Import student registers and map teacher skills to specific grades." },
    { step: "02", title: "Dynamic Schedules", description: "Run ClassNex conflict resolver to balance slots and classrooms." },
    { step: "03", title: "Active Learning", description: "Teachers publish assignments, daily diary entries, and grading keys." },
    { step: "04", title: "Direct Sync", description: "Release progress charts and reports directly to the parent mobile app." }
  ],
  faqs: [
    { question: "Can teachers override timetables manually?", answer: "Yes, administrators can grant substitute editing rights so teachers can swap periods in real-time." },
    { question: "How are homework sheets delivered?", answer: "Assignments are uploaded as PDFs or links, and parents receive instant notifications on their dedicated mobile app." }
  ]
};
