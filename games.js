const gamesData = [ /* your articles array */];
const gamesContainer = document.getElementById("games");
const searchInput = document.getElementById("searchInput"); // your search field
const categoryButtons = document.querySelectorAll(".category-btn");
let currentCategory = "";

function renderArticles() {
    const filterText = searchInput.value.trim().toLowerCase();
    gamesContainer.innerHTML = "";

    const filtered = gamesData.filter(item => {
        const matchCat = !currentCategory || item.category === currentCategory;
        const matchSearch =
            item.title.toLowerCase().includes(filterText) ||
            item.category.toLowerCase().includes(filterText) ||
            item.content.toLowerCase().includes(filterText);
        return matchCat && matchSearch;
    });

    filtered.forEach(item => {
        const card = document.createElement("article");
        card.className =
            "bg-[#1a1f2e] hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden flex flex-col";
        card.innerHTML = `
      <div class="p-4 flex-grow flex flex-col">
        <div class="mb-2">
          <span class="text-xs bg-[#00f5c9] text-black rounded-full px-2 py-1">${item.category}</span>
        </div>
        <h2 class="text-xl font-bold mb-2">${item.title}</h2>
        <div class="text-gray-400 text-sm mb-4">
          by ${item.author} · ${item.date} · ${item.readTime}
        </div>
        <p class="text-gray-300 flex-grow">${item.content}</p>
      </div>
      <div class="p-4 pt-0 flex justify-end">
        <button class="bg-[#00f5c9] text-black rounded-full px-4 py-2 hover:bg-[#00ffd1]">
          Read More
        </button>
      </div>
    `;
        gamesContainer.appendChild(card);
    });

    if (filtered.length === 0) {
        gamesContainer.innerHTML = `<p class="text-gray-400 col-span-full text-center">No articles found.</p>`;
    }
}

// Initialize
renderArticles();

searchInput.addEventListener("input", renderArticles);
categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        categoryButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.dataset.category;
        renderArticles();
    });
});
