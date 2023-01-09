// From GETKANBANS to ADDORDER
// ---------- FUNCTION TO ADD LABELS TO THE ORDER ----------

// function to add kanbas
// this function will add up to 4 kanbas to an order
function getFillable(displayLabels) {

    document.querySelector('#homeoffice').className = 'view hidden';

    document.querySelector('#add-to-order').className = 'view';
    document.querySelector('#submit-now').className = 'view hidden';
    document.querySelector('#submit-order').className = 'view hidden';

    // querying the DOM for displying entries
    const $uList = document.getElementById('labels-list');
    // clean the ul for the next orders' display
    $uList.innerHTML = '';

    // iterate over the chosen category and subcategory 
    for (let i = 0; i < displayLabels.length; i++) {

        // put a max of 4 labels per row
        if (i % 4 === 0) {
            $listedItem = document.createElement('li');
            $listedItem.setAttribute('class', 'list-one-fourth-column');
            $uList.append($listedItem);
        }

        // create display for labels' information
        const $labelColumn = document.createElement('div');
        $labelColumn.setAttribute('class', 'label-column');

        const $iFrameLabel = document.createElement('iframe');
        $iFrameLabel.setAttribute('src', displayLabels[i]);  

        const $labelRow = document.createElement('div');
        $labelRow.setAttribute('class', 'label-row');

        const $addDocNumber = document.createElement('button');
        $addDocNumber.setAttribute('type', 'button');
        $addDocNumber.setAttribute('class', 'add-doc-number');

        const $addPackToOrder = document.createElement('button');
        $addPackToOrder.setAttribute('type', 'button');
        $addPackToOrder.setAttribute('class', 'add-pack-to-order');

        const $addLabelToOrder = document.createElement('button');
        $addLabelToOrder.setAttribute('type', 'button');
        $addLabelToOrder.setAttribute('class', 'add-label-to-order');

        // holds the DOC number
        let docNum = displayLabels[i].slice(displayLabels[i].length-11, displayLabels[i].length-4);

        const $addQuantity = document.createElement('input');
        $addQuantity.setAttribute('class', 'add-quantity');
        $addQuantity.setAttribute('type', 'number');

        // check to see if label has multiple quantities for printing (eg. decal labels)
        let packOf = kanbanPacks[docNum];
        let docCat = displayLabels[i].slice(7,20);
        
        // if DOC number is undefined, display one unit pack message
        if (packOf === undefined) {
            $addDocNumber.textContent = docNum;
            $addPackToOrder.textContent = 'pack of 1 unit';
            $addLabelToOrder.textContent = 'enter quantity (max 20) :';

            $addQuantity.setAttribute('pattern', '[0-9]{3}');
            $addQuantity.setAttribute('maxlength', 3);
            $addQuantity.setAttribute('min', 0);
            $addQuantity.setAttribute('max', 20);

        // exception: DOC0484 is a serial number label (a mix of kanban and regular labels)
        } else if (docCat === 'product-label'){
            $addDocNumber.textContent = docNum;
            $addPackToOrder.textContent = `pack of  ${packOf}  units`;
            $addLabelToOrder.textContent = 'enter # of packs (max 1) :';
    
            $addQuantity.setAttribute('pattern', '[0-9]{1}');
            $addQuantity.setAttribute('maxlength', 1);
            $addQuantity.setAttribute('min', 0);
            $addQuantity.setAttribute('max', 1);

        // if not, display correct quantity of pack message
        } else {
            $addDocNumber.textContent = docNum;
            $addPackToOrder.textContent = `pack of  ${packOf}  units`;
            $addLabelToOrder.textContent = 'enter # of packs (max 2) :';

            $addQuantity.setAttribute('pattern', '[0-9]{1}');
            $addQuantity.setAttribute('maxlength', 1);
            $addQuantity.setAttribute('min', 0);
            $addQuantity.setAttribute('max', 2);
        }

        // organize information
        $listedItem.appendChild($labelColumn);

        $labelColumn.appendChild($iFrameLabel);  
        $labelColumn.appendChild($addDocNumber); 
        $labelColumn.appendChild($addPackToOrder); 
        $labelColumn.appendChild($labelRow);  

        $labelRow.appendChild($addLabelToOrder);
        $labelRow.appendChild($addQuantity);  

        // $labelRow.appendChild($addLabelToOrder);

        if (docNum === 'DOC0377') { 
            $labelColumn.appendChild(getDOC0377()) 
        } else if (docNum === 'DOC0378') { 
            $labelColumn.appendChild(getDOC0378()) 
        } else if (docNum === 'DOC0379') { 
            $labelColumn.appendChild(getDOC0379()) 
        } else if (docNum === 'DOC0380') { 
            $labelColumn.appendChild(getDOC0380())
        } else if (docNum === 'DOC0381') { 
            $labelColumn.appendChild(getDOC0381())
        } else if (docNum === 'DOC0382') { 
            $labelColumn.appendChild(getDOC0382())
        } else if (docNum === 'DOC0392') { 
            $labelColumn.appendChild(getDOC0392())
        } else if (docNum === 'DOC0393') { 
            $labelColumn.appendChild(getDOC0393())
        } else if (docNum === 'DOC0395') { 
            $labelColumn.appendChild(getDOC0395()) 
        } else if (docNum === 'DOC0396') { 
            $labelColumn.appendChild(getDOC0396())
        } else if (docNum === 'DOC0417') { 
            $labelColumn.appendChild(getDOC0417()) 
        } else if (docNum === 'DOC0418') { 
            $labelColumn.appendChild(getDOC0418())
        } else if (docNum === 'DOC0432') { 
            $labelColumn.appendChild(getDOC0432())
        } else if (docNum === 'DOC0433') { 
            $labelColumn.appendChild(getDOC0433())
        } else if (docNum === 'DOC0436') { 
            $labelColumn.appendChild(getDOC0436())
        } else if (docNum === 'DOC0481') { 
            $labelColumn.appendChild(getDOC0481())
        } else if (docNum === 'DOC0482') { 
            $labelColumn.appendChild(getDOC0482())
        } else if (docNum === 'DOC0542') { 
            $labelColumn.appendChild(getDOC0542())
        } else if (docNum === 'DOC0543') { 
            $labelColumn.appendChild(getDOC0543())
        } else if (docNum === 'DOC0544') { 
            $labelColumn.appendChild(getDOC0544())
        } else if (docNum === 'DOC0545') { 
            $labelColumn.appendChild(getDOC0545())
        } else if (docNum === 'DOC0546') { 
            $labelColumn.appendChild(getDOC0546())
        } else if (docNum === 'DOC0563') { 
            $labelColumn.appendChild(getDOC0563())
        }
    }

    // add labels to order click
    document.getElementById('add-to-order').onclick = function() {

        // add all the quantities on the screen
        const $addToOrder = document.querySelectorAll('.add-quantity');

        // if no labels were picked, cancel action (return)
        if ($addToOrder.length === 0) { 

            // clean the ul for the next orders' display
            document.querySelector('ul').innerHTML = '';
            alllabels = [];
            displayLabels = [];
            return;
        }

        // iterate over all labels
        for (let i = 0; i < displayLabels.length; i++) {

            // create temporary object and variable
            let tempObject = {};
            let reorder = false;

            // parse quantity entered into a number
            let qtyAsNum = parseInt($addToOrder[i].value);

            // holds the DOC number
            let docNum = displayLabels[i].slice(displayLabels[i].length-11, displayLabels[i].length-4);
            let docCat = displayLabels[i].slice(7,20);

            // if the quantity entered in smaller than 0 or bigger than 20, disregard action
            if (docCat === 'product-labels' && (qtyAsNum === 1) || 
            (docCat !== 'product-labels' && (qtyAsNum > 0 && qtyAsNum <= 20))) {
                
                // create object to hold fields' values
                let fieldsObj = {};
                const fields = document.querySelectorAll(`.${docNum}`)

                // exception: this label has only checkboxes
                if (docNum === 'DOC0396' || docNum === 'DOC0436') {
                    for (let i = 0; i < fields.length; i++) {
                        fieldsObj[fields[i].name] = fields[i].checked;
                    }
                // SERIAL NUMBER
                // exception: this labels has a serial number
                // } else if (docNum === 'DOC0484') {
                //     let lastSerialNum = parseInt(fields[0].value);
                //     fieldsObj[fields[0].name] = fields[0].value;
                    
                //     for (let i = 1; i < fields.length; i++) {
                //         fieldsObj[fields[i].getAttribute('name')] = lastSerialNum + i;
                //     }

                // normal kanban labels
                } else {
                    for (let i = 0; i < fields.length; i++) {
                        fieldsObj[fields[i].name] = fields[i].value;
                    }
                }

                // create object
                tempObject = {
                    'pdf': displayLabels[i],
                    'isKanban': true,
                    'isProductLabel': false,
                    'docNum': docNum,
                    'qty': qtyAsNum,
                    'fields': fieldsObj
                };

                // routine to verify if labels ordered in already in the object to be send to database
                for (let i = 0; i < allLabels.length; i++) {

                    // if yes (reorder), just add qty to current object
                    if (tempObject.pdf === allLabels[i].pdf) {
                        allLabels[i].qty = allLabels[i].qty + tempObject.qty;
                        reorder = true; 
                    } 
                }

                // push object to database
                if (reorder === false) allLabels.push(tempObject); 
            }

            // reset quantity
            $addToOrder[i].value = '';
        }
        // clear form right at page download
        document.getElementById('order-form').reset();

        // clean the ul for the next orders' display
        document.querySelector('ul').innerHTML = '';

        // switch view
        document.querySelector('#homeoffice').className = 'view hidden';
        document.querySelector('#add-to-order').className = 'view hidden';
        if (allLabels.length) {
            document.querySelector('#label-type').className = 'view hidden';
            document.querySelector('#label-kind').className = 'view hidden';
            
            document.querySelector('#submit-now').textContent = 'Please submit order now';
            document.querySelector('#submit-now').className = 'view';
            document.querySelector('#submit-order').className = 'view';

        } else {
            document.querySelector('#submit-now').textContent = 'No labels were selected. Please choose a new category.';
            document.querySelector('#submit-now').className = 'view';
            document.querySelector('#homeoffice').className = 'view';
        }
    }
}