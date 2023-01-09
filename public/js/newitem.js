// From GETLABELS to ADDORDER
// ---------- FUNCTION TO DISPLAY ITEMS ----------

// function to create a listed entry
function newItem(entry) {

    // ---------- STRUCTURE TAGS ----------
    
    // create a new li listed-item
    const $listedItem = document.createElement('li');
    $listedItem.setAttribute('class', 'listed-item');
    
    // create secondary div row
    const $row = document.createElement('div');
    $row.setAttribute('class', 'list-flexible-column');

    // ---------- VALUE TAGS ----------

    // create a new h3 tag
    const $displayDept = document.createElement('h3');
    $displayDept.setAttribute('class', 'gray');
    $displayDept.textContent = entry.department;

    // create a new h3 tag
    const $displayEmployee = document.createElement('h3');
    $displayEmployee.setAttribute('class', 'gray');
    $displayEmployee.textContent = entry.employee;

    // create a new h3 tag
    const $displayTodaysDate = document.createElement('h3');
    $displayTodaysDate.setAttribute('class', 'gray');
    $displayTodaysDate.textContent = entry.date;        

    // DATA-ID
    const $displayEntryId = document.createElement('h3');
    $displayEntryId.setAttribute('class', 'gray');
    $displayEntryId.textContent = entry._id;

    // create a new h3 tag
    const $displayLead = document.createElement('h3');
    $displayLead.setAttribute('class', 'gray');
    $displayLead.textContent = entry.lead;

    // create a new h3 tag
    const $displayStatus = document.createElement('h3');
    $displayStatus.textContent = entry.status;
    
    // create image tag
    const $approvedIcon = document.createElement('img');
    $approvedIcon.setAttribute('src', 'images/icons/approved.png');
    $approvedIcon.setAttribute('class', 'approved');
    // DATA-ID
    $approvedIcon.setAttribute('data-id', entry._id);

    // create image tag
    const $processingIcon = document.createElement('img');
    $processingIcon.setAttribute('src', 'images/icons/processing.png');
    $processingIcon.setAttribute('class', 'processing');
    // DATA-ID
    $processingIcon.setAttribute('data-id', entry._id);    

    // create image tag
    const $deliveredIcon = document.createElement('img');
    $deliveredIcon.setAttribute('src', 'images/icons/delivered.png');
    $deliveredIcon.setAttribute('class', 'delivered');
    // DATA-ID
    $deliveredIcon.setAttribute('data-id', entry._id);  

    // create image tag
    const $deleteIcon = document.createElement('img');
    $deleteIcon.setAttribute('src', 'images/icons/delete.png');
    $deleteIcon.setAttribute('class', 'delete');
    // DATA-ID
    $deleteIcon.setAttribute('data-id', entry._id);

    // append everything together to listedItem
    $listedItem.appendChild($row);

    // $mainRow.appendChild($row1);
    $row.appendChild($displayEmployee);
    $row.appendChild($displayDept);
    $row.appendChild($displayTodaysDate);
    $row.appendChild($displayEntryId);
    $row.appendChild($displayLead);
    $row.appendChild($displayStatus);
    
    if ($userName === 'printshop') {
        $row.appendChild($processingIcon);
        $row.appendChild($deliveredIcon);
    }

    if ($userDept === 'team-leads' || $userDept === 'group-leads') {
        $row.appendChild($approvedIcon);
    }

    if ($userName !== 'printshop') {
        $row.appendChild($deleteIcon);
    }

    const $labelsInOrder = document.createElement('div');
    $labelsInOrder.setAttribute('class', 'labels-in-order');

    $listedItem.appendChild($labelsInOrder)

    let fieldValue =  '';

    for (let i = 0; i < entry.labels.length; i++) {

        // create display for labels' information
        const $displayLabelsInOrder = document.createElement('div');
        $displayLabelsInOrder.setAttribute('class', 'display-labels-in-order');

        // create an iframe tag
        const $displayPDF = document.createElement('iframe');
        $displayPDF.setAttribute('src', entry.labels[i].pdf); 

        // create a new h3 tag
        const $displayDoc = document.createElement('h5');
        $displayDoc.textContent = entry.labels[i].docNum;

        // create a new h3 tag
        const $displayQty = document.createElement('h3');

        /// check to see if label has multiple quantities for printing (eg. decal labels)
        let packOf = kanbanPacks[entry.labels[i].docNum];
        let docType = entry.labels[i].pdf.slice(7,20);

        if (packOf === undefined) {
            $displayQty.textContent = `quantity to be printed : ${entry.labels[i].qty}`;
        } else {
            $displayQty.textContent = `quantity to be printed : ${entry.labels[i].qty * packOf}`;
        }

        const $displayFieldsInOrder = document.createElement('div');
        $displayFieldsInOrder.setAttribute('class', 'display-fields-in-order');

        // if (docType !== 'product-label') {
 
            for (const keys in entry.labels[i].fields) {

                if (entry.labels[i].fields[keys] === true) {
                    fieldValue =  'checked ';
                    const $displayFieldsValue = document.createElement('h4');
                    $displayFieldsValue.textContent = `${keys}: ${fieldValue}`;
                    $displayFieldsInOrder.appendChild( $displayFieldsValue);
                } else if (entry.labels[i].fields[keys] === false) {
                    fieldValue =  'not checked';
                } else {
                    fieldValue =  entry.labels[i].fields[keys];
                    const $displayFieldsValue = document.createElement('h4');
                    $displayFieldsValue.textContent = `${keys}: ${fieldValue}`;
                    $displayFieldsInOrder.appendChild( $displayFieldsValue);
                }
            }
            
        // } else {
        //     const $displayFieldsValue = document.createElement('h4');
        //     $displayFieldsValue.textContent = `Initial Serial Number: ${entry.labels[i].fields.initialCounter}`;
        //     $displayFieldsInOrder.appendChild( $displayFieldsValue);
        // }

        // organize information
        $displayLabelsInOrder.appendChild($displayPDF);
        $displayLabelsInOrder.appendChild($displayDoc);
        $displayLabelsInOrder.appendChild($displayQty);
        $displayLabelsInOrder.appendChild($displayFieldsInOrder);

        $labelsInOrder.appendChild($displayLabelsInOrder);      
    }        

    // return listedItem
    return $listedItem;
}