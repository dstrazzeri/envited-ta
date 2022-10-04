import Home from './Home';
import CreateEvent from './CreateEvent';
import Event from './Event';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='create' element={<CreateEvent/>} />
        <Route path='event' element={<Event/>} />
      </Routes>
    </Router>
  );
}

export default App;
