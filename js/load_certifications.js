const certificationList = [
    {
        "id": 1,
        "title": "Neural Networks and Deep Learning",
        "institute": "Coursera",
        "link": "#"
    },
    {
        "id": 2,
        "title": "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization",
        "institute": "Coursera",
        "link": "#"
    },
    {
        "id": 3,
        "title": "Structuring Machine Learning Projects",
        "institute": "Coursera",
        "link": "#"
    },
    {
        "id": 4,
        "title": "The Analytics Edge",
        "institute": "edX MIT",
        "link": "#"
    },
    {
        "id": 5,
        "title": "Introduction to Machine Learning",
        "institute": "Kaggle",
        "link": "#"
    },
    {
        "id": 6,
        "title": "Intermediate Machine Learning",
        "institute": "Kaggle",
        "link": "#"
    },
    {
        "id": 7,
        "title": "Data Visualization",
        "institute": "Kaggle",
        "link": "#"
    },
    {
        "id": 8,
        "title": "Feature Engineering",
        "institute": "Kaggle",
        "link": "#"
    },
    {
        "id": 9,
        "title": "Course on Pandas",
        "institute": "Kaggle",
        "link": "#"
    },
    {
        "id": 10,
        "title": "Course on Python",
        "institute": "Kaggle",
        "link": "#"
    },
    {
        "id": 11,
        "title": "Artificial Intelligence",
        "institute": "SkillUp",
        "link": "#"
    },
    {
        "id": 12,
        "title": "Course on Microsoft Excel",
        "institute": "Udemy",
        "link": "#"
    }
];

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
        const title = item["title"];
        const institute = item["institute"];
        const link = item["link"];

        createCardContainer(title, institute, link);
    });
}

loadCertifications();
