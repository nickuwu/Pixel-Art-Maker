// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    var inputHeight =  $("#inputHeight").val(); // cantidad de filas
    var inputWidth =  $("#inputWidth").val(); // cantidad de columnas
    var pixelCanvas = $("#pixelCanvas");
    pixelCanvas.html('');
    var tbdy = document.createElement('tbody');

    for (var i = 0; i < inputHeight; i++) {
        var tr = document.createElement('tr'); // crea fila
        for(var j = 0; j < inputWidth; j++){ 
            var td = document.createElement('td'); // crea columna
            tr.appendChild(td)
        }
        tbdy.appendChild(tr);
    }
    pixelCanvas.append(tbdy);
}

$( document ).ready(function() {
    $( "form" ).submit(function( event ) {
        event.preventDefault();
        makeGrid();
    });

    $('body').on('click', 'td', function () {
        var colorPicker = $("#colorPicker").val(); //obtiene color
        console.log(colorPicker);
        $(this).css("background-color", colorPicker);
    });
});

