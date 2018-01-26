import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import About from './About';
import Weather from "./Weather";
import Examples from "./Examples";
import Navbar from './Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (

        <BrowserRouter>
            <div>
                {/* Start od Fixed Pages*/}
                <Navbar/>
                     {/*End of Fixed Pages*/}
                    <Route path="/" component={Main} />
                    <Route path="/about" component={About} />
                    <Route path="/weather" component={Weather} />
                    <Route path="/examples" component={Examples} />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
