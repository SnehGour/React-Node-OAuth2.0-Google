// GoogleLogin.jsx
import { useEffect } from "react";
import parseJwt from "./utility/parseJwt";
const GoogleLogin = () => {
  useEffect(() => {
    console.log(
      "client",
      process.env.Google_ClientId
    );
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id:
        process.env.Google_ClientId,
        callback: handleCredentialResponse,
      });

      google.accounts.id.renderButton(
        document.getElementById("google-button"),
        { theme: "outline", size: "large" }
      );

      // Optional: auto select previously signed-in account
      google.accounts.id.prompt();
    }
  }, []);

  const handleCredentialResponse = async (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    // Send the token to your backend for verification and login

    // Optional: Decode token to get user info
    const token = response.credential;
    console.log("User Info:", token);

    try {
      const res = await fetch("http://localhost:5000/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();
      console.log("Server response:", data);

      // Save to localStorage / state if needed
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return <div id="google-button"></div>;
};

export default GoogleLogin;
