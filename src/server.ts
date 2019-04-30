import * as express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello, Typescript World'));
app.listen(port, () => console.log(`server running on port ${port}`));
