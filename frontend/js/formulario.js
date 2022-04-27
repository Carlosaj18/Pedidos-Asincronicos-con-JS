
window.onload = () => {

    let editar = document.querySelector('.botonModificar');
    let crear = document.querySelector('.botonAgregar');
    let eliminar = document.querySelector('.botonBorrar');
    let id = document.getElementById('id');
    let title = document.getElementById('title');
    let rating = document.getElementById('rating');
    let awards = document.getElementById('awards');
    let release_date = document.getElementById('release_date');
    let length = document.getElementById('length');
    let genero = document.getElementById('genero');
    let idPelicula = 1;

    fetch(`http://localhost:3031/api/movies/${idPelicula}`)
        .then(elemento => elemento.json())
        .then(function(pelicula) {

            let data = pelicula.data;
            
            // console.log(data)
            console.log(data.id)
            title.value = data.title,
            rating.value = data.rating,
            awards.value = data.awards,
            release_date.value = data.release_date
            // release_date.value = date = new Date(pelicula.data.release_date).toISOString().slice(0, 10);
            length.value = data.length,
            genre_id.value = data.genre_id
        })

        //document.getElementById("title").value = data.title;
        //document.getElementById("rating").value = parseFloat(data.rating);

    editar.addEventListener('click', function(e) {

        // console.log(e);
        // Tomar el id desde el card 

        document.querySelector(".botonModificar").addEventListener("click", function () {
            fetch("http://localhost:3031/api/movies/update/1/", {
            method: "PUT",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                title: document.getElementById("title").value, 
                rating: parseFloat(document.getElementById("rating").value),
                awards: document.getElementById("awards").value,
                release_date: document.getElementById("release_date").value,
                length: document.getElementById("length").value,
                genre_id: 5
                }),
            })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            });
        });

    })

    crear.addEventListener('click', function(e) {

        //console.log(e);
    
        let pelicula = {
            title: title.value,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        }

        fetch('http://localhost:3031/api/movies/create', {
            method: POST, 
            body: JSON.stringify(pelicula),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }}) // Conecto el API
  
        .then(elemento => elemento.json()) // 
        .then(function (pelicula) {

            console.log("Se creo la pelicula ", pelicula);
        
        })


    });

    eliminar.addEventListener('click', function(e) {

        console.log(e);

        });

}
