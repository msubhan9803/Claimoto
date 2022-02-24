import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carImg from 'assets/img/motor/vehicle/1.png'
import carImg2 from 'assets/img/motor/vehicle/12.png'
import carImg3 from 'assets/img/motor/vehicle/14.png'
import carImg4 from 'assets/img/motor/vehicle/11.png'
import Modal from 'react-modal';
import { Animated } from "react-animated-css";
// import { modalStyleCenter } from 'variables/modalCSS';
// import { useDispatch } from 'react-redux';
import makeAnimated from 'react-select/animated';
function Carasole({ openModal }) {

    const animatedComponents = makeAnimated();
    return (
        <React.Fragment>
            <Modal
                closeTimeoutMS={500}
                ariaHideApp={false}
                isOpen={openModal}
                style={{ width:'100%' , height:'100%'}}
            >
                <Animated
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    animationInDuration={1000}
                    animationOutDuration={1000}
                    isVisible={openModal}
                >
                    <div className="modal-header">
                        <button  type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <Carousel showThumbs={false} showIndicators={false}>
                            <div>
                                <img src={carImg} style={{width:'50%' , height:'50%' , objectFit:'cover'}} />
                            </div>
                            <div>
                                <img src={carImg2} />
                            </div>
                            <div>
                                <img src={carImg3} />
                            </div>
                        </Carousel>
                    </div>
                </Animated>
            </Modal>






        </React.Fragment>
    )
}

export default Carasole