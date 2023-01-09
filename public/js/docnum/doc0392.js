function getDOC0392() {

    // NEEDS TO CHANGE FIELDS NAMES

    const addFields = document.createElement('div');
    addFields.setAttribute('class', 'label-column');
    
    const part = document.createElement('input');
    part.setAttribute('class', 'DOC0392');
    part.setAttribute('name', 'part');
    part.setAttribute('placeholder', 'PN#');
    part.setAttribute('maxlength', 25);

    const desc = document.createElement('input');
    desc.setAttribute('class', 'DOC0392');
    desc.setAttribute('name', 'desc');
    desc.setAttribute('placeholder', 'DESCRIPTION');
    desc.setAttribute('maxlength', 40);

    const qty = document.createElement('input');
    qty.setAttribute('class', 'DOC0392');
    qty.setAttribute('name', 'qty');
    qty.setAttribute('placeholder', 'QTY');
    qty.setAttribute('maxlength', 4); 

    const vendor = document.createElement('input');
    vendor.setAttribute('class', 'DOC0392');
    vendor.setAttribute('name', 'vendor');
    vendor.setAttribute('placeholder', 'VENDOR');
    vendor.setAttribute('maxlength', 25);

    addFields.appendChild(part);
    addFields.appendChild(desc);
    addFields.appendChild(qty);
    addFields.appendChild(vendor);

    return addFields;
}