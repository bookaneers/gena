// ALLOWS PRINT SHOP to DELETE DELIVERED ORDERS that are 2 WEEKS OLD
// LOGIC to HIDE DELETE BUTTON can be FOUND in signin.js



// fetches all order labels and filters them down to ones that are delivered and 14 days old
// counter is put in place to get total number of expired orders
// number is then used to display on the screen
function getDeliveredOrders() {
    let todayDate = new Date()
    let totalDeliveredOrders = 0
    fetch('/api/orders')
        .then(res => res.json())
        .then(data => {
            // loop through incoming data
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                // get order data & todays data
                let orderDate = new Date(element.date)
                let diffTimes = Math.abs(todayDate - orderDate)
                let diffDays = Math.ceil(diffTimes / (1000 * 60 * 60 * 24))
                if ((element.status === "delivered") && diffDays > 14) {
                    totalDeliveredOrders++
                }
                document.getElementById('remove-delivered-button').innerHTML = 'delete: ' + totalDeliveredOrders + ' expired orders'
                if (totalDeliveredOrders === 0) {
                    document.getElementById('remove-delivered-button').innerHTML = 'no expired orders to delete'
                }
            }
        })
}

// call to update on load of screen
getDeliveredOrders()

// fetches all orders and calls removeDeliveredLabels if conditions are met
// gives parameter needed for removeDeliveredLabels functions
function getAllOrders() {
    if (confirm("are you sure you want to delete") == true) {
        let todayDate = new Date()
        fetch('/api/orders')
            .then(res => res.json())
            .then(data => {
                // loop through array of objects
                for (let i = 0; i < data.length; i++) {
                    const element = data[i];
                    let orderDate = new Date(element.date)
                    let diffTimes = Math.abs(todayDate - orderDate)
                    let diffDays = Math.ceil(diffTimes / (1000 * 60 * 60 * 24))
                    // if status is delivered and is two weeks old run the function
                    if ((element.status === "delivered") && diffDays > 14) {
                        let id = element._id
                        // calls this function for every order that meets the conditions
                        removeDeliveredLabels(id)
                        // function called to update total expired orders
                        getDeliveredOrders()
                    }
                }
            })
    }
}

// function is called for every order label that is delivered and two weeks old
// takes id of each order as parameter
function removeDeliveredLabels(newId) {
    fetch('/api/orders/deliveredorders/' + newId,
        { method: 'DELETE' })
        .then(res => res.json())
        .then(data => console.log('data ', data))
        .catch(error => console.error('ERROR: ', error))
}
