import React from "react";
import "./Carousel"; // Import CSS for styling

function Carousel() {
    return (
        <div className="row">
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                {/* Indicators */}
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>

                {/* Slides */}
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img
                            src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/244614693_4901389633223183_5577764534832727360_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEXzwNCRoo75ie1ev0YZFDaME22UNe2tv4wTbZQ17a2_v8ayo4WTC8xLdzv_uPshUVcp8ugDmJr03rsLjHCtUzo&_nc_ohc=VqA-G4VesHEQ7kNvgF1Pa2i&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=ApwjbMxR0anLBc1Tuxidbt9&oh=00_AYCxqEPg1NdkrzPo9bl7BMAQzkyqAKbpc0vmi8KmDBc2UQ&oe=6755C47E"
                            className="d-block w-100 carousel-img"
                            alt="First slide"
                            height ="900px"
                            objectFit="cover"
                        />
                        <div className="carousel-caption d-none d-md-block custom-caption">
                            <h5 className="custom-caption-title">Welcome to Our Resort</h5>
                            <p className="custom-caption-text">
                                Experience luxury and comfort at its finest.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img
                            src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/465127606_1038214418315824_534506103761773181_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHL775I6pRRDIFjohfKFfDoW2ZAlxAeWEhbZkCXEB5YSDWfWV6ArKI5bGyaG4sGyfq9d6qh4N-gejwLwWcS_R-Z&_nc_ohc=vUMgAJLU-XYQ7kNvgHq7ATl&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=AtVNQ1W7D7NiztlFhWqWClH&oh=00_AYCog90TJmpjNRp_86189PHPOgLVEEijm7g7X_C1Z9ifwA&oe=6755CE97"
                            className="d-block w-100  carousel-img"
                            alt="Second slide"
                            objectFit="cover"
                            height ="900px"
                        />
                        <div className="carousel-caption d-none d-md-block custom-caption">
                            <h5 className="custom-caption-title">Luxury Rooms</h5>
                            <p className="custom-caption-text">
                                Designed to give you a peaceful stay.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.6435-9/132558487_4052926568069498_4229285329279856556_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFRU7inJHHjdnA6LUzud4kNsOyHIU_f_jmw7IchT9_-OVRUIPPV95jXlN0QgqZ-KyMFm849jcENtqjLz_aqYCUf&_nc_ohc=XSAcQLmqCfMQ7kNvgGnFe5S&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=A0e4vBVqxV7RISdSvw2NxH9&oh=00_AYBMWOUJN_KT3QmeMdRFPyMvM6gO3Q-gNEuYx9BwFz9xbA&oe=677763A9"
                            className="d-block w-100 carousel-img"
                            alt="Third slide"
                            height ="900px"
                            objectFit="cover"
                        />
                        <div className="carousel-caption d-none d-md-block custom-caption">
                            <h5 className="custom-caption-title">Exquisite Dining</h5>
                            <p className="custom-caption-text">
                                Savor delicious meals crafted by top chefs.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Navigation Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
