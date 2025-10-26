const projects = [
  {
    title: "AgencyPro Landing",
    desc: "High-converting website for agencies with premium UI and animations.",
    img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop",
    url: "https://tuonome.github.io/landing-demo-1/"
  },
  // 👇 aggiungi qui le prossime landing
];

document.getElementById("year").textContent = new Date().getFullYear();

const grid = document.getElementById("projects-grid");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${project.img}" alt="${project.title}">
    <div class="card-content">
      <div class="card-title">${project.title}</div>
      <div class="card-desc">${project.desc}</div>
      <a href="${project.url}" class="btn" target="_blank">View Project</a>
    </div>
  `;
  grid.appendChild(card);
});
