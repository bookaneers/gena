function getDOC0417() {

    const addFields = document.createElement('div');
    addFields.setAttribute('class', 'label-column');
    
    const vendorPN = document.createElement('input');
    vendorPN.setAttribute('class', 'DOC0417');
    vendorPN.setAttribute('name', 'vendor-pn');
    vendorPN.setAttribute('placeholder', 'Vendor P.N.:');
    vendorPN.setAttribute('maxlength', 25);

    const freight = document.createElement('input');
    freight.setAttribute('class', 'DOC0417');
    freight.setAttribute('name', 'freight');
    freight.setAttribute('placeholder', 'Freight Pol:');
    freight.setAttribute('maxlength', 15);

    const pkg = document.createElement('input');
    pkg.setAttribute('class', 'DOC0417');
    pkg.setAttribute('name', 'pkg');
    pkg.setAttribute('placeholder', 'Pkg Qty');
    pkg.setAttribute('maxlength', 4); 

    const time = document.createElement('input');
    time.setAttribute('class', 'DOC0417');
    time.setAttribute('name', 'time');
    time.setAttribute('placeholder', 'Lead Time:');
    time.setAttribute('maxlength', 15);

    const notes = document.createElement('input');
    notes.setAttribute('class', 'DOC0417');
    notes.setAttribute('name', 'notes');
    notes.setAttribute('placeholder', 'Notes:');
    notes.setAttribute('maxlength', 40);

    addFields.appendChild(vendorPN);
    addFields.appendChild(freight);
    addFields.appendChild(pkg);
    addFields.appendChild(time);
    addFields.appendChild(notes);

    return addFields;
}