// ---------- (SUBMIT) ADDING AN ENTRY ----------

// query the entire form
const $orderForm = document.getElementById('submit-order');

// function to add an entry to the database
$orderForm.addEventListener('click', function (event) {

    // The preventDefault() method of the Event interface tells the user 
    // agent that if the event does not get explicitly handled, its 
    // default action should not be taken as it normally would be.
    event.preventDefault();

    // validate order, if labels were not entered return to beginning
    if (allLabels.length === 0) return;

// ---------- ADDING AN ENTRY ----------

    // querying the DOM for displying entries
    const $uList = document.querySelector('ul');

    // create a temporary object
    const entry = {
        department: $userDept,
        employee: $userName,
        labels: allLabels,
        lead: $userTeamLead,
        group: $userGroupLead,
        status: 'waiting for approval'
    };

    // if label is a product label, then status goes automatically to 'approved by lead'
    if (allLabels[0].isProductLabel) {
        entry.status = 'approved by lead'
    } 

    // reset labels' object
    allLabels = [];

    document.querySelector('#submit-now').textContent = 'Thanks for submitting your order.';
    document.querySelector('#submit-now').className = 'view';
    document.querySelector('#submit-order').className = 'view hidden';

// +++++++++++++++++++++++++ FETCH +++++++++++++++++++++++++
    fetch('/api/orders', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(entry)
    })
    .then(res => {
        return res.json()
    })
    .then(data => console.log('data ', data))
    .catch(error => console.error('ERROR: ', error))
// +++++++++++++++++++++++++ END OF FETCH +++++++++++++++++++++++++

    // clean the ul for the next orders' display
    document.querySelector('ul').innerHTML = "";

    // switch buttons
    document.querySelector('#nav-button').className = 'view';
    document.querySelector('#new-order-button').className = 'button-off';
    document.querySelector('#orders-button').className = 'button-off';

    // switch views
    document.querySelector('#new-order').className = 'view';
    document.querySelector('#label-type').className = 'view';
    document.querySelector('#label-kind').className = 'view';
    document.querySelector('#homeoffice').className = 'view';
    document.querySelector('#orders').className = 'view hidden';
    document.querySelector('#log-in').className = 'view hidden';
});