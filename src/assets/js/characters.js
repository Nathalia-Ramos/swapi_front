$(document).ready(async function() {
    try {
         await getCharacters();
    } catch (error) {
        console.error("Erro ao obter personagens:", error);
    }
});
