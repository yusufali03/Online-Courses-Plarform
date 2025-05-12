import React, { useState } from 'react';
import api from '../api';

export default function Register() {
  const [form, setForm] = useState({ phone_number: '', password: '', full_name: '' });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users/register/', form);
      alert('Registration successful! Please log in.');
    } catch (err) {
      console.error(err);
      alert('Registration failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* your inputs, bound to form.phone_number, form.password, form.full_name */}
      <button type="submit">Register</button>
    </form>
  );
}
