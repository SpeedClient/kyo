document.addEventListener("DOMContentLoaded", () => {
  const featuredArticles = [
    
    
  ];

  const container = document.querySelector(".grid.md\\:grid-cols-3");
  featuredArticles.forEach((article, index) => {
    const delay = 0.8 + index * 0.2;
    const card = document.createElement("div");
    card.className = "bg-[#0b0d1a] rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.01] animate-fadeInUp";
    card.style.animationDelay = `${delay}s`;

    card.innerHTML = `
      <div class="relative">
        <img src="${article.image}" alt="${article.title}" class="w-full h-48 object-cover opacity-60">
        <span class="absolute top-2 left-2 bg-[#00f2d3] text-black text-xs font-semibold px-3 py-1 rounded-full">
          ${article.category}
        </span>
      </div>
      <div class="p-5">
        <h3 class="text-lg font-semibold text-white mb-2">${article.title}</h3>
        <p class="text-[#8f8f8f] text-sm mb-4">${article.description}</p>
        <div class="flex justify-between items-center text-[#6f6f6f] text-xs">
          <span>📅 ${article.date}</span>
          <span>⏱️ ${article.readTime}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  // Subscription mock
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector("input[type='email']").value;
    alert(`Subscribed: ${email}\nWe’ll contact you via: Behinsam23@gmail.com`);
    form.reset();
  });
});
