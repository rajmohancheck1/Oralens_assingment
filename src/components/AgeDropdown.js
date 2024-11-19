import React from "react";

const AgeDropdown = ({ selectedAge, handleChange }) => {
  const ages = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <select
      name="age"
      value={selectedAge}
      onChange={handleChange}
      required
    >
      <option value="" disabled>
        Select Age
      </option>
      {ages.map((age) => (
        <option key={age} value={age}>
          {age}
        </option>
      ))}
    </select>
  );
};

export default AgeDropdown;
