const yearSpan = document.getElementById('currentYear');
yearSpan.textContent = new Date().getFullYear();

const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu
document.getElementById('menuToggle').addEventListener('click', function () {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show'); // Toggle the 'show' class on the nav links
});

// Courses filter
const courses = [
    { code: 'WDD230', name: 'Web Frontend Development I', credits: 3, completed: true },
    { code: 'WDD240', name: 'Web Frontend Development II', credits: 3, completed: false },
    { code: 'CSE110', name: 'Programming Building Blocks', credits: 3, completed: true },
    { code: 'CSE210', name: 'Object-Oriented Programming', credits: 3, completed: false }
];

function renderCourses(filter = 'all') {
    const courseContainer = document.getElementById('courseContainer');
    courseContainer.innerHTML = ''; // Clear existing content
    const filteredCourses = courses.filter(course =>
        filter === 'all' ? true : course.code.startsWith(filter)
    );
    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = `course-card ${course.completed ? 'completed' : 'incomplete'}`;
        courseCard.innerHTML = `
            <h3>${course.code} - ${course.name}</h3>
            <p>Credits: ${course.credits}</p>
        `;
        courseCard.addEventListener('click',() => openCourseDetails(course.code)); //attach click event
        courseContainer.appendChild(courseCard);
    });

    calculateTotalCredits(filter); // Update total credits when courses are rendered
}
//dialog
function openCourseDetails(courseCode) {
    const dialog = document.getElementById('course-details');
    const course = courses.find(c => c.code === courseCode);
    if (course)  {
        const dialogContent = document.getElementById('dialog-content');
        dialogContent.innerHTML = `
            <h2>${course.code} - ${course.name}</h2>
            <p>Credits: ${course.credits}</p>
            <p>Status: ${course.completed ? 'Completed' : 'In Progress'}</p>
        `;
        dialog.showModal(); // Open the dialog
    }
}
/*/closed the dialog
document.getElementById('close-dialog').addEventListener('click', function () {
    const dialog = document.getElementById('course-details');
    dialog.close(); // Close the dialog
});*/

// Optional: Close dialog when clicking outside it
document.getElementById('course-details').addEventListener('click', function (e) {
    const dialog = document.getElementById('course-details');
    if (e.target === dialog) {
        dialog.close();
    }
});



function filterCourses(filter) {
    renderCourses(filter);
    document.querySelectorAll('#filterButtons button').forEach(button => {
        button.classList.toggle('active', button.textContent.includes(filter));
    });
}

function calculateTotalCredits(filter = 'all') {
    const totalCredits = courses
        .filter(course => filter === 'all' || course.code.startsWith(filter))
        .reduce((sum, course) => sum + course.credits, 0);

    document.getElementById('totalCredits').textContent = `Total Credits: ${totalCredits}`;
}

renderCourses();
