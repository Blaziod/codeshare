import React from "react";
import Logo from "/src/assets/png/logo.png";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh", minWidth: "100vw" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <img src={Logo} width={50} height={50} alt="logo" />
        <p style={{ marginLeft: "10px", color: "#093" }}>Track Request</p>
      </div>
      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        <img
          src="/src/assets/png/a.png"
          alt="hero"
          style={{
            width: "100%",
            borderRadius: "30px",
            height: "auto",
          }}
        />
        <img
          src="/src/assets/png/aa.png"
          alt="hero"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            borderRadius: "30px",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
