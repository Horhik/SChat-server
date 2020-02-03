require('dotenv').config();
const app = require('express')();
const socket = require('socket.io');

const env = process.env;
const PORT = env.PORT;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello');
});

const server = app.listen(process.env.PORT, () =>
  console.log(`App running on ${PORT}`),
);

const io = socket(server);

io.on('connection', socket => {
  console.log('one more added');

  socket.on('message', text => {
    socket.broadcast.emit('messageRes', text);
  });
});
