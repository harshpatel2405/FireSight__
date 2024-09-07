import React, { useState } from 'react';
import './Signup.css'; // Import the CSS for styling

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        gstNumber: '',
        shopName: '',
        shopAddress: '',
        mapLink: '',
        pincode: '',
        businessNumber: '',
        businessEmail: '',
        shopArea: '',
        numberOfShops: '',
        email: '', // Login email
        password: '' // Login password
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        const gstPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const pincodePattern = /^[0-9]{6}$/;
        const phonePattern = /^[0-9]{10}$/;

        // Full Name validation
        if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';

        // GST Number validation
        if (!formData.gstNumber.match(gstPattern)) newErrors.gstNumber = 'Please enter a valid GST number';

        // Shop Name validation
        if (!formData.shopName.trim()) newErrors.shopName = 'Shop Name is required';

        // Shop Address validation
        if (!formData.shopAddress.trim()) newErrors.shopAddress = 'Shop Address is required';

        // Google Map Link validation
        if (!formData.mapLink.trim()) newErrors.mapLink = 'Google Map link is required';

        // Pincode validation
        if (!formData.pincode.match(pincodePattern)) newErrors.pincode = 'Pincode must be a 6-digit number';

        // Business Number validation
        if (!formData.businessNumber.match(phonePattern)) newErrors.businessNumber = 'Please enter a valid 10-digit phone number';

        // Business Email validation
        if (!formData.businessEmail.match(emailPattern)) newErrors.businessEmail = 'Please enter a valid email address';

        // Area of Shop validation
        if (isNaN(formData.shopArea) || formData.shopArea <= 0) newErrors.shopArea = 'Please enter a valid area in square feet';

        // Number of Shops validation
        if (isNaN(formData.numberOfShops) || formData.numberOfShops <= 0) newErrors.numberOfShops = 'Please enter a valid number of shops';

        // Login Email validation
        if (!formData.email.match(emailPattern)) newErrors.email = 'Please enter a valid email for login';

        // Password validation
        if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters long';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Sign-Up Data:', formData);
            // Handle sign-up logic here
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="signup-container">
            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-brand">
                    FireSight
                </div>
                <button className="home-btn">
                    Home
                </button>
            </nav>

            {/* Sign-Up Form */}
            <div className="signup-box">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    {/* Shop Details */}
                    <div className="input-group">
                        <label htmlFor="fullName">Full Name:</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            className={errors.fullName ? 'error-input' : ''}
                        />
                        {errors.fullName && <span className="error">{errors.fullName}</span>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="gstNumber">GST Number:</label>
                        <input
                            type="text"
                            id="gstNumber"
                            name="gstNumber"
                            value={formData.gstNumber}
                            onChange={handleInputChange}
                            placeholder="Enter your GST number"
                            className={errors.gstNumber ? 'error-input' : ''}
                        />
                        {errors.gstNumber && <span className="error">{errors.gstNumber}</span>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="shopName">Shop Name:</label>
                        <input
                            type="text"
                            id="shopName"
                            name="shopName"
                            value={formData.shopName}
                            onChange={handleInputChange}
                            placeholder="Enter your shop name"
                            className={errors.shopName ? 'error-input' : ''}
                        />
                        {errors.shopName && <span className="error">{errors.shopName}</span>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="shopAddress">Shop Address:</label>
                        <input
                            type="text"
                            id="shopAddress"
                            name="shopAddress"
                            value={formData.shopAddress}
                            onChange={handleInputChange}
                            placeholder="Enter your shop address"
                            className={errors.shopAddress ? 'error-input' : ''}
                        />
                        {errors.shopAddress && <span className="error">{errors.shopAddress}</span>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="mapLink">Shop Google Map Link:</label>
                        <input
                            type="text"
                            id="mapLink"
                            name="mapLink"
                            value={formData.mapLink}
                            onChange={handleInputChange}
                            placeholder="Enter shop's Google Map link"
                            className={errors.mapLink ? 'error-input' : ''}
                        />
                        {errors.mapLink && <span className="error">{errors.mapLink}</span>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="pincode">Pincode:</label>
                        <input
                            type="text"
                            id="pincode"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleInputChange}
                            placeholder="Enter your pincode"
                            className={errors.pincode ? 'error-input' : ''}
                        />
                        {errors.pincode && <span className="error">{errors.pincode}</span>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="businessNumber">Business Number:</label>
                        <input
                            type="text"
                            id="businessNumber"
                            name="businessNumber"
                            value={formData.businessNumber}
                            onChange={handleInputChange}
                            placeholder="Enter your business number"
                            className={errors.businessNumber ? 'error-input' : ''}
                        />
                        {errors.businessNumber && <span className="error">{errors.businessNumber}</span>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="businessEmail">Business Email:</label>
                        <input
                            type="email"
                            id="businessEmail"
                            name="businessEmail"
                            value={formData.businessEmail}
                            onChange={handleInputChange}
                            placeholder="Enter your business email"
                            className={errors.businessEmail ? 'error-input' : ''}
                        />
                        {errors.businessEmail && <span className="error">{errors.businessEmail}</span>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="shopArea">Area of Shop (in square feet):</label>
                        <input
                            type="text"
                            id="shopArea"
                            name="shopArea"
                            value={formData.shopArea}
                            onChange={handleInputChange}
                            placeholder="Enter shop area"
                            className={errors.shopArea ? 'error-input' : ''}
                        />
                        {errors.shopArea && <span className="error">{errors.shopArea}</span>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="numberOfShops">How many shops?</label>
                        <input
                            type="text"
                            id="numberOfShops"
                            name="numberOfShops"
                            value={formData.numberOfShops}
                            onChange={handleInputChange}
                            placeholder="Enter number of shops"
                            className={errors.numberOfShops ? 'error-input' : ''}
                        />
                        {errors.numberOfShops && <span className="error">{errors.numberOfShops}</span>}
                    </div>

                    {/* Credentials Section */}
                    <h3>Credentials</h3>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            className={errors.email ? 'error-input' : ''}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Create Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Create a password"
                            className={errors.password ? 'error-input' : ''}
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>

                    <button type="submit" className="signup-btn">Apply Now</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;
