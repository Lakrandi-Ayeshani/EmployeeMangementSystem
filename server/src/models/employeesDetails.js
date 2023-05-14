const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const employeeSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    nameWithInitials: {type: String, required: true},
    displayName: {type: String, required: true},
    gender: {type: String, required: true},
    dateOfBirth: {type: Date, required: true},
    email: {type: String, required: true},
    mobileNumber: {type: String, required: true},
    designation: {type: String, required: true},
    employeeType: {type: String, required: true}, 
    joinedDate: {type: Date, required: true},
    experience: { type: String, required: true},
    salary: {type: String, required: true},
    personalNotes: {type: String}
});
 
//employeeSchema.plugin(AutoIncrement, {inc_field: "employeeID"});

const EmployeeModel = mongoose.model("employeeDetails", employeeSchema);
module.exports = EmployeeModel;

