import React from 'react';

const TaxDetails = ({ shop }) => {
  return (
    <div className="tax-details hidden" id={`taxDetails-${shop.id}`}>
      <h3>Tax Details for {shop.name}</h3>
      <p>Tax Amount: {shop.taxAmount}</p>
      <p>Due Date: {shop.dueDate}</p>
      <button onClick={() => document.getElementById(`taxDetails-${shop.id}`).classList.remove('show')}>
        Close
      </button>
    </div>
  );
};

export default TaxDetails;
