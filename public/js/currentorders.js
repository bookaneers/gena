// README: CURRENTORDERS PAGE  ==>  NEWITEMS
// You will find an addEventListener(load) to display the local database. 
// There are two addEventListener(click) to update the status of an order or delete
// it for good. But it will first switch view to 'orders'.

// querying orders button
const $myOrders = document.querySelector('#orders-button');
$myOrders.addEventListener('click', function (event) {

    // clean the ul for the next orders' display
    document.querySelector('ul').innerHTML = "";

    // switch buttons
    document.querySelector('#nav-button').className = 'view';
    document.querySelector('#orders-button').className = 'button-on';

    // prevent printshop from ordereing labels
    if ($userName === 'printshop') {
        document.querySelector('#new-order-button').className = 'button-off disable';
        document.querySelector('#new-order-button-div').className = 'new-order-button-div-off';
    } else {
        document.querySelector('#new-order-button').className = 'button-off';
    }

    // switch views
    document.querySelector('#new-order').className = 'view hidden';
    document.querySelector('#orders').className = 'view';

    // ---------- TO DISPLAY ENTRIES ----------

    // querying the DOM for displying entries
    const $uList = document.getElementById('entries-list');

    // clean the ul for the next orders' display
    $uList.innerHTML = "";

    // +++++++++++++++++++++++++ FETCH +++++++++++++++++++++++++
    fetch('/api/orders')
        .then(res => res.json())
        .then(data => {

            // iterate over the database to display all the entries
            for (let i = 0; i < data.length; i++) {

                // if in printshop, display all orders that have been approved or in process
                if ($userName === 'printshop' && (data[i].status === 'approved by lead' || data[i].status === 'processing')) {

                    // call function to display entry
                    let $item = newItem(data[i]);

                    if (data[i].status === 'approved by lead') {
                        $item.getElementsByTagName('img')[1].className = "delivered blocked";
                    }

                    if (data[i].status === 'processing') {
                        $item.getElementsByTagName('img')[0].className = "processing blocked";
                    }

                    // append entry to UL
                    $uList.appendChild($item);

                    // if user is a group lead, display all orders from group lead's department(s)
                } else if ($userName === data[i].group) {

                    // call function to display entry
                    let $item = newItem(data[i]);

                    if (data[i].status === 'approved by lead' || data[i].status === 'processing') {
                        $item.getElementsByTagName('img')[0].className = "approved blocked";
                        $item.getElementsByTagName('img')[1].className = "delete blocked";
                    }

                    if (data[i].status === 'delivered') {
                        $item.getElementsByTagName('img')[0].className = "approved blocked";
                    }

                    // append entry to UL
                    $uList.appendChild($item);

                    // if user is a tem lead, display all orders from team lead's department(s)
                } else if ($userName === data[i].lead) {

                    // call function to display entry
                    let $item = newItem(data[i]);

                    if (data[i].status === 'approved by lead' || data[i].status === 'processing') {
                        $item.getElementsByTagName('img')[0].className = "approved blocked";
                        $item.getElementsByTagName('img')[1].className = "delete blocked";
                    }

                    if (data[i].status === 'delivered') {
                        $item.getElementsByTagName('img')[0].className = "approved blocked";
                    }

                    // append entry to UL
                    $uList.appendChild($item);

                    // if user is a team lead or group lead
                } else if ($userName === data[i].employee && $userDept === 'team-leads') {

                    // call function to display entry
                    let $item = newItem(data[i]);

                    if (data[i].status === 'waiting for approval' || data[i].status === 'processing') {
                        $item.getElementsByTagName('img')[0].className = "approved blocked";
                    }

                    if (data[i].status === 'approved by lead' || data[i].status === 'processing') {
                        $item.getElementsByTagName('img')[0].className = "approved blocked";
                        $item.getElementsByTagName('img')[1].className = "delete blocked";
                    }

                    if (data[i].status === 'delivered') {
                        $item.getElementsByTagName('img')[0].className = "approved blocked";
                    }

                    // append entry to UL
                    $uList.appendChild($item);

                    // if user is a team menber
                } else if ($userName === data[i].employee && ($userDept !== 'team-leads' && $userDept !== 'group-leads')) {

                    // call function to display entry
                    let $item = newItem(data[i]);

                    if (data[i].status === 'approved by lead' || data[i].status === 'processing') {
                        $item.getElementsByTagName('img')[0].className = "delete blocked";
                    }

                    // append entry to UL
                    $uList.appendChild($item);

                    // if none of the above, display signed in user's orders
                }
            }
        })
        .catch(error => console.error('ERROR: ', error))
    // +++++++++++++++++++++++++ END OF FETCH +++++++++++++++++++++++++
});