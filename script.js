const memberProjects = [
  {
    memberFullName: "Samuel",
    name: "Animepedia",
    overview:
      "functions as an encylclopedia for different popular anime and from what they are about to the production studio.",
    repoUrl: "https://github.com/floresamuelo/animepedia",
    websiteUrl: "https://floresamuelo.github.io/animepedia/",
    site: "Salinas",
    previewUrl: "assets/images/previews/samuel.png",
  },
  {
    memberFullName: "Diego Barreto-Anaya",
    name: "Travel Web",
    overview: "A travel website - booking to places?",
    repoUrl: "https://github.com/DiegoB1624/website-template>",
    websiteUrl: "https://diegob1624.github.io/website-template/",
    site: "Watsonville",
    previewUrl: "assets/images/previews/diego.png",
  },
  {
    memberFullName: "Jared Esquivel",
    name: "Visit Kauai Now",
    overview:
      "This is my first website that I have coded and it is about the island of Kauai which is one of the Hawaiian islands.In my website I have different images of the island of Kauai and text explaining them.",
    repoUrl: "https://jared-esquivel.github.io/Visit-Kauai-now/",
    websiteUrl: "https://jared-esquivel.github.io/Visit-Kauai-now/",
    site: "Watsonville",
    previewUrl: "assets/images/previews/jared.png",
  },
  {
    memberFullName: "Manuel",
    name: "Animepedia",
    overview:
      "It is an anime database that tell you about anime and you are able to search for a specific anime using the search function",
    repoUrl: "https://github.com/floresamuelo/animepedia",
    websiteUrl: "https://floresamuelo.github.io/animepedia/",
    site: "Salinas",
    previewUrl: "assets/images/previews/manuel.png",
  },
  {
    memberFullName: "Gabriel G.S",
    name: "Alpha Lion Project",
    overview: "Store",
    repoUrl: "https://github.com/fidelgabe/s24-Alpha-Lion-Project",
    websiteUrl: "https://fidelgabe.github.io/s24-Alpha-Lion-Project/",
    site: "Salinas",
    previewUrl: "assets/images/previews/gabe.png",
  },
  {
    memberFullName: "Fernanda Jordan",
    name: "Rose Apothecary",
    overview: "homepage of a local store",
    repoUrl: "https://github.com/fernandajordan/rose-apothecarys24",
    websiteUrl: "https://fernandajordan.github.io/rose-apothecarys24/",
    site: "Watsonville",
    previewUrl: "assets/images/previews/fernanda.png",
  },
  {
    memberFullName: "Eduardo Lira",
    name: "Remind Me",
    overview:
      "Its about a todo list which you can add different goals and objectives that might be in your day or week",
    repoUrl: "https://github.com/Trillducks/Remind-Me-website",
    websiteUrl: "https://trillducks.github.io/Remind-Me-website/#",
    site: "Watsonville",
    previewUrl: "assets/images/previews/eddie.png",
  },
  {
    memberFullName: "Fabian lozano",
    name: "Olymipic Country Code Search",
    overview:
      "My project is about looking up the Countries that participated in the Olymipics as well with their Ioc code next to it",
    repoUrl: "https://github.com/FabianDLozano/Olymipic_Country-Code_Search",
    websiteUrl: "https://fabiandlozano.github.io/Olymipic_Country-Code_Search/",
    site: "Salinas",
    previewUrl: "assets/images/previews/fabian.png",
  },
  {
    memberFullName: "Sergio Jesus Medina-Ixta",
    name: "The World of Sergio",
    overview:
      "My Website is a showcase of all the things that surround me on a daily basis.",
    repoUrl: "https://github.com/17sergio/S24-The-World-of-Sergio",
    websiteUrl: "https://17sergio.github.io/S24-The-World-of-Sergio/index.html",
    site: "Watsonville",
    previewUrl: "assets/images/previews/sergio.png",
  },
  {
    memberFullName: "Cesar Zagal",
    name: "Apollo 11",
    overview: "It is a website where you buy collectables",
    repoUrl: "https://github.com/CesarZagal2004/website-template",
    websiteUrl: "https://cesarzagal2004.github.io/website-template/>",
    site: "Salinas",
    previewUrl: "assets/images/previews/cesar.png",
  },
  {
    memberFullName: "Alberto Zamora",
    name: "Gallery Stuff",
    overview: "STUFF I find intresting.",
    repoUrl: "https://github.com/AlbertoZamora831/Gallary_Stuff",
    websiteUrl: "https://albertozamora831.github.io/Gallery_Stuff/",
    site: "Watsonville",
    previewUrl: "assets/images/previews/alberto.png",
  },
  {
    memberFullName: "Xavier Perez",
    name: "Yeezy Storefront",
    overview: "Recreated canceled yeezy store website",
    repoUrl: "https://github.com/Hyperfastcat/yeezy/tree/main",
    websiteUrl: "https://hyperfastcat.github.io/yeezy/index.html",
    site: "Watsonville",
    previewUrl: "assets/images/previews/xavier.png",
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
