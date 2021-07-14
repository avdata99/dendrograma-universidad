function generateTree(array, id, level, office) {
    return _.map(getSubordinates(array, id), function (element) {
            var myOffice;
            if(office || level == 0){
                myOffice = office;
            } else {
                myOffice = element.nombre;
            }
            var children = generateTree(array, element.id, level + 1, myOffice);
            var person = createPerson(element, children, level);
            person.nombre = myOffice;
            return person;
        }
    );
}

function createPerson(person, children, level) {
    var nombre = person.nombre;
    var photo = person.foto;
    var tipo = person.tipo;
    var link = person.url;
    if (children.length != 0) {
        return {
            name: nombre,
            photo: photo,
            tipo: tipo,
            children: children,
            size: level,
            link: link,
            data: person
        };
    } else {
        return {name: nombre, photo: photo, tipo: tipo, size: level, link: link, data: person};
    }
}

function getSubordinates(array, id) {
    return _.filter(array, function(person) {
        if (person.depende_de == "") 
            person.depende_de = null;
        return person.depende_de == id;
    });
}
