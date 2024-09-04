const app = require("express")();
const temp = require("./src/utils/connection");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const http = require('http');
const { Server } = require('socket.io');
const cors = require("cors");
const bodyParser = require("body-parser");
const UserRouter = require("./src/routes/UserRouter");
const { authenticate } = require("./src/middleware/auth");


// mongodb+srv://apsinghrana100:B34BYorH79FOJYiN@cluster0.v1qlz.mongodb.net/realTimePollingSystem?retryWrites=true&w=majority&appName=Cluster0

app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Adjust as needed to allow CORS
  }
});

// Middleware to attach io instance to the req object
app.use((req, res, next) => {
  req.io = io;
  next();
});

const PORT = process.env.PORT || 4000;
const URL = process.env.MONGOURL;

app.use(UserRouter);

mongoose
  .connect(URL)
  .then(() => {
    server.listen(4000, () => {
      console.log('Server is running on port 4000');
  });
  })
  .catch((error) => {
    console.log(error);
  });


