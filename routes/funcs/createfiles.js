// define fs
const fs = require('fs');
const { readFile, writeFile } = require('fs/promises');

// define path
const path = require('path');

// define PDF-lib
const { PDFDocument, PDFDropdown } = require('pdf-lib');

// function to save files in the folders
function createFiles(reqObj) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const tempFolder = path.join(__dirname,'..','..','..','..','..','data','marketing','label-orders',
            `${reqObj.body.department}-${reqObj.body.employee}-${reqObj.params.id}`,'TEMP');

            // iterate over all labels in the order        
            for (let i = 0; i < reqObj.body.labels.length; i++) {
    
                // if label is a kanban, call fillform to add text to label
                if ((reqObj.body.labels[i].isKanban === true)) {
                    fillForm(reqObj.body.labels[i], tempFolder)
                }
                // ========================================
    
                setTimeout(() => {
    
                    // extract file name out of the file name path
                    let labelFileName = reqObj.body.labels[i].pdf;
    
                    // extract type of file from file name path
                    let typeOfLabel = labelFileName.slice(7, 21);
    
                    // CREATE SOURCE
                    if (typeOfLabel === 'product-labels') {
                        // create path for source of original pdf (exceptions)
                        var source = path.join(__dirname,'..','..','public','exceptions', reqObj.body.labels[i].pdf ); 
                    } else {
                        // create path for source of original pdf
                        var source = path.join(__dirname,'..','..','public', reqObj.body.labels[i].pdf );                
                    }
    
                    // CREATE DESTINATION
                    // extract sub folder name out of the file name path
                    let lastForwardSlash = (labelFileName.lastIndexOf("/") + 1);
                    let nameOfLabel = labelFileName.slice(lastForwardSlash, labelFileName.length - 4);
                    let subFolder = nameOfLabel.slice(nameOfLabel.length - 11, nameOfLabel.length - 8);
    
                    const tempDest = path.join(__dirname,'..','..','..','..','..','data','marketing','label-orders',
                    `${reqObj.body.department}-${reqObj.body.employee}-${reqObj.params.id}`);

                    var typeMatFolder = path.join(tempDest, subFolder);
                    // ========================================
    
                    // DISPLAY LABELS
                    if (reqObj.body.labels[i].isKanban === true) {
    
                        var source = path.join(__dirname,'..','..','..','..','..','data','marketing','label-orders',
                        `${reqObj.body.department}-${reqObj.body.employee}-${reqObj.params.id}`,'TEMP',`${nameOfLabel}.pdf`); 
                    }
    
                    // iterate over one specific label in the order
                    for (let k = 0; k < reqObj.body.labels[i].qty; k++) {
    
                        // create path for destination
                        var dest = path.join(typeMatFolder,`${nameOfLabel}(${k+1}).pdf`);
    
                        // copy files
                        fs.copyFile(source, dest, fs.constants.COPYFILE_FICLONE, (err) => {
                            if (err) throw err;
                        });
                    }
                    // ========================================
                }, 1000);
            }
            // resolve promise
            resolve('2 - createFiles')
        }, 1000);
    });
}

// function to input info from form to the actual pdf, usinf pdf-lib
async function fillForm(input, folder) {

    // define from where to read the file
    let fileToRead = '';
    if (input.pdf.slice(7, 21) === 'product-labels') {
        fileToRead = `public/exceptions/${input.pdf}`
    } else { 
        fileToRead = `public/${input.pdf}`
    }

    try {

        const pdfDoc = await PDFDocument.load(await readFile(fileToRead));

        // read all fields of the pdf doc
        const fieldNames = pdfDoc
            .getForm()
            .getFields()
            .map((f) => f.getName());

        // create a pdf form
        const form = pdfDoc.getForm()

        // write info in the pdf
        for (const fields in input.fields) {

            // let counter = 0;

            // drop-dawn type of field
            if (fields === 'area') {
                const dropdown = form.getDropdown(fields.toUpperCase())
                const selections = dropdown.select(input.fields[fields])
            
            // checkbox type of field
            } else if (fields === 'laser' || fields === 'tube fab' || fields === 'weld' ||
            fields === 'hardware' || fields === 'bend' || fields === 'machine' ||
            fields === 'coatings' || fields === 'assem' ) {
                const checkBox = form.getCheckBox(fields.toUpperCase());
                if (input.fields[fields]) checkBox.check();

            // counter type of field
            // } else if (fields === 'initialCounter') {
            //     counter = input.fields['initialCounter'];

            // checkbox type of field
            } else if (fields.substring(0,9) === 'serialnum') {
                const nameField = form.getTextField(fields.toUpperCase());
                nameField.setText(input.fields[fields].toString()); 

            // text type of field
            } else if (fields === 'qty') {

                let docNum = input.pdf.slice(input.pdf.length-11, input.pdf.length-4);
                const nameField = form.getTextField(fields.toUpperCase());

                if (docNum === 'DOC0395') {
                    nameField.setText(input.fields[fields].toString()); 
                } else {
                    nameField.setText(`QTY ${input.fields[fields].toString()}`); 
                }
                
            // text type of field
            } else {

                let docNum = input.pdf.slice(input.pdf.length-11, input.pdf.length-4);
                const nameField = form.getTextField(fields.toUpperCase());

                if (docNum === 'DOC0542') {
                    nameField.setText(input.fields[fields]);  
                } else {
                    nameField.setText(input.fields[fields].toUpperCase());  
                }             
            }
        }

        // save document as pdf
        const pdfBytes = await pdfDoc.save();

        // define name of file to be written 
        let newPDFName =  input.pdf;
        let lastForwardSlash = (newPDFName.lastIndexOf("/") + 1);
        let nameOfLabel = newPDFName.slice(lastForwardSlash, newPDFName.length);

        await writeFile(`${folder}/${nameOfLabel}`, pdfBytes);
        return;
    
    // error message
    } catch (err) {
        console.log('Error : ', err.message);
    }
}

module.exports.createFiles = createFiles;