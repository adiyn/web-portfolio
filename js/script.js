const projects = ["shifumi", "memory"];
const container = document.getElementById("popup-project-list");

projects.forEach(name => {
    const link = document.createElement("a");
    link.classList.add("btn");
    link.href = `./${name}/`;
    link.textContent = name.toUpperCase();
    container.appendChild(link);
});

function minimize () {

}