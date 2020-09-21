import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import LibraryResolver from "./resolvers/LibraryResolver";
import PlayListResolver from "./resolvers/PlayListResolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [LibraryResolver, PlayListResolver],
    emitSchemaFile: true,
  });

  const server = new GraphQLServer({
    schema,
  });

  server.start(() => console.log("Server is running on http://localhost:4000"));
}

bootstrap();
