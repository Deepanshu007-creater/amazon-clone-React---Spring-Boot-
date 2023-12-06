import React, { Component } from 'react';
import './HomePage.css'
import AdvertisementOne from './AdvertisementOne/AdvertisementOne';
import AdvertisementFour from './AdvertisementFour/AdvertisementFour';

class HomePage extends Component {

    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        return (
            <div className='homePage'>
                <div style={{paddingTop:"310px",display:"flex",flexWrap:'wrap'}}>
                    <AdvertisementOne/>
                    <AdvertisementFour/>
                    <AdvertisementOne/>
                    <AdvertisementOne/>
                    <AdvertisementOne/>
                    <AdvertisementFour/>
                    <AdvertisementOne/>
                    <AdvertisementOne/>
                </div>
            </div>
        );
    }
}

export default HomePage;