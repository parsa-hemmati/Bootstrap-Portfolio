const work = [
  {
    "title": "Paris 2024 Olympics Planner",
    "deployed_version": "https://sally077.github.io/Paris-Olympics/",
    "github_repo": "https://github.com/Sally077/Paris-Olympics",
    "description": "A website that allows users to plan their trip to the 2024 Paris Olympics.",
    "screenshot": "https://raw.githubusercontent.com/parsa-hemmati/Bootstrap-Portfolio/main/images/Paris.jpeg?"
  },
  {
    "title": "Password Generator",
    "deployed_version": "https://parsa-hemmati.github.io/password-generator/",
    "github_repo": "https://github.com/parsa-hemmati/password-generator",
    "description": "A website that allows users to generate a random password based on criteria they’ve selected.",
    "screenshot": "https://raw.githubusercontent.com/parsa-hemmati/Bootstrap-Portfolio/main/images/Password.jpeg"
  },
  {
    "title": "Javascript Quizz",
    "deployed_version": "https://parsa-hemmati.github.io/JavaScript-Quiz/",
    "github_repo": "https://github.com/parsa-hemmati/JavaScript-Quiz/",
    "description": "A timed quiz on JavaScript fundamentals that stores high scores.",
    "screenshot": "https://raw.githubusercontent.com/parsa-hemmati/Bootstrap-Portfolio/main/images/Quiz.jpeg"
  }
];

const row = document.querySelector("#work .row");

function createCard(work) {
  const card = document.createElement("div");
  card.classList.add("col-md-4");
  card.innerHTML = `
        <div class="card mb-4">
          <img src="${work.screenshot}" class="card-img-top" alt="${work.title}">
          <div class="card-body">
            <h5 class="card-title">${work.title}</h5>
            <p class="card-text">${work.description}</p>
            <a href="${work.deployed_version}" class="btn btn-primary">View Project</a>
          </div>
        </div>
  `;
  return card;
}

work.forEach((workItem) => {
  const card = createCard(workItem);
  row.appendChild(card);
});
