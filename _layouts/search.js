async function fetchPosts() {
    const response = await fetch("{{ site.baseurl }}/search.json");
    return await response.json();
}

async function searchPosts() {
    const searchBox = document.getElementById("search-box");
    const searchResults = document.getElementById("search-results");
    const query = searchBox.value.toLowerCase();
    const posts = await fetchPosts();

    searchResults.innerHTML = "";
    if (query.length < 2) return;

    posts.forEach(post => {
        if (post.title.toLowerCase().includes(query) || post.content.toLowerCase().includes(query)) {
            let li = document.createElement("li");
            li.innerHTML = `<a href="${post.url}">${post.title}</a>`;
            searchResults.appendChild(li);
        }
    });
}

document.getElementById("search-box").addEventListener("input", searchPosts);
