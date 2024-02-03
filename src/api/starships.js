const getStarships = async (page = 1) => {
    try {
        const data = await $.ajax(`http://localhost:3000/starships?page=${page}`);

        $('#starships').empty();

        data.forEach(starship => {
            console.log(starship);
            $('#starships').append(`
                <tr>
                    <td>${starship.name}</td>
                    <td>${starship.model}</td>
                    <td>${starship.manufacturer}</td>
                    <td>${starship.cost_in_credits}</td>
                    <td>${starship.length}</td>
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

    const loadStarships = async () => {
        try {
            await getStarships(currentPage);
        } catch (error) {
            console.error("Erro ao obter naves:", error);
        }
    };

    try {
        await loadStarships();
    } catch (error) {
        console.error("Erro ao obter naves:", error);
    }

    $("#btnStarships").click(function (event) {
        event.preventDefault();
        window.location.href = "src/pages/starships.html";
    });

    $("#btnNextPage").click(async function (event) {
        event.preventDefault();
        try {
            currentPage++;
            await getStarships(currentPage);
        } catch (error) {
            console.error("Erro ao obter naves:", error);
        }
    });

    $("#btnPrevPage").click(async function (event) {
        event.preventDefault();
        try {
            if (currentPage > 1) {
                currentPage--;
                await getStarships(currentPage);
            }
        } catch (error) {
            console.error("Erro ao obter naves:", error);
        }
    });
});
