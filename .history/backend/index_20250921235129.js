import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRouter from "./routes/auth.routes.js"
import userRouter from "./routes/user.routes.js"
import postRouter from "./routes/post.routes.js"
import loopRouter from "./routes/loop.routes.js"
import storyRouter from "./routes/story.routes.js"
import messageRouter from "./routes/message.routes.js"
import { app, server } from "./socket.js"
dotenv.config()

const port=process.env.PORT || 5000
const allowedOrigins = [
  "http://localhost:5173", // local dev
  "https://vybe-theta.vercel.app/", // production
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow non-browser requests like Postman
      if (allowedOrigins.indexOf(origin) === -1) {
        return callback(
          new Error("CORS policy: This origin is not allowed"),
          false
        );
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/post",postRouter)
app.use("/api/loop",loopRouter)
app.use("/api/story",storyRouter)
app.use("/api/message",messageRouter)


server.listen(port , ()=>{
    connectDb()
    console.log("server started")
})

