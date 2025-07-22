# Project MindNote

## Date: 17/7/2025

### Made By: Mohamed Alsaegh | Qassim Moahammed | Fawaz Ahmed

#### [GitHub](https://github.com/MohamedAlsaegh/Note_Application) | [Trello](https://trello.com/b/EbSMXIDX/my-trello-board) | [MindNote](...)

### **_Description_**

---

MindNote is a full-stack web application designed to help users organize their thoughts and ideas into personalized note sections. Each user's notes are stored securely and displayed only upon login, making this a powerful and intuitive note management tool for everyday use.

### **_Getting Started_**

---

Sign Up as a new user.

Sign In to access your personalized notes dashboard.

Create, view, and manage your notes by category and title.

Your session is secure, and your data is isolated from others.

Visit the deployed project: [MindNote] ()

Explore our development process on [Trello] ()

## 🛠️ Technologies Used

---

- `**Node.js**` & `**Express.js**` : Server-side JavaScript runtime and web framework for handling routing and server logic.

- `**MongoDB**` & `**Mongoose**` : NoSQL database and Object Data Modeling (ODM) library for managing application data.

- `**EJS (Embedded JavaScript Templates)**` : Templating engine used to render dynamic content on the server-side.

- `**Multer**` : Middleware for handling image uploads via forms.

- `**Sessions` & `Authentication Middleware**` : Used for managing user login states and protecting restricted routes.

- `**CSS**` : For styling and front-end user interface enhancements.<!-- this may be changed to Bootstrap -->

# **_ERD_**

---

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

---

## **_wireframe_**

![Smile](images/image-1.png)
The Home Page

---

![Smile](images/image-2.png)
The LogIn Page

---

![Smile](images/image-3.png)
The SignUp Page

---

![Smile](images/image-4.png)
Managing your note

---

![Smile](images/image-5.png)
The profile page

---

![Smile](images/image-6.png)
The Main Notes View Page

---

### **_Unsolved problems_**

---

Later...

### **_Future enhancements._**

---

Implement search functionality across notes

Allow users to tag and color-code notes

### **_Credits_**

---

This project was developed collaboratively by:

Mohamed Alsaegh

Qassim Mohammed

Fawaz Ahmed

---
