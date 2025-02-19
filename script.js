document.addEventListener("DOMContentLoaded", function () {
    const movies = [
        {
            title: "Patton Oswalt: Annihilation",
            year: 2017,
            duration: "1 hr 6 min",
            genre: "Uncategorized",
            rating: 7.4,
            video: "https://www.youtube.com/embed/4hZi5QaMBFc"
        },
        {
            title: "New York Doll",
            year: 2005,
            duration: "1 hr 15 min",
            genre: "Documentary Music",
            rating: 7.9,
            video: "https://www.youtube.com/embed/a7oHhHGzf3w"
        },
        {
            title: "Mickey’s Magical Christmas",
            year: 2001,
            duration: "1 hr 5 min",
            genre: "Adventure Animation Comedy",
            rating: 6.8,
            video: "https://www.youtube.com/embed/UlxH3aJOZvs"
        },
        {
            title: "And Then I Go",
            year: 2017,
            duration: "1 hr 39 min",
            genre: "Drama",
            rating: 7.6,
            video: "https://www.youtube.com/embed/LFKu_zbddXA"
        },
        {
            title: "Inception",
            year: 2010,
            duration: "2 hr 28 min",
            genre: "Action Sci-Fi Thriller",
            rating: 8.8,
            video: "https://www.youtube.com/embed/YoHD9XEInc0"
        },
        {
            title: "The Dark Knight",
            year: 2008,
            duration: "2 hr 32 min",
            genre: "Action Crime Drama",
            rating: 9.0,
            video: "https://www.youtube.com/embed/EXeTwQWrcwY"
        },
        {
            title: "Interstellar",
            year: 2014,
            duration: "2 hr 49 min",
            genre: "Adventure Drama Sci-Fi",
            rating: 8.6,
            video: "https://www.youtube.com/embed/zSWdZVtXT7E"
        },
        {
            title: "Parasite",
            year: 2019,
            duration: "2 hr 12 min",
            genre: "Comedy Drama Thriller",
            rating: 8.6,
            video: "https://www.youtube.com/embed/5xH0HfJHsaY"
        },
        {
            title: "The Shawshank Redemption",
            year: 1994,
            duration: "2 hr 22 min",
            genre: "Drama",
            rating: 9.3,
            video: "https://www.youtube.com/embed/NmzuHjWmXOc"
        },
        {
            title: "Forrest Gump",
            year: 1994,
            duration: "2 hr 22 min",
            genre: "Drama Romance",
            rating: 8.8,
            video: "https://www.youtube.com/embed/bLvqoHBptjg"
        },
        {
            title: "The Godfather",
            year: 1972,
            duration: "2 hr 55 min",
            genre: "Crime Drama",
            rating: 9.2,
            video: "https://www.youtube.com/embed/eZHsmb4ezEk"
        },
        {
            title: "Pulp Fiction",
            year: 1994,
            duration: "2 hr 34 min",
            genre: "Crime Drama",
            rating: 8.9,
            video: "https://www.youtube.com/embed/s7EdQ4FqbhY"
        }
    ];

    const container = document.getElementById("movies-container");
    const searchInput = document.getElementById("search-input");
    const categoryFilter = document.getElementById("category-filter");
    const sortFilter = document.getElementById("sort-filter");
    const searchButton = document.getElementById("search-button");

    function renderMovies(filteredMovies) {
        container.innerHTML = ""; 
        filteredMovies.forEach(movie => {
            const card = document.createElement("div");
            card.className = "bg-gray-800 rounded-lg p-5 shadow-lg text-center";

            card.innerHTML = `
                <iframe class="w-full h-40 rounded-lg mb-4" src="${movie.video}" frameborder="0" allowfullscreen></iframe>
                <h3 class="text-lg font-bold">${movie.title}</h3>
                <p class="text-gray-400">${movie.year} • ${movie.duration}</p>
                <p class="text-sm text-gray-300"><strong>${movie.genre}</strong></p>
                <p class="text-yellow-400 text-lg font-semibold mt-2">⭐ ${movie.rating}</p>
                <button class="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">More info</button>
            `;

            container.appendChild(card);
        });
    }

    function filterMovies() {
        let filtered = movies;

        const searchText = searchInput.value.toLowerCase();
        if (searchText) {
            filtered = filtered.filter(movie => movie.title.toLowerCase().includes(searchText));
        }

        const selectedCategory = categoryFilter.value;
        if (selectedCategory !== "All") {
            filtered = filtered.filter(movie => movie.genre.includes(selectedCategory));
        }

        if (sortFilter.value === "rating") {
            filtered.sort((a, b) => b.rating - a.rating);
        } else if (sortFilter.value === "year") {
            filtered.sort((a, b) => b.year - a.year);
        }

        renderMovies(filtered);
    }

    searchButton.addEventListener("click", filterMovies);
    renderMovies(movies);
});
