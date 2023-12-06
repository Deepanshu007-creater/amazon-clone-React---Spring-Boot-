import React from 'react';
import './AdvertisementOne.css';

function AdvertisementOne(props) {
    return (
        <div className='advertisement_main'>
            <div className='advertisement_header'>Upto 70% off | Electronics Clearness Store</div>
            <div className='advertisement_body'>
                <img src='https://ik.imagekit.io/bgxoocrfp/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1701801646225' width='300px'/>
            </div>
            <div className='advertisement_footer'>
                See More..
            </div>
        </div>
    );
}

export default AdvertisementOne;