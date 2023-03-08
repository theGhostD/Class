import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footerCont'>
        <div className='left'>
            <p className='leftTitle'>Contact Address</p>
            <ul className='leftList'>
                <li className='listItem'>
                themesGround, 789 main rd
                </li>
                <li className='listItem'></li>
                <li className='listItem'>080786453456</li>
                <li className='listItem'>facebok</li>
                <li className='listItem'>twitter</li>
            </ul>
        </div>

        <div className='center'>
        <p className='leftTitle'>Quick Links</p>
            <ul className='leftList'>
                <li className='listItem'>
                Home
                </li>
                <li className='listItem'></li>
                <li className='listItem'>Contact</li>
                <li className='listItem'>Login</li>
                <li className='listItem'>SignUp</li>
            </ul>
        </div>
        <div className='right'>
        <p className='leftTitle'>Our services</p>
            <ul className='leftList'>
                <li className='listItem'>
                
                </li>
                <li className='listItem'>my Account</li>
                <li className='listItem'>Order history</li>
                <li className='listItem'>FAQS</li>
                <li className='listItem'>Help Center</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer