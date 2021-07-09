let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
}

function addBookToLibrary (book, library) {
    library.push(book);
}

function displayBooks (library) {
    for(let book of library) {
        createCard(book);
    }
}

var LoTR = new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 595, true);
var HP = new Book("Harry Potter and the Chamber of Secrets", "J.K. Rowling", 300, false);

const libraryContainer = document.querySelector('.library-container');

function createCard(book){
    var newCard = document.createElement('div');
    newCard.classList.add('book-card');

    var titleDiv = document.createElement('div');
    titleDiv.classList.add('book-title');
    titleDiv.innerHTML = book.title;
    newCard.appendChild(titleDiv);

    var authorDiv = document.createElement('div');
    authorDiv.classList.add('book-author');
    authorDiv.innerHTML = book.author;
    newCard.appendChild(authorDiv);
    
    var pagesDiv = document.createElement('div');
    pagesDiv.classList.add('book-pages');
    pagesDiv.innerHTML = book.pages;
    newCard.appendChild(pagesDiv);

    var readDiv = document.createElement('div');
    readDiv.classList.add('book-read');
    readDiv.innerHTML = book.read ? 'This book has been read' : 'This book has not been read';
    newCard.appendChild(readDiv);

    libraryContainer.appendChild(newCard);
}

addBookToLibrary(LoTR, myLibrary);
addBookToLibrary(HP, myLibrary);