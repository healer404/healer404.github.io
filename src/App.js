import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import PortfolioPage from './page/portfolio/Portfolio';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<PortfolioPage />} />
            </Routes>
        </Router>
    )
}
export default App;