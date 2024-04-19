// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');

const app = express();
const port = 80;

app.use(express.static('./public'));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Static server on port: ${port}`);
});
