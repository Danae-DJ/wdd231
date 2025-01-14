const yearSpan = document.getElementById('currentYear');
yearSpan.textContent = new Date().getFullYear();


const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`;


//Hamburger menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
    const isHidden = navLinks.style.display === 'none' || !navLinks.style.display;
    navLinks.style.display = isHidden ? 'flex' : 'none';
});



//courses filter
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
        courseContainer.appendChild(courseCard);
    });
}
renderCourses();


function filterCourses(filter) {
    renderCourses(filter);
}


function calculateTotalCredits(filter = 'all') {
    const totalCredits = courses
        .filter(course => filter === 'all' ? true : course.code.startsWith(filter))
        .reduce((sum, course) => sum + course.credits, 0);
    console.log(`Total Credits: ${totalCredits}`); // Replace with DOM update
}
