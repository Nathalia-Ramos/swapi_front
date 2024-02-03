$(document).ready(async function() {
    try {
         await getStarships();
    } catch (error) {
        console.error("Erro ao obter naves:", error);
    }
});
