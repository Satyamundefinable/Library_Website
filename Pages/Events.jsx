import './Event.css';

export const Events = () => {
  const events = [
    {
      id: 1,
      title: "Book Exhibition 2023",
      date: "May 15, 2025",
      image: "/photo.webp",
      description: "Explore a wide variety of rare and new books at our annual book exhibition."
    },
    {
      id: 2,
      title: "Book Exhibition 2024",
      date: "May 15, 2025",
      image: "/photo.webp",
      description: "Explore a wide variety of rare and new books at our annual book exhibition."
    },
    {
      id: 3,
      title: "Book Exhibition 2025",
      date: "May 15, 2025",
      image: "/photo.webp",
      description: "Explore a wide variety of rare and new books at our annual book exhibition."
    }
    
  ];

  return (
    <div className="events-container">
      <section className="events-hero">
        <h1>Upcoming Events</h1>
        <p>Join us for exciting activities, author talks, exhibitions and more!</p>
      </section>

      <section className="event-grid">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} />
            <div className="event-info">
              <h2>{event.title}</h2>
              <p className="event-date">{event.date}</p>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};