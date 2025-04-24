import './Services.css';

export const Services = () => {
  const services = [
    {
      id: 1,
      title: "Book Lending",
      description: "Borrow books from a wide collection including academic, fiction, and non-fiction."
    },
    {
      id: 2,
      title: "Digital Library Access",
      description: "24/7 access to e-books, research papers, and digital archives."
    },
    {
      id: 3,
      title: "Reading Rooms",
      description: "Quiet, comfortable reading rooms with Wi-Fi and power facilities."
    },
    {
      id: 4,
      title: "Research Assistance",
      description: "Guidance on research methodology, citations, and data collection."
    },
    {
      id: 5,
      title: "Library Events",
      description: "Workshops, author talks, exhibitions and literary meets throughout the year."
    },
    {
      id: 6,
      title: "Online Book Reservation",
      description: "Reserve books online and get notified when they are available."
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Explore the range of services we offer to support learning, research, and creativity.</p>
      </section>

      <section className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};