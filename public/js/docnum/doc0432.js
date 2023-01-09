function getDOC0432() {

    const addFields = document.createElement('div');
    addFields.setAttribute('class', 'label-column');
    
    const num = document.createElement('input');
    num.setAttribute('class', 'DOC0432');
    num.setAttribute('name', 'num');
    num.setAttribute('placeholder', '');
    num.setAttribute('maxlength', 5);

    addFields.appendChild(num);

    return addFields;
}