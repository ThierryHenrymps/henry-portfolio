const projectData = {
  agtstock: {
    title: "AGTStock", lead: "Sistema de controle de estoque para facilitar o acompanhamento de produtos e movimentações.",
    description: "O AGTStock é um projeto acadêmico voltado para o controle de estoque. A proposta é centralizar informações dos produtos e deixar mais simples acompanhar quantidades, entradas, saídas e relatórios. A aplicação utiliza uma API backend para organizar os dados e as regras do sistema.",
    features: ["Cadastro e gerenciamento de produtos.", "Acompanhamento de quantidades e movimentações de estoque.", "Organização das funções por categorias e perfis de acesso.", "Estrutura backend com Spring Boot e persistência em banco de dados."],
    learning: "Prática com Java, Spring Boot, estruturação de API REST, banco de dados, Git e levantamento de requisitos usando UML.",
    category: "Sistema de gestão", tags: ["Java", "Spring Boot", "REST API", "SQL", "Git"], status: "Em desenvolvimento",
    github: "https://github.com/ThierryHenrymps/Projeto-AGTstock.git", linkedin: "https://www.linkedin.com/", cover: "AGTStock"
  },
  vickbooks: {
    title: "VickBooks", lead: "Uma plataforma web para encontrar, organizar e baixar livros digitais.",
    description: "O VickBooks é uma plataforma de livros digitais pensada para ajudar usuários a encontrar títulos e organizar suas leituras. O projeto conta com backend em Java e Spring Boot, persistência de dados e recursos de autenticação para áreas que precisam de acesso à conta.",
    features: ["Listagem e busca de livros por título ou autor.", "Sistema de favoritos.", "Autenticação de usuários com JWT.", "Acesso a capas e download de arquivos digitais."],
    learning: "Prática com APIs REST, Spring Boot, autenticação JWT, integração entre frontend e backend, banco de dados e publicação de aplicação.",
    category: "Plataforma web", tags: ["Java", "Spring Boot", "JWT", "PostgreSQL", "JavaScript"], status: "Em desenvolvimento",
    github: "https://github.com/ThierryHenrymps/VickBook.git", linkedin: "https://www.linkedin.com/", cover: "VickBooks"
  }
};
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => navMenu.classList.toggle("open"));
    navMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => navMenu.classList.remove("open")));
  }
  if (!document.getElementById("detailTitle")) return;
  const id = new URLSearchParams(window.location.search).get("id") || "agtstock";
  const p = projectData[id] || projectData.agtstock;
  document.title = `${p.title} | Henry Silva`;
  document.getElementById("detailTitle").innerHTML = `${p.title}<span class="gradient-text">.</span>`;
  document.getElementById("detailEyebrow").textContent = `PROJETO / ${p.category.toUpperCase()}`;
  document.getElementById("detailLead").textContent = p.lead;
  document.getElementById("detailDescription").textContent = p.description;
  document.getElementById("detailLearning").textContent = p.learning;
  document.getElementById("detailCategory").textContent = p.category;
  document.getElementById("detailStatus").textContent = p.status;
  document.getElementById("coverTitle").innerHTML = `${p.cover}<span>.</span>`;
  document.getElementById("detailFeatures").innerHTML = p.features.map(item => `<li>${item}</li>`).join("");
  document.getElementById("detailTags").innerHTML = p.tags.map(tag => `<span>${tag}</span>`).join("");
  document.getElementById("githubLink").href = p.github;
  document.getElementById("linkedinLink").href = p.linkedin;
});