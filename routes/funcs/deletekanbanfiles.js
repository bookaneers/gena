// define fs
const fs = require('fs');

// define path
const path = require('path');

// function to delete previous kanban files saved in 'modified-kanban'
function deleteKanbanFiles(reqObj) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const tempFolder = path.join(__dirname,'..','..','..','..','..','data','marketing','label-orders',
            `${reqObj.body.department}-${reqObj.body.employee}-${reqObj.params.id}`,'TEMP');

            // define path to folder
            const directory = path.join(tempFolder);

            // read and delete all files inside folder
            fs.readdir(directory, (err, files) => {
                if (err) throw err;
            
                for (const file of files) {
                    fs.unlink(path.join(directory, file), err => {
                        if (err) throw err;
                    });
                }
            });

            resolve('3 - deleteKanbanFiles')
        }, 2000);
    });
}

module.exports.deleteKanbanFiles = deleteKanbanFiles;