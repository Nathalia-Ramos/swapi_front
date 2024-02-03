const getPlanets = async (page = 1) => {
    try {
        const planets = await $.ajax(`http://localhost:3000/planets?page=${page}`);

        $('#planets').empty();

        planets.forEach(planet => {
            $('#planets').append(`
                <tr>
                    <td>${planet.name}</td>
                    <td>${planet.rotation_period}</td>
                    <td>${planet.climate}</td>
                    <td>${planet.terrain}</td>
                    <td>${planet.population}</td>
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

    const loadPlanets = async () => {
        try {
            await getPlanets(currentPage);
        } catch (error) {
            console.error("Erro ao obter planetas:", error);
        }
    };

    try {
        await loadPlanets();
    } catch (error) {
        console.error("Erro ao obter planetas:", error);
    }

    $("#btnPlanets").click(function (event) {
        event.preventDefault();
        window.location.href = "src/pages/planets.html";
    });

    $("#btnNextPage").click(async function (event) {
        event.preventDefault();
        try {
            currentPage++;
            await getPlanets(currentPage);
        } catch (error) {
            console.error("Erro ao obter planetas:", error);
        }
    });

    $("#btnPrevPage").click(async function (event) {
        event.preventDefault();
        try {
            if (currentPage > 1) {
                currentPage--;
                await getPlanets(currentPage);
            }
        } catch (error) {
            console.error("Erro ao obter planetas:", error);
        }
    });
});

