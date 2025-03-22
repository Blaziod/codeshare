/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

// Reusable component for the styled text
const FooterText = ({
  fontSize,
  color,
  fontWeight,
  children,
  noWrap,
  onClick,
  isDropdown,
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
      {children}
      {isDropdown && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M13.7333 11.1241L10.5768 6.91797H5.9039C5.10426 6.91797 4.70445 7.88353 5.27019 8.45027L9.58523 12.7653C9.91799 13.0971 10.3687 13.2834 10.8387 13.2834C11.3086 13.2834 11.7593 13.0971 12.0921 12.7653L13.7333 11.1241Z"
            fill="#707A8A"
          />
          <path
            d="M15.7655 6.91797H10.5769L13.7335 11.1241L16.4073 8.45027C16.965 7.88353 16.5652 6.91797 15.7655 6.91797Z"
            fill="#707A8A"
          />
        </svg>
      )}
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
  const [setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [openDropdowns, setOpenDropdowns] = useState({}); // Track the open state of dropdowns

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (sectionIndex) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [sectionIndex]: !prevState[sectionIndex],
    }));
  };

  const sections = [
    {
      title: "Company",
      links: [
        { text: "About Us" },
        { text: "Help Center" },
        { text: "FAQs", noWrap: true },
      ],
    },

    {
      title: "Legal",
      links: [{ text: "Terms of Use" }, { text: "Privacy Policy" }],
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr", // Keep 2fr 1fr for all screen sizes
          justifyItems: "center", // Centering the content horizontally
          alignItems: "flex-start", // Align items to the start vertically
          gap: "30px", // Gap between sections
          height: "auto",
          width: "100%",
          padding: "20px",
        }}
      >
        {sections.map((section, index) => (
          <FooterSection
            key={index}
            title={section.title}
            links={section.links}
            toggleDropdown={() => toggleDropdown(index)}
            isDropdownOpen={openDropdowns[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
