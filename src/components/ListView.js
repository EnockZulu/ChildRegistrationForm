// ListView.js
import React from 'react';
import { Link } from 'react-router-dom';

const ListView = ({ children, onSelect }) => {
  return (
    <div>
      {children.map((child) => (
        <Link to="/child-profile" key={child.id} onClick={() => onSelect(child)}>
          <div>
            {child.firstName} {child.lastName} - Age: {child.age}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListView;
