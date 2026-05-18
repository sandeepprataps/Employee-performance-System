import {
  useEffect,
  useState
} from "react";

import axios from "axios";

function EmployeeList() {

  const [employees, setEmployees] =
    useState([]);

  useEffect(() => {

    fetchEmployees();

  }, []);

  const fetchEmployees = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:5000/api/employees",
          {
            headers: {
              Authorization:
                localStorage.getItem("token")
            }
          }
        );

      setEmployees(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div>

      <h2>
        Employee List
      </h2>

      {employees.map(employee => (

        <div
          key={employee._id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px"
          }}
        >

          <h3>
            {employee.name}
          </h3>

          <p>
            Department:
            {employee.department}
          </p>

          <p>
            Skills:
            {employee.skills.join(", ")}
          </p>

          <p>
            Performance:
            {employee.performanceScore}
          </p>

          <p>
            Experience:
            {employee.experience}
          </p>

        </div>

      ))}

    </div>

  );

}

export default EmployeeList;