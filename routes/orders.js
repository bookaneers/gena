// define express
const express = require('express');
const router = express.Router();

// define fs
const fs = require('fs');

// define path
const path = require('path');

// define nodemailer
const nodemailer = require('nodemailer');

// define routes
const { Order, validate } = require('../models/orders');

// define functions
const { createFolders } = require('./funcs/createfolders');
const { createFiles } = require('./funcs/createfiles');
const { deleteKanbanFiles } = require('./funcs/deletekanbanfiles');
const { deleteTempFolder } = require('./funcs/deletetempfolder');
const { sendEmails } = require('./funcs/sendemails');

// define mongoose
const mongoose = require('mongoose');

// define PDF-lib
const { PDFDocument, PDFDropdown } = require('pdf-lib');

// ==================== GET ====================

router.get('/', async (req, res) => {
    // list all orders from the database, from oldest to newest
    const orders = await Order.find().sort('-date');
    // close fetch
    res.send(orders);
});

// ==================== POST ====================

router.post('/', async (req, res) => {
    const { error } = validate(req.body); // validade body
    if (error) return res.status(400).send(error.details[0].message);

    // because we want to display the new Id to the user
    const order = new Order({
        employee: req.body.employee,
        department: req.body.department,
        labels: req.body.labels,
        lead: req.body.lead,
        group: req.body.group,
        status: req.body.status
    });

    // save post
    await order.save();
    // close fetch
    res.send(order);
    // notify lead about order
    if (!order.labels[0].isProductLabel) sendEmails(order);
});

// ==================== PUT ====================

router.put('/:id', async (req, res) => {
    // find order and save updates 
    const order = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status });
    if (!order) return res.status(404).send('The order with the given ID was not found.');
    // close fetch
    res.send(order);
});

// ==================== PUT approved by lead ====================

// the reason for another PUT is to be able to add the name of the lead who approved the order
router.put('/approvedbylead/:id', async (req, res) => {
    // find order and save updates
    const order = await Order.findByIdAndUpdate(req.params.id, { lead: req.body.lead, status: req.body.status, date: req.body.date });
    if (!order) return res.status(404).send('The order with the given ID was not found.');
    // close fetch
    res.send(order);
});

// ==================== DELETE ====================

router.delete('/:id', async (req, res) => {
    // find order and remove it
    const order = await Order.findByIdAndRemove(req.params.id);
    if (!order) return res.status(404).send('The order with the given ID was not found.');
    // close fetch
    res.send(order);
});

// ==================== GET one ====================

router.get('/:id', async (req, res) => {
    // display one specific order from the database
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).send('The order with the given ID was not found.');
    // close fetch
    res.send(order);
});

// ==================== PUT files to print ====================

router.put('/filestoprint/:id', async (req, res) => {
    // find order and save updates (no updates in this particular fetch)
    const order = await Order.findByIdAndUpdate(req.params.id);
    if (!order) return res.status(404).send('The order with the given ID was not found.');

    try {
        const tempDest = await createFolders(req);
        console.log(tempDest);
        const tempSource = await createFiles(req);
        console.log(tempSource);
        const tempDelete = await deleteKanbanFiles(req);
        console.log(tempDelete);
        const tempFolderDelete = await deleteTempFolder(req);
        console.log(tempFolderDelete);

    }
    catch {
        console.log('Error : ', err.messsage)
    }
    // close fetch
    res.send(order);
});



// ================ Delete orders that have been delivered ==========
router.delete('/deliveredorders/:id', async (req, res) => {
    try {
        const order = await Order.findByIdAndRemove(req.params.id)
        if (!order) {
            return res.status(404).send('The order with the given ID was not found')
        }
        res.send(order)
    } catch (error) {
        console.log('Error : ', err.messsage)
    }


})




module.exports = router;