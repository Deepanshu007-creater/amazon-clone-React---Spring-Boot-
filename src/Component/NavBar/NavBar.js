import React,{Component} from 'react';
import './NavBar.css'

class NavBar extends Component {

    constructor(props){
        super(props);
        this.state={}
        
    }
    render() {
        return (
            <div className='navbar_component'>
                <div className='navbar_logo'></div>
                <div className='navbar_location'>
                    <div className='navbar_locationImage'></div>
                    <div className='navbar_locationText'>Noida</div>
                </div>
                <div className='navbar_searchComp'>
                    <div className='navbar_dropDown'>
                        <select>
                            <option value='All'>All</option>
                            <option value='Books'>Books</option>
                            <option value='Mobile'>Mobile</option>
                            <option value='Clothes'>Clothes</option>
                            <option value='Shoes'>Shoes</option>
                            <option value='Jacket'>Jacket</option>
                            <option value='Bags'>Bags</option>
                            <option value='Laptop'>Laptop</option>
                            <option value='TV'>TV</option>
                        </select>
                    </div>
                    <div className='navbar_searchInput'>
                        <input type='text' className='navbar_searchInput' placeholder='Enter here for'/>
                    </div>
                    <div className='navbar_searchIconBox'>
                        <div className='navbar_searchIcon'></div>
                    </div>
                </div>

                
                <div className='navbar_acc text_box'>
                    <div className='hello_text'>Hello, sign in</div>
                    <div className='acc_text'>Account & Lists</div>
                </div>
                <div className='text_box navbar_return'>
                <div className='return_text hello_text'>Return</div>
                <div className='order_text acc_text'>& Order</div>
                </div>
                <div className='text_box cart'>
                    <div className='cart_no'>0</div>
                    <div className='cart_icon'></div>
                    <div className='acc_text cart_text'>Cart</div>
                </div>
                </div>
            
        );
    }
}

export default NavBar;