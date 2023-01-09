// define nodemailer
const nodemailer = require('nodemailer');

// function to notify leads about approving order
async function sendEmails(order) {

    try {
        // create a transporter
        let transporter = nodemailer.createTransport({
            host: 'smtp-mail.outlook.com',
            port: 587,
            secure: false,
            auth: {
                user: 'PrintShop@inventive-group.com',
                pass: 'Printing!2022',
            },
            tls: {
                rejectUnauthorized: false,
            }
        });

        // create email for team lead
        let emailDomainTeam = ''
        if (order.lead === 'bradp' || order.lead === 'daves' || order.lead === 'jamiel'
        || order.lead === 'johannad' || order.lead === 'sams') {
            emailDomainTeam = '@iwssales.com'
        } else {
            emailDomainTeam = '@inventive-group.com'
        }

        // create email for group lead
        let emailDomainGroup = ''
        if (order.group === 'benc' || order.group === 'chrisf' || order.group === 'steved') {
            emailDomainGroup = '@iwssales.com'
        } else {
            emailDomainGroup = '@inventive-group.com'
        }

        let emailToLeads = {
            from:'PrintShop@inventive-group.com',
            // to: `${order.lead}${emailDomainTeam}`,
            // cc: `${order.group}${emailDomainGroup}`,
            // bcc:'fernandof@inventive-group.com',
            cc:'bookaneers@gmail.com',

            subject:'GENA has a new order',
            text:`A new order was sent to ${order.lead} for approval.
        order number: ${order._id}
        employee: ${order.employee}
        Thanks`,
        };

        // send email to team lead
        transporter.sendMail(emailToLeads, (err, success) => {
            if (err) {
                console.log('Error: ', err.message);
                console.log('Error: ', err);
                return;
            }
            else {
                // console.log(emailToLeads)
                console.log('email sent successfully to Team and Group Leads!');
            }
        });

        // error message
    } catch (err) {
        console.log('Error (catch): ', err.message);
    }
}

module.exports.sendEmails = sendEmails;
