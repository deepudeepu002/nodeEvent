// Open the modal when the Add Event button is clicked
document.getElementById('addEventBtn').onclick = function() {
    document.getElementById('eventModal').style.display = 'block';
};

// Close the modal when the close button is clicked
document.getElementById('closeModalBtn').onclick = function() {
    document.getElementById('eventModal').style.display = 'none';
};

// Handle form submission
document.getElementById('eventForm').onsubmit = async function(event) {
    event.preventDefault();

    const newEvent = {
        eventName: document.getElementById('eventName').value,
        category: document.getElementById('category').value,
        status: document.getElementById('status').value,
        date: document.getElementById('date').value,
        startTime: document.getElementById('startTime').value,
        endTime: document.getElementById('endTime').value,
        venueName: document.getElementById('venueName').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        country: document.getElementById('country').value,
        postalCode: document.getElementById('postalCode').value,
        briefDescription: document.getElementById('briefDescription').value,
        fullDescription: document.getElementById('fullDescription').value,
        basePrice: document.getElementById('basePrice').value,
        currency: document.getElementById('currency').value,
        facebook: document.getElementById('facebook').value,
        twitter: document.getElementById('twitter').value,
        instagram: document.getElementById('instagram').value,
        wheelchairAccess: document.getElementById('wheelchairAccess').checked,
        assistiveListeningDevices: document.getElementById('assistiveListeningDevices').checked,
        signLanguageInterpreting: document.getElementById('signLanguageInterpreting').checked,
        thumbnail: document.getElementById('thumbnail').value,
        imgUrls: document.getElementById('imgUrls').value.split(','),
        registrationLink: document.getElementById('registrationLink').value,
        registrationDeadline: document.getElementById('registrationDeadline').value,
        contactEmail: document.getElementById('contactEmail').value,
        contactPhone: document.getElementById('contactPhone').value,
        contactPerson: document.getElementById('contactPerson').value
    };

    // Send POST request to add the new event to the database
    const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent),
    });

    const data = await response.json();
    alert(data.message);
    document.getElementById('eventModal').style.display = 'none';

    
    loadEvents();
};

// Load events and display them as cards
async function loadEvents() {
    const response = await fetch('/api/events');
    const events = await response.json();

    const container = document.getElementById('eventCardsContainer');
    container.innerHTML = '';

    events.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('event-card');
        card.innerHTML = `
            <img src="${event.thumbnail || 'default.jpg'}" alt="${event.eventName}">
            <h3>${event.eventName}</h3>
            <p>${event.category}</p>
            <p>${event.briefDescription}</p>
            <p>Register link: ${event.registrationLink}</p>
        `;
        container.appendChild(card);
    });
}


loadEvents();
