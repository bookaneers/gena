function getDOC0563() {

    const addFields = document.createElement('div');
    addFields.setAttribute('class', 'label-column');
    
    const name = document.createElement('input');
    name.setAttribute('class', 'DOC0563');
    name.setAttribute('name', 'name');
    name.setAttribute('placeholder', 'Name');
    name.setAttribute('maxlength', 20);

    addFields.appendChild(name);

    return addFields;
}