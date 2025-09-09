# Create Project
    npx create-expo-app@latest --template blank ./

# 1. Sign Up and Sign In
    Users must register (Sign Up) before accessing any app features.
    Only signed-in users can use the app’s functionality.

    Sign Up: Collect username, email, password.
    Sign In: Authenticate user credentials and grant access to app features.

# 2. View All Books
    After signing in, the app displays a list of all books.
    Data is retrieved from the database.
    Users can browse the list of books, including details like title, author, and description.

# 3. Create New Book
    Users can add a new book through a form.
    After creating a book, the app returns to the All Books page, displaying the newly added book.

# 4. Edit Book
    Users can edit an existing book by its ID.
    All book details can be updated, including title, author, description, and other metadata.

# 5. Delete Book
    Users can delete a book by its ID.
    After deletion, the book is removed from the All Books list.
