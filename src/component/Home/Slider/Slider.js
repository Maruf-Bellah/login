import React from 'react';
import one from './cover-1.png';
import two from './cover-2.jpg';
import three from './cover-3.jpg';
import './Slider.css';

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleDark" className="carousel  slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active all-image d-flex align-items-center justify-content-center" data-bs-interval="10000">
                        <img  className='img-fluid'  src={one} height={'60%'} alt="..." />
                        <div className="carousel-caption my-auto d-none d-md-block slid-text">
                            <h1  className='fw-bolder'>Get Started Digital Learning</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout.</p>
                            <button className='btn btn-primary fw-bold'>Get Started</button>
                        </div>
                    </div>
                    <div className="carousel-item all-image" data-bs-interval="2000">
                        <img className='img-fluid' src={two} height={'60%'} alt="..." />
                        <div className="carousel-caption my-auto d-none d-md-block slid-text">
                            <h1 className='fw-bolder'>Get Started Digital Learning</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout.</p>
                            <button className='btn btn-primary fw-bold'>Get Started</button>
                        </div>
                    </div>
                    <div className="carousel-item all-image">
                        <img  className='img-fluid'  src={three} height={'60%'} alt="..." />
                        <div className="carousel-caption my-auto d-none d-md-block slid-text">
                            <h1  className='fw-bolder'>Get Started Digital Learning</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout.</p>
                            <button className='btn btn-primary fw-bold'>Get Started</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;