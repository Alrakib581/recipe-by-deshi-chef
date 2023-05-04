import React from 'react';
import './ClientCard.css'

const ClientCard = () => {
    return (
        <div>
            <div className="border ccard ms-5 bg-light rounded">
                   <div className='ctext'>
                        <img  className='img-fluid w-25 rounded-circle' src="http://rakibbhai.com/rakib%20img/rakib.png" alt="" />
                        <h4>Md.Abdulla Al Rakib</h4>
                        <p className='fw-semibold px-3'>This is vary helpful website I have ever used in my life. and I am proud for Bangladesy chef and recipes.</p>
                   </div>
                </div>
        </div>
    );
};

export default ClientCard;