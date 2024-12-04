const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  category: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['Active', 'Inactive', 'Cancelled'], 
    default: 'Active' 
  },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  venueName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  postalCode: { type: String, required: true },
  briefDescription: { type: String, required: true },
  fullDescription: { type: String },
  basePrice: { type: Number, required: true },
  currency: { type: String, required: true },
  discounts: [{
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    unit: { type: String, enum: ['percentage', 'fixed'], required: true }
  }],
  thumbnail: { type: String },
  imgUrls: [{ type: String }],
  registrationLink: { type: String },
  registrationDeadline: { type: Date },
  contactEmail: { type: String },
  contactPhone: { type: String },
  contactPerson: { type: String },
  socialMediaLinks: {
    facebook: { type: String },
    twitter: { type: String },
    instagram: { type: String }
  },
  wheelchairAccess: { type: Boolean, default: false },
  assistiveListeningDevices: { type: Boolean, default: false },
  signLanguageInterpreting: { type: Boolean, default: false },
  schedule: [{
    timeFrom: { type: Date },
    timeTo: { type: Date },
    activity: { type: String },
    performer: { type: String },
    performerPhoto: { type: String },
    performerBio: { type: String }
  }],
  weatherInformation: { type: String },
  parkingInformation: { type: String },
  rating: { 
    type: Number, 
    min: 0, 
    max: 5, 
    default: 0 
  },
  rsvpCount: { 
    type: Number, 
    default: 0 
  },
  organizerName: { type: String },
  organizerEmail: { type: String },
  organizerPhone: { type: String },
  organizerWebsite: { type: String },
  sponsors: [{
    name: { type: String },
    logo: { type: String }
  }]
}, { timestamps: true });

const Event = mongoose.model('Event', EventSchema);
module.exports = Event;