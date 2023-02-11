import './InfoHome.css';
import Image from 'react';
import roadmap from './roadmap.png'; // Tell Webpack this JS file uses this image

function InfoHome() {
  return (
    <div class="container">
        <div className='textButton'>
            <h1>WHATS A GREEN BANK?</h1>
            <h2>Green banks are mission-driven public finance institutions that use traditional financial tools such as leverage, 
                underwriting and credit-enhancement to fill financial gaps, remove market barriers, and 
                incentivize the private sector to mobilize alongside the transition instead of against it. 
                Their overall impact has helped reduce GHG emissions, scale down energy use, and support climate-resilient infrastructure at scale. </h2>
            <button class='button' type="button">LEARN MORE</button>
        </div>
        <div>
            <img src={require('./roadmap.png')}/>
        </div>
    </div>

  );
}

/**
 * <div class="container" style="display: flex; height: 100px;">
        <div style="width: 50%; background: green;">
            Left Div
        </div>
        <div style="flex-grow: 1; background: blue;">
            Right Div
        </div>
    </div>
 */
export default InfoHome;