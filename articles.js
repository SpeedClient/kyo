
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");
let currentCategory = "All";

const articlesData = [
    {
        title: "How AI is Reshaping Investment Strategies in 2025",
        category: "Artificial Intelligence",
        author: "Jane Doe",
        date: "July 28, 2025",
        readTime: "7 min read",
        content: "Explore how AI is transforming traditional investment models and reshaping strategies.",
        image: "https://images.pexels.com/photos/6078120/pexels-photo-6078120.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=400"
    },
    {
        title: "The Rise of DeFi: Beyond the Hype",
        category: "Decentralized Finance",
        author: "John Smith",
        date: "July 25, 2025",
        readTime: "10 min read",
        content: "Understanding the key principles and implications of decentralized finance.",
        image: "https://images.pexels.com/photos/8370750/pexels-photo-8370750.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=400"
    },
    {
        title: "The Creator Economy: Monetizing Your Passion",
        category: "Future of Work",
        author: "Emily White",
        date: "July 22, 2025",
        readTime: "8 min read",
        content: "How platforms empower individuals to build businesses around their passions.",
        image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=400"
    },
    {
        title: "Understanding Layer 2 Scaling Solutions for Ethereum",
        category: "Blockchain",
        author: "Alex Johnson",
        date: "July 20, 2025",
        readTime: "12 min read",
        content: "From Rollups to Sidechains, we break down the technologies making Ethereum faster and cheaper to use.",
        image: "https://images.pexels.com/photos/8370754/pexels-photo-8370754.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=400"
    },
    {
        title: "Protecting Your Digital Assets in a Web3 World",
        category: "Cybersecurity",
        author: "Samantha Chen",
        date: "July 18, 2025",
        readTime: "9 min read",
        content: "Best practices for securing your crypto wallets, NFTs, and digital identity against emerging threats.",
        image: "https://images.pexels.com/photos/5380649/pexels-photo-5380649.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=400"
    },
    {
        title: "The Future of VC: Trends Shaping Startup Funding",
        category: "Venture Capital",
        author: "David Lee",
        date: "July 15, 2025",
        readTime: "11 min read",
        content: "How venture capital is evolving with DAOs, community funding, and globalized talent pools.",
        image: "https://images.pexels.com/photos/5668869/pexels-photo-5668869.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=400"
    },
    {
        title: "Generative AI and its Impact on Creative Industries",
        category: "Artificial Intelligence",
        author: "Anna Rivera",
        date: "July 12, 2025",
        readTime: "9 min read",
        content: "Exploring how tools like DALL-E 3 and GPT-4 are transforming art, design, and content creation.",
        image: "https://images.pexels.com/photos/16610098/pexels-photo-16610098/free-photo-of-generative-ai-texture.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=400"
    },
    {
        title: "Real-World Asset Tokenization on DeFi",
        category: "Decentralized Finance",
        author: "John Smith",
        date: "July 10, 2025",
        readTime: "13 min read",
        content: "Learn how real estate, bonds, and more are coming on-chain.",
        image: "https://images.pexels.com/photos/8370772/pexels-photo-8370772.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=400"
    },
    {
        title: "Investing in Sustainability: The Rise of Green Tech",
        category: "Green Tech",
        author: "Maria Garcia",
        date: "July 5, 2025",
        readTime: "10 min read",
        content: "Discover the technologies and companies building a sustainable future — and how you can be a part of it.",
        image: "https://images.pexels.com/photos/3769734/pexels-photo-3769734.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=400"
    }
];

function renderArticles() {
    const container = document.getElementById("articles");
    const query = searchInput.value.toLowerCase();

    container.innerHTML = "";

    const filtered = articlesData.filter(article =>
        (currentCategory === "All" || article.category === currentCategory) &&
        article.title.toLowerCase().includes(query)
    );

    filtered.forEach(article => {
        const card = document.createElement("a");
        const index = articlesData.indexOf(article) + 1;
        card.href = `./articles/article${index}.html`;
        card.className = "bg-[#0b0d1a] rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.01] block";
        card.innerHTML = `<div class="relative">
    <img src="${article.image}" alt="${article.title}" class="w-full h-48 object-cover opacity-70" />
    <span class="absolute top-2 left-2 bg-[#00f2d3] text-black text-xs font-semibold px-3 py-1 rounded-full">
      ${article.category}
    </span>
  </div>
  <div class="p-5">
    <h3 class="text-lg font-semibold text-white mb-2">${article.title}</h3>
    <p class="text-[#8f8f8f] text-sm mb-4">${article.content}</p>
    <div class="flex justify-between items-center text-[#6f6f6f] text-xs">
      <span>📅 ${article.date}</span>
      <span>⏱️ ${article.readTime}</span>
    </div>
  </div>
`;
        container.appendChild(card);
    });
}

searchInput.addEventListener("input", renderArticles);
categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        currentCategory = button.dataset.category;
        renderArticles();
    });
});

renderArticles();
