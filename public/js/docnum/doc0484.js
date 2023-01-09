function getDOC0484() {

    const addFields = document.createElement('div');
    addFields.setAttribute('class', 'label-column');

    const counter = document.createElement('input');
    counter.setAttribute('class', 'DOC0484');
    counter.setAttribute('name', 'initialCounter');
    counter.setAttribute('placeholder', 'enter initial counter');
    counter.setAttribute('maxlength', 5);

    addFields.appendChild(counter);

    for (let i = 1; i <= 54; i++) {
 
        let serialNum = document.createElement('span');
        serialNum.setAttribute('class', 'DOC0484');
        serialNum.setAttribute('name', `serialnum${i}`);
        
        addFields.appendChild(serialNum);
    }

    return addFields;
}