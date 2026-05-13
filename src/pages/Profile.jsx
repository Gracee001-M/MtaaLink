import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user);
    };

    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    alert("Logged out");
  };

  return (
    <div style={styles.container}>
      <h2>Profile</h2>

      {user ? (
        <div>
          <p><b>Email:</b> {user.email}</p>
          <p><b>User ID:</b> {user.id}</p>

          <button onClick={handleLogout} style={styles.button}>
            Logout
          </button>
        </div>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
}

const styles = {
  container: { padding: 20, maxWidth: 400, margin: "auto" },
  button: { padding: 10, background: "red", color: "white" },
};