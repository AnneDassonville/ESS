import React, { useState } from 'react';

const NewStudentRecordForm = () => {
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const validationErrors = {};
    if (!name) validationErrors.name = 'Name is required.';
    if (!className) validationErrors.className = 'Class is required.';
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Here you could handle the form submission, e.g., send to an API.
      console.log('Form submitted:', { name, className, additionalInfo });
      // Clear the form
      setName('');
      setClassName('');
      setAdditionalInfo('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Class:</label>
        <input
          type="text"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        {errors.className && <p>{errors.className}</p>}
      </div>
      <div>
        <label>Additional Information:</label>
        <textarea
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewStudentRecordForm;