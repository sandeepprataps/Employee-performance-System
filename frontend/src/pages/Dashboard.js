import EmployeeForm
from "../components/EmployeeForm";

import EmployeeList
from "../components/EmployeeList";

function Dashboard() {

  return (

    <div>

      <h1>
        Employee Dashboard
      </h1>

      <EmployeeForm />

      <hr />

      <EmployeeList />

    </div>

  );

}

export default Dashboard;