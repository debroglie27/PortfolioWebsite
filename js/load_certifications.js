import { certificationList } from "./certification_list.js";

const gridContainer = document.querySelector(".grid-container");

function createCardContainer(title, institute, link) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    const cardHeader = document.createElement('h3');
    cardHeader.textContent = title;

    const linkContainer = document.createElement('div');
    linkContainer.classList.add('link-container');

    const instituteParagraph = document.createElement('p');
    instituteParagraph.classList.add('institute');
    instituteParagraph.textContent = institute;

    const linkAnchor = document.createElement('a');
    linkAnchor.classList.add('link');
    linkAnchor.setAttribute('href', link);
    linkAnchor.textContent = "link";

    linkContainer.appendChild(instituteParagraph);
    linkContainer.appendChild(linkAnchor);

    cardContainer.appendChild(cardHeader);
    cardContainer.appendChild(linkContainer);

    gridContainer.appendChild(cardContainer);
}

function loadCertifications() {
	certificationList.forEach(item => {
        createCardContainer(item["title"], item["institute"], item["link"]);
    });
}

loadCertifications();
