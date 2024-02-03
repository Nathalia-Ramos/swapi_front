$(document).ready(async function() {
    try {
         return await getPlanets();
    } catch (error) {
        console.error("Erro ao obter planetas:", error);
    }
});
