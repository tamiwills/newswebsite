const express = require("express");
const app = express();
const http = require("http");
const {Server} = require("socket.io");
const cors = require('cors');

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ['GET', 'POST'],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);

  // socket.on("join_room", (data) => {
  //   socket.join(data);
  //   console.log("User Joined Room: " + data);
  // });

  socket.on("send_message", (data) => {
    console.log(data);
    socket.broadcast.emit("receive_message", data.content.message);
  });

});

server.listen(3001, () => {
  console.log("Server Is Running");
});




// const express = require("express");
// const socket = require("socket.io");
// const app = express();
// const cors = require("cors");

// app.use(cors());
// app.use(express.json());

// const server = app.listen("3001", () => {
//   console.log("Server Running on Port 3001...");
// });

// io = socket(server);

// io.on("connection", (socket) => {
//   console.log(socket.id);

//   // socket.on("join_room", (data) => {
//   //   socket.join(data);
//   //   console.log("User Joined Room: " + data);
//   // });

//   socket.on("send_message", (data) => {
//     console.log(data);
//     // socket.to(data.room).emit("receive_message", data.content);
//     socket.broadcast.emit("receive_message", data);
//   });

//   socket.on("disconnect", () => {
//     console.log("USER DISCONNECTED");
//   });
// });