import React from "react";
import "./Hom"; 

function Hom() {
    return (
        <div className="staycation-container">
            <h2 className="staycation-title">สิ่งอำนวยความสะดวก</h2>

            <div className="staycation-services">
                <div className="service-box">
                    <ul className="service-list">
                        <li>แผนกต้อนรับ (24 ชั่วโมง)</li> 
                        <li>สระว่ายน้ำกลางแจ้ง</li>
                        <li>บริการรับส่งสนามบิน</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Hom;
