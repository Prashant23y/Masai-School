# Book Tracker App

A basic web app to track personal books. Users can sign up, log in, and manage their book list. Built using HTML, CSS, JavaScript, Firebase Authentication, and fetch API.

## Features

- Signup and login using Firebase
- Add a book (title and author)
- Show list of books
- Mark book as read
- Delete a book
- Logout
- Simple responsive UI

## Tech Stack

- HTML, CSS, JavaScript
- Firebase Authentication
- JSONPlaceholder API
- Fetch API

## How it works

- User signs up or logs in
- After login, redirected to dashboard
- Users can add, view, delete, and update books
- Uses fetch for GET, POST, PATCH, DELETE

## Challenges I faced

- Books were not showing after adding
  - Fixed it by updating the DOM after a successful POST request

## Folder Structure

- index.html — login/signup page
- dashboard.html — book dashboard
- app.js — handles auth
- books.js — handles book actions
- style.css — basic styling

## Live Link

> https://book-tracker-app1.netlify.app/

