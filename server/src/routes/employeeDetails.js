const express = require("express");
const EmployeeModel = require("../models/employeesDetails.js");

const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const response = await EmployeeModel.find({});
        res.json(response);
    }
    catch(err) {
        console.error(err);
    }
})

router.post("/", async (req, res) => {
    const employee = new EmployeeModel({
        ...(req.body)
    });
    
    employee.save().then(() => {
        console.log("New employee added");
    });
   
    res.json(employee);
})

router.put("/", async (req,res) => {

})

router.delete("/:employeeID" , async (req, res) => {
    const deleteEmployeeId = req.params.employeeID;
    EmployeeModel.findByIdAndDelete(deleteEmployeeId).then(() => {
        console.log("employee deleted successfully")
    });
    res.sendStatus(200)
});

router.get("/:employeeId", async (req, res) => {
    const employeeId = req.params.employeeId;
    EmployeeModel.findById(employeeId).then((result) => {
        res.json(result);
    }); 
})

router.put("/:employeeId", async (req, res) => {
    const editEmployeeId = req.params.employeeId;
    const employeeData = req.body;
    EmployeeModel.findByIdAndUpdate(editEmployeeId, employeeData, { returnDocument: "after" }).then((result) => {
        console.log("employee updated", result);
    });
})

module.exports = { employeeRouter: router };