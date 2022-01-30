import React, {useState} from 'react';
import App from '../App';
import Footer from './Footer';
import Header from './Header';

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

    // {themeOne ? "theme-one" : themeTwo ? "theme-two" : themeThree ? "theme-three" : "null"}
    
  return (
      <>
        <div id="" className={switchTheme}>
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
                                {/* <label className='switch relative inline-block w-16 h-10 mr-4'>
                                    <input type="checkbox">
                                        <span className='slider cursor-pointer inset-0 absolute round rounded-full'></span>
                                    </input>
                                </label> */}
                                <label for="one">*
                                <input id="one" 
                                        name="state-d" 
                                        type="radio" 
                                        value={themeOne}
                                        checked={themeOne}
                                        onClick={() => setThemeOne(!themeOne)}
                                        onChange={() => setThemeOne(!themeThree)}
                                />
                                {/* <label for="one" onClick="">* */}
                                {/* <span className="slider cursor-pointer inset-0 absolute round rounded-full"></span> */}
                                </label>
                                
                                <label for="two">*
                                <input id="two" 
                                        name="state-d" 
                                        type="radio" 
                                        value={themeTwo}
                                        // checked
                                        onClick={() => setThemeOne(!themeOne)}
                                        onChange={() => setThemeTwo(themeThree)}
                                />
                                {/* <label for="two" onClick="">* */}
                                {/* <span className="slider cursor-pointer inset-0 absolute round rounded-full"></span> */}
                                </label>
                            
                                <label for="three">*
                                <input id="three" 
                                        name="state-d" 
                                        type="radio" 
                                        value={themeThree}
                                        // checked
                                        onClick={() => setThemeTwo(!themeTwo)}
                                        onChange={() => setThemeOne(!themeThree)}
                                />
                                {/* <label for="three" onClick="">* */}
                                {/* <span className="slider cursor-pointer inset-0 absolute round rounded-full"></span> */}
                                </label>
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