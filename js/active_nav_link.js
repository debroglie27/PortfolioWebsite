home = document.getElementById('home');
about = document.getElementById('about');
projects = document.getElementById('projects');
education = document.getElementById('education');
skills = document.getElementById('skills');
contact = document.getElementById('contact');

switch(document.location.pathname.split('/').pop().split('.')[0]) {
    case "": home.classList.add('active'); break;
    case "about": about.classList.add('active'); break;
    case "projects": projects.classList.add('active'); break;
    case "education": education.classList.add('active'); break;
    case "skills": skills.classList.add('active'); break;
    case "contact": contact.classList.add('active'); break;
};