const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/greeting', (req, res) => {
  res.json({ message: 'Vanmam from Express!' });
  console.log("RUNNING .....");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});