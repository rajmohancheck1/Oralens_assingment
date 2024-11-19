import React, { useState } from "react";
import AgeDropdown from "./AgeDropdown";
import "../styles.css";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data: ", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="dashboard">
      <h1>Oralens Healthcare Dashboard</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Age:</label>
        <AgeDropdown
          selectedAge={formData.age}
          handleChange={handleChange}
        />

        <label>Upload File:</label>
        <input type="file" onChange={handleFileChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Dashboard;
