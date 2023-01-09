// define fs
const fs = require('fs');

// define path
const path = require('path');

// function to create new folders
function createFolders(reqObj) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            // create folder with order's info
            const tempDest = path.join(__dirname,'..','..','..','..','..','data','marketing','label-orders',
            `${reqObj.body.department}-${reqObj.body.employee}-${reqObj.params.id}`);
            fs.mkdir(tempDest, { recursive: true },  (err) => {if (err) return console.error(err)});

            // iterate over labels' array
            for (let i = 0; i < reqObj.body.labels.length; i++) {

                // get type of label
                let subFolder = reqObj.body.labels[i].pdf.slice(reqObj.body.labels[i].pdf.length - 15, reqObj.body.labels[i].pdf.length - 12);

                // create a folder for especific type of label
                const newFolder = path.join(tempDest,subFolder);
                fs.mkdir(newFolder, { recursive: true }, (err) => {if (err) return console.error(err)});
            }

            const newTempFolder = path.join(tempDest,'TEMP');
            fs.mkdir(newTempFolder, { recursive: true }, (err) => {if (err) return console.error(err)});

            resolve('1 - createFolders');
        }, 500);
    });
}

module.exports.createFolders = createFolders;