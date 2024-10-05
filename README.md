# SecondBind Recruitment Project
This project is asked by the recruitment process of SecondBind for my internship. This application is basically a library where you can search books by title, author or genre and add new books to it.

## Setup
To run this project you only need to have Node JS installed on your computer. First of all, clone this repository and open it in your terminal.

### Backend
My backend is an Express API which communicate with a SQLite database. I have no script to set up the database because everything is handled by Sequelize which is an ORM for multiple database and SQL dialect.

Use the following commands to run the backend server of the application. Please note that at every rerun of the API, the database will be cleared and then populated with base data.
```bash
cd backend
npm install
npm run server
```
### Frontend
My frontend is written in Vue JS and I didn't used any CSS frameworks. I used Pinia as a global state manager and the Fetch API to communicate with my backend.

Use the following commands to run the frontend of the application. If everything is done correctly, you should land on the inventory page with every books listed and the possibility to filter this list.
```bash
cd frontend
npm install
npm run dev
```

## Details