//CREATE A CLASS BOOK
class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.available = true;
    }
  
    get isbn() {
      return this._isbn;
    }
  
    set isbn(value) {
      if (typeof value !== 'string') {
        throw new Error('ISBN must be a string');
      }
      this._isbn = value;
    }
  
    borrowBook() {
      if (this.available) {
        this.available = false;
        console.log(`Book "${this.title}" has been borrowed.`);
      } else {
        console.log(`Book "${this.title}" is not available.`);
      }
    }
  
    returnBook() {
      this.available = true;
      console.log(`Book "${this.title}" has been returned.`);
    }
  }
//CREATE A CLASS LIBRARY
class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    removeBook(isbn) {
      const index = this.books.findIndex(book => book.isbn === isbn);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ISBN "${isbn}" was removed.`);
      } else {
        console.log(`Book with ISBN "${isbn}" not found.`);
      }
    }
  
    findBookByTitle(title) {
      const foundBook = this.books.find(book => book.title === title);
      if (foundBook) {
        return foundBook;
      } else {
        console.log(`Book with title "${title}" not found.`);
      }
    }
  }
  //CREATE A CLASS DIGITAL LIBRARY THAT INHERITS FROM LIBRARY
  class DigitalLibrary extends Library {
    downloadBook(isbn) {
      const book = this.findBookByTitle(isbn);
      if (book && book.available) {
        // Implement your download logic here
        console.log(`Book "${book.title}" downloaded.`);
      } else {
        console.log(`Book with ISBN "${isbn}" is not available for download.`);
      }
    }
  }

  const library = new DigitalLibrary();

  // Create books
  const book1 = new Book('The Downfall of Nigeria ', 'Bola Ahmed Tinubu', '9780743273565');
  const book2 = new Book('How to borrow money from Lapo', 'Lotanna Nelson', '9780060735099');
  
  // Add books to the library
  library.addBook(book1);
  library.addBook(book2);
  
  // Borrow a book
  library.books[0].borrowBook();
  
  // Download a book
  library.downloadBook('9780060735099');