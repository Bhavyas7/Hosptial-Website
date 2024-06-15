import React, { useState } from 'react';
import axios from 'axios';

function BookAppointment() {
  const [form, setForm] = useState({
    date: '',
    time: '',
    doctor: '',
    location: '400006',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/appointments', form)
      .then(response => {
        alert('Appointment booked successfully');
      })
      .catch(error => {
        alert('Error booking appointment');
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" name="date" value={form.date} onChange={handleChange} required />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={form.time} onChange={handleChange} required />
        </label>
        <label>
          Doctor:
          <input type="text" name="doctor" value={form.doctor} onChange={handleChange} required />
        </label>
        <label>
          Location:
          <select name="location" value={form.location} onChange={handleChange}>
            <option value="400006">400006</option>
            <option value="400007">400007</option>
          </select>
        </label>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default BookAppointment;
