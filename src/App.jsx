import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DataPage from './pages/DataPage';

function App(){
  return (
    <Routes>
      <Route element={<HomePage />}/>
      <Route path="/data" element={<DataPage />}/>
    </Routes>
  );
};

export default App;
