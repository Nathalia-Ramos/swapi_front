const getFilms = async (searchTerm) => {
    try {
        const films = await $.ajax(`http://localhost:3000/films`);

        $('#films').empty();

        films.forEach(film => {
            if (!searchTerm || film.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                $('#films').append(`
                    <div class="card">
                        <div class="card-img">
                            <img src="">
                        </div>
                        <div class="card-content">
                            <h2>${film.title}</h2>
                            <p>${film.producer}</p>
                            <p>${film.release_date}</p>
                        </div>
                    </div>
                `);
            }
        })

    } catch (error) {
        console.log(error);
    }
}

$(document).ready(async function () {

    const loadFilms = async (searchTerm) => {
        try {
            await getFilms(searchTerm);
        } catch (error) {
            console.error("Erro ao obter filmes:", error);
        }
    };
    
    $("#searchInput").on('input', async function () {
        const userInput = $(this).val();
        console.log("Usuário digitou:", userInput);
        await loadFilms(userInput);
    });

    $("#btnFilms").click(async function (event) {
        event.preventDefault();
        window.location.href = "src/pages/films.html";
        await loadFilms();
    });

    $("#btnSearch").click(async function (event) {
        event.preventDefault();

        const searchTerm = $("#searchInput").val();
        console.log(searchTerm);
        await loadFilms(searchTerm);
    });


});