const express = require('express');
const router = express.Router();
let orders = {};

//addOrder
router.post('/', (req, resp) => {
    let ord = req.body;
    console.log(ord);
    if(!ord || !ord.email){
        resp.status(400).send('no order o email')
    }
    if (orders[ord.email]) {
        resp.status(404).send("ALREADY EXIST");
        return;
    }
    orders[ord.email] = ord;
    resp.send(true);
});
//getAll
router.get('/', (req, resp) => {
    resp.send(orders);
});
//remove
router.delete('/', (req, resp) => {
    const email = req.query.email;
    if(orders[email]){
        delete orders[email];
        return resp.send(true)
    } else {
        resp.send(false)
    }
});
//getBy email
router.get("/:emailAddress", (req, resp) => {
    const email = req.params.email;
    resp.send(orders[email]);
});

module.exports = router;