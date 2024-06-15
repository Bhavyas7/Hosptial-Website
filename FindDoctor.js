import React, { useState } from 'react';

const departments = {
  Cardiology: ['Dr. Smith', 'Dr. Johnson'],
  Neurology: ['Dr. Williams', 'Dr. Brown'],
  Orthopedics: ['Dr. Jones', 'Dr. Garcia'],
  Pediatrics: ['Dr. Miller', 'Dr. Davis'],
};

function FindDoctor() {
  const [selectedDepartment, setSelectedDepartment] = useState('Cardiology');
  const [doctors, setDoctors] = useState(departments[selectedDepartment]);

  const handleDepartmentChange = (e) => {
    const department = e.target.value;
    setSelectedDepartment(department);
    setDoctors(departments[department]);
  };

  return (
    <div>
      <h2>Find a Doctor</h2>
      <label htmlFor="department">Select Department:</label>
      <select id="department" value={selectedDepartment} onChange={handleDepartmentChange}>
        {Object.keys(departments).map(dept => (
          <option key={dept} value={dept}>{dept}</option>
        ))}
      </select>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor}>{doctor}</li>
        ))}
      </ul>
    </div>
  );
}

export default FindDoctor;
