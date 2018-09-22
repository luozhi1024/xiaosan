import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Class1 from './component/Class1'
import Class2 from './component/Class2'
import Class3 from './component/Class3'


import {
    BrowserRouter as Router,
    Route,
    Link ,
    Switch
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <div>
                        <Link to="/">class1</Link>
                        <Link to="/Class2">class2</Link>
                        <Link to="/Class3">class3</Link>
                        <Link to="/Class4">class4</Link>
                        {/* <Switch> */}
                        <Route exact path="/" component={Class1}/>
                        <Route path="/Class2" component={Class2}/>
                        <Route path="/Class3" component={Class3}/>
                        <Route path="/Class4" component={Class4}/>



                        {/* </Switch> */}
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;