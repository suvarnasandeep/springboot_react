import { useState, useEffect } from "react";
import EmployeeServices from "../services/EmployeeServices";
import { Link } from "react-router-dom";

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    EmployeeServices.getEmployee()
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteEmployee = (employeeId) => {
    EmployeeServices.deleteEmployee(employeeId)
      .then((res) => {
        getAllEmployees();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h3 className="text-center font-bold">List of Employees</h3>
      <Link to="/add-employee" className="btn btn-primary mb-2">
        Add Employee
      </Link>
      <table className="table table-bordered table-striped">
        <thead className="text-center">
          <th>Employee Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email Id</th>
          <th>Action</th>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailId}</td>
              <td>
                <Link
                  className="btn btn-info"
                  to={`/edit-employee/${employee.id}`}
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmployee(employee.id)}
                  style={{ marginLeft: "10px" }}
                >
                  {" "}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;
