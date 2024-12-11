import React from "react";
import "./Home"; 

function Home() {
    return (
        <div className="staycation-container">
            <h2 className="staycation-title">ที่พักให้บริการข้อเสนอ Staycation</h2>
            <p className="staycation-subtitle">
                รับสิทธิประโยชน์สุดพิเศษสำหรับการเข้าพักได้เลย
            </p>
            <div className="staycation-services">
                <div className="service-box">
                    <h3 className="service-title">อาหารและเครื่องดื่ม</h3>
                    <ul className="service-list">
                        <li>รูมเซอร์วิส 24 ชั่วโมง</li>
                        <li>คอฟฟี่ช็อป</li>
                        <li>แอบรูมมินิบาร์ของที่พัก</li>
                    </ul>
                </div>
                <div className="service-box">
                    <h3 className="service-title">บริการด้านสุขภาพ</h3>
                    <ul className="service-list" >
                        <li>ห้องฟิตเนส</li>
                        <li>บริการนวด</li>
                        <li>ห้องเล่นโยคะ</li>
                    </ul>
                </div>
                <div className="service-box">
                    <h3 className="service-title">กิจกรรม</h3>
                    <ul className="service-list">
                        <li>กิจกรรม</li>
                        <li>สระว่ายน้ำ</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
