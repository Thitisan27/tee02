import React from "react";
import "./Navbar"; // For additional styling
import logo from "./img/io.png";

function Navbar() {
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#c5a349" }}>
                <div className="container-fluid">
                    {/* Logo */}
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img
                            src={logo}
                            alt="Logo"
                            style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "8px",
                                marginRight: "10px",
                            }}
                        />
                        <span className="text-white fw-bold" style={{ fontSize: "20px" }}>
                        Khum Phucome Hotel, Chiang Mai
                        </span>
                    </a>

                    {/* Mobile Toggle */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a
                                    className="nav-link text-white fw-bold mx-3"
                                    href="#"
                                    style={{ fontSize: "18px" }}
                                >
                                    หน้าแรก
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link text-white fw-bold mx-3"
                                    href="#"
                                    style={{ fontSize: "18px" }}
                                >
                                    เกี่ยวกับเรา
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link text-white fw-bold mx-3"
                                    href="#"
                                    style={{ fontSize: "18px" }}
                                >
                                    แกลลอรี่
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link text-white fw-bold mx-3"
                                    href="#"
                                    style={{ fontSize: "18px" }}
                                >
                                    คูปองส่วนลด+ข้อเสนอพิเศษ
                                </a>
                            </li>
                        </ul>

                        {/* Call-to-Action Button */}
                        <div>
                            <a
                                className="btn"
                                href="#"
                                style={{
                                    backgroundColor: "#fdd835",
                                    color: "black",
                                    fontWeight: "bold",
                                    padding: "10px 20px",
                                    borderRadius: "20px",
                                    fontSize: "18px",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                }}
                            >
                                ดูห้องพัก
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
