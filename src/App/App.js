import React from 'react';
import './App.css';
import Welcome from "../Welcome/welcome";
import Info from "../Info/info";
import Technologies from '../Skills/skills';


function App() {
    return (
        <div className="App">
            <div className="page1">
                <Welcome/>
                <Info/>
            </div>
            {/* <div className="page2">
                <Technologies />
            </div> */}
        </div>
    );
}

export default App;
