import React, { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    key1: 'Barbara',
    key2: 'Hepworth',
    key3: 'bhepworth@react.com',
    key4: 'love cats'
  });

  const handleInputChange = (key, value) => {
    setFormData(prevData => ({
      ...prevData,
      [key]: value
    }));
  };

  return (
    <div style={{ fontFamily: 'Arial', fontSize: '16px' }}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={formData.key1}
          onChange={e => handleInputChange('key1', e.target.value)}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={formData.key2}
          onChange={e => handleInputChange('key2', e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={formData.key3}
          onChange={e => handleInputChange('key3', e.target.value)}
        />
      </div>
      <div>
        <label>Hobbies:</label>
        <input
          type="text"
          value={formData.key4}
          onChange={e => handleInputChange('key4', e.target.value)}
        />
      </div>
      <div style={{ marginTop: '16px' }}>
        <p>Name: {formData.key1}</p>
        <p>Last Name: {formData.key2}</p>
        <p>Email: {formData.key3}</p>
        <p>Hobbies: {formData.key4}</p>
      </div>
    </div>
  );
};

export default App;