import React from "react";

const Footer = () => {
    const footerstyle = {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "50px",
        alignText: "center",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",


    };
    return (
        <div style={footerstyle}>
            <span>© 2023 MAKEMYTRIP PVT. LTD.</span>
            <span>Country India USA UAE</span>
        </div>
    );
};

export default Footer;
