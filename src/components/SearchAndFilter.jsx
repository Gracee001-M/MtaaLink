import React, { useState } from 'react';

export default function SearchAndFilter({ onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('latest');

  const handleUpdate = (q, cat, sort) => {
    onFilterChange({ q, category: cat, sort });
  };

  return (
    <div className="bg-white p-4 rounded shadow-md flex flex-col md:flex-row gap-4 mb-6">
      
      <input 
        type="text" 
        placeholder="Search announcements..." 
        className="border p-2 rounded flex-1"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleUpdate(e.target.value, category, sortBy);
        }}
      />
      
      <select 
        className="border p-2 rounded"
        onChange={(e) => {
          setCategory(e.target.value);
          handleUpdate(searchTerm, e.target.value, sortBy);
        }}
      >
        <option value="">All Categories</option>
        <option value="Jobs">Jobs</option>
        <option value="Events">Events</option>
        <option value="Alerts">Alerts</option>
        <option value="General">General</option>
      </select>
      
      <select 
        className="border p-2 rounded"
        onChange={(e) => {
          setSortBy(e.target.value);
          handleUpdate(searchTerm, category, e.target.value);
        }}
      >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
}