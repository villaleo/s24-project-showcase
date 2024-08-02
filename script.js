const memberProjects = [];

const salinasRow = document.getElementById("salinas-row");
const watsonvilleRow = document.getElementById("watsonville-row");

for (const project of memberProjects) {
  appendProjectToSite(project);
}

const searchbar = document.getElementById("searchbar");
searchbar.focus();
searchbar.addEventListener("keyup", search);

function appendProjectToSite(project) {
  const projectColumn = `
    <div class="col-11 col-sm-6 col-lg-4 p-2">
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
              alt="A preview of ${project.memberFullName}'s website."
            />
            <h5 class="card-title clamp-line-1 mt-2">${project.name}</h5>
            <p class="clamp-line-2">${project.overview}</p>
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
