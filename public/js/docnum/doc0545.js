function getDOC0545() {

    const addFields = document.createElement('div');
    addFields.setAttribute('class', 'label-column');
    
    const desc = document.createElement('input');
    desc.setAttribute('class', 'DOC0545');
    desc.setAttribute('name', 'desc');
    desc.setAttribute('placeholder', '');
    desc.setAttribute('maxlength', 30);

    const unitnum = document.createElement('input');
    unitnum.setAttribute('class', 'DOC0545');
    unitnum.setAttribute('name', 'unitnum');
    unitnum.setAttribute('placeholder', '');
    unitnum.setAttribute('maxlength', 8);

    addFields.appendChild(desc);
    addFields.appendChild(unitnum);

    return addFields;
}