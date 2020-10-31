require('dotenv')
  .config();
const express = require('express');
const routes = require('./routes');

require('./services/passport');

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(3001, () => {
  console.log('Server started listening on PORT http://localhost:3001');
});
