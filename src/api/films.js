const getFilms = async (searchTerm) => {
    try {
        const films = await $.ajax(`http://localhost:4000/films`);

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
    let searchTerm = ''; 
    const loadFilms = async () => {
        try {
            await getFilms(searchTerm);
        } catch (error) {
            console.error("Erro ao obter filmes:", error);
        }
    };

    $("#searchInput").on('input', function () {
        searchTerm = $(this).val();
        console.log("Usuário digitou:", searchTerm);
    });

    $("#btnFilms").click(async function (event) {
        event.preventDefault();
        window.location.href = "src/pages/films.html";
        await loadFilms();
    });

    $("#btnSearch").click(async function (event) {
        event.preventDefault();
    
        const searchTerm = $("#searchInput").val() || '';
    
        try {
            $.ajax({
                url: 'http://localhost:4000/search_film', 
                method: 'POST', 
                data: JSON.stringify({ search: searchTerm }), 
                contentType: 'application/json', 
                dataType: 'json',
                success: function (response) {
                    console.log('Dados enviados com sucesso:', response);
                },
                error: function (error) {
                    console.error('Erro ao enviar dados:', error);
                }
            });
            
        } catch (error) {
            console.error('Error:', error);
        }
    
        await loadFilms();
    });
    
});
