class Tarea {
    constructor(descripcion, fecha, hora) {
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.hora = hora;
        this.realizada = false;
    }
}

let Tareas = [];

let option = prompt("Bienvenido a 'Remember Me'! Ingrese la opción deseada:\n 1. Agregar una nueva tarea.\n 2. Ver tareas pendientes.\n 3. Marcar como Realizada una tarea.\n 4. Eliminar una Tarea.\n 0. Presione 0 para Salir");

let agregarTarea = () => {
    let descripcion = prompt("Ingrese la descripción de la tarea:");
    let fecha = prompt("Ingrese la fecha de la tarea (formato: DD/MM/AAAA):");
    let hora = prompt("Ingrese la hora de la tarea (formato: HH:MM):");
    let tarea = new Tarea(descripcion, fecha, hora);
    Tareas.push(tarea);
    alert("Tarea agregada correctamente.");
}

let verTareas = () => {
    if (Tareas.length === 0) {
        alert("No hay tareas pendientes.");
        return;
    }
    let pendientes = "Tareas pendientes:\n";
    Tareas.forEach((tarea, index) => {
        pendientes += `${index + 1}. Descripción: ${tarea.descripcion}\nFecha: ${tarea.fecha}\nHora: ${tarea.hora}${tarea.realizada ? " - Realizada\n\n" : "\n\n"}`;
    });
    alert(pendientes);
}

let marcarRealizada = () => {
    if (Tareas.length === 0) {
        alert("No hay tareas pendientes para marcar como realizada.");
        return;
    }
    
    let mensaje = "Tareas pendientes:\n";
    Tareas.forEach((tarea, index) => {
        mensaje += `${index + 1}. ${tarea.descripcion}\n`;
    });
    mensaje += "\nIngrese el número de la tarea que desea marcar como realizada:";

    let numeroTarea = parseInt(prompt(mensaje));

    if (!isNaN(numeroTarea) && numeroTarea >= 1 && numeroTarea <= Tareas.length) {
        let index = numeroTarea - 1;
        Tareas[index].realizada = true;
        alert(`Tarea '${Tareas[index].descripcion}' marcada como realizada.`);
    } else {
        alert("Número de tarea no válido.");
    }
}

let eliminarTarea = () => {
    if (Tareas.length === 0) {
        alert("No hay tareas pendientes para eliminar.");
        return;
    }

    let mensaje = "Tareas pendientes:\n";
    Tareas.forEach((tarea, index) => {
        mensaje += `${index + 1}. ${tarea.descripcion}${tarea.realizada ? " - Realizada\n" : "\n"}`;
    });
    mensaje += "\nIngrese el número de la tarea que desea eliminar:";
    
    let numeroTarea = parseInt(prompt(mensaje));

    if (!isNaN(numeroTarea) && numeroTarea >= 1 && numeroTarea <= Tareas.length) {
        let index = numeroTarea - 1;
        let tareaEliminada = Tareas.splice(index, 1);
        alert(`Tarea '${tareaEliminada[0].descripcion}' eliminada correctamente.`);
    } else {
        alert("Número de tarea no válido.");
    }
}

while (option !== "0") {
    switch (option) {
        case "1":
            agregarTarea();
            break;
        case "2":
            verTareas();
            break;
        case "3":
            marcarRealizada();
            break;
        case "4":
            eliminarTarea();
            break;
        default:
            alert("Opción no válida.");
    }

    option = prompt(`Ingrese una opción válida:\n1. Agregar una nueva tarea.\n2. Ver tareas pendientes.\n3. Marcar como Realizada una tarea.\n4. Eliminar una Tarea.\n0. Presione 0 para Salir`);
}