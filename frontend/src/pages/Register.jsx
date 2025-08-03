import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('donor');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLocation = () => {
    if (navigator.geolocation) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude.toString());
          setLongitude(position.coords.longitude.toString());
          setIsLoading(false);
          alert('Location captured successfully!');
        },
        (error) => {
          setIsLoading(false);
          alert(`Error getting location: ${error.message}`);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      alert('Please fill in all required fields.');
      return;
    }

    if (!latitude || !longitude) {
      alert('Please provide your location or use the "Get Current Location" button.');
      return;
    }

    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);
    
    if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
      alert('Please provide valid latitude (-90 to 90) and longitude (-180 to 180) values.');
      return;
    }

    setIsLoading(true);
    
    try {
      const success = await register(name, email, password, role, lat, lng, navigate);
      if (!success) {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-accent flex items-center justify-center py-12">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-4xl font-heading text-primary mb-8 text-center font-extrabold">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-body text-gray-700">Full Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                required
                placeholder="Enter your full name"
                disabled={isLoading}
              />
            </div>
            <div>
              <label className="block text-lg font-body text-gray-700">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                disabled={isLoading}
              >
                <option value="donor">Donor</option>
                <option value="volunteer">Volunteer</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-lg font-body text-gray-700">Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
              required
              placeholder="Enter your email"
              disabled={isLoading}
            />
          </div>
          <div>
            <label className="block text-lg font-body text-gray-700">Password *</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
              required
              placeholder="Create a password"
              minLength={6}
              disabled={isLoading}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-body text-gray-700">Latitude *</label>
              <input
                type="number"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                required
                placeholder="Your latitude"
                step="any"
                min="-90"
                max="90"
                disabled={isLoading}
              />
            </div>
            <div>
              <label className="block text-lg font-body text-gray-700">Longitude *</label>
              <input
                type="number"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                required
                placeholder="Your longitude"
                step="any"
                min="-180"
                max="180"
                disabled={isLoading}
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handleLocation}
            className="w-full bg-secondary text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? 'Getting Location...' : 'Get Current Location'}
          </button>
          <button 
            type="submit" 
            className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>
        </form>
        <p className="text-center mt-6 font-body">
          Already have an account? 
          <Link to="/login" className="text-primary hover:underline font-semibold ml-1">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;