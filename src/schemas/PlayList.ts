import { Field, Int, ObjectType, InputType } from "type-graphql";
import Library from "./Library";

@ObjectType()
export default class PlayList {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field(type => [Library])
  albums: Library[];

}
