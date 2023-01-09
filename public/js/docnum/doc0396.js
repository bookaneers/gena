function getDOC0396() {

    const addFields = document.createElement('div');
    addFields.setAttribute('class', 'label-column');
    const labelRow1 = document.createElement('div');
    labelRow1.setAttribute('class', 'label-row');
    const labelRow2 = document.createElement('div');
    labelRow2.setAttribute('class', 'label-row');
    const labelRow3 = document.createElement('div');
    labelRow3.setAttribute('class', 'label-row');
    const labelRow4 = document.createElement('div');
    labelRow4.setAttribute('class', 'label-row');
    const labelRow5 = document.createElement('div');
    labelRow5.setAttribute('class', 'label-row');
    const labelRow6 = document.createElement('div');
    labelRow6.setAttribute('class', 'label-row');
    const labelRow7 = document.createElement('div');
    labelRow7.setAttribute('class', 'label-row');
    const labelRow8 = document.createElement('div');
    labelRow8.setAttribute('class', 'label-row');

    const laser = document.createElement('input');
    laser.setAttribute('class', 'DOC0396');
    laser.setAttribute('name', 'laser');
    laser.setAttribute('type', 'checkbox');
    const laserText = document.createElement('h4');
    laserText.setAttribute('class', 'DOC0396');
    laserText.textContent = 'LASER';   

    const bend = document.createElement('input');
    bend.setAttribute('class', 'DOC0396');
    bend.setAttribute('name', 'bend');
    bend.setAttribute('type', 'checkbox');
    const bendText = document.createElement('h4');
    bendText.setAttribute('class', 'DOC0396');
    bendText.textContent = 'BEND'; 

    const tubefab = document.createElement('input');
    tubefab.setAttribute('class', 'DOC0396');
    tubefab.setAttribute('name', 'tube fab');
    tubefab.setAttribute('type', 'checkbox');
    const tubefabText = document.createElement('h4');
    tubefabText.setAttribute('class', 'DOC0396');
    tubefabText.textContent = 'TUBEFAB'; 

    const machine = document.createElement('input');
    machine.setAttribute('class', 'DOC0396');
    machine.setAttribute('name', 'machine');
    machine.setAttribute('type', 'checkbox');
    const machineText = document.createElement('h4');
    machineText.setAttribute('class', 'DOC0396');
    machineText.textContent = 'MACHINE'; 

    const weld = document.createElement('input');
    weld.setAttribute('class', 'DOC0396');
    weld.setAttribute('name', 'weld');
    weld.setAttribute('type', 'checkbox');
    const weldText = document.createElement('h4');
    weldText.setAttribute('class', 'DOC0396');
    weldText.textContent = 'WELD'; 

    const coatings = document.createElement('input');
    coatings.setAttribute('class', 'DOC0396');
    coatings.setAttribute('name', 'coatings');
    coatings.setAttribute('type', 'checkbox');
    const coatingsText = document.createElement('h4');
    coatingsText.setAttribute('class', 'DOC0396');
    coatingsText.textContent = 'COATINGS'; 

    const hardware = document.createElement('input');
    hardware.setAttribute('class', 'DOC0396');
    hardware.setAttribute('name', 'hardware');
    hardware.setAttribute('type', 'checkbox');
    const hardwareText = document.createElement('h4');
    hardwareText.setAttribute('class', 'DOC0396');
    hardwareText.textContent = 'HARDWARE'; 

    const assem = document.createElement('input');
    assem.setAttribute('class', 'DOC0396');
    assem.setAttribute('name', 'assem');
    assem.setAttribute('type', 'checkbox');
    const assemText = document.createElement('h4');
    assemText.setAttribute('class', 'DOC0396');
    assemText.textContent = 'ASSEM'; 

    addFields.appendChild(labelRow1); 
    labelRow1.appendChild(laser); 
    labelRow1.appendChild(laserText); 

    addFields.appendChild(labelRow2); 
    labelRow2.appendChild(bend); 
    labelRow2.appendChild(bendText); 

    addFields.appendChild(labelRow3); 
    labelRow3.appendChild(tubefab); 
    labelRow3.appendChild(tubefabText);

    addFields.appendChild(labelRow4); 
    labelRow4.appendChild(machine); 
    labelRow4.appendChild(machineText);

    addFields.appendChild(labelRow5); 
    labelRow5.appendChild(weld); 
    labelRow5.appendChild(weldText);

    addFields.appendChild(labelRow6); 
    labelRow6.appendChild(coatings); 
    labelRow6.appendChild(coatingsText);

    addFields.appendChild(labelRow7); 
    labelRow7.appendChild(hardware); 
    labelRow7.appendChild(hardwareText);

    addFields.appendChild(labelRow8); 
    labelRow8.appendChild(assem); 
    labelRow8.appendChild(assemText);

    return addFields;
}