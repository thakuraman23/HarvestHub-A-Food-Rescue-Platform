# HarvestHub 🍽️

A comprehensive food donation platform that connects donors with volunteers and helps reduce food waste through efficient distribution systems.

## 🌟 Features

### Core Functionality
- **Multi-Role Authentication**: Separate dashboards for Donors, Volunteers, and Admins
- **Real-time Communication**: Live updates using Socket.io for instant notifications
- **Geolocation Integration**: Location-based donation posting and pickup coordination
- **Request Management**: Streamlined process for volunteers to request food pickups
- **Admin Oversight**: Centralized approval system for all donation requests

### User Roles

#### 🎁 Donors
- Post food donations with details (type, quantity, expiry)
- Add pickup location with coordinates
- View and manage their donation history
- Receive real-time updates on pickup requests
- Track donation status from posted to completed

#### 🚚 Volunteers
- Browse available food donations
- Request pickup for specific donations
- View donation details and location
- Track request status (pending, accepted, rejected)
- Receive notifications for status updates

#### 🛡️ Admins
- Overview dashboard with all donation requests
- Approve or reject volunteer pickup requests
- Monitor platform activity and statistics
- Manage user requests and system oversight
- Real-time notifications for new requests

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern UI library
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **Axios** - HTTP client for API calls
- **Socket.io Client** - Real-time communication

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Socket.io** - Real-time bidirectional communication
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB Atlas account** (or local MongoDB installation)
- **Git** for version control

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone [https://github.com/yourusername/harvesthub.git](https://github.com/thakuraman23/HarvestHub-A-Food-Rescue-Platform.git)
cd HarvestHub
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
touch .env
```

Add the following environment variables to `.env`:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
NODE_ENV=development
```

### 3. Frontend Setup
```bash
# Navigate to frontend directory (from root)
cd frontend

# Install dependencies
npm install
```

### 4. Start the Application

#### Terminal 1 - Backend Server
```bash
cd backend
npm start
# Server runs on http://localhost:5000
```

#### Terminal 2 - Frontend Development Server
```bash
cd frontend
npm run dev
# Frontend runs on http://localhost:3000
```

## 🗂️ Project Structure

```
harvesthub/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Donation.js
│   │   └── Request.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── donations.js
│   │   └── requests.js
│   ├── middleware/
│   │   └── auth.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── DonationForm.jsx
│   │   │   ├── DonationList.jsx
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── DonorDashboard.jsx
│   │   │   ├── VolunteerDashboard.jsx
│   │   │   └── AdminDashboard.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── socket.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🎯 Usage Guide

### Getting Started
1. **Register**: Create an account choosing your role (Donor/Volunteer/Admin)
2. **Location**: Enable location services or manually enter coordinates
3. **Dashboard**: Access role-specific features through your dashboard

### For Donors
1. Click "Post New Donation" on your dashboard
2. Fill in food details (type, quantity, expiry date)
3. Add pickup location (auto-detect or manual entry)
4. Submit and wait for volunteer requests
5. Monitor request status in real-time

### For Volunteers
1. Browse available donations on your dashboard
2. View donation details and location
3. Click "Request Pickup" for desired donations
4. Wait for admin approval
5. Complete pickup once approved

### For Admins
1. View all pending requests on admin dashboard
2. Review volunteer and donation details
3. Approve or reject requests based on criteria
4. Monitor overall platform activity

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Donations
- `GET /api/donations` - Get all donations
- `POST /api/donations` - Create new donation
- `GET /api/donations/my` - Get user's donations
- `PUT /api/donations/:id` - Update donation status

### Requests
- `GET /api/requests` - Get all requests (admin)
- `POST /api/requests` - Create pickup request
- `PUT /api/requests/:id/accept` - Accept request (admin)
- `PUT /api/requests/:id/reject` - Reject request (admin)

## 🔄 Real-time Events

### Socket.io Events
- `newDonation` - Broadcast when new donation is posted
- `newRequest` - Notify when volunteer requests pickup
- `requestStatusUpdated` - Update when admin accepts/rejects
- `donationStatusUpdated` - Notify status changes

## 🧪 Testing

### Manual Testing Checklist
- [ ] User registration and login
- [ ] Donation posting with location
- [ ] Volunteer request system
- [ ] Admin approval workflow
- [ ] Real-time updates across tabs
- [ ] Mobile responsiveness
- [ ] Error handling and validation

### Test Scenarios
1. **Multi-tab Testing**: Open multiple browser tabs to test real-time features
2. **Role Switching**: Test different user roles and permissions
3. **Network Issues**: Test offline/online behavior
4. **Location Services**: Test with/without GPS enabled

## 🚀 Deployment

### Environment Variables for Production
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/harvesthub
JWT_SECRET=super_secret_production_key
NODE_ENV=production
PORT=5000
```

### Build Commands
```bash
# Frontend build
cd frontend
npm run build

# Backend is ready for deployment as-is
```

---

**HarvestHub** - *Connecting Hearts, Reducing Waste* 🌱
