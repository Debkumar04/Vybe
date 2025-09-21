# Vybe - A Social Media Platform

**Not Just A Platform, It's a Vybe**  

Vybe is a modern social media platform built using the **MERN stack (MongoDB, Express, React, Node.js)**. It allows users to connect, share content, and interact with others in real-time, similar to Instagram.

---

## Features

- **User Authentication:** Sign up and login securely.
- **Post Creation:** Create and share posts with text, images, and videos.
- **Stories:** Share temporary stories visible to followers.
- **Follow/Unfollow:** Connect with other users by following them.
- **Likes & Comments:** Engage with posts through likes and comments.
- **Save Posts:** Bookmark your favorite posts.
- **Real-time Chat:** Chat with other users in real-time.
- **Loops:** Browse through loops/reels for endless content.

---

## Technologies Used

- **Frontend:** React, Redux (if used), Tailwind CSS or custom styling
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT
- **Real-time:** Socket.io
---

## Installation

# 1. Clone the repository:

   ```bash
   git clone https://github.com/Debkumar04/vybe.git
   cd vybe
   ```
# 2. Install dependencies:
   For backend
   ```bash
      cd backend
      npm install
   ```

  For frontend
  ```bash
   cd ../frontend
   npm install
  ```
# 3. Create a .env file in the backend with your environment variables:
  ```bash
   PORT=8000
   MONGODB_URL="mongodb+srv://<db_user>:<password>@vybe.hywx1b7.mongodb.net/?retryWrites=true&w=majority&appName=Vybe"
   JWT_SECRET="SECRET"
   EMAIL="vybe@gmail.com"
   EMAIL_PASS="zidn ipia zzzz xxxx"
   CLOUDINARY_CLOUD_NAME="CLOUD_NAME"
   CLOUDINARY_API_KEY="API_KEY"
   CLOUDINARY_API_SECRET="API_SECRET"

  ```
# 4. Run the project:
  ```bash
   cd backend
   npm run dev

   cd ../frontend
   npm start

  ```
