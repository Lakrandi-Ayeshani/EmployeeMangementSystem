import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
//mport DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";

// EmployeeForm
export const EmployeeForm = ({mode, employeeId}) => {
    const [employeeData, setEmployeeData] = useState({
        fullName: "",
        nameWithInitials: "",
        displayName:"",
        gender: "Female",
        dateOfBirth: "",
        email: "",
        mobileNumber: "",
        designation: "",
        employeeType: "Full-Time", 
        joinedDate: "",
        experience: "01 Years",
        salary: "",
        personalNotes: ""
    })
    // const [joinedDate, setJoinedDate] = useState(new Date());
    // const [dateOfBirth, setDateOfBirth] = useState(new Date());

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmployeeData({...employeeData, [name]: value }); 
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        try{
            if(mode === "add"){
                console.log(employeeData);
                await axios.post("http://localhost:5000", employeeData);
                alert("employee added Successfully");
            } else if (mode === "edit") {
                await axios.put(`http://localhost:5000/${employeeId}`, employeeData);
                alert("employee updated successfully");
            }
        }
        catch(err){
            console.error(err);
        }
    }

    const fetchEmployeeById = async () => {
        const response = await axios.get(`http://localhost:5000/${employeeId}`);
        setEmployeeData({
            ...(response.data),
            dateOfBirth: response.data.dateOfBirth.slice(0, 10),
            joinedDate: response.data.joinedDate.slice(0, 10),
        });
    }

    useEffect(() => {
        if(mode === "edit" && employeeData.fullName === "") {
            fetchEmployeeById();
        }
    })

    return(
        <Container>
            <Form onSubmit={onSubmit}>
                <h3><b>{mode === "add" ? "Add People" : "Edit Person"}</b></h3>
                <Row className="mb-3">
                    <Form.Group as={Col} md="8" >
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            name = "fullName"
                            value= {employeeData.fullName}
                            onChange={handleChange}
                            type= "text"
                            placeholder="Full Name"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" >
                        <Form.Label>Name with initials</Form.Label>
                        <Form.Control
                            value= {employeeData.nameWithInitials}
                            name = "nameWithInitials"
                            onChange={handleChange}
                            required
                            type= "text"
                            placeholder="D.W.K.C. Silva"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" >
                        <Form.Label>Preferred / Display Name</Form.Label>
                        <Form.Control
                            value= {employeeData.displayName}
                            name = "displayName"
                            onChange={handleChange}
                            required
                            type= "text"
                            placeholder="Preferred / Display Name"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" >
                        <Form.Label>Gender</Form.Label>
                        {/* <Form.Control
                            value= {employeeData.gender}
                            name = "gender"
                            onChange={handleChange}
                        /> */}
                        <Form.Select value= {employeeData.gender} name = "gender" onChange={handleChange}>
                            <option>Female</option>
                            <option>Male</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="4" >
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control
                            type= "date"
                            value= {employeeData.dateOfBirth}
                            name = "dateOfBirth"
                            onChange={handleChange}
                        />
                        {/* <DatePicker selected={dateOfBirth} onChange={(date) => setDateOfBirth(date)} /> */}
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            value= {employeeData.email}
                            name = "email"
                            onChange={handleChange}
                            required
                            type= "email"
                            placeholder="Email"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" >
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                            value= {employeeData.mobileNumber}
                            name = "mobileNumber"
                            onChange={handleChange}
                            required
                            placeholder="Mobile Number"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" >
                        <Form.Label>Designation</Form.Label>
                        <Form.Control
                            value= {employeeData.designation}
                            name = "designation"
                            onChange={handleChange}
                            required
                            type= "text"
                            placeholder="Designation"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" >
                        <Form.Label>Employee Type</Form.Label>
                        {/* <Form.Control
                            value= {employeeData.employeeType}
                            name = "employeeType"
                            onChange={handleChange}
                        /> */}
                            <Form.Select value={employeeData.employeeType} name="employeeType" onChange={handleChange}>
                            <option>Full-Time</option>
                            <option>Part-Time</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" >
                        <Form.Label>Joined Date</Form.Label> 
                        <Form.Control
                            type= "date"
                            value= {employeeData.joinedDate}
                            name = "joinedDate"
                            onChange={handleChange}
                        />
                        {/* <DatePicker selected={joinedDate} onChange={(date) => setJoinedDate(date)} /> */}
                    </Form.Group>
                    <Form.Group as={Col} md="4" >
                        <Form.Label>Experience</Form.Label>
                        {/* <Form.Control
                            value= {employeeData.experience}
                            name = "experience"
                            onChange={handleChange}
                        /> */}
                        <Form.Select value= {employeeData.experience} name = "experience" onChange={handleChange}>
                            <option>0</option>
                            <option>04 Months</option>
                            <option>06 Months</option>
                            <option>01 Years</option>
                            <option>02 Years</option>
                            <option>03 Years</option>
                            <option>04 Years</option>
                            <option>05 Years</option>
                            <option>06 Years</option>
                            <option>07 Years</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="8" >
                        <Form.Label>Salary</Form.Label>
                        <Form.Control
                            value= {employeeData.salary}
                            name = "salary"
                            onChange={handleChange}
                            required
                            type= "text"
                            placeholder="Salary"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="8" >
                        <Form.Label>Personal Notes</Form.Label>
                        <Form.Control
                            value= {employeeData.personalNotes}
                            name= "personalNotes"
                            onChange= {handleChange}
                            required
                            type= "text"
                            placeholder="Personal Notes"
                        />
                    </Form.Group>
                </Row>
                    <Button variant="light" >Cancel</Button>
                    <Button type="submit" >Submit</Button>
            </Form>
        </Container>
    )
}