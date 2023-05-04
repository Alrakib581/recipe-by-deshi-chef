import React from 'react';

const FooterInfo = ({info}) => {
    // console.log(info)
    const {title, description} = info;
    return (
        <div className=''>
            <h3>{title}</h3>
            {
                description.map((des, idx)=> <p className='' key={idx}>{des}</p>)
            }
        </div>
    );
};

export default FooterInfo;