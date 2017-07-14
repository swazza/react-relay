import express from "express";
import graphqlHTTP from "express-graphql";
import { schema } from "./schema";
import { rootResolvers } from "./resolvers";

const app = express();

app.use(
  "/todoql",
  graphqlHTTP({
    schema,
    rootValue: rootResolvers,
    graphiql: true
  })
);

app.listen(25000, "0.0.0.0", () => {
  console.log("App Started: Listening on Port 25000");
});
