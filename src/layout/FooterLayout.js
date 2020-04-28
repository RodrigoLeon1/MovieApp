import React from "react";

const FooterLayout = () => {
  const current_date = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <h1>
        Rodrigo Leon <span>@</span> {current_date}
      </h1>
    </footer>
  );
};

export default FooterLayout;
