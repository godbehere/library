let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
    }
}

function addBookForm(e) {
    var title = document.querySelector('#title').value;
    var author = document.querySelector('#author').value;
    var pages = document.querySelector('#pages').value;
    var read = document.querySelector('#read').checked;

    e.reset();
    newBookWindow.style.display = 'none';
    //alert(`${title} ${author} ${pages} ${read}`);
    let myBook = new Book(title, author, pages, read);
    addBookToLibrary(myBook, myLibrary);
    displayBooks(myLibrary);
}

function addBookToLibrary (book, library) {
    library.push(book);
}

function displayBooks (library) {
    libraryContainer.innerHTML = '';
    let i = 0
    for(let book of library) {
        createCard(book, i);
        i++
    }
}

function toggleRead(book) {
    if(book.read) {
        book.read = false;
    } else {
        book.read = true;
    }
}

function toggleReadFromEvent(e) {
    let i = e.target.value;
    toggleRead(myLibrary[i]);
    displayBooks(myLibrary);
}

function removeBook(e){
    myLibrary.splice(e.target.value, 1);
    displayBooks(myLibrary);
}

function createCard(book, i){
    var newCard = document.createElement('div');
    newCard.classList.add('book-card');

    var newCardFront = document.createElement('div');
    newCardFront.classList.add('card-front');

    var titleDiv = document.createElement('div');
    titleDiv.classList.add('book-title');
    titleDiv.innerHTML = book.title;
    newCardFront.appendChild(titleDiv);

    var authorDiv = document.createElement('div');
    authorDiv.classList.add('book-author');
    authorDiv.innerHTML = book.author;
    newCardFront.appendChild(authorDiv);
    
    var pagesDiv = document.createElement('div');
    pagesDiv.classList.add('book-pages');
    pagesDiv.innerHTML = book.pages;
    newCardFront.appendChild(pagesDiv);

    var readDiv = document.createElement('div');
    readDiv.classList.add('book-read');
    readDiv.innerHTML = book.read ? 'This book has been read' : 'This book has NOT been read';
    newCardFront.appendChild(readDiv);

    var newCardBack = document.createElement('div');
    newCardBack.classList.add('card-back');

    var buttonsDiv = document.createElement('div');

    var removeButton = document.createElement('button');
    removeButton.innerHTML = 'REMOVE';
    removeButton.value = i;
    removeButton.addEventListener('click', removeBook);

    buttonsDiv.appendChild(removeButton);

    var toggleReadButton = document.createElement('button');
    toggleReadButton.innerHTML = 'TOGGLE READ';
    toggleReadButton.value = i;
    toggleReadButton.addEventListener('click', toggleReadFromEvent)

    buttonsDiv.appendChild(toggleReadButton);
    buttonsDiv.classList.add('button-container')

    newCard.appendChild(buttonsDiv);

    newCard.appendChild(newCardBack);
    newCard.appendChild(newCardFront);
    
    newCard.dataset.index = i;

    libraryContainer.appendChild(newCard);
}

const libraryContainer = document.querySelector('.library-container');

const addNewBook = document.querySelector('#add-new-book');

const newBookWindow = document.querySelector('.adding-form');

const cancelForm = document.querySelector('#cancel-form');

//const submitButton = document.querySelector('#submit-button');

addNewBook.addEventListener('click', () => {
    newBookWindow.style.display = 'block';
    //addNewBook.style.display = 'none';
});

cancelForm.addEventListener('click', () => {
    newBookWindow.style.display = 'none';
});



var newBook = new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 595, true);
addBookToLibrary(newBook, myLibrary);
newBook = new Book("Harry Potter and the Chamber of Secrets", "J.K. Rowling", 300, false);
addBookToLibrary(newBook, myLibrary);
newBook = new Book("Shades of Grey", "Jasper Fforde", 287, false);
addBookToLibrary(newBook, myLibrary);
newBook = new Book("The Silk Road", "Peter Frankopan", 860, true);
addBookToLibrary(newBook, myLibrary);
newBook = new Book("Red Notice", "Bill Browder", 325, true);
addBookToLibrary(newBook, myLibrary);

displayBooks(myLibrary);