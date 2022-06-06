import React ,{ useState} from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import carImg from 'assets/img/motor/vehicle/1.png'
// import carImg2 from 'assets/img/motor/vehicle/12.png'
// import carImg3 from 'assets/img/motor/vehicle/14.png'
// import carImg4 from 'assets/img/motor/vehicle/11.png'
import IconR from 'assets/img/arrowr.png'
import IconL from 'assets/img/arrowl.png'
import Modal from 'react-modal';
// import { Animated } from "react-animated-css";
// import { customStyles } from 'variables/modalCSS';
import {  useSelector } from 'react-redux'

// import makeAnimated from 'react-select/animated';

const Carasole = ({ openModal , closeModel}) => {
    const [index, setIndex] = useState(0);

    const policy = useSelector(state => state.policyReducer.policy)

    


    const images = [
      policy.Image1,
      policy.Image2,
      policy.Image3,
      policy.Image4,
      policy.Image5,
     
    ];
  
    const handleArrow = (direction) =>{
        if(direction==="l"){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction==="r"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }
  
    return (
         <Modal
                 closeTimeoutMS={500}
                 ariaHideApp={false}
                 isOpen={openModal}
                 style={{ width: '100%', height: '100%' }}
             >
                 <div className="modals-dialog modals-confirm">
                 <div className="modal-header">
                     <button  onClick={() => closeModel(false)} style={{marginTop:'40px' , marginRight:'40px'}} type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                         <span aria-hidden="true">×</span>
                     </button>
                 </div>
      <div className='containers' >
        <div className='arrowContainer' style={{ left: 0 }} onClick={()=>handleArrow("l")}>
          <img src={IconL} alt="" layout="fill" objectFit="contain"/>
        </div>
        <div className='wrapper' style={{transform:`translateX(${-100*index}vw)`}}>
          {images.map((img, i) => {
            if(img !== null)
            return(

            <div className='imgContainer' key={i}>

              <img src={`${process.env.REACT_APP_API_ENVIRONMENT}/${img}`} alt="" layout="fill" objectFit="contain" />
            </div>
          )})}
        </div>
        <div className='arrowContainer' style={{ right: 0 }} onClick={()=>handleArrow("r")}>
          <img src={IconR} layout="fill" alt="" objectFit="contain"/>
        </div>
      </div>
      </div>
      </Modal>
    );
  };
  
  export default Carasole;


// function Carasole({ openModal , closeModel}) {
//     const customStyles = {
//         content: {
//             top: '50%',
//             left: '50%',
//             right: 'auto',
//             bottom: 'auto',
//             marginRight: '50%',
//             width: '100%',
//             height: '80%',
//             transform: 'translate(-50%, -50%)',
//             background : '#ddd',
        
//         },
//     };

    // const animatedComponents = makeAnimated();
//     return (
//         <React.Fragment>

//             <Modal
//                 isOpen={openModal}
//                 // onAfterOpen={afterOpenModal}
//                 onRequestClose={""}
//                 style={customStyles}
//                 contentLabel="Example Modal"
//             >
//                 <div className="modals-dialog modals-confirm">
//                 <div className="modal-header">
//                     <button  onClick={() => closeModel(false)} style={{marginTop:'10px' , marginRight:'30px'}} type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">×</span>
//                     </button>
//                 </div>
//                     <div className="modals-content">
//                         <Carousel showArrows={true} showThumbs={false} showIndicators={false} >
//                             <div>
//                                 <img src={carImg} style={{ width: '50%', height: '50%', objectFit: 'cover' }} />
//                             </div>
//                             <div>
//                                 <img src={carImg2} style={{ width: '50%', height: '50%', objectFit: 'cover' }}  />
//                             </div>
//                             <div>
//                                 <img src={carImg3} style={{ width: '50%', height: '50%', objectFit: 'cover' }}  />
//                             </div>
//                         </Carousel>
//                     </div>
//                 </div>


//             </Modal>

//             {/* <Modal
//                 closeTimeoutMS={500}
//                 ariaHideApp={false}
//                 isOpen={openModal}
//                 style={{ width: '100%', height: '100%' }}
//             >
               
//                     <div className="modal-header">
//                         <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
//                             <span aria-hidden="true">×</span>
//                         </button>
//                     </div>
//                     <div className="modal-body">
//                         <div style={{paddingTop:'20px'}}>
//                             <Carousel showThumbs={false} showIndicators={false}>
//                                 <div>
//                                     <img src={carImg} style={{ width: '50%', height: '50%', objectFit: 'cover' }} />
//                                 </div>
//                                 <div>
//                                     <img src={carImg2} />
//                                 </div>
//                                 <div>
//                                     <img src={carImg3} />
//                                 </div>
//                             </Carousel>
//                         </div>
//                     </div>
//                 </Animated>
//             </Modal>



//  */}


//         </React.Fragment>
//     )
// }

// export default Carasole