# Project MindNote

## 📝 Description

**MindNote** is a full-stack web application that helps users capture, organize, and manage their thoughts through a clean and intuitive interface.  
Each user can create personal notes, assign them to categories (tags), and track them through various stages.

Notes are stored securely in a database and are only visible to the authenticated user, ensuring privacy and data integrity.

Whether you're jotting down quick reminders, organizing tasks, or planning long-term goals, **MindNote** provides a user-friendly workspace to keep your ideas structured and accessible anytime.

## 📋 Table of Contents

- [📝 Description](#-description)
- [📋 Table of Contents](#-table-of-contents)
- [🚀 Getting Started](#-getting-started)
- [🔗 Project Links](#-getting-started)
- [🛠️ Technologies Used](#-technologies-used)
- [📊 ERD](#-erd)
  - [Entities](#entities)
  - [Relationship](#relationship)
- [🖼️ Wireframes](#-wireframe)
  - [The Home Page](#the-home-page)
  - [The SignUp Page](#the-signup-page)
  - [The LogIn Page](#the-login-page)
  - [The Note Page](#the-note-page)
  - [All Notes Page](#all-notes-page)
  - [The Profile Page](#the-profile-page)
- [🐞 Unsolved Problems](#-unsolved-problems)
- [✨ Future Enhancements](#-future-enhancements)
- [🙌 Credits](#-credits)
- [👤 Authors (Developed by)](#-authors-developed-by)
  - [Mohamed Alsaegh](#mohamed-alsaegh)
  - [Fawaz Aljar](#fawaz-aljar)
  - [Qassim Alderazi](#qassim-alderazi)

## 🚀 Getting Started

Follow these steps to start using **MindNote**:

1. **Sign Up** to create a new user account.
2. **Sign In** to access your personalized notes dashboard.
3. **Create, view, and manage notes** using titles, descriptions, and tags.
4. Your session is **secure**, and all your data is **private and user-specific**.

🔗 **Live App**: [Try MindNote](...)

💻 **GitHub Repository**: [Note Application on GitHub](https://github.com/MohamedAlsaegh/Note_Application)

🗂️ **Project Planning Board** (Trello): [MindNote Planning Board](https://trello.com/invite/b/6878e9e50aaedd6c404cb7cc/ATTIf5e69d48a9f88dc3cd4138e545580463BC2D6BF9/mindnote)

## 🛠️ Technologies Used

- `**Node.js**` & `**Express.js**` : Server-side JavaScript runtime and web framework for handling routing and server logic.

- `**MongoDB**` & `**Mongoose**` : NoSQL database and Object Data Modeling (ODM) library for managing application data.

- `**EJS (Embedded JavaScript Templates)**` : Templating engine used to render dynamic content on the server-side.

- `**Multer**` : Middleware for handling image uploads via forms.

- `**Sessions` & `Authentication Middleware**` : Used for managing user login states and protecting restricted routes.

- `**CSS**` : For styling and front-end user interface enhancements.<!-- this may be changed to Bootstrap -->

# **_ERD_**

![Smile](images/image.png)
The ERD consists of two main entities: **User** and **Notes**, structured to manage users and their personal notes efficiently.

## Entities

### User

Represents an individual using the application, with the following attributes:

- **Username** (String): Unique identifier for the user.
- **Password** (String): Hashed password used for authentication.
- **About** (String): A short bio or description of the user.
- **Image** (String): Filename of the user’s profile image.

### Notes

Represents individual notes created by users, with the following attributes:

- **Title** (String): The note’s title.
- **Content** (String): The main text body of the note.
- **Tag** (String): tag to specify which category the note belong to.
- **UserId** (ObjectId): Reference linking the note to its owner (User).
- **isCompleted** (Boolean): Flag indicating if the note task has been completed.
- **Date** (Date): Timestamp of when the note was created or last updated.

## Relationship

- Each **Note** is associated with a single **User**, forming a **one-to-many** relationship where a user can have multiple notes.
- This relationship ensures clear ownership and access control for notes within the application.

# **_wireframe_**

## The Home Page

![Smile](images/image-1.png)

The Home Page is the first screen the user sees upon visiting the application. From here, users can either:

- **Sign Up** to create a new account if they are new to the app.
- **Sign In** if they already have an existing account.

This page acts as the gateway for users to access the app’s features by guiding them through the authentication process.

## The SignUp Page

![Smile](images/image-3.png)<!-- image need updating -->

On the SignUp page, users can create a new account by entering the following information:

- **Username**
- **About You** (short bio)
- **Password**
- **Confirm Password**
- Upload a **Profile Picture**

If all inputs are valid and the username is available, the user will be redirected to the SignIn page.  
If the username is already taken or there are other errors, an appropriate message will be displayed to inform the user.

## The LogIn Page

![Smile](images/image-2.png)

On the LogIn page, users enter their **Username** and **Password** to access their account.  
If the credentials are correct, the user is redirected to the **Notes** page (showing all notes).  
If the login fails, an error message is displayed:  
**"Login failed. Please try again."**

## The Note Page

![Smile](images/image-4.png)

This page is dedicated to opening and managing a single note.

Users can:

- **View** the full content of the selected note.
- **Edit** the note's **Title** and **Description**.
- **Save** changes made to the note individually.

This page allows users to focus on and manage each note in detail.

## All Notes page

![Smile](images/image-6.png)

The All Notes page is the heart of the application, where users can view and manage all their notes at a glance.

On this page, users can:

- **Add a new note** by entering a **Title** and **Description**.
- **Select a Tag** from the drop-down menu (e.g., Health, Work, Learning ).
- **Click the Add button** to submit the note.

The newly added note will be placed into one of the four predefined stages (static sections) based on the selected Tag, allowing users to easily organize and track their tasks.

## The profile page

![Smile](images/image-5.png)

On the Profile page, users can view and manage their personal information.

Features include:

- Viewing the current **Username** and **About** section.
- Editing these details directly on the page.
- Saving changes to update their profile information.

This page allows users to personalize and maintain their profile as needed.

## **_Unsolved problems_**

---

## **_Future enhancements._**

---

## **_Credits_**

---

# 👤 Authors (Developed by)

### Mohamed Alsaegh

---

📫 Email: [mad6717@gmail.com](mailto:mad6717@gmail.com) | 🔗 GitHub: [MohamedAlsaegh](https://github.com/MohamedAlsaegh) | 💼 LinkedIn: [Mohamed Alsaegh](https://www.linkedin.com/in/mohamed-alsaegh-304ab31a3/)

### Fawaz Aljar

---

📫 Email: [faaljar2@gmail.com](mailto:faaljar2@gmail.com) | 🔗 GitHub: [Fawaz Aljar](https://github.com/10Fawaz) | 💼 LinkedIn: [Fawaz Aljar](https://www.linkedin.com/in/fawaz-aljar-77900a36a/)

### Qassim Alderazi

---

📫 Email: [Qm8222606@gmail.com](mailto:Qm8222606@gmail.com) | 🔗 GitHub: [Qassim Alderazi](https://github.com/MohamedAlsaegh) | 💼 LinkedIn: [Qassim Alderazi](https://www.linkedin.com/in/qassim-alderazi-0111402b5/)
