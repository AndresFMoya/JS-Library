const library = [
    { 
        id: 1, 
        title: 'Lord of The Ring', 
        author: 'J. R. Tolkien', 
        pages: 488,
        status: true, 
    }, 
];


function Book(id, title, author, status) {
    this.id = id
    this.title = title
    this.author = author
    this.status = status
}

function addBookToLibrary(book = library[0]) {
    library.push(book)
    render()
}

function render() {
    let rows = '';
    library.forEach((book) => {
        rows +=
        `<tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.status ? 'Readed' : 'Not Readed'}</td>
        </tr>`
        ;
    });
    document.getElementById('table-body').innerHTML = rows
}

render()