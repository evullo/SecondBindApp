import express from 'express';
import config from 'config';

const app = express();
const port = config.get("server.port");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});