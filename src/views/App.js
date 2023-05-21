
import './App.scss';
import FirstComponent from './Example/FirstComponent';
import Nav from './Nav/nav';
import Home from './Example/Home';
import {BrowserRouter as Router,
  Routes,
  Route,
  Links,
} from 'react-router-dom'
function App() {
  return (
   
    <Router>
    <div className="App">
    
      <header className="App-header">
      <Nav/>
        <p>
          Hello world!
        </p>

        {/* <FirstComponent /> */}
        
        
          <Routes>
            <Route path="/" exact element={<Home/>}>
              
            </Route>
            <Route path="/about" element={<FirstComponent/>}>
              
            </Route>
          </Routes>
      </header>
    </div>
    </Router>
    
  );
}

export default App;
