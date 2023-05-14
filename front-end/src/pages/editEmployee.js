import { useParams } from "react-router-dom";
import {EmployeeForm} from "../components/EmployeeForm.js";

// EmployeeForm
export const EditEmployee = () => {
 let {id} = useParams();

    return(
        <EmployeeForm mode="edit" employeeId ={id}/>
    )
}