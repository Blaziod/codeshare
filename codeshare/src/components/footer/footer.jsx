import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// Reusable component for the styled text
const FooterText = ({
  fontSize,
  color,
  fontWeight,
  children,
  noWrap,
  onClick,
  icon,
}) => {
  return (
    <p
      style={{
        fontSize: fontSize || "14px",
        color: color || "#707A8A",
        fontWeight: fontWeight || "400",
        whiteSpace: noWrap ? "nowrap" : "normal",
        cursor: onClick ? "pointer" : "default",
        display: "flex",
        justifyContent: "space-between", // Ensure space between text and icon
        alignItems: "center",
        gap: "5px", // Space between text and icon
      }}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {children}
    </p>
  );
};

const FooterSection = ({ title, links, toggleDropdown }) => (
  <div>
    <div
      style={{
        gap: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FooterText
        fontSize="18px"
        color="#FFF"
        fontWeight="500"
        onClick={toggleDropdown}
      >
        {title}
      </FooterText>
      {links.map((link, index) => (
        <FooterText
          key={index}
          fontSize="14px"
          color="#707A8A"
          fontWeight="400"
          noWrap={link.noWrap}
        >
          {link.text}
        </FooterText>
      ))}
    </div>
  </div>
);

const Footer = () => {
  return (
    <div style={{ paddingBottom: "40px" }}>
      <div
        style={{
          display: "flex",
          justifyItems: "center", // Centering the content horizontally
          alignItems: "flex-start", // Align items to the start vertically
          gap: "30px", // Gap between sections
          height: "auto",
          width: "100%",
          padding: "20px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            gap: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "flex-start",
          }}
        >
          <h1 style={{ fontSize: "18px", color: "#FFF", fontWeight: "500" }}>
            Company
          </h1>
          <h1 style={{ fontSize: "14px", color: "#707A8A", fontWeight: "400" }}>
            About Us
          </h1>
          <h1 style={{ fontSize: "14px", color: "#707A8A", fontWeight: "400" }}>
            Help Center
          </h1>
          <h1 style={{ fontSize: "14px", color: "#707A8A", fontWeight: "400" }}>
            FAQs
          </h1>
        </div>
        <div
          style={{
            gap: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "flex-start",
          }}
        >
          <h1 style={{ fontSize: "18px", color: "#FFF", fontWeight: "500" }}>
            Legal
          </h1>
          <h1 style={{ fontSize: "14px", color: "#707A8A", fontWeight: "400" }}>
            Terms of Use
          </h1>
          <h1 style={{ fontSize: "14px", color: "#707A8A", fontWeight: "400" }}>
            Privacy Policy
          </h1>
          <div style={{ display: "flex", gap: "10px" }}>
            <div
              style={{
                backgroundColor: "#707A8A",
                borderRadius: "50%",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "15px",
                height: "15px",
              }}
            >
              <FaFacebookF size={19} color="#FFF" />
            </div>
            <div
              style={{
                backgroundColor: "#707A8A",
                borderRadius: "50%",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "15px",
                height: "15px",
              }}
            >
              <FaTwitter size={25} color="#FFF" />
            </div>
            <div
              style={{
                backgroundColor: "#707A8A",
                borderRadius: "50%",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "15px",
                height: "15px",
              }}
            >
              <FaInstagram size={25} color="#FFF" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
