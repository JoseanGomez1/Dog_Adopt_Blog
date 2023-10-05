import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-3xl font-semibold mb-4">About My App</h1>
      <p className="text-lg mb-4">
        Welcome to my demo project showcasing the use of Node.js, Express, and MongoDB in building a book management app.
      </p>
      <p className="text-lg mb-4">Key features of the app:</p>

      <ul className="list-disc ml-6 text-lg mb-4">
        <li>User-friendly interface to manage books</li>
        <li>CRUD (Create, Read, Update, Delete) operations for books</li>
        <li>Secure and efficient storage using MongoDB</li>
        <li>API endpoints for interacting with the book data</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">API Endpoints</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Action</th>
            <th className="px-4 py-2">URL</th>
            <th className="px-4 py-2">HTTP</th>
            <th className="px-4 py-2">Body</th>
            <th className="px-4 py-2">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-blue-500">READ</td>
            <td className="px-4 py-2">/api/books</td>
            <td className="px-4 py-2">GET</td>
            <td className="px-4 py-2">Empty</td>
            <td className="px-4 py-2">Returns ALL Books</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-blue-500">READ</td>
            <td className="px-4 py-2">/api/books/:id</td>
            <td className="px-4 py-2">GET</td>
            <td className="px-4 py-2">Empty</td>
            <td className="px-4 py-2">Returns A Single Book</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-green-500">CREATE</td>
            <td className="px-4 py-2">/api/books</td>
            <td className="px-4 py-2">POST</td>
            <td className="px-4 py-2">JSON</td>
            <td className="px-4 py-2">New Book Created</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-orange-500">UPDATE</td>
            <td className="px-4 py-2">/api/books/:id</td>
            <td className="px-4 py-2">PUT</td>
            <td className="px-4 py-2">JSON</td>
            <td className="px-4 py-2">Updates Book</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-red-500">DELETE</td>
            <td className="px-4 py-2">/api/books/:id</td>
            <td className="px-4 py-2">DELETE</td>
            <td className="px-4 py-2">JSON</td>
            <td className="px-4 py-2">Delete Book</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default About;
