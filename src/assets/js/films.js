$(document).ready(async function() {
    try {
         return await getFilms();
    } catch (error) {
        console.error("Erro ao obter filmes:", error);
    }
});
