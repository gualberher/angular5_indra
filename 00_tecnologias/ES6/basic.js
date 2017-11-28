let data = [{precio:12},{precio:14},{precio:19}];

// data.forEach(function(elem){elem.precio++})
// data.forEach(elem => elem.precio++)

data.forEach(elem => {
    if (true){
        const iva = 1.16
        let preciofinal = elem.precio * iva

        console.log(`oferta: El precio final es ${preciofinal}`);
    }

    //  console.log(iva);
    
});