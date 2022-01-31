import React, {useState} from 'react';
import App from '../App';
import Footer from './Footer';
import Header from './Header';
/* eslint no-unused-vars: 0 */

export default function PageLayout() {
    const [themeOne, setThemeOne] = useState(true);
    const [themeTwo, setThemeTwo] = useState(true);
    const [themeThree] = useState(true);

    const switchTheme = (
        themeOne ? 'theme-one' : // if
        themeTwo ? 'theme-two' : // else if
        themeThree ? 'theme-three' : // else if
        null // else
    )
    
  return (
      <>
        <div className={switchTheme}>
            <Header />
            <div className='header-row'>
                <div className="toggle-container">
                    <div className='header-col' id="h-col-1">
                        <div id="title">
                            <p>calc</p>
                        </div>
                    </div>
                    <div className='header-col' id="h-col-2">
                        <div id='theme'>
                            <p>Theme</p>
                        </div>
                        
                        <div className='switch-container'>
                            <div id="switch-toggle-label">
                                <ul>
                                    <li><p>1</p></li>
                                    <li><p>2</p></li>
                                    <li><p>3</p></li>
                                </ul>
                            </div>
                            <div className='switch-toggle'>
                                    <input id="one" 
                                            className="toggle toggle-left"
                                            name="state-d" 
                                            type="radio" 
                                            value={themeOne}
                                            checked={themeOne}
                                            onClick={() => setThemeOne(!themeOne)}
                                            // onChange={() => setThemeOne(!themeThree)}
                                    />
                                    <label for="one" className="btn"></label>
                                
                                    <input id="two" 
                                            className="toggle toggle-middle"
                                            name="state-d" 
                                            type="radio" 
                                            value={themeTwo}
                                            // checked
                                            onClick={() => setThemeOne(!themeOne)}
                                            // onChange={() => setThemeTwo(themeThree)}
                                    />
                                    <label for="two" className="btn"> </label>

                                    <input id="three" 
                                            className="toggle toggle-right"
                                            name="state-d" 
                                            type="radio" 
                                            value={themeThree}
                                            // checked
                                            onClick={() => setThemeTwo(!themeTwo)}
                                            onChange={() => setThemeOne(!themeThree)}
                                    />
                                    <label for="three" className="btn"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <App />
            <Footer />
        </div>
      </>
  );
}