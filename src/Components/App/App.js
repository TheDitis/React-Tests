import React, {Component} from 'react';
import './App.css';
import { Loading } from '../Loading/Loading';


export class App extends Component {
  constructor() {
    super();
    this.state = {
        isLoading: true,
    }
  };
  render() {
    return (
        <div className="App">
            {/*<Component />*/}
            { this.state.isLoading ? (
                <Loading/>
            ) : (
                <div>
                    <h1>Not loading</h1>
                </div>
            )}
        </div>
    )
  }
};

// export default App;
