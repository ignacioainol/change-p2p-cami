const dataOptions = [
    { "alumno": "sebastin poton" },
    { "alumno": "camila braile" },
    { "alumno": "anibal person jana" },
    { "alumno": "el loco igna" },
    { "alumno": "el miki" },
    { "alumno": "cefalopodo" }
]

$(document).ready(function () {
    const selectUno = document.querySelector('#dropdownUno');
    const selectDos = document.querySelector('#dropdownDos');
    dataOptions.forEach(data => {
        const opcion = document.createElement('option');
        opcion.value = data.alumno;
        opcion.textContent = data.alumno;
        selectUno.appendChild(opcion);
    });

    selectUno.addEventListener('change', onChangeOne);
    selectDos.addEventListener('change', onChangeTwo);


    function onChangeOne(e) {
        cleanOptions(selectDos);
        const valueSelected = e.target.value;

        dataOptions.forEach(data => {
            const opcion = document.createElement('option');

            if (valueSelected == data.alumno) {
                opcion.selected = "true";
            }

            opcion.value = data.alumno;
            opcion.textContent = data.alumno;
            selectDos.appendChild(opcion);
        })

    }

    function onChangeTwo(e) {
        cleanOptions(selectUno);
        const valueSelected = e.target.value;

        dataOptions.forEach(data => {
            const opcion = document.createElement('option');

            if (valueSelected == data.alumno) {
                opcion.selected = "true";
            }

            opcion.value = data.alumno;
            opcion.textContent = data.alumno;
            selectUno.appendChild(opcion);
        })

    }

    function cleanOptions(elemento) {
        while (elemento.firstChild) {
            elemento.firstChild.remove();
        }
    }

})