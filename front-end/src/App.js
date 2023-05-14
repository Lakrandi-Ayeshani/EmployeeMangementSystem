import { AddEmployee } from "./pages/addEmployee.js";
import { EditEmployee } from "./pages/editEmployee.js";
import { EmployeeDetails } from "./pages/employeeDetails.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeDetails/>}/>
          <Route path="/addemp" element={<AddEmployee/>}/>
          <Route path="/edit/:id" element={<EditEmployee/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
