import { projectList } from "./project_list.js";

const gridContainer = document.querySelector(".grid-container");

function createCardContainer(title, summary, link) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');

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

function loadProjects() {
	projectList.forEach(item => {
        createCardContainer(item["title"], item["summary"], item["link"]);
    });
}

loadProjects();
