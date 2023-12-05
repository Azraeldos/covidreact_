import React from 'react';

import { Footer, MoreInfo, Volunteer, Vaccinations, Testing, Header, Donations, RInfo } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => (
    <div>
        <div className ="main">
          <div><Navbar /></div>
        <div>
          <Header />
        </div>
        <div>
        <RInfo/>
        </div>
        <div>
        <MoreInfo />
        </div>
        
        <div>
        <Testing />
        </div>
        <div className="mainItem">
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
    </div>
  );


export default App;
// Use the css to copy those styles into the css file but make sure to create desgnators ex. .pic1 .pic2 ect.