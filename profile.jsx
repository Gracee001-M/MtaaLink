import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("mtaahub_token");

  useEffect(() => {
    if (!token) return navigate("/login");

    // Replace with logic to get your real user ID from the token if possible
    const userId = "your-logged-in-user-id"; 

    fetchhttp://localhost:5000/auth/profile?userId=${userId})
      then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error("Error fetching profile:", err));
  }, [token, navigate]);

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="form-page">
      <div className="form-card profile-card">
        <div className="avatar-circle">
          {user.full_name?.charAt(0).toUpperCase()}
        </div>
        <h1>{user.full_name}</h1>
        <p className="email-text">{user.email}</p>
        
        <div className="profile-details">
          <div className="detail-item">
            <span>Phone:</span> <strong>{user.phone_number}</strong>
          </div>
          <div className="detail-item">
            <span>Member Since:</span> <strong>{new Date(user.created_at).toLocaleDateString()}</strong>
          </div>
        </div>

        <button className="post-btn" onClick={() => navigate("/create")}>
          New Post
        </button>
      </div>
    </div>
  );
}

export default Profile;