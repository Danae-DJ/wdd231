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
            <button onclick="openCourseDetails('${course.code}')"> Details </button>
        `;//button by dialog
        courseContainer.appendChild(courseCard);
    });

    calculateTotalCredits(filter); // Update total credits when courses are rendered
}
//add details into button
function openCourseDetails(courseCode) {
    const dialog = document.getElementById('course-details');
    const course = courses.find(c => c.code === courseCode);
    if (course) {
        const dialogContent = document.getElementById('dialog-content');
        dialogContent.innerHTML = `
            <h2>${course.code} - ${course.name}</h2>
            <p>Credits: ${course.credits}</p>
            <p>Status: ${course.completed ? 'Completed' : 'In Progress'}</p>
        `;
        dialog.showModal(); // Open the dialog
    }
}

document.getElementById('close-dialog').addEventListener('click', function () {
    const dialog = document.getElementById('course-details');
    dialog.close(); // Close the dialog
});

/* for this option of dialog is necessary this type of html:
<section class="course">
    <h2>Web and Computer Programming Certificate</h2>
    <div id="courseContainer"></div>
    <div id="filterButtons">
        <button onclick="filterCourses('all')">All Courses</button>
        <button onclick="filterCourses('WDD')">WDD Courses</button>
        <button onclick="filterCourses('CSE')">CSE Courses</button>
    </div>
    <p id="totalCredits"></p>
    <!--Added dialog for course-->
    <dialog id="course-details">
        <div id="dialog-content"></div>
        <button id="close-dialog">Close</button>
    </dialog>
</section>

This for css:
dialog {
    border: none;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    width: 80%;
    max-width: 400px;
    text-align: center;
}
dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.4);
}
#close-dialog {
    margin-top: 15px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
}

            */


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
