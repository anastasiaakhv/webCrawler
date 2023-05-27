import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SiteManagementPage from './pages/SiteManagementPage';
import ExecutionManagementPage from './pages/ExecutionManagementPage';
import VisualizationPage from './pages/VisualizationPage';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/site-management" element={<SiteManagementPage />} />
          <Route path="/execution-management" element={<ExecutionManagementPage />} />
          <Route path="/visualization" element={<VisualizationPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
