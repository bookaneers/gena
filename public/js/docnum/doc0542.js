function getDOC0542() {

    const addFields = document.createElement('div');
    addFields.setAttribute('class', 'label-column');
    
    const name = document.createElement('input');
    name.setAttribute('class', 'DOC0542');
    name.setAttribute('name', 'username');
    name.setAttribute('placeholder', '');
    name.setAttribute('maxlength', 20);

    const password = document.createElement('input');
    password.setAttribute('class', 'DOC0542');
    password.setAttribute('name', 'password');
    password.setAttribute('placeholder', '');
    password.setAttribute('maxlength', 20);

    addFields.appendChild(name);
    addFields.appendChild(password);

    return addFields;
}