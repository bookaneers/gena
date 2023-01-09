function getDOC0543() {

    // NEEDS TO CHANGE FIELDS NAMES

    const addFields = document.createElement('div');
    addFields.setAttribute('class', 'label-column');
    
    const desc = document.createElement('input');
    desc.setAttribute('class', 'DOC0543');
    desc.setAttribute('name', 'desc');
    desc.setAttribute('placeholder', '');
    desc.setAttribute('maxlength', 25);

    const unitnum = document.createElement('input');
    unitnum.setAttribute('class', 'DOC0543');
    unitnum.setAttribute('name', 'unitnum');
    unitnum.setAttribute('placeholder', '');
    unitnum.setAttribute('maxlength', 8);

    addFields.appendChild(desc);
    addFields.appendChild(unitnum);

    return addFields;
}