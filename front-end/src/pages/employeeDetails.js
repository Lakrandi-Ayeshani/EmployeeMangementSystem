import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
//import Container from "react-bootstrap/Container";

export const EmployeeDetails = () => {
    const [employees, setEmployees] = useState([]);
    const [currentFilter, setCurrentFilter] = useState(null);
    const navigate = useNavigate();

    const handleFilterChange = (event) => {
        console.log(event.target.name, event.target.value);
    };

    const fetchEmployees = async () => {
        try {
            if (employees.length === 0){
                const response = await axios.get("http://localhost:5000");
                console.log(response);
                setEmployees(response.data);
            }
        }
        catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchEmployees();
    });

    const handleDelete = async (employeeId) => {
        const deleteEmployee = await axios.delete(`http://localhost:5000/${employeeId}`);
        const newEmployees = employees.filter((emp) => emp._id !== employeeId);
        setEmployees(newEmployees);
    };

    const handleEdit = async (employeeId) =>  {
        navigate(`edit/${employeeId}`);
    }

    const handleAddPeopleButton = () => {
        navigate("addemp");
    }

    return (
        <div>
            <Container>
                <Row className="mb-3"><h3><b>People</b></h3></Row>
                <Row className="justify-content-end">
                    <Col md="2">
                        <Form.Group>
                            <Form.Select value={currentFilter} name="employeeType" onChange={handleFilterChange}>
                                <option>Full-Time</option>
                                <option>Part-Time</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md="2">
                        <Button variant="primary" onClick={handleAddPeopleButton}>Add People</Button>
                    </Col>
                </Row>
                <Row>
                    <Table>
                        <thead>
                            <tr>
                                <th> Display Name </th>
                                <th> Emp. ID </th>
                                <th> Designation </th>
                                <th> Emp. Type </th>
                                <th> Experience </th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {employees.map((employee) => (
                                <tr>
                                    <td> {employee.displayName} </td>
                                    <td> {employee.employeeID} </td>
                                    <td> {employee.designation} </td>
                                    <td> {employee.employeeType} </td>
                                    <td> {employee.experience} </td>
                                    <td> <Button variant= "link" size= "sm" style={{ textDecoration: "none" }} onClick={() => handleEdit(employee._id)}> Edit </Button></td>
                                    <td> <Button variant= "link" size= "sm" className = "text-danger" style={{ textDecoration: "none" }} onClick={() => handleDelete(employee._id)}>Delete</Button>  </td>
                                </tr>
                        ))}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </div>
    )
}