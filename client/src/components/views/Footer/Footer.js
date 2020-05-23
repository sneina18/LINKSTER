import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            color:'white',
            backgroundColor: 'lightblue', 
            height: '100px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
            
        }}>
           <h3>Connect with us</h3><br></br>
           <a href="https://www.instagram.com/">Instagram</a>
           <a href="https://www.twitter.com/">Twitter</a>
           <a href="https://www.facebook.com/">Facebook</a>
        </div>
    )
}

export default Footer
