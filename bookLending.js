//Library Book Lending consele app

// create an object to store books information (book shelf) 
const books = [
    {
      id: 1,
      title: "Panel of kings",
      category: "Category 1",
      available: true,
    },
    {
      id: 2,
      title: "innovation cyclic",
      category: "Category 2",
      available: true,
    },
    {
      id: 3,
      title: "haealth and money",
      category: "Category 3",
      available: true,
    },
    {
      id: 4,
      title: "ayodele",
      category: "Category 4",
      available: false,
    },
      {
      id: 5,
      title: "jengartins",
      category: "Category 5",
      available: true,
    },
      {
      id: 6,
      title: "return of karishika",
      category: "Category 6",
      available: false,
    },
  ];
  
  const borrowedBooks = [];
  
  const getBook = (id) => {
    const book = books.filter((book) => book.id === id);
    if (books.includes(book[0])) {
      return book[0];
    } else {
      console.log("No book with id " + id);
      return null;
    }
  };
  
  const getBookinBorrowedList = (id) => {
    const book = books.filter((book) => book.id === id);
    return borrowedBooks.includes(book[0]);
  };
  
  const isAvailable = (id) => {
    return getBook(id) ? getBook(id).available : false;
  };
  
  const addToborrowersList = (id) => {
    borrowedBooks.push(getBook(id));
  };
  
  const removeFromborrowersList = (id) => {
    borrowedBooks.shift(getBook(id));
  };
  
  const markBookAsUnavailable = (id) => {
    books.map((book) => {
      if (book.id === id) {
        book.available = false;
      }
    });
    return books;
  };
  
  const markBookAsAvailable = (id) => {
    books.map((book) => {
      if (book.id === id) {
        book.available = true;
      }
    });
    return books;
  };
  
  const showBorrowedBooks = () => {
    let list = [];
    for (let index = 0; index < borrowedBooks.length; index++) {
      list.push(borrowedBooks[index].title);
    }
    return list;
  };
  const showBooksAvailable = () => {
    let list = [];
    for (let index = 0; index < books.length; index++) {
      list.push(books[index].title);
    }
    return list;
  };
  
  const borrowBook = () => {
    const id = Number(
      prompt(
        "Hey! We understand you want to borrow some books from our library..Please take a look at our collection:" +
        "\n" +
          showBooksAvailable() +
          "\n" +
          "with IDs 1,2,3,4,5 and 6 respectively" +
          "\n" +
          "Enter Book ID to borrow"
      )
    );
    if (!isAvailable(id)) {
      console.log(
        getBook(id)
          ? "'" + getBook(id).title + "' is not available. You can't borrow now."
          : "No such book in the library"
      );
    } else {
      addToborrowersList(id);
      console.log("You have successfully borrowed " + getBook(id).title);
      markBookAsUnavailable(id);
      if (borrowedBooks.length === 0) {
        console.log("Your Borrowed Books list is empty");
      } else {
        console.log(
          "This is your list of borrowed Books : " + showBorrowedBooks()
        );
      }
    }
  };
  
  const returnBook = () => {
    const id = Number(
      prompt("Enter ID of Book you want to return. i.e 1,2,3,4,5 and 6")
    );
    if (!getBookinBorrowedList(id)) {
      console.log(
        getBook(id)
          ? "'" +
              getBook(id).title +
              "' is not in your Borrowed books list. You can't return what you didn't borrow"
          : "No such book in the library"
      );
    } else {
      removeFromborrowersList(id);
      console.log("You have successfully returned " + getBook(id).title);
      markBookAsAvailable(id);
      if (borrowedBooks.length === 0) {
        console.log("Your Borrowed Books list is empty");
      } else {
        console.log(
          "This is your list of borrowed Books : " + showBorrowedBooks()
        );
      }
    }
  };
  
  console.log( "-------------------------------------" +
        "\n" +
        "WELCOME TO OBATE BOOK STORE" +
        "\n" +
        "-------------------------------------"
        );
  
  borrowBook(4);
  borrowBook(1);
  returnBook(1);
  borrowBook(2);
  borrowBook(3);
  borrowBook(3);

  module.exports = { getBook: getBook, showBooksAvailable: showBooksAvailable, removeFromborrowersList: removeFromborrowersList };
