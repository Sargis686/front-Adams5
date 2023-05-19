
import './App.css';
import Demos from './components/Demos/Demos';
import Navbar from './components/NavBar/Navbar';
import Posts from './components/Posts/Posts';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="Posts" element={<Posts />} />

        <Route path="Demos" element={<Demos />} />
      </Routes>

      {/* <Posts /> */}


    </div>
  );
}

export default App;
