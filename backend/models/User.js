const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

   const userSchema = new mongoose.Schema({
     name: { type: String, required: true },
     email: { type: String, required: true, unique: true },
     password: { type: String, required: true },
     role: { type: String, enum: ['donor', 'volunteer', 'admin'], default: 'donor' },
     phone: { type: String },
     address: { type: String },
     profilePicture: { type: String },
     location: {
       type: { type: String, enum: ['Point'], default: 'Point' },
       coordinates: { type: [Number], default: [0, 0] }, // [longitude, latitude]
     },
   });

   userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

   userSchema.index({ location: '2dsphere' }); // Geospatial index
   module.exports = mongoose.model('User', userSchema);