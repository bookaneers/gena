// README: CHANGEORDERSTATUS PAGE  ==>  fetch ROUTES\ORDERS
// This routine changes the status on the current orders in the database

// querying icons
const $uList = document.getElementById('entries-list')
$uList.addEventListener('click', function (event) {

    // if user clicks outide of the icons, it will automatically 
    // return to the beginning of the event.
    if (event.target.className !== 'approved'
        && event.target.className !== 'processing'
        && event.target.className !== 'delivered'
        && event.target.className !== 'delete') {
        return;
    }

    // if users (leads only) clicks on 'approved' icon' it will change 
    // the order's status to 'approved by lead'.
    if (event.target.className === 'approved') {

        // confirm method to display a message and colect 'ok/cancel' 
        // answer from user
        let text = 'Update to "approved by lead"';
        if (confirm(text) == true) {
            const $orderNumber = event.target.getAttribute('data-id');

            // +++++++++++++++++++++++++ FETCH +++++++++++++++++++++++++
            fetch(`/api/orders/approvedbylead/${$orderNumber}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: 'approved by lead', date: Date.now() - 6 * 60 * 60 * 1000 })
            })
                .then(res => res.json())
                .then(data => console.log('data ', data))
                .catch(error => console.error('ERROR: ', error))
            // +++++++++++++++++++++++++ END OF FETCH +++++++++++++++++++++++++

            // reset page
            document.querySelector('#orders-button').click();
        }
    }

    // if users (printshop only) clicks on 'processing' icon' it will change 
    // the order's status to 'processing'.
    if (event.target.className === 'processing') {

        // confirm method to display a message and collect 'ok/cancel' 
        // answer from user
        let text = 'Update to "processing"';
        if (confirm(text) == true) {
            const $orderNumber = event.target.getAttribute('data-id');

            // +++++++++++++++++++++++++ FETCH +++++++++++++++++++++++++
            fetch(`/api/orders/${$orderNumber}`, {
                method: 'PUT',
                // headers: {'Content-Type': 'application/json', 'Cache-Control': 'no-cache,no-store'},
                cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: 'processing' })
            })
                .then(res => { return res.json() })
                .then(async data => {

                    return fetch(`/api/orders/filestoprint/${data._id}`, {
                        method: 'PUT',
                        // headers: {'Content-Type': 'application/json', 'Cache-Control': 'no-cache,no-store'},
                        cache: 'no-cache',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data)
                    })

                        .then(res => { return res.json() })
                        .then(data => console.log('ALL DONE'))
                        .catch(error => console.error('ERROR: ', error))
                })
                .catch(error => console.error('ERROR: ', error))
            // +++++++++++++++++++++++++ END OF FETCH +++++++++++++++++++++++++

            // reset page
            document.querySelector('#orders-button').click();
        }
    }

    // if users (printshop only) clicks on 'delivered' icon' it will change 
    // the order's status to 'delivered'.
    if (event.target.className === 'delivered') {

        // confirm method to display a message and colect 'ok/cancel' 
        // answer from user
        let text = 'Update to "delivered"';
        if (confirm(text) == true) {
            const $orderNumber = event.target.getAttribute('data-id');

            // +++++++++++++++++++++++++ FETCH +++++++++++++++++++++++++
            fetch(`/api/orders/${$orderNumber}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: 'delivered' })
            })
                .then(res => res.json())
                .then(data => console.log('data ', data))
                .catch(error => console.error('ERROR: ', error))
            // +++++++++++++++++++++++++ END OF FETCH +++++++++++++++++++++++++

            // reset page
            document.querySelector('#orders-button').click();
        }
    }

    // if users (all) clicks on 'delete' icon' it will delete order for good.
    if (event.target.className === 'delete') {

        // confirm method to display a message and colect 'ok/cancel' answer 
        // from user
        let text = "Delete this order?";
        if (confirm(text) == true) {
            const $orderNumber = event.target.getAttribute('data-id');

            // +++++++++++++++++++++++++ FETCH +++++++++++++++++++++++++
            fetch(`/api/orders/${$orderNumber}`, {
                method: 'DELETE',
                // headers: {'Content-Type': 'application/json'},
                // body: JSON.stringify(entry)
            })
                .then(res => res.json())
                .then(data => console.log('data ', data))
                .catch(error => console.error('ERROR: ', error))
            // +++++++++++++++++++++++++ END OF FETCH +++++++++++++++++++++++++

            // reset page
            document.querySelector('#orders-button').click();
        }
    }
});