import React from 'react';

import { Footer, MoreInfo, Volunteer, Vaccinations, Testing, Header, Intro, Donations, RInfo } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => (
    <div className = "App">
        <Navbar />
        <Header />
        {/* <Intro/> */}
        <RInfo/>
        <div className='More_Info'>
        <MoreInfo />
        </div>
        <div>
        <Testing />
        </div>
        <div>
        <Vaccinations />
        </div>
        <div>
        <Volunteer />
        </div>
        <div>
        <Donations />
        </div>
        <div>
        <Footer />
        </div>
    </div>
  );


export default App;
// Use the css to copy those styles into the css file but make sure to create desgnators ex. .pic1 .pic2 ect.