const express = require('express');
const router = express.Router();
let SALARY = 0;
let empls = {};

//addEmployee
router.post("/", (req, resp) => {
    let emp = req.body;
    if (!emp.id || !emp.email) {
        resp.status(400).send('no order o email')
    }
    if (empls[emp.id]) {
        resp.send(false);
    }
    empls[emp.id] = emp;
    SALARY += Number(emp.salary);
    resp.send(true);
});

//getAllSalary
router.get("/salary", (req, resp) => {
    resp.send(SALARY.toString());
});
//getAllEmployees
router.get('/', (req, resp) => {
    resp.send(empls);
});
//remove
router.delete('/', (req, resp) => {
    const id = Number(req.query.id);
    if (!empls[id]) {
        resp.status(404).send("UNKNOWN ID");
        return;
    }
    SALARY -= empls[id].salary;
    resp.send(delete empls[id]);
});
//getBy Id
router.get("/:id", (req, resp) => {
    const id = Number(req.params.id);
    resp.send(empls[id]);
});

module.exports = router;