import React, { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
    const [ activeTab, setActiveTab ] = useState("Home");

    return (
        <div className="header">
            <p className="logo">User Management</p>
            <div className="header-right">
                <Link to="/">
                    <p className={`${activeTab === "Home" ? "active": ""}`} onClick={() => setActiveTab("Home")}>Home</p>
                </Link>
                <Link to="/add">
                    <p className={`${activeTab === "AddUser" ? "active": ""}`} onClick={() => setActiveTab("AddUser")} ></p>
                </Link>
                <Link to="/about">
                    <p className={`${activeTab === "About" ? "active": ""}`} onClick={() => setActiveTab("About")} >About</p>
                </Link>
                <Link to="/add">
                    <p>Add User</p>
                </Link>
            </div>
        </div>
    );
};

export default Header;