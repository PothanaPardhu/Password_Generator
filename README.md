# React + Vite

🔐 Password Generator
A simple, responsive, and customizable password generator built using React and Tailwind CSS.
It allows users to generate secure passwords with adjustable length, inclusion of numbers, and special characters.

🚀 Live Demo
🔗 Try it here

✨ Features
Set password length dynamically

Include/exclude numbers

Include/exclude special characters

Instant password generation on parameter change

Copy password to clipboard with one click

Fully responsive UI with Tailwind CSS styling

🛠️ Tech Stack
React – For building the user interface

Tailwind CSS – For fast and responsive styling

JavaScript (ES6) – Core logic for password generation

⚡ Installation & Setup
Clone the repository

bash
Copy
Edit
git clone https://github.com/PothanaPardhu/Password_Generator.git
Navigate to the project folder

bash
Copy
Edit
cd Password_Generator
Install dependencies

bash
Copy
Edit
npm install
Run the development server

bash
Copy
Edit
npm run dev
📜 Usage
Adjust the length slider to set password length

Toggle options to include numbers and/or special characters

Click Generate to create a password

Press Copy to save it to your clipboard

📂 Folder Structure
csharp
Copy
Edit
Password_Generator/
├── public/         # Static assets
├── src/
│   ├── App.jsx     # Main app file
│   ├── index.css   # Tailwind styles
│   └── main.jsx    # Entry point
├── package.json
└── README.md
🌟 Future Enhancements
Dark/Light mode toggle

Password strength indicator

Save generated passwords locally

📄 License
This project is licensed under the MIT License – feel free to use and modify it.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
