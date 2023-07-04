import { projectList } from "./project_list.js";

const allOption = document.querySelector('#all');
const webOption = document.querySelector('#web');
const softwareOption = document.querySelector('#software');
const gameOption = document.querySelector('#game');

const allCategory = document.querySelector('.all-category');
const webCategory = document.querySelector('.web-category');
const softwareCategory = document.querySelector('.software-category');
const gameCategory = document.querySelector('.game-category');

const gridContainer = document.querySelector(".grid-container");

function createCardContainer(title, category, summary, link) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

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

    const linkAnchor = document.createElement('a');
    linkAnchor.classList.add('link');
    linkAnchor.setAttribute('href', link);
    linkAnchor.setAttribute('target', '_blank');
    linkAnchor.textContent = "GitHub Link";

    textContainer.appendChild(projectSummary);
    textContainer.appendChild(linkAnchor);

    cardContainer.appendChild(headerContainer);
    cardContainer.appendChild(textContainer);

    gridContainer.appendChild(cardContainer);
}

function loadProjects(category) {
    gridContainer.innerHTML = '';

	projectList.forEach(item => {
        // Load either every project when category -> 'all' or the category specified
        if (category === "all" || (item['category'] === category)) {
            createCardContainer(item["title"], item['category'], item["summary"], item["link"]);
        }
    });
}

// For Simple Menu Category
function changeCategory() {
    // Removing the active-item class from current category
    document.querySelector('.active-item').classList.remove('active-item');
    // Adding the active-item class to selected category
    this.classList.add('active-item');

    // Loading Projects of the Category selected
    loadProjects(this.id);
}

// Event listeners for Menu Category
allCategory.addEventListener('click', changeCategory);
webCategory.addEventListener('click', changeCategory);
softwareCategory.addEventListener('click', changeCategory);
gameCategory.addEventListener('click', changeCategory);


// For Dropdown Menu
function changeOption() {
    // Changing the Text Content of Selection
    selection.textContent = this.textContent;

    // Loading Projects of the Category selected
    loadProjects(this.id);
}

// Event listeners for Dropdown Options
allOption.addEventListener('click', changeOption);
webOption.addEventListener('click', changeOption);
softwareOption.addEventListener('click', changeOption);
gameOption.addEventListener('click', changeOption);

loadProjects("all");
