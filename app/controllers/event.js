const Event = require('../models/event');

// Create and Save a new event
exports.create = async (req, res) => {
  const event = new Event({
    eventName: req.body.eventName,
    category: req.body.category,
    status: req.body.status,
    date: req.body.date,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    venueName: req.body.venueName,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    postalCode: req.body.postalCode,
    briefDescription: req.body.briefDescription,
    fullDescription: req.body.fullDescription,
    basePrice: req.body.basePrice,
    currency: req.body.currency,
    discounts: req.body.discounts,
    thumbnail: req.body.thumbnail,
    imgUrls: req.body.imgUrls,
    registrationLink: req.body.registrationLink,
    registrationDeadline: req.body.registrationDeadline,
    contactEmail: req.body.contactEmail,
    contactPhone: req.body.contactPhone,
    contactPerson: req.body.contactPerson,
    socialMediaLinks: req.body.socialMediaLinks,
    wheelchairAccess: req.body.wheelchairAccess,
    assistiveListeningDevices: req.body.assistiveListeningDevices,
    signLanguageInterpreting: req.body.signLanguageInterpreting,
    schedule: req.body.schedule,
    weatherInformation: req.body.weatherInformation,
    parkingInformation: req.body.parkingInformation,
    rating: req.body.rating,
    rsvpCount: req.body.rsvpCount,
    organizerName: req.body.organizerName,
    organizerEmail: req.body.organizerEmail,
    organizerPhone: req.body.organizerPhone,
    organizerWebsite: req.body.organizerWebsite,
    sponsors: req.body.sponsors
  });

  try {
    const savedEvent = await event.save();
    res.status(201).send({ message: 'Event created successfully!', event: savedEvent });
  } catch (err) {
    res.status(500).send({ message: err.message || 'Some error occurred while creating the event' });
  }
};

// Retrieve all events from the database
exports.findAll = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).send({ message: err.message || 'Some error occurred while retrieving events' });
  }
};

// Find a single event by ID
exports.findOne = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      res.status(404).send({ message: 'Event not found' });
    } else {
      res.status(200).json(event);
    }
  } catch (err) {
    res.status(500).send({ message: err.message || 'Some error occurred while retrieving the event' });
  }
};

// Delete an event by ID
exports.destroy = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      res.status(404).send({ message: 'Event not found' });
    } else {
      res.status(200).send({ message: 'Event deleted successfully' });
    }
  } catch (err) {
    res.status(500).send({ message: err.message || 'Some error occurred while deleting the event' });
  }
};