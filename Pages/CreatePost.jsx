import React, { useState } from 'react';

export default function CreatePost() {
  const [form, setForm] = useState({ title: '', description: '', category: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // send to backend API
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <input type="text" placeholder="Title" className="border p-2 w-full"
        onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <textarea placeholder="Description" className="border p-2 w-full"
        onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
      <select onChange={(e) => setForm({ ...form, category: e.target.value })}>
        <option>Jobs</option>
        <option>Events</option>
        <option>Alerts</option>
        <option>General</option>
      </select>
      <button className="bg-green-500 text-white p-2">Submit</button>
    </form>
  );
}