🏆 ChessMaster - Player Match and Stats Dashboard
Welcome to ChessMaster, a full-stack web application that provides chess match management and player statistics. The app allows you to view players, add matches, and track player performance through various win percentage metrics. Built with the power of PostgreSQL, .NET, and React, this project demonstrates a smooth integration of backend and frontend technologies.


🚀 Live Demo
Check it out here: Live Demo
The application is fully responsive and provides a smooth user experience across devices!

📌 Features
Player Management: View players based on country and ranking.
Match Tracking: Add new matches with player details, match date, and level.
Win Percentage Calculation: Analyze players’ performance with win percentages and total matches won.
Dynamic Filtering: Filter players by country or specific performance metrics.

🔧 Tech Stack
Technology	Description
PostgreSQL	Robust relational database for managing chess data
.NET Core	Middleware API for handling business logic
React	Frontend framework for dynamic UI interactions
Axios	API requests and data fetching
CSS/Bootstrap	Styling for a sleek, responsive design

🛠️ Installation
Clone the Repository
bash
Copy code
git clone [https://github.com/oms6363-crypto/ChessSystem](https://github.com/om6363-crypto/ChessSystem).git
cd ChessMaster
Backend Setup (.NET)
Navigate to the API folder:
bash
Copy code
cd API
Restore .NET dependencies:
bash
Copy code
dotnet restore
Update connection strings in appsettings.json for PostgreSQL integration.
Run the API:
bash
Copy code
dotnet run
Database Setup (PostgreSQL)
Ensure PostgreSQL is installed and running.
Use the provided SQL schema to set up the database:
sql
Copy code
CREATE DATABASE chessmaster;
Run migration scripts from the /migrations folder.
Frontend Setup (React)
Navigate to the client folder:
bash
Copy code
cd client
Install dependencies:
bash
Copy code
npm install
Start the React application:
bash
Copy code
npm start

🔥 Screenshots
Feature	Screenshot
![Screenshot (190)](https://github.com/user-attachments/assets/eb89b1c9-9b77-48b7-9735-8a6a0fc1f01c)

![Screenshot (191)](https://github.com/user-attachments/assets/4dccea8a-af85-4bb6-8c52-993f28812d06)

![Screenshot (192)](https://github.com/user-attachments/assets/0ae6002f-5773-4d73-a01e-4ca853923821)

![Screenshot (193)](https://github.com/user-attachments/assets/8cbee6c4-4aed-46dd-953c-ebcdcf0214e5)

![Screenshot (194)](https://github.com/user-attachments/assets/5c0815fe-ba46-4f88-93ed-5a7893dc53a2)



🤝 Contributing
We welcome contributions to this project! Please submit a pull request or open an issue if you have any suggestions or find any bugs.

🎯 Future Enhancements
Add detailed player match history
Implement user authentication
Enable sorting and filtering across more columns

🏅 Contact
For any inquiries, feel free to reach out via omsingh6363@gmail.com.
