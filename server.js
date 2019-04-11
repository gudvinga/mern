const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello express!'));
app.get('/ip-checker', (req, res) => {
 const ip =
  req.headers['x-forwarded-for'] ||
  req.connection.remoteAddress ||
  req.socket.remoteAddress ||
  (req.connection.socket
    ? req.connection.socket.remoteAddress
    : null);
  res.send('Your ip is ' + ip);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
