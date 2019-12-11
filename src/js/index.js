const library = [
  {
    id: 1,
    title: 'Lord of The Ring',
    author: 'J. R. Tolkien',
    pages: 488,
    status: true,
  },
];

function Book(id, title, author, pages, status) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function render() {
  let rows = '';
  library.forEach((book) => {
    rows += `<tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.status ? 'Readed' : 'Not Readed'}</td>
        </tr>`;
  });
  document.getElementById('table-body').innerHTML = rows;
}

function addBookToLibrary() {
  console.log(document.getElementById('status').checked);
  library.push(
    new Book(
      library.length + 1,
      document.getElementById('title').value,
      document.getElementById('author').value,
      document.getElementById('pages').value,
      document.getElementById('status').checked,
    ),
  );
  render();
  // TODO: Clear the form
}

render();
