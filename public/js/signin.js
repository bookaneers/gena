// README:
// In this document, you will find an addEventListener(load) to obtain the user's department and name.
// Also, there is an .onclick method working on the submit-password button that confirms if the 
// password entered matches the one in the local object. Once the password is confirmed, the view is 
// changed to order's view. Regardless of what happens, the cascade menu (form) will reset by the end 
// of the page.
// IMPORTANT: do not use window.onload if you have 2 forms in the same html document.

// cascade menu for employee's sign in.
window.addEventListener('load', function () {

    const $deptSel = document.getElementById('dept');

    const $staffSel = document.getElementById('staff');
    for (let dept in departments) {
        $deptSel.options[$deptSel.options.length] = new Option(dept, dept);
    }

    $deptSel.onchange = function () {
        $staffSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done   
        for (let staff in departments[this.value]) {
            $staffSel.options[$staffSel.options.length] = new Option(staff, staff);
        }
    }
    $deptSel.onchange(); // reset in case page is reloaded
});

// onclick method for submit-password button in the end of the signup menu
// document.getElementById('password').addEventListener('keyup', (e) => {

//     e.preventDefault();

//     if(e.key === 'Enter'){
//         console.log('Enter is pressed');
//         alert('enter is clicked');
//         document.getElementById('submit-password').click();
//     }
// });

document.getElementById('submit-password').addEventListener('click', () => {
    // obtain password from local object to validate user
    $userDept = document.getElementById('dept').value;
    $userName = document.getElementById('staff').value;
    $userPassword = document.getElementById('password').value;
    $userTeamLead = departments[$userDept][$userName]['lead'];
    $userGroupLead = departments[$userDept][$userName]['group'];

    // if one of the 3 fields in the signin page is absent do not proceed
    if ((!$userDept) || (!$userName) || (!$userPassword)) {
        document.getElementById('sign-in').reset();
        return;
    };

    // if password matches, move forward to orders' page
    if ($userPassword === departments[$userDept][$userName]['password'] ||
        $userPassword === departments[$userDept][$userName]['password'].toUpperCase()) {

        // display user's name on the screen
        document.getElementById('signing-in').innerHTML = $userName;

        // switch buttons
        document.querySelector('#nav-button').className = 'view';
        document.querySelector('#orders-button').className = 'button-off';

        // prevent printshop from ordereing labels
        // printshop must only process and deliver orders
        // allow only printshop to see delete button for delivered orders
        if ($userName === 'printshop') {
            document.querySelector('#new-order-button').className = 'button-off disable';
            document.querySelector('#new-order-button-div').className = 'new-order-button-div-off';
            document.querySelector('#remove-delivered-labels-div').className = 'view'
        } else {
            document.querySelector('#new-order-button').className = 'button-off';
            document.querySelector('#remove-delivered-labels-div').className = 'view hidden'
        }

        // switch views
        document.querySelector('#new-order').className = 'view hidden';
        document.querySelector('#orders').className = 'view';
        document.querySelector('#log-in').className = 'view hidden';
    }

    // always reset form in the end of the page, regardless of the action
    document.getElementById('sign-in').reset();
});




