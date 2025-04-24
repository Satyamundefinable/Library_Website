import { useState } from "react";

export const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const booksData = [
    { id: 1, title: "Classic Novel", bookname: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 2, title: "Historical Fiction", bookname: "Chitralekha", author: "Bhagwati Charan Verma" },
  { id: 3, title: "Finance", bookname: "The Psychology of Money", author: "Morgan Housel" },
  { id: 4, title: "Political Satire", bookname: "Rag Darbari", author: "Shri Lal Shukla" },
  { id: 5, title: "Classic Dystopia", bookname: "1984", author: "George Orwell" },
  { id: 6, title: "Romantic Fiction", bookname: "Gunahon Ka Devta", author: "Dharamvir Bharati" },
  { id: 7, title: "Regional Novel", bookname: "Maila Anchal", author: "Phanishwar Nath Renu" },
  { id: 8, title: "Classic Dystopia", bookname: "1984", author: "George Orwell" },
  { id: 9, title: "Poetry Collection", bookname: "Rashmirathi", author: "Ramdhari Singh 'Dinkar'" },
  { id: 10, title: "Personal Finance", bookname: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
  { id: 11, title: "Motivational", bookname: "Wings of Fire", author: "Dr. A.P.J. Abdul Kalam" },
  { id: 12, title: "Finance", bookname: "The Psychology of Money", author: "Morgan Housel" },
  { id: 13, title: "Spirituality", bookname: "The Power of Now", author: "Eckhart Tolle" },
  { id: 14, title: "Poetry Collection", bookname: "Rashmirathi", author: "Ramdhari Singh 'Dinkar'" },
  { id: 15, title: "Romantic Fiction", bookname: "Gunahon Ka Devta", author: "Dharamvir Bharati" },
  { id: 16, title: "Motivational", bookname: "Wings of Fire", author: "Dr. A.P.J. Abdul Kalam" },
  { id: 17, title: "Inspirational Book", bookname: "Mujhe Chand Chahiye", author: "Surendra Verma" },
  { id: 18, title: "Classic Dystopia", bookname: "1984", author: "George Orwell" },
  { id: 19, title: "Bestseller", bookname: "The Alchemist", author: "Paulo Coelho" },
  { id: 20, title: "Story Collection", bookname: "Nirmala", author: "Munshi Premchand" },
  { id: 21, title: "Philosophical Epic", bookname: "Kamayani", author: "Jaishankar Prasad" },
  { id: 22, title: "Romantic Fiction", bookname: "Gunahon Ka Devta", author: "Dharamvir Bharati" },
  { id: 23, title: "Motivational", bookname: "Wings of Fire", author: "Dr. A.P.J. Abdul Kalam" },
  { id: 24, title: "Finance", bookname: "The Psychology of Money", author: "Morgan Housel" },
  { id: 25, title: "Classic Novel", bookname: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 26, title: "Inspirational Book", bookname: "Mujhe Chand Chahiye", author: "Surendra Verma" },
  { id: 27, title: "Bestseller", bookname: "The Alchemist", author: "Paulo Coelho" },
  { id: 28, title: "Modern Self-Help", bookname: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson" },
  { id: 29, title: "Historical Fiction", bookname: "Chitralekha", author: "Bhagwati Charan Verma" },
  { id: 30, title: "Political Satire", bookname: "Rag Darbari", author: "Shri Lal Shukla" },
  { id: 31, title: "Regional Novel", bookname: "Maila Anchal", author: "Phanishwar Nath Renu" },
  { id: 32, title: "Classic Novel", bookname: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 33, title: "Philosophical Epic", bookname: "Kamayani", author: "Jaishankar Prasad" },
  { id: 34, title: "Classic Dystopia", bookname: "1984", author: "George Orwell" },
  { id: 35, title: "Literary Novel", bookname: "Godaan", author: "Munshi Premchand" },
  { id: 36, title: "Romantic Fiction", bookname: "Gunahon Ka Devta", author: "Dharamvir Bharati" },
  { id: 37, title: "Modern Self-Help", bookname: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson" },
  { id: 38, title: "Self-Help", bookname: "Atomic Habits", author: "James Clear" },
  { id: 39, title: "Satirical Fiction", bookname: "Kashi Ka Assi", author: "Kashinath Singh" },
  { id: 40, title: "Motivational", bookname: "Wings of Fire", author: "Dr. A.P.J. Abdul Kalam" },
  { id: 41, title: "Story Collection", bookname: "Nirmala", author: "Munshi Premchand" },
  { id: 42, title: "Bestseller", bookname: "The Alchemist", author: "Paulo Coelho" },
  { id: 43, title: "Literary Novel", bookname: "Godaan", author: "Munshi Premchand" },
  { id: 44, title: "Finance", bookname: "The Psychology of Money", author: "Morgan Housel" },
  { id: 45, title: "Classic Novel", bookname: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 46, title: "Inspirational Book", bookname: "Mujhe Chand Chahiye", author: "Surendra Verma" },
  { id: 47, title: "Romantic Fiction", bookname: "Gunahon Ka Devta", author: "Dharamvir Bharati" },
  { id: 48, title: "Modern Self-Help", bookname: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson" },
  { id: 49, title: "Personal Finance", bookname: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
  { id: 50, title: "Self-Help", bookname: "Atomic Habits", author: "James Clear" }
];
const filteredBooks = booksData.filter(
  (book) =>
    book.bookname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
);

  
  return (
    <>
    <div style={{ padding: '2rem'}}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Library Collection</h2>

      <input
        type="text"
        placeholder="Search by book name or author..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: '100%',
          height: "30px",
          maxWidth: '400px',
          marginBottom: '2rem',
          fontSize: '1rem',
           borderRadius: '2px',
          border: '1px solid #ccc'
        }}
      />

      {filteredBooks.length > 0 ? (
        filteredBooks.map(book => (
          <div key={book.id} style={{
            padding: '1rem',
            marginBottom: '1rem',
            border: '1px solid #ddd',
            borderRadius: '8px'
          }}>
            <h3>{book.title}</h3>
            <p><strong>Book:</strong> {book.bookname}</p>
            <p><strong>Author:</strong> {book.author}</p>
          </div>
        ))
      ) : (
        <p>No books found for "{searchQuery}".</p>
      )}
    </div>
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Books Collection</h2>
      {booksData.map(book => (
        <div key={book.id} style={{
          padding: '1rem',
          marginBottom: '1rem',
          border: '1px solid #ddd',
          borderRadius: '8px'
        }}>
          <h3>{book.title}</h3>
          <p><strong>Book:</strong> {book.bookname}</p>
          <p><strong>Author:</strong> {book.author}</p>
        </div>
      ))}
    </div>
    </>
  )
}