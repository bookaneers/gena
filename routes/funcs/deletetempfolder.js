// define fs
const { Console } = require('console');
const fs = require('fs');

// define path
const path = require('path');

// function to delete previous kanban files saved in 'modified-kanban'
function deleteTempFolder(reqObj) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const tempFolder = path.join(__dirname,'..','..','..','..','..','data','marketing','label-orders',
            `${reqObj.body.department}-${reqObj.body.employee}-${reqObj.params.id}`,'TEMP');

            fs.rmdir(tempFolder, function(err) {
                if (err) {
                    console.log('Error : ', err.message)
                }
            });

            resolve('4 - deleteTempFolders')
        }, 500);
    });
}

module.exports.deleteTempFolder = deleteTempFolder;