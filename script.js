const searchForm = document.getElementById("searchForm");
const usernameInput = document.getElementById("username");
const userInfoDiv = document.getElementById("userInfo");

searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = usernameInput.value.trim();
    // Utilisez ici l'API GitHub pour rechercher l'utilisateur par son nom d'utilisateur
    // Mettez à jour la 'userInfoDiv' avec les informations de l'utilisateur trouvé
});
