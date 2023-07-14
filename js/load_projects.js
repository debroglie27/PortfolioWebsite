import { projectList } from "./project_list.js";

const optionList = document.querySelectorAll('.options li');
const categoryList = document.querySelectorAll('.categories li');

const gridContainer = document.querySelector(".grid-container");

// Creates Card Container for each project
function createCardContainer(title, category, summary, link) {
    const cardContainer = document.createElement('a');
    cardContainer.classList.add('card-container');
    cardContainer.setAttribute('href', link);

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');
    headerContainer.classList.add(`${category}-project`);

    const projectTitle = document.createElement('h2');
    projectTitle.textContent = title;

    headerContainer.appendChild(projectTitle);

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    const projectSummary = document.createElement('p');
    projectSummary.classList.add('summary');
    projectSummary.textContent = summary;

    textContainer.appendChild(projectSummary);

    cardContainer.appendChild(headerContainer);
    cardContainer.appendChild(textContainer);

    gridContainer.appendChild(cardContainer);
}

// Function responsible for loading the projects based on category
function loadProjects(category) {
    gridContainer.innerHTML = '';

	projectList.forEach(item => {
        // Load either every project when category -> 'all' or the category specified
        if (category === "all" || (item['category'] === category)) {
            createCardContainer(item["title"], item['category'], item["summary"], item["link"]);
        }
    });
}

// For Dropdown Menu
function changeOption() {
    // Changing the Text Content of Selection
    selection.textContent = this.textContent;

    // Loading Projects of the Category selected
    loadProjects(this.id.toLowerCase());
}

// For Simple Menu Category
function changeCategory() {
    // Removing the active-item class from current category
    document.querySelector('.active-item').classList.remove('active-item');
    // Adding the active-item class to selected category
    this.classList.add('active-item');

    // Loading Projects of the Category selected
    loadProjects(this.id.toLowerCase());
}


// Event listeners for Dropdown Options
optionList.forEach((option) => {
    option.addEventListener('click', changeOption);
});

// Event listeners for Menu Category
categoryList.forEach((category) => {
    category.addEventListener('click', changeCategory);
});


loadProjects("all");
