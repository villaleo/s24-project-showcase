const memberProjects = [
  {
    memberFullName: "Samuel",
    name: "Animepedia",
    overview: "An encyclopedia for popular anime.",
    repoUrl: "https://github.com/floresamuelo/animepedia",
    websiteUrl: "https://floresamuelo.github.io/animepedia/",
    site: "Salinas",
    previewUrl: "assets/images/preview-samuel.png",
  },
  {
    memberFullName: "Diego Barreto-Anaya",
    name: "Travel Web",
    overview: "A travel website for booking trips.",
    repoUrl: "https://github.com/DiegoB1624/website-template>",
    websiteUrl: "https://diegob1624.github.io/website-template/",
    site: "Watsonville",
    previewUrl: "assets/images/preview-diego.png",
  },
  {
    memberFullName: "Jared Esquivel",
    name: "Visit Kauai Now",
    overview:
      "A website about the island of Kauai, featuring images and descriptions.",
    repoUrl: "https://jared-esquivel.github.io/Visit-Kauai-now/",
    websiteUrl: "https://jared-esquivel.github.io/Visit-Kauai-now/",
    site: "Watsonville",
    previewUrl: "assets/images/preview-jared.png",
  },
  {
    memberFullName: "Manuel",
    name: "Animepedia",
    overview: "An anime database with a search function for specific anime.",
    repoUrl: "https://github.com/floresamuelo/animepedia",
    websiteUrl: "https://floresamuelo.github.io/animepedia/",
    site: "Salinas",
    previewUrl: "assets/images/preview-manuel.png",
  },
  {
    memberFullName: "Gabriel G.S",
    name: "Alpha Lion Project",
    overview: "An online store with dietary supplements.",
    repoUrl: "https://github.com/fidelgabe/s24-Alpha-Lion-Project",
    websiteUrl: "https://fidelgabe.github.io/s24-Alpha-Lion-Project/",
    site: "Salinas",
    previewUrl: "assets/images/preview-gabe.png",
  },
  {
    memberFullName: "Fernanda Jordan",
    name: "Rose Apothecary",
    overview: "Homepage of a local store.",
    repoUrl: "https://github.com/fernandajordan/rose-apothecarys24",
    websiteUrl: "https://fernandajordan.github.io/rose-apothecarys24/",
    site: "Watsonville",
    previewUrl: "assets/images/preview-fernanda.png",
  },
  {
    memberFullName: "Eduardo Lira",
    name: "Remind Me",
    overview:
      "A to-do list for adding goals and objectives for your day or week.",
    repoUrl: "https://github.com/Trillducks/Remind-Me-website",
    websiteUrl: "https://trillducks.github.io/Remind-Me-website/#",
    site: "Watsonville",
    previewUrl: "assets/images/preview-eddie.png",
  },
  {
    memberFullName: "Fabian Lozano",
    name: "Olympic Country Code Search",
    overview:
      "Look up countries that participated in the Olympics and their IOC codes.",
    repoUrl: "https://github.com/FabianDLozano/Olymipic_Country-Code_Search",
    websiteUrl: "https://fabiandlozano.github.io/Olymipic_Country-Code_Search/",
    site: "Salinas",
    previewUrl: "assets/images/preview-fabian.png",
  },
  {
    memberFullName: "Sergio Jesus Medina-Ixta",
    name: "The World of Sergio",
    overview: "A showcase of things that surround me daily.",
    repoUrl: "https://github.com/17sergio/S24-The-World-of-Sergio",
    websiteUrl: "https://17sergio.github.io/S24-The-World-of-Sergio/index.html",
    site: "Watsonville",
    previewUrl: "assets/images/preview-sergio.png",
  },
  {
    memberFullName: "Cesar Zagal",
    name: "Apollo 11",
    overview: "A website for buying collectibles.",
    repoUrl: "https://github.com/CesarZagal2004/website-template",
    websiteUrl: "https://cesarzagal2004.github.io/website-template/",
    site: "Salinas",
    previewUrl: "assets/images/preview-cesar.png",
  },
  {
    memberFullName: "Alberto Zamora",
    name: "Gallery Stuff",
    overview: "A gallery of interesting stuff.",
    repoUrl: "https://github.com/AlbertoZamora831/Gallary_Stuff",
    websiteUrl: "https://albertozamora831.github.io/Gallery_Stuff/",
    site: "Watsonville",
    previewUrl: "assets/images/preview-alberto.png",
  },
  {
    memberFullName: "Xavier Perez",
    name: "Yeezy Storefront",
    overview: "A recreated Yeezy store website.",
    repoUrl: "https://github.com/Hyperfastcat/yeezy/tree/main",
    websiteUrl: "https://hyperfastcat.github.io/yeezy/index.html",
    site: "Watsonville",
    previewUrl: "assets/images/preview-xavier.png",
  },
];

const salinasRow = document.getElementById("salinas-row");
const watsonvilleRow = document.getElementById("watsonville-row");

for (const project of memberProjects) {
  appendProjectToSite(project);
}

const searchbar = document.getElementById("searchbar");
searchbar.focus();
searchbar.addEventListener("keyup", search);

function appendProjectToSite(project) {
  const maybeBottomPadding = project.overview.length < 50 ? "pb-4" : "";
  const projectColumn = `
    <div class="col-11 col-sm-6 col-lg-4 p-3">
      <div class="card">
        <div class="card-body p-3">
          <a
            class="text-dark"
            href="${project.websiteUrl}"
            style="text-decoration: none"
          >
            <img
              class="card-img-top img-thumbnail"
              src="${project.previewUrl}"
              style="height: 175px; object-fit: contain;"
              alt="A preview of ${project.memberFullName}'s website."
            />
            <h5 class="card-title clamp-line-1 mt-2">${project.name}</h5>
            <p class="clamp-line-2 ${maybeBottomPadding}">
              ${project.overview}
            </p>
            <h6 class="card-subtitle text-muted">
              Created by <span>${project.memberFullName}</span>
            </h6>
          </a>
          <a href="${project.repoUrl}"
            <button class="btn btn-dark mt-3" type="button">
              <i class="bi bi-github"></i>
              View code
            </button>
          </a>
        </div>
      </div>
    </div>
  `;

  if (project.site.toLowerCase() === "salinas") {
    salinasRow.innerHTML += projectColumn;
  } else {
    watsonvilleRow.innerHTML += projectColumn;
  }
}

function search() {
  const query = this.value.toLowerCase().trim();
  const items = Array.from(salinasRow.children).concat(
    Array.from(watsonvilleRow.children)
  );
  for (const item of items) {
    item.style.display = item.innerText.toLowerCase().includes(query)
      ? "block"
      : "none";
  }
}
