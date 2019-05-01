import express from 'express';
import GraphQLHTTP from 'express-graphql';
import schema from './graph/schema';

const app = express();
const port = 3000;

app.use('/', (request: express.Request, response: express.Response) => {
  GraphQLHTTP({
    graphiql: true,
    schema
  })(request, response);
});

// tslint:disable-next-line: no-console
app.listen(port, () => console.log(`server running on port ${port}`));
