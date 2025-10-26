const projects = [
  {
    title: "AgencyPro Landing",
    desc: "High-converting website for agencies with premium UI and animations.",
    img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop",
    url: "https://nextwebstudio.github.io/landing-demo-1/"
  },
  {
  title: "PulseStack — SaaS Landing",
  desc: "Dark + neon tech landing with product-led narrative, pricing, ROI and testimonials.",
  img: "https://landingi.com/wp-content/uploads/2023/02/saas-best-practices-cover-optimized.webp",
  url: "https://nextwebstudio.github.io/landing-demo-2/"
  },
  {
  title: "SoundWave Pro — Product Landing",
  desc: "Premium ecommerce landing with sticky buy bar, gallery, reviews and FAQ.",
  img: "https://landingi.com/wp-content/uploads/2023/12/Product-LPObszar-roboczy-1-1-optimized.webp",
  url: "https://nextwebstudio.github.io/landing-demo-3/"
  },
  {
  title: "EstatePrime — Lead Gen Real Estate",
  desc: "Landing immobiliare premium con lead magnet (PDF), form, social proof e FAQ.",
  img: "https://www.incomrealestate.com/sites/default/files/field/image/leadpages.png",
  url: "https://nextwebstudio.github.io/landing-demo-4/"
  }
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
