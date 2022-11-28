function ingresarDatos(){
    alert ("Hola! Soy AisOne. ¿Estas preparad@ para subir de nivel tus canciones?");
    let nombre = prompt ("como te gustaria que te llamemos?");
    let localidad = prompt ("¿De donde sos? Queremos saber de donde viene ese talento.");
    let telefono = prompt ("¿quieres darnos tu numero de telefono para que podamos conocernos mejor?");
    let mail = prompt ("Y por último necesito tu mail para poder enviarte mas info");
        while (nombre === "" || localidad === "" || telefono === "" || mail === ""){
            nombre = prompt ("¿como te gustaria que te llamemos?");
            localidad = prompt ("¿De donde sos? Queremos saber de donde viene ese talento.");
            telefono = prompt ("¿quieres darnos tu numero de telefono para que podamos conocernos mejor?");
            mail = prompt ("Y por último necesito tu mail para poder enviarte mas info");
    }
    console.log ("cliente: " + nombre + ", " + localidad + ", " + "datos de contacto: " + telefono + ", " + mail)
    alert ("Genial " + nombre + " " + "comencemos a producir ")
}

/*let Productos = [producto1, producto2, producto3];*/

class Producto {
    constructor(mezcla, mastering, instrumental) {
        this.mezcla = mezcla;
        this.mastering = mastering;
        this.instrumental = instrumental;
    }
}

const productos = [];
productos.push(new Producto ("mezcla", "1500"));
productos.push(new Producto ("mastering", "1200"));
productos.push(new Producto ("instrumental", "3000"));


function indumentariaProduccion(){
    let menu;
    do{ 
        menu = prompt (
            "Estos son los tipos de producciones que tenemos para vos (ingresa sólo el número): \n 1.Mezcla \n 2.Mezcla y Mastering \n 3.Instrumental \n 4.Instrumental, Mezcla y Mastering \n 5.Salir"
            )
    }while (menu != 1 && menu!=2 && menu!=3 && menu!=4 && menu!=5)
    switch (parseInt (menu)) {
        case 1:
            return "Mezcla";
        case 2:
            return "Mezcla y Mastering";
        case 3:
            return "Instrumental";
        case 4:
            return "Instrumental, Mezcla y Mastering";
        case 5:
            return "Salida";
        }
    }
function validarPrecio (estilo) {
    if (estilo === "Mezcla") {
        return 1500;
    }
    else if (estilo === "Mezcla y Mastering") {
        return 2700;
    }
    else if (estilo === "Instrumental") {
        return 3000;
    }
    else if (estilo === "Instrumental, Mezcla y Mastering") {
        return 5000;
    }
    else if (estilo === "Salida"){
        return 0;
    }
    else {
        alert ("La opción seleccionada no es válida")
    }
}
function cobro (nombre,precio) {
    if (precio !=0){
    alert ("Elegiste el " + nombre + "\nvalor: $" + precio);
    let pago = parseInt (prompt ("¿Con cuanto vas a abonar?"))
    if (pago >= precio ) {
        alert ("Gracias por confiar en mi, tu vuelto va a ser de " + "$" + (pago - precio) + ", " + "nos vamos a estar comunicando con vos para los detalles del envío. Si no recibis un mensaje en las próximas 24hs por favor comunicate por nuestras redes sociales")
    }
    else {
        alert ("No te alcanza para tu pedido, pero igual podés abonar por otros medios de pago. Escribinos a nuestas redes")
    }
    }
}
ingresarDatos ();
let menuDatos = indumentariaProduccion ();
let menuPrecio = validarPrecio (menuDatos);
cobro (menuDatos, menuPrecio);