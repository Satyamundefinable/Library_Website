import { NavLink } from 'react-router-dom';
import './home.css';

export const Home = () => {
  const booksData = [
    { id: 1, title: "Classic Novel", bookname: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 2, title: "Historical Fiction", bookname: "Chitralekha", author: "Bhagwati Charan Verma" },
  { id: 3, title: "Finance", bookname: "The Psychology of Money", author: "Morgan Housel" },
  { id: 4, title: "Political Satire", bookname: "Rag Darbari", author: "Shri Lal Shukla" },
  { id: 5, title: "Classic Dystopia", bookname: "1984", author: "George Orwell" }
  ];
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to Pt. Jawahar Lal Nehru Centrel Library</h1>
        <p>Your gateway to a world of knowledge, culture, and community.</p>
        <button> <NavLink to= "catalog">Explore Now </NavLink></button>
      </section>

      <section className="about">
        <h1>About Us</h1>
        <h2>Inaugurated by Pt. JawaharLal Nehru</h2> <br />
        <p>
          Established in 1946, JNC Library serves thousands of students and researchers across India.
          With over 400,000 books and digital archives, we’re committed to supporting learning, innovation, and academic excellence.
        </p>
         <NavLink to= "about">  Click to Know More</NavLink>
      </section>

    
      <section className="books">
        <h2>Featured Books</h2>
        <div className="book-grid">
        {booksData.map ( book =>  (
          <div key={book.id} className='book-card'>
            <h3>{book.title}</h3>
          <p><strong>Book:</strong> {book.bookname}</p>
          <p><strong>Author:</strong> {book.author}</p>
          </div>
        )
          
        )}
          
        </div>
      </section>

      <section className="cta">
        <h2>Ready to explore the world of books?</h2>
        <button> <NavLink to = "contact"> Join Now</NavLink></button>
      </section>
    </div>
  );
};