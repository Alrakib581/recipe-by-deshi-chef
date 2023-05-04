import React, { useEffect, useState } from 'react';
import FooterInfo from '../FooterInfo/FooterInfo';
import { Link } from 'react-router-dom';
import {FaFacebook,FaYoutube, FaInstagram} from "react-icons/fa"
import './Footer.css';


const Footer = () => {
    const [footerInfo, setFooterInfo] = useState([])
    useEffect(()=>{
        fetch('https://footer-server-rakib0157.vercel.app/')
        .then(res => res.json())
        .then(data => setFooterInfo(data))
    },[])
    return (
        <div className='bgcolor text-light p-5 pb-3'>
            <div className='container d-md-flex justify-content-between'>
            {
                footerInfo.map(info => <FooterInfo
                 key={info.id}
                 info={info}
                ></FooterInfo>)
            }
            <div>
               {/* <Link>{FaAndroid}</Link> */}
               <h3>Connect with</h3>
              <div className='d-md-flex justify-content-between'>
              <Link className='text-white fs-3'><FaFacebook/></Link>
               <Link className='text-white fs-3 ps-3 ps-md-0'><FaYoutube/></Link>
               <Link className='text-white fs-3 ps-3 ps-md-0'><FaInstagram/></Link>
              </div>
               
            </div>
            </div>
            <hr />
            <p className='text-warning text-center pt-4'>All Rights Reserved &copy; 2023</p>
        </div>
    );
};

export default Footer;