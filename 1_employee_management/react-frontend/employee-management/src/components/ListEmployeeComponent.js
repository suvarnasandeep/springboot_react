import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

export default class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };

    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  addEmployee() {
    //this.props.history.push("/add-employee");
    this.props.history.push("/add-employee/-1");
  }

  editEmployee(id) {
    //this.props.history.push(`/update-employee/${id}`);
    this.props.history.push(`/add-employee/${id}`);
  }

  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter((employee) => employee.id != id),
      });
    });
  }

  viewEmployee(id) {
    this.props.history.push(`/view-employee/${id}`);
  }

  componentDidMount() {
    EmployeeService.getEmployee().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center font-bold">Employees List</h2>
        <div>
          <button className="btn btn-primary" onClick={this.addEmployee}>
            Add Employee
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr className="text-center">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => this.editEmployee(employee.id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteEmployee(employee.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-info"
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewEmployee(employee.id)}
                    >
                      Info
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
