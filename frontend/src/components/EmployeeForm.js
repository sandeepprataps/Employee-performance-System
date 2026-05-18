import { useState } from "react";
import axios from "axios";

function EmployeeForm() {

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      department: "",
      skills: "",
      performanceScore: "",
      experience: ""
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/employees",
        {
          ...formData,
          skills:
            formData.skills.split(",")
        },
        {
          headers: {
            Authorization:
              localStorage.getItem("token")
          }
        }
      );

      alert("Employee Added");

    } catch (error) {

      alert("Error");

    }

  };

  return (

    <div>

      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="department"
          placeholder="Department"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="skills"
          placeholder="Skills"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="performanceScore"
          placeholder="Performance Score"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="experience"
          placeholder="Experience"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Add Employee
        </button>

      </form>

    </div>

  );

}

export default EmployeeForm;