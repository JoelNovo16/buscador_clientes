$(document).ready(function() {
    const clientes = [
        { nombre: "Juan Perez", descripcion: "Cliente desde que su madre le obligo", imagen: "img1.jfif" },
        { nombre: "Maria Lopez", descripcion: "Cliente desde los tiempos mas remotos", imagen: "img2.jfif" },
        { nombre: "Angel panita", descripcion: "Cliente desde siempre", imagen: "img6.jfif" },
        { nombre: "Carlos Martinez", descripcion: "Cliente desde hoxe", imagen: "img5.jfif" },
        { nombre: "Azucena segunda", descripcion: "Cliente desde ayer", imagen: "img3.jfif" },
        { nombre: "Noel plantas", descripcion: "Cliente desde que le obligamos", imagen: "img4.jfif" }
    ];

    function displayClients(listaClientes) {
        const resultsContainer = $('#resultado');
        resultsContainer.empty();

        listaClientes.forEach(cliente => {
            const listaItem = $('<li class="cliente">').html(`
                <img src="${cliente.imagen}" alt="${cliente.nombre}">
                <div>
                    <p>${cliente.nombre}</p>
                    <p>${cliente.descripcion}</p>
                </div>
            `);
            resultsContainer.append(listaItem);
        });
    }
 
    displayClients(clientes);

    $('#buscador').on('input', function() {
        const buscar = $(this).val().toLowerCase();
        const filtrarClientes = clientes.filter(cliente => cliente.nombre.toLowerCase().includes(buscar));
        displayClients(filtrarClientes);
    });
});

