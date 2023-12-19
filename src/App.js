// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ChildRegistrationForm from './components/ChildRegistrationForm';
import ListView from './components/ListView';
import ChildProfilePage from './components/ChildProfilePage';

const App = () => {
  const [children, setChildren] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);

  const handleRegister = (childData) => {
    setChildren([...children, { ...childData, id: Date.now() }]);
  };

  const handleSelectChild = (child) => {
    setSelectedChild(child);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <ChildRegistrationForm onRegister={handleRegister} />
                <ListView children={children} onSelect={handleSelectChild} />
              </div>
            }
          />
          <Route path="/child-profile" element={<ChildProfilePage child={selectedChild} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
