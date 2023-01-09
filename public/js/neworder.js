// README: NEWORDER PAGE  ==>  GETLABELS or GETKANBANS
// This program has an addEventListener(click) on the new-order button to change the view 
// to 'new entry view'. In addition, there is another addEventListener(load) that creates 
// a cascade menu to help place a new order.
// IMPORTANT: do not use window.onload if you have 2 forms in the same html document.

// querying the entry form button
const $entryForm = document.querySelector('#new-order-button');
$entryForm.addEventListener('click', function () {

    // clean the ul for the next orders' display
    document.querySelector('ul').innerHTML = "";

    // display company logo
    document.querySelector('#label-type').className = 'view';
    document.querySelector('#label-kind').className = 'view';
    document.querySelector('#homeoffice').className = 'view';
    
    document.querySelector('#add-to-order').className = 'view hidden';
    document.querySelector('#submit-now').className = 'view hidden';
    document.querySelector('#submit-order').className = 'view hidden';

    // switch buttons
    document.querySelector('#new-order-button').className = 'button-on';
    document.querySelector('#orders-button').className = 'button-off';

    // switch views
    document.querySelector('#new-order').className = 'view';
    document.querySelector('#orders').className = 'view hidden';
});

// cascade menu for placing new orders.
window.addEventListener('load', function() {
    const $typeSel = document.getElementById('label-type');
    const $kindSel = document.getElementById('label-kind');

    for (let type in labelFamily) {
        $typeSel.options[$typeSel.options.length] = new Option(type, type);
    }
    
    $typeSel.onchange = function() {
        $kindSel.length = 1; // remove all options of the first bar

        if (this.selectedIndex < 1) return; // done   
        for (let kind in labelFamily[this.value]) {
            $kindSel.options[$kindSel.options.length] = new Option(kind, kind);
        }
    }
    
    $typeSel.onchange(); // reset in case page is reloaded

    $kindSel.onchange = function () {

        if (this.selectedIndex < 1) return; // done   
        const catAndSubcat = labelFamily[$typeSel.value][this.value];

        // define where to go next, based on labelfamily: getkanbans or getlabels.
        // serial-numbers are fillable labels, just like kanbans
        // IMPORTANT: if ($typeSel.value === 'kanban-system' || $kindSel.value === 'serial-numbers') {  
            
        if ($typeSel.value === 'kanban-system-external'  || $typeSel.value === 'kanbaned-internal-products'|| $typeSel.value === 'equipment-labels' 
        || $typeSel.value === 'employee-labels' || $typeSel.value === '5x3-cards') { 
            getFillable(catAndSubcat)
        } else if ($typeSel.value === 'product-labels') { 
            getProduct(catAndSubcat)
        } else {
            getLabels(catAndSubcat);
        }
    }
});