const getCharacters = async (page) => {
    try {
        const characters = await $.ajax(`http://localhost:4000/characters?page=${page}`);

        $('#characters').empty();

        characters.forEach(character => {
            $('#characters').append(`
                <tr>
                    <td>${character.name}</td>
                    <td>${character.height}</td>
                    <td>${character.mass}</td>
                    <td>${character.hair_color}</td>
                    <td>${character.skin_color}</td>
                </tr>
            `);
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}

$(document).ready(async function () {
    let currentPage = 1;

    const loadCharacters = async () => {
        try {
            await getCharacters(currentPage);
        } catch (error) {
            console.error("Erro ao obter characters:", error);
        }
    };

    try {
        await loadCharacters();
    } catch (error) {
        console.error("Erro ao obter characters:", error);
    }

    $("#btnCharacters").click(function (event) {
        event.preventDefault();
        window.location.href = "src/pages/characters.html";
    });

    $("#btnNextPage").click(async function (event) {
        event.preventDefault();
        try {
            currentPage++;
            await getCharacters(currentPage);
        } catch (error) {
            console.error("Erro ao obter characters:", error);
        }
    });

    $("#btnPrevPage").click(async function (event) {
        event.preventDefault();
        try {
            if (currentPage > 1) {
                currentPage--;
                await getCharacters(currentPage);
            }
        } catch (error) {
            console.error("Erro ao obter characters:", error);
        }
    });
});
