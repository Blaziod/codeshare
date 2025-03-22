import React from "react";
import Footer from "components/footer/footer";

const Home = () => {
  const FeatureCard = ({ icon, title, description }) => {
    return (
      <div
        style={{
          backgroundColor: "#1F2937",
          padding: "30px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div style={{ paddingBottom: "30px" }}>{icon}</div>
        <div
          style={{ display: "flex", flexDirection: "column", margin: "0px" }}
        >
          <h1 style={{ fontSize: "14px", color: "#fff", fontWeight: "bolder" }}>
            {title}
          </h1>
          <h1
            style={{ fontSize: "14px", color: "#9CA3AF", fontWeight: "normal" }}
          >
            {description}
          </h1>
        </div>
      </div>
    );
  };
  const FeatureCards = ({ icon, title, description }) => {
    return (
      <div
        style={{
          backgroundColor: "#1F2937",
          padding: "30px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "5px",
        }}
      >
        <div>{icon}</div>
        <div
          style={{ display: "flex", flexDirection: "column", margin: "0px" }}
        >
          <h1 style={{ fontSize: "14px", color: "#fff", fontWeight: "bolder" }}>
            {title}
          </h1>
          <h1
            style={{ fontSize: "14px", color: "#9CA3AF", fontWeight: "normal" }}
          >
            {description}
          </h1>
        </div>
      </div>
    );
  };

  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          {/* SVG Path for Instant Song Request */}
          <g clipPath="url(#clip0_1310_423)">
            <mask
              id="mask0_1310_423"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <path d="M24 0H0V24H24V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_1310_423)">
              <path
                d="M23.3906 0.796825C23.7969 1.10936 24 1.51562 24 2.01562V5.39062V17.7656C23.9687 18.8281 23.5312 19.7188 22.6875 20.4375C21.8438 21.125 20.7813 21.4844 19.5 21.5156C18.2187 21.4844 17.1562 21.125 16.3125 20.4375C15.4688 19.7188 15.0313 18.8281 15 17.7656C15.0313 16.7031 15.4688 15.8125 16.3125 15.0937C17.1562 14.4063 18.2187 14.0469 19.5 14.0156C20.0313 14.0156 20.5313 14.0938 21 14.25V7.40622L9 11.0156V20.7656C8.96875 21.8281 8.53125 22.7188 7.6875 23.4375C6.84375 24.125 5.78125 24.4844 4.5 24.5156C3.21875 24.4844 2.15625 24.125 1.3125 23.4375C0.46875 22.7188 0.03125 21.8281 0 20.7656C0.03125 19.7031 0.46875 18.8125 1.3125 18.0937C2.15625 17.4063 3.21875 17.0469 4.5 17.0156C5.03125 17.0156 5.53125 17.0938 6 17.25V9.89062V6.51562C6.03125 5.79689 6.39063 5.31253 7.07812 5.06253L22.0781 0.562527C22.5468 0.437527 22.9843 0.515625 23.3906 0.796825Z"
                fill="#009933"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1310_423">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Accept Song Request as a DJ",
      description:
        "Let your audience choose the music and keep the vibe alive.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="24"
          viewBox="0 0 17 24"
          fill="none"
        >
          {/* SVG Path for Shoutouts and Mentions */}
          <g clipPath="url(#clip0_1310_445)">
            <mask
              id="mask0_1310_445"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="17"
              height="24"
            >
              <path d="M16.5 0H0V24H16.5V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_1310_445)">
              <path
                d="M8.25 0.515625C6.96875 0.546892 5.90625 0.984392 5.0625 1.82812C4.21875 2.67186 3.78125 3.73436 3.75 5.01562V12.5156C3.78125 13.7969 4.21875 14.8594 5.0625 15.7031C5.90625 16.5469 6.96875 16.9844 8.25 17.0156C9.53127 16.9844 10.5938 16.5469 11.4375 15.7031C12.2812 14.8594 12.7187 13.7969 12.75 12.5156V5.01562C12.7187 3.73436 12.2812 2.67186 11.4375 1.82812C10.5938 0.984392 9.53127 0.546892 8.25 0.515625ZM2.25 10.6406C2.1875 9.95316 1.8125 9.57816 1.125 9.51562C0.4375 9.57816 0.0625 9.95316 0 10.6406V12.5156C0.03125 14.6406 0.71875 16.4531 2.0625 17.9531C3.375 19.4531 5.0625 20.3594 7.125 20.6719V22.2656H4.875C4.1875 22.3281 3.8125 22.7031 3.75 23.3906C3.8125 24.0781 4.1875 24.4531 4.875 24.5156H8.25H11.625C12.3125 24.4531 12.6875 24.0781 12.75 23.3906C12.6875 22.7031 12.3125 22.3281 11.625 22.2656H9.375V20.6719C11.4375 20.3594 13.125 19.4531 14.4375 17.9531C15.7812 16.4531 16.4687 14.6406 16.5 12.5156V10.6406C16.4375 9.95316 16.0625 9.57816 15.375 9.51562C14.6875 9.57816 14.3125 9.95316 14.25 10.6406V12.5156C14.2187 14.2031 13.6406 15.625 12.5156 16.7812C11.3593 17.9062 9.93747 18.4844 8.25 18.5156C6.5625 18.4844 5.14063 17.9062 3.98438 16.7812C2.85938 15.625 2.28125 14.2031 2.25 12.5156V10.6406Z"
                fill="#009933"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1310_445">
              <rect width="16.5" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "View Requests or Messages",
      description:
        "Deliver heartfelt messages, announcements and personalised interactions.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            opacity="0.4"
            d="M19.25 7.41021V16.5902C19.25 18.3102 18.63 19.6002 17.52 20.2202C17.07 20.4702 16.57 20.5902 16.05 20.5902C15.25 20.5902 14.39 20.3202 13.51 19.7702L10.59 17.9402C10.39 17.8202 10.16 17.7502 9.93 17.7502H9V6.25021H9.93C10.16 6.25021 10.39 6.18021 10.59 6.06021L13.51 4.23021C14.97 3.32021 16.4 3.16021 17.52 3.78021C18.63 4.40021 19.25 5.69021 19.25 7.41021Z"
            fill="#009933"
          />
          <path
            d="M9 6.25V17.75H8.5C6.08 17.75 4.75 16.42 4.75 14V10C4.75 7.58 6.08 6.25 8.5 6.25H9Z"
            fill="#009933"
          />
        </svg>
      ),
      title: "Accept Shoutout Request",
      description: "Give special mentions and make moments unforgettable.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
        >
          <path
            d="M17.5 12.6499V16.3499C17.5 19.4699 14.59 21.9999 11 21.9999C7.41 21.9999 4.5 19.4699 4.5 16.3499V12.6499C4.5 15.7699 7.41 17.9999 11 17.9999C14.59 17.9999 17.5 15.7699 17.5 12.6499Z"
            fill="#009933"
          />
          <path
            opacity="0.4"
            d="M17.5 7.6499V12.6499C17.5 15.7699 14.59 17.9999 11 17.9999C7.41 17.9999 4.5 15.7699 4.5 12.6499V7.6499C4.5 8.5599 4.75 9.3999 5.19 10.1199C6.26 11.8799 8.46 12.9999 11 12.9999C13.54 12.9999 15.74 11.8799 16.81 10.1199C17.25 9.3999 17.5 8.5599 17.5 7.6499Z"
            fill="#009933"
          />
          <path
            d="M17.5 7.65C17.5 8.56 17.25 9.4 16.81 10.12C15.74 11.88 13.54 13 11 13C8.46 13 6.26 11.88 5.19 10.12C4.75 9.4 4.5 8.56 4.5 7.65C4.5 4.53 7.41 2 11 2C12.8 2 14.42 2.63 15.6 3.65C16.77 4.68 17.5 6.09 17.5 7.65Z"
            fill="#009933"
          />
        </svg>
      ),
      title: "Accept Tips or Gifts",
      description:
        "As a celebrant, host, performer or dj you can get gifts from your guests or audience by them scanning your code",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", minWidth: "100vw", maxWidth: "100vw" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <img src="/assets/png/logo.png" width={50} height={50} alt="logo" />
        <p style={{ marginLeft: "10px", color: "#093" }}>Track Request</p>
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "350px",
        }}
      >
        <img
          src="/assets/svg/dc.svg"
          alt="hero"
          style={{
            width: "100%",
            borderRadius: "30px",
            height: "auto",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100vw",
            borderRadius: "30px",
            height: "100%",
            backgroundColor: "rgba(17, 24, 39, 0.40)",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ padding: "20px" }}>
            <h1
              style={{
                textAlign: "left",
                color: "#fff",
                fontWeight: "bolder",
                fontSize: "36px",
              }}
            >
              Maximize Your Earnings By
            </h1>
            <h1
              style={{
                color: "#fff",
                fontWeight: "normal",
                fontSize: "15px",
              }}
            >
              Connecting with your Audience or Guests at an Event in Real-Time
              for Special Requests, Donations, Tips, or Gifts through a unique
              QRcode to Make Your Events Monumental.
            </h1>
            <div
              style={{
                display: "flex",
                gap: "20px",
                width: "100%",
                paddingTop: "20px",
              }}
            >
              <button
                style={{
                  backgroundColor: "#009933",
                  color: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  height: "50px",
                  width: "45%",
                }}
              >
                Sign Up
              </button>
              <button
                style={{
                  backgroundColor: "#1F2937",
                  color: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "15px 30px",
                  borderRadius: "10px",
                  height: "50px",
                  width: "45%",
                }}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ paddingTop: "30px", padding: "20px", paddingBottom: "30px" }}
      >
        <h1
          style={{
            textAlign: "left",
            color: "#fff",
            fontWeight: "bolder",
            fontSize: "24px",
          }}
        >
          Who can use Codeshare.ng?
        </h1>
        <h1
          style={{
            color: "#9CA3AF",
            fontWeight: "normal",
            fontSize: "15px",
            textAlign: "justify",
          }}
        >
          At{" "}
          <span style={{ fontWeight: "bolder", color: "#fff" }}>
            Codeshare.ng
          </span>{" "}
          you can register as an Event's Host, Celebrant, DJ, MC, Artist, or
          Performer. Whether you're hosting the event, celebrating a special
          moment, playing music, keeping the energy alive, or showcasing your
          talents.{" "}
        </h1>
        <p
          style={{
            color: "#9CA3AF",
            fontWeight: "normal",
            fontSize: "15px",
            textAlign: "justify",
          }}
        >
          <span style={{ fontWeight: "bolder", color: "#fff" }}>
            Codeshare.ng
          </span>{" "}
          allows you to engage with your audience in real time for an
          exceptional experience.
        </p>
      </div>
      <div>
        <h1
          style={{
            textAlign: "left",
            color: "#fff",
            fontWeight: "bolder",
            fontSize: "24px",
            padding: "20px",
          }}
        >
          How it Works
        </h1>

      <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr", // Ensures equal columns
    gap: "20px",
    padding: "20px",
    alignItems: "stretch", // Ensures all boxes take up the full height
  }}
>
          <FeatureCards
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <g clipPath="url(#clip0_1310_322)">
                  <path
                    d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24Z"
                    fill="#009933"
                    fillOpacity="0.2"
                  />
                  <mask
                    id="mask0_1310_322"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="11"
                    y="14"
                    width="26"
                    height="20"
                  >
                    <path d="M36.5 14H11.5V34H36.5V14Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_1310_322)">
                    <path
                      d="M15.25 19.4297C15.25 18.5182 15.4714 17.6849 15.9141 16.9297C16.3568 16.1745 16.9687 15.5625 17.75 15.0938C18.5313 14.6511 19.3646 14.4297 20.25 14.4297C21.1354 14.4297 21.9687 14.6511 22.75 15.0938C23.5313 15.5625 24.1432 16.1745 24.5859 16.9297C25.0286 17.6849 25.25 18.5182 25.25 19.4297C25.25 20.3412 25.0286 21.1745 24.5859 21.9297C24.1432 22.6849 23.5313 23.2969 22.75 23.7656C21.9687 24.2083 21.1354 24.4297 20.25 24.4297C19.3646 24.4297 18.5313 24.2083 17.75 23.7656C16.9687 23.2969 16.3568 22.6849 15.9141 21.9297C15.4714 21.1745 15.25 20.3412 15.25 19.4297ZM11.5 33.2578C11.5521 31.3047 12.2292 29.6641 13.5312 28.3359C14.8594 27.0339 16.5 26.3568 18.4531 26.3047H22.0469C24 26.3568 25.6407 27.0339 26.9688 28.3359C28.2709 29.6641 28.9479 31.3047 29 33.2578C29 33.5964 28.8828 33.8698 28.6484 34.0781C28.4401 34.3125 28.1666 34.4297 27.8281 34.4297H12.6719C12.3333 34.4297 12.0599 34.3125 11.8516 34.0781C11.6172 33.8698 11.5 33.5964 11.5 33.2578ZM31.1875 26.6172V24.1172H28.6875C28.1146 24.0651 27.8021 23.7526 27.75 23.1797C27.8021 22.6068 28.1146 22.2943 28.6875 22.2422H31.1875V19.7422C31.2396 19.1693 31.5521 18.8568 32.125 18.8047C32.6979 18.8568 33.0104 19.1693 33.0625 19.7422V22.2422H35.5625C36.1354 22.2943 36.4479 22.6068 36.5 23.1797C36.4479 23.7526 36.1354 24.0651 35.5625 24.1172H33.0625V26.6172C33.0104 27.1901 32.6979 27.5026 32.125 27.5547C31.5521 27.5026 31.2396 27.1901 31.1875 26.6172Z"
                      fill="#009933"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1310_322">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            title="Sign Up"
            description="Dj, Celebrant, Host, Performers register their details and terms to get their code"
          />
          <FeatureCards
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <g clipPath="url(#clip0_1310_352)">
                  <path
                    d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24Z"
                    fill="#009933"
                    fill-opacity="0.2"
                  />
                  <mask
                    id="mask0_1310_352"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="15"
                    y="14"
                    width="18"
                    height="20"
                  >
                    <path d="M32.75 14H15.25V34H32.75V14Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_1310_352)">
                    <path
                      d="M15.25 17.5547C15.276 17.0339 15.4583 16.5912 15.7969 16.2266C16.1615 15.8881 16.6042 15.7058 17.125 15.6797H20.875C21.3958 15.7058 21.8385 15.8881 22.2031 16.2266C22.5417 16.5912 22.724 17.0339 22.75 17.5547V21.3047C22.724 21.8255 22.5417 22.2682 22.2031 22.6328C21.8385 22.9713 21.3958 23.1536 20.875 23.1797H17.125C16.6042 23.1536 16.1615 22.9713 15.7969 22.6328C15.4583 22.2682 15.276 21.8255 15.25 21.3047V17.5547ZM17.75 18.1797V20.6797H20.25V18.1797H17.75ZM15.25 27.5547C15.276 27.0339 15.4583 26.5911 15.7969 26.2266C16.1615 25.888 16.6042 25.7057 17.125 25.6797H20.875C21.3958 25.7057 21.8385 25.888 22.2031 26.2266C22.5417 26.5911 22.724 27.0339 22.75 27.5547V31.3047C22.724 31.8255 22.5417 32.2682 22.2031 32.6328C21.8385 32.9714 21.3958 33.1536 20.875 33.1797H17.125C16.6042 33.1536 16.1615 32.9714 15.7969 32.6328C15.4583 32.2682 15.276 31.8255 15.25 31.3047V27.5547ZM17.75 28.1797V30.6797H20.25V28.1797H17.75ZM27.125 15.6797H30.875C31.3958 15.7058 31.8385 15.8881 32.2031 16.2266C32.5416 16.5912 32.7239 17.0339 32.75 17.5547V21.3047C32.7239 21.8255 32.5416 22.2682 32.2031 22.6328C31.8385 22.9713 31.3958 23.1536 30.875 23.1797H27.125C26.6042 23.1536 26.1615 22.9713 25.7969 22.6328C25.4584 22.2682 25.2761 21.8255 25.25 21.3047V17.5547C25.2761 17.0339 25.4584 16.5912 25.7969 16.2266C26.1615 15.8881 26.6042 15.7058 27.125 15.6797ZM30.25 18.1797H27.75V20.6797H30.25V18.1797ZM25.25 26.3047C25.2761 25.9141 25.4844 25.7057 25.875 25.6797H28.375C28.7656 25.7057 28.9739 25.9141 29 26.3047C29.0261 26.6953 29.2344 26.9036 29.625 26.9297H30.875C31.2656 26.9036 31.4739 26.6953 31.5 26.3047C31.5261 25.9141 31.7344 25.7057 32.125 25.6797C32.5156 25.7057 32.7239 25.9141 32.75 26.3047V30.0547C32.7239 30.4453 32.5156 30.6536 32.125 30.6797H29.625C29.2344 30.6536 29.0261 30.4453 29 30.0547C28.9739 29.6641 28.7656 29.4557 28.375 29.4297C27.9844 29.4557 27.7761 29.6641 27.75 30.0547V32.5547C27.7239 32.9453 27.5156 33.1536 27.125 33.1797H25.875C25.4844 33.1536 25.2761 32.9453 25.25 32.5547V26.3047ZM29.625 33.1797C29.2344 33.1536 29.0261 32.9453 29 32.5547C29.0261 32.1641 29.2344 31.9557 29.625 31.9297C30.0156 31.9557 30.2239 32.1641 30.25 32.5547C30.2239 32.9453 30.0156 33.1536 29.625 33.1797ZM32.125 33.1797C31.7344 33.1536 31.5261 32.9453 31.5 32.5547C31.5261 32.1641 31.7344 31.9557 32.125 31.9297C32.5156 31.9557 32.7239 32.1641 32.75 32.5547C32.7239 32.9453 32.5156 33.1536 32.125 33.1797Z"
                      fill="#009933"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1310_352">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            title="Get QR Code"
            description="Get your QRcode and share"
          />

          <FeatureCards
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <g clipPath="url(#clip0_1310_395)">
                  <path
                    d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24Z"
                    fill="#009933"
                    fill-opacity="0.2"
                  />
                  <mask
                    id="mask0_1310_395"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="14"
                    y="14"
                    width="20"
                    height="20"
                  >
                    <path d="M34 14H14V34H34V14Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_1310_395)">
                    <path
                      d="M24 34.4297C25.8229 34.4036 27.4896 33.9609 29 33.1016C30.5104 32.2161 31.7344 30.9922 32.6719 29.4297C33.5573 27.8411 34 26.1745 34 24.4297C34 22.6849 33.5573 21.0182 32.6719 19.4297C31.7344 17.8672 30.5104 16.6432 29 15.7578C27.4896 14.8985 25.8229 14.4558 24 14.4297C22.1771 14.4558 20.5104 14.8985 19 15.7578C17.4896 16.6432 16.2656 17.8672 15.3281 19.4297C14.4427 21.0182 14 22.6849 14 24.4297C14 26.1745 14.4427 27.8411 15.3281 29.4297C16.2656 30.9922 17.4896 32.2161 19 33.1016C20.5104 33.9609 22.1771 34.4036 24 34.4297ZM28.4141 22.5938L23.4141 27.5937C22.9714 27.9583 22.5286 27.9583 22.0859 27.5937L19.5859 25.0937C19.2214 24.651 19.2214 24.2083 19.5859 23.7656C20.0286 23.4011 20.4714 23.4011 20.9141 23.7656L22.75 25.6016L27.0859 21.2656C27.5286 20.9011 27.9714 20.9011 28.4141 21.2656C28.7786 21.7083 28.7786 22.1511 28.4141 22.5938Z"
                      fill="#009933"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1310_395">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            title="Accept"
            description="Accept or View notifications from your guests"
          />
          <FeatureCards
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <g clipPath="url(#clip0_1310_408)">
                  <path
                    d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24Z"
                    fill="#009933"
                    fill-opacity="0.2"
                  />
                  <mask
                    id="mask0_1310_408"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="14"
                    y="14"
                    width="20"
                    height="20"
                  >
                    <path d="M34 14H14V34H34V14Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_1310_408)">
                    <path
                      d="M24 14.4297C25.8229 14.4558 27.4896 14.8985 29 15.7578C30.5104 16.6432 31.7344 17.8672 32.6719 19.4297C33.5573 21.0182 34 22.6849 34 24.4297C34 26.1745 33.5573 27.8411 32.6719 29.4297C31.7344 30.9922 30.5104 32.2161 29 33.1016C27.4896 33.9609 25.8229 34.4036 24 34.4297C22.1771 34.4036 20.5104 33.9609 19 33.1016C17.4896 32.2161 16.2656 30.9922 15.3281 29.4297C14.4427 27.8411 14 26.1745 14 24.4297C14 22.6849 14.4427 21.0182 15.3281 19.4297C16.2656 17.8672 17.4896 16.6432 19 15.7578C20.5104 14.8985 22.1771 14.4558 24 14.4297ZM23.0625 19.1172V24.4297C23.0625 24.7682 23.2057 25.0286 23.4922 25.2109L27.2422 27.7109C27.737 27.9974 28.1667 27.9062 28.5312 27.4375C28.8177 26.9427 28.7265 26.513 28.2578 26.1484L24.9375 23.9219V19.1172C24.8854 18.5443 24.5729 18.2318 24 18.1797C23.4271 18.2318 23.1146 18.5443 23.0625 19.1172Z"
                      fill="#009933"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1310_408">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            title="Acknowledgement"
            description="Execute request or acknowledge notifications"
          />
        </div>
      </div>

      <div
        style={{ paddingTop: "50px", padding: "20px", paddingBottom: "50px" }}
      >
        <h1
          style={{
            textAlign: "left",
            color: "#fff",
            fontWeight: "bolder",
            fontSize: "24px",
          }}
        >
          Features
        </h1>
        {features.map((feature, index) => (
          <div style={{ paddingTop: "10px" }}>
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </div>
        ))}
      </div>

      <div
        style={{
          paddingTop: "50px",
          padding: "20px",
          paddingBottom: "50px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontWeight: "bolder",
            fontSize: "30px",
            textAlign: "center",
          }}
        >
          Register & Join The Experience
        </h1>
        <h1
          style={{
            textAlign: "center",
            color: "#9CA3AF",
            fontWeight: "normal",
            fontSize: "15px",
          }}
        >
          Make your event memorable with Codeshare.ng
        </h1>
        <div
          style={{
            display: "flex",
            gap: "20px",
            width: "100%",
            paddingTop: "20px",
            flexDirection: "column",
          }}
        >
          <button
            style={{
              backgroundColor: "#009933",
              color: "#fff",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              height: "50px",
              width: "100%",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
          <button
            style={{
              backgroundColor: "#111827",
              color: "#093",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px 30px",
              borderRadius: "10px",
              height: "50px",
              width: "100%",
              border: "2px solid #009933",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
