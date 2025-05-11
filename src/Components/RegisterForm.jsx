import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    let newErrors = {};
    if (formData.fullName.length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters long';
    }
    if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (formData.phoneNumber.length !== 11) {
      newErrors.phoneNumber = 'Phone number must be 11 characters long';
    }
    if (formData.address.length === 0) {
      newErrors.address = 'Please provide your address';
    }
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Here you can add your logic to submit the form data, such as sending it to an API
      console.log(formData);
    }
  };

  const isValidEmail = (email) => {
    // Very basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={() => {
              if (formData.fullName.length < 3) {
                setErrors({ ...errors, fullName: 'Name must be at least 3 characters long' });
              } else {
                setErrors({ ...errors, fullName: '' });
              }
            }}
            placeholder="Full Name"
            className={`block w-full px-4 py-2 border rounded-md focus:outline-none ${errors.fullName && 'border-red-500'}`}
          />
          {errors.fullName && <p className="text-red-500 mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => {
              if (!isValidEmail(formData.email)) {
                setErrors({ ...errors, email: 'Invalid email address' });
              } else {
                setErrors({ ...errors, email: '' });
              }
            }}
            placeholder="Email"
            className={`block w-full px-4 py-2 border rounded-md focus:outline-none ${errors.email && 'border-red-500'}`}
          />
          {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            onBlur={() => {
              if (formData.phoneNumber.length !== 11) {
                setErrors({ ...errors, phoneNumber: 'Phone number must be 11 characters long' });
              } else {
                setErrors({ ...errors, phoneNumber: '' });
              }
            }}
            placeholder="Phone Number"
            className={`block w-full px-4 py-2 border rounded-md focus:outline-none ${errors.phoneNumber && 'border-red-500'}`}
          />
          {errors.phoneNumber && <p className="text-red-500 mt-1">{errors.phoneNumber}</p>}
        </div>

        <div>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            onBlur={() => {
              if (formData.address.length === 0) {
                setErrors({ ...errors, address: 'Please provide your address' });
              } else {
                setErrors({ ...errors, address: '' });
              }
            }}
            placeholder="Address"
            className={`block w-full px-4 py-2 border rounded-md focus:outline-none ${errors.address && 'border-red-500'}`}
          />
          {errors.address && <p className="text-red-500 mt-1">{errors.address}</p>}
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={() => {
              if (formData.password.length < 6) {
                setErrors({ ...errors, password: 'Password must be at least 6 characters long' });
              } else {
                setErrors({ ...errors, password: '' });
              }
            }}
            placeholder="Password"
            className={`block w-full px-4 py-2 border rounded-md focus:outline-none ${errors.password && 'border-red-500'}`}
          />
          {errors.password && <p className="text-red-500 mt-1">{errors.password}</p>}
        </div>

        <div>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={() => {
              if (formData.password !== formData.confirmPassword) {
                setErrors({ ...errors, confirmPassword: 'Passwords do not match' });
              } else {
                setErrors({ ...errors, confirmPassword: '' });
              }
            }}
            placeholder="Confirm Password"
            className={`block w-full px-4 py-2 border rounded-md focus:outline-none ${errors.confirmPassword && 'border-red-500'}`}
          />
          {errors.confirmPassword && <p className="text-red-500 mt-1">{errors.confirmPassword}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          disabled={Object.keys(errors).some(key => errors[key] !== '') || Object.values(formData).some(value => value === '')}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
