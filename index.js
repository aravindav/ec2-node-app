// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello from Node.js app!');
// });

// const PORT = process.env.PORT || 80;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js app!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
