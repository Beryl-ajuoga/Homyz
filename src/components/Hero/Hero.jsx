import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';



const hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className=' paddings innerWidth flexCenter hero-container'>

            {/* Left side */}
            <div className=' flexColStart hero-left'>
                <div className='hero-title'>
                    <div className='orange-circle'/>
                    <h1>
                        Discover <br />Most Suitable <br />Property
                    </h1>
                </div>

                <div className=' flexColStart hero-des'>
                    <span>Find a variety of properties that suite you today</span> 
                    <span>Forget all difficulties in finding a residence for you</span>
                </div>

                <div className='flexCenter search-bar'>
                    <HiLocationMarker color = "var(--blue)" size={25}/>
                    <input type="text" />
                    <button className='button'>search</button>
                </div>

                {/* statistics */}

                <div className='flexCenter stats'>
                    <div className='flexColStart stat'>
                        <span>
                            </span>
                            <CountUp start = {88000} end={9000} duration={4}/>
                            <span>+</span>
                            <span>
                                Premium Products
                            </span>
                    </div>

                     <div className='flexColStart stat'>
                        <span>
                            </span>
                            <CountUp start = {88000} end={9000} duration={4}/>
                            <span>+</span>
                            <span>
                                Happy Customers
                            </span>
                    </div>

                    <div className='flexColStart stat'>
                        <span>
                            </span>
                            <CountUp start = {1950} end={2000} duration={4}/>
                            <span>+</span>
                            <span>
                                Award Winning
                            </span>
                    </div>

                </div>

        





            </div>


            {/* Right side */}
            <div className='hero-right'>
                <div className='image-container'>
                    <img src="./hero-image.png" alt="" />
                </div>
            </div>





        </div>
    </section>
  )
}
1
export default hero
