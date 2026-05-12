// src/pages/Profile.jsx
import React, { useState, useEffect } from 'react';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          window.location.href = '/login';
          return;
        }
        const res = await fetch('https://your-api.onrender.com/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        if (res.ok) {
          setUser(data.user);
          setPosts(data.posts);
        } else {
          setError('Failed to load profile');
        }
      } catch (err) {
        setError('Something went wrong');
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  if (error) return (
    <div className="p-6 text-red-500">{error}</div>
  );

  if (!user) return (
    <div className="p-6 text-center">Loading...</div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">

        {/* Profile Card */}
        <div className="bg-white rounded shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">
            {user.name}
          </h2>
          <p className="text-gray-500 mb-1">{user.email}</p>
          <p className="text-sm text-gray-400 capitalize">
            Role: {user.role}
          </p>
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* User Posts */}
        <h3 className="text-xl font-bold mb-4 text-gray-700">
          My Posts
        </h3>
        {posts.length === 0 ? (
          <p className="text-gray-500">You haven't posted anything yet.</p>
        ) : (
          posts.map((post) => (
            <div key={post._id} className="bg-white rounded shadow p-4 mb-4">
              <h4 className="font-bold text-blue-600">{post.title}</h4>
              <p className="text-sm text-gray-500">{post.category}</p>
              <p className="text-gray-700 mt-2">{post.description}</p>
              <span className={`text-xs mt-2 inline-block px-2 py-1 rounded ${
                post.status === 'approved' 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-yellow-100 text-yellow-600'
              }`}>
                {post.status}
              </span>
            </div>
          ))
        )}

      </div>
    </div>
  );
}
