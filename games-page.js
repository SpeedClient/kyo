// games.js

const gamesData = [
    {
        title: "How AI is Reshaping Investment Strategies in 2025",
        category: "Artificial Intelligence",
        author: "Jane Doe",
        date: "July 28, 2025",
        readTime: "7 min read",
        content: "Explore how AI is transforming traditional investment models and reshaping strategies.",
    },
    {
        title: "The Rise of DeFi: Beyond the Hype",
        category: "Decentralized Finance",
        author: "John Smith",
        date: "July 25, 2025",
        readTime: "10 min read",
        content: "Understanding the key principles and implications of decentralized finance.",
    },
    {
        title: "The Creator Economy: Monetizing Your Passion",
        category: "Future of Work",
        author: "Emily White",
        date: "July 22, 2025",
        readTime: "8 min read",
        content: "How platforms empower individuals to build businesses around their passions.",
    },
    {
        title: "Understanding Layer 2 Scaling Solutions for Ethereum",
        category: "Blockchain",
        author: "Alex Johnson",
        date: "July 20, 2025",
        readTime: "12 min read",
        content: "From Rollups to Sidechains, we break down the technologies making Ethereum faster and cheaper to use.",
    },
    {
        title: "Protecting Your Digital Assets in a Web3 World",
        category: "Cybersecurity",
        author: "Samantha Chen",
        date: "July 18, 2025",
        readTime: "9 min read",
        content: "Best practices for securing your crypto wallets, NFTs, and digital identity against emerging threats.",
    },
    {
        title: "The Future of VC: Trends Shaping Startup Funding",
        category: "Venture Capital",
        author: "David Lee",
        date: "July 15, 2025",
        readTime: "11 min read",
        content: "How venture capital is evolving with DAOs, community funding, and globalized talent pools.",
    },
    {
        title: "Generative AI and its Impact on Creative Industries",
        category: "Artificial Intelligence",
        author: "Anna Rivera",
        date: "July 12, 2025",
        readTime: "9 min read",
        content: "Exploring how tools like DALL-E 3 and GPT-4 are transforming art, design, and content creation.",
    },
    {
        title: "Real-World Asset Tokenization on DeFi",
        category: "Decentralized Finance",
        author: "John Smith",
        date: "July 10, 2025",
        readTime: "13 min read",
        content: "The bridge between traditional finance and DeFi is here. Learn how real estate, bonds, and more are coming on-chain.",
    },
    {
        title: "Investing in Sustainability: The Rise of Green Tech",
        category: "Green Tech",
        author: "Maria Garcia",
        date: "July 5, 2025",
        readTime: "10 min read",
        content: "Discover the technologies and companies building a sustainable future — and how you can be a part of it.",
    }
];


const gamesContainer = document.getElementById("games");


function renderArticles() {   
    gamesContainer.innerHTML = "";
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