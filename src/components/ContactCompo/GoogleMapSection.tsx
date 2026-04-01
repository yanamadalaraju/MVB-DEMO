import React from "react";

const GoogleMapSection: React.FC = () => {
  return (
    <div style={{ width: "100%", marginTop: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Our Location
      </h2>

      <div style={{ width: "100%", height: "400px" }}>
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps?q=17.3850,78.4867&z=15&output=embed"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMapSection;