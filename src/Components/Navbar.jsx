import React from 'react'
import logo from "../assets/j logo.png"
import phone from "../assets/phone.svg"
import whatsapp from "../assets/whatsapp.svg"
const Navbar = () => {
    return (
        <div className=' w-full max-w-[1800px] h-[15vh] flex justify-between items-center py-2 px-8 bg-black '>
            <div className='z-10'>

                <ul>
                    <img className='w-[60px] ' src={logo} alt="logo" />

                </ul>
            </div>
            <div className='z-10'>

                <ul className='flex gap-3 ' >

                    <a href='https://wa.me/+918376962083' className='w-[30px]'
                        aria-label='Contact via WhatsApp'
                        role='link'>

                        <img classname="w-full" src={whatsapp} alt="whatsapp logo"
                        />
                    </a>

                    <a href='tel:+918376962083' className='w-[30px]
                    '
                        aria-label='Call via Phone'
                        role='link'>

                        <img className='w-full' src={phone} alt="phone logo" />
                    </a>



                </ul>
            </div>
        </div>

    )
}

export default Navbar