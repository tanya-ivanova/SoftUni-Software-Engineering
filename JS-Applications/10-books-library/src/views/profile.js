import { getBooksByUser } from "../api/books.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const profileTemplate = (books) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>    
    <ul class="my-books-list">
        ${books.length === 0 
        ? html`<p class="no-books">No books in database!</p>`
        : books.map(bookCard)}                
    </ul>    
</section>`;

const bookCard = (book) => html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl}></p>
    <a class="button" href="/catalog/${book._id}">Details</a>
</li>`;

export async function profileView(ctx) {
    const userData = getUserData();
    const books = await getBooksByUser(userData.id);
    ctx.render(profileTemplate(books));
}