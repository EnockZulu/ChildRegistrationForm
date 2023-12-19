// ChildProfilePage.js
import React from 'react';

const ChildProfilePage = ({ child }) => {
  if (!child) {
    return <div>No child selected</div>;
  }

  return (
    <div>
      <h2>Child Profile</h2>
      <p>
        <strong>Name:</strong> {child.firstName} {child.lastName}
      </p>
      <p>
        <strong>Age:</strong> {child.age}
      </p>
      <p>
        <strong>Gender:</strong> {child.gender}
      </p>
      <p>
        <strong>Immunizations:</strong> {child.immunizations.join(', ')}
      </p>
    </div>
  );
};

export default ChildProfilePage;
