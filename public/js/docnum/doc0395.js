function getDOC0395() {

    const addFields = document.createElement('div');
    addFields.setAttribute('class', 'label-column');

    // option 2 - with a drop down menu
    const area = document.createElement('select');
    area.setAttribute('class', 'DOC0395');
    area.setAttribute('name', 'area');
    const opt1 = document.createElement('option');
    opt1.setAttribute('value', 'area not selected');
    const opt2 = document.createElement('option');
    opt2.setAttribute('value', 'accounting');
    const opt3 = document.createElement('option');
    opt3.setAttribute('value', 'awning');
    const opt4 = document.createElement('option');
    opt4.setAttribute('value', 'compressor room');
    const opt5 = document.createElement('option');
    opt5.setAttribute('value', 'design center');
    const opt6 = document.createElement('option');
    opt6.setAttribute('value', 'engineering');
    const opt7 = document.createElement('option');
    opt7.setAttribute('value', 'executive conf room');
    const opt8 = document.createElement('option');
    opt8.setAttribute('value', 'hardware');
    const opt9 = document.createElement('option');
    opt9.setAttribute('value', 'hot rod shop');
    const opt10 = document.createElement('option');
    opt10.setAttribute('value', 'hrs bay 1');
    const opt11 = document.createElement('option');
    opt11.setAttribute('value', 'hrs bay 2');
    const opt12 = document.createElement('option');
    opt12.setAttribute('value', 'hrs bay 3');
    const opt13 = document.createElement('option');
    opt13.setAttribute('value', 'hrs chuck’s office');
    const opt14 = document.createElement('option');
    opt14.setAttribute('value', 'hrs compressor room');
    const opt15 = document.createElement('option');
    opt15.setAttribute('value', 'hrs detail bay');
    const opt16 = document.createElement('option');
    opt16.setAttribute('value', 'hrs diner');
    const opt17 = document.createElement('option');
    opt17.setAttribute('value', 'hrs middle bay');
    const opt18 = document.createElement('option');
    opt18.setAttribute('value', 'hrs paint shop');
    const opt19 = document.createElement('option');
    opt19.setAttribute('value', 'hrs prep bay');
    const opt20 = document.createElement('option');
    opt20.setAttribute('value', 'hrs training center');
    const opt21 = document.createElement('option')
    opt21.setAttribute('value', 'inventive fulfillment')
    const opt22 = document.createElement('option');
    opt22.setAttribute('value', 'iws awning');
    const opt23 = document.createElement('option');
    opt23.setAttribute('value', 'iws coach cart');
    const opt24 = document.createElement('option');
    opt24.setAttribute('value', 'iws compressor room');
    const opt25 = document.createElement('option');
    opt25.setAttribute('value', 'iws container');
    const opt26 = document.createElement('option');
    opt26.setAttribute('value', 'iws data center');
    const opt27 = document.createElement('option');
    opt27.setAttribute('value', 'iws detail bay');
    const opt28 = document.createElement('option');
    opt28.setAttribute('value', 'iws kitchen');
    const opt29 = document.createElement('option');
    opt29.setAttribute('value', 'iws office');
    const opt30 = document.createElement('option');
    opt30.setAttribute('value', 'iws parts');
    const opt31 = document.createElement('option');
    opt31.setAttribute('value', 'iws print center');
    const opt32 = document.createElement('option');
    opt32.setAttribute('value', 'iws reception cabinets');
    const opt33 = document.createElement('option');
    opt33.setAttribute('value', 'iws renegade room');
    const opt34 = document.createElement('option');
    opt34.setAttribute('value', 'iws shop');
    const opt35 = document.createElement('option');
    opt35.setAttribute('value', 'iws showroom');
    const opt36 = document.createElement('option');
    opt36.setAttribute('value', 'iws steve’s closet');
    const opt37 = document.createElement('option');
    opt37.setAttribute('value', 'iws supply closet');
    const opt38 = document.createElement('option');
    opt38.setAttribute('value', 'iws women’s restroom');
    const opt39 = document.createElement('option');
    opt39.setAttribute('value', 'janitorial room');
    const opt40 = document.createElement('option');
    opt40.setAttribute('value', 'laser');
    const opt41 = document.createElement('option');
    opt41.setAttribute('value', 'loading dock');
    const opt42 = document.createElement('option');
    opt42.setAttribute('value', 'machine shop');
    const opt43 = document.createElement('option');
    opt43.setAttribute('value', 'maintenance');
    const opt44 = document.createElement('option');
    opt44.setAttribute('value', 'marketing');
    const opt45 = document.createElement('option');
    opt45.setAttribute('value', 'office storage');
    const opt46 = document.createElement('option');
    opt46.setAttribute('value', 'paint booth');
    const opt47 = document.createElement('option');
    opt47.setAttribute('value', 'powder coating');
    const opt48 = document.createElement('option');
    opt48.setAttribute('value', 'pressbreak');
    const opt49 = document.createElement('option');
    opt49.setAttribute('value', 'print shop');
    const opt50 = document.createElement('option');
    opt50.setAttribute('value', 'pump up gym');
    const opt51 = document.createElement('option');
    opt51.setAttribute('value', 'r&d');
    const opt52 = document.createElement('option');
    opt52.setAttribute('value', 'sales');
    const opt53 = document.createElement('option');
    opt53.setAttribute('value', 'sew shop');
    const opt54 = document.createElement('option');
    opt54.setAttribute('value', 'shipping');
    const opt55 = document.createElement('option');
    opt55.setAttribute('value', 'sp assembly');
    const opt56 = document.createElement('option');
    opt56.setAttribute('value', 'studio');
    const opt57 = document.createElement('option');
    opt57.setAttribute('value', 'supermarket');
    const opt58 = document.createElement('option');
    opt58.setAttribute('value', 'tool room');
    const opt59 = document.createElement('option');
    opt59.setAttribute('value', 'training room');
    const opt60 = document.createElement('option');
    opt60.setAttribute('value', 'truck shop');
    const opt61 = document.createElement('option');
    opt61.setAttribute('value', 'truck shop warehouse');
    const opt62 = document.createElement('option');
    opt62.setAttribute('value', 'tube fab');
    const opt63 = document.createElement('option');
    opt63.setAttribute('value', 'welding');
    const opt64 = document.createElement('option');
    opt64.setAttribute('value', 'work center');

    opt1.selected = true;

    opt1.appendChild(document.createTextNode('pick an area'));
    opt2.appendChild(document.createTextNode('accounting'));
    opt3.appendChild(document.createTextNode('awning'));
    opt4.appendChild(document.createTextNode('compressor room'));
    opt5.appendChild(document.createTextNode('design center'));
    opt6.appendChild(document.createTextNode('engineering'));
    opt7.appendChild(document.createTextNode('executive conf room'));
    opt8.appendChild(document.createTextNode('hardware'));
    opt9.appendChild(document.createTextNode('hot rod shop'));
    opt10.appendChild(document.createTextNode('hrs bay 1'));
    opt11.appendChild(document.createTextNode('hrs bay 2'));
    opt12.appendChild(document.createTextNode('hrs bay 3'));
    opt13.appendChild(document.createTextNode('hrs chuck’s office'));
    opt14.appendChild(document.createTextNode('hrs compressor room'));
    opt15.appendChild(document.createTextNode('hrs detail bay'));
    opt16.appendChild(document.createTextNode('hrs diner'));
    opt17.appendChild(document.createTextNode('hrs middle bay'));
    opt18.appendChild(document.createTextNode('hrs paint shop'));
    opt19.appendChild(document.createTextNode('hrs prep bay'));
    opt20.appendChild(document.createTextNode('hrs training center'));
    opt21.appendChild(document.createTextNode('inventive fulfillment'))
    opt22.appendChild(document.createTextNode('iws awning'));
    opt23.appendChild(document.createTextNode('iws coach cart'));
    opt24.appendChild(document.createTextNode('iws compressor room'));
    opt25.appendChild(document.createTextNode('iws container'));
    opt26.appendChild(document.createTextNode('iws data center'));
    opt27.appendChild(document.createTextNode('iws detail bay'));
    opt28.appendChild(document.createTextNode('iws kitchen'));
    opt29.appendChild(document.createTextNode('iws office'));
    opt30.appendChild(document.createTextNode('iws parts'));
    opt31.appendChild(document.createTextNode('iws print center'));
    opt32.appendChild(document.createTextNode('iws reception cabinets'));
    opt33.appendChild(document.createTextNode('iws renegade room'));
    opt34.appendChild(document.createTextNode('iws shop'));
    opt35.appendChild(document.createTextNode('iws showroom'));
    opt36.appendChild(document.createTextNode('iws steve’s closet'));
    opt37.appendChild(document.createTextNode('iws supply closet'));
    opt38.appendChild(document.createTextNode('iws women’s restroom'));
    opt39.appendChild(document.createTextNode('janitorial room'));
    opt40.appendChild(document.createTextNode('laser'));
    opt41.appendChild(document.createTextNode('loading dock'));
    opt42.appendChild(document.createTextNode('machine shop'));
    opt43.appendChild(document.createTextNode('maintenance'));
    opt44.appendChild(document.createTextNode('marketing'));
    opt45.appendChild(document.createTextNode('office storage'));
    opt46.appendChild(document.createTextNode('paint booth'));
    opt47.appendChild(document.createTextNode('powder coating'));
    opt48.appendChild(document.createTextNode('pressbreak'));
    opt49.appendChild(document.createTextNode('print shop'));
    opt50.appendChild(document.createTextNode('pump up gym'));
    opt51.appendChild(document.createTextNode('r&d'));
    opt52.appendChild(document.createTextNode('sales'));
    opt53.appendChild(document.createTextNode('sew shop'));
    opt54.appendChild(document.createTextNode('shipping'));
    opt55.appendChild(document.createTextNode('sp assembly'));
    opt56.appendChild(document.createTextNode('studio'));
    opt57.appendChild(document.createTextNode('supermarket'));
    opt58.appendChild(document.createTextNode('tool room'));
    opt59.appendChild(document.createTextNode('training room'));
    opt60.appendChild(document.createTextNode('truck shop'));
    opt61.appendChild(document.createTextNode('truck shop warehouse'));
    opt62.appendChild(document.createTextNode('tube fab'));
    opt63.appendChild(document.createTextNode('welding'));
    opt64.appendChild(document.createTextNode('work center'));

    area.appendChild(opt1);
    area.appendChild(opt2);
    area.appendChild(opt3);
    area.appendChild(opt4);
    area.appendChild(opt5);
    area.appendChild(opt6);
    area.appendChild(opt7);
    area.appendChild(opt8);
    area.appendChild(opt9);
    area.appendChild(opt10);
    area.appendChild(opt11);
    area.appendChild(opt12);
    area.appendChild(opt13);
    area.appendChild(opt14);
    area.appendChild(opt15);
    area.appendChild(opt16);
    area.appendChild(opt17);
    area.appendChild(opt18);
    area.appendChild(opt19);
    area.appendChild(opt20);
    area.appendChild(opt21);
    area.appendChild(opt22);
    area.appendChild(opt23);
    area.appendChild(opt24);
    area.appendChild(opt25);
    area.appendChild(opt26);
    area.appendChild(opt27);
    area.appendChild(opt28);
    area.appendChild(opt29);
    area.appendChild(opt30);
    area.appendChild(opt31);
    area.appendChild(opt32);
    area.appendChild(opt33);
    area.appendChild(opt34);
    area.appendChild(opt35);
    area.appendChild(opt36);
    area.appendChild(opt37);
    area.appendChild(opt38);
    area.appendChild(opt39);
    area.appendChild(opt40);
    area.appendChild(opt41);
    area.appendChild(opt42);
    area.appendChild(opt43);
    area.appendChild(opt44);
    area.appendChild(opt45);
    area.appendChild(opt46);
    area.appendChild(opt47);
    area.appendChild(opt48);
    area.appendChild(opt49);
    area.appendChild(opt50);
    area.appendChild(opt51);
    area.appendChild(opt52);
    area.appendChild(opt53);
    area.appendChild(opt54);
    area.appendChild(opt55);
    area.appendChild(opt56);
    area.appendChild(opt57);
    area.appendChild(opt58);
    area.appendChild(opt59);
    area.appendChild(opt60);
    area.appendChild(opt61);
    area.appendChild(opt62);
    area.appendChild(opt63);
    area.appendChild(opt64)

    const part = document.createElement('input');
    part.setAttribute('class', 'DOC0395');
    part.setAttribute('name', 'part');
    part.setAttribute('placeholder', 'PN:');
    part.setAttribute('maxlength', 25);

    const qty = document.createElement('input');
    qty.setAttribute('class', 'DOC0395');
    qty.setAttribute('name', 'qty');
    qty.setAttribute('placeholder', 'QTY:');
    qty.setAttribute('maxlength', 4);

    const desc = document.createElement('input');
    desc.setAttribute('class', 'DOC0395');
    desc.setAttribute('name', 'desc');
    desc.setAttribute('placeholder', 'DESC.');
    desc.setAttribute('maxlength', 40);

    const notes = document.createElement('input');
    notes.setAttribute('class', 'DOC0395');
    notes.setAttribute('name', 'notes');
    notes.setAttribute('placeholder', 'NOTES:');
    notes.setAttribute('maxlength', 40);

    addFields.appendChild(area);
    addFields.appendChild(part);
    addFields.appendChild(qty);
    addFields.appendChild(desc);
    addFields.appendChild(notes);

    return addFields;
}