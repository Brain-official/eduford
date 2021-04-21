document.querySelector('#nav').innerHTML += `<nav>
            <a href="index.html"><img class="logo" src="eduford_images/logo.png" alt="logo"></a>

            <div class="nav-links" id="navLinks">
                <i class="fas fa-times" onclick="hideMenu()"></i>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/menu/about.html">About</a></li>
                    <li><a href="/menu/course.html">Course</a></li>
                    <li><a href="/menu/blog.html">Blog</a></li>
                    <li><a href="/menu/contact.html">Contact</a></li>
                </ul>
            </div>
            <i class="fas fa-bars" onclick="showMenu()"></i>
        </nav>`;

const course = [
    { key: 'Geology', value: 1 },
    { key: 'Chemistry', value: 2 },
    { key: "Computer", value: 3 },
    { key: "Programing", value: 4 }
]





course.forEach(val => {
    document.querySelector('#course-list').innerHTML += `<option>${val.key}</option>`
})