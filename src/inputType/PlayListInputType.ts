import { InputType, Field, Int } from "type-graphql";

@InputType()
export default class PlayListInputType {
 
  @Field({nullable: true})
  name: string;
  
  @Field({nullable: true})
  id: number;

  @Field(() =>  [Int])
  songs: [number];
}