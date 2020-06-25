import React, { Component } from 'react'
import MasterFooter from './components/masterFooter'
import MasterHeader from './components/masterHeader';
import Home from './components/home';

class App extends Component {
    render() {
        return (
            <div>
                <MasterHeader />
                <Home />
                <MasterFooter />
            </div>
        )
    }
}

export default App;
