function getDOC0481() {

    const addFields = document.createElement('div');
    addFields.setAttribute('class', 'label-column');
    
    const first = document.createElement('input');
    first.setAttribute('class', 'DOC0481');
    first.setAttribute('name', 'first');
    first.setAttribute('placeholder', 'First name');
    first.setAttribute('maxlength', 25);

    const last = document.createElement('input');
    last.setAttribute('class', 'DOC0481');
    last.setAttribute('name', 'last');
    last.setAttribute('placeholder', 'Last name');
    last.setAttribute('maxlength', 25);

    addFields.appendChild(first);
    addFields.appendChild(last);

    return addFields;
}