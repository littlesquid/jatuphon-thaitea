import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';


class Slider extends React.Component {
    render() {
        return (
            <div className="slide section" id="product">
                <Carousel showThumbs={false} 
                showStatus={false} 
                showArrows={true}
                autoPlay 
                infiniteLoop
                interval={1000}
                width="700px">
                    <div>
                        <img alt="" src={img1}/>
                    </div>
                    <div>
                       <img alt="" src={img2}/>
                    </div>
                    <div>
                       <img alt="" src={img3}/>
                    </div>
                    <div>
                       <img alt="" src={img4}/>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default Slider