import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/portfolio' element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
