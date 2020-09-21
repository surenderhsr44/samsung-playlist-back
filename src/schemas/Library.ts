import { Field, Int, ObjectType, InputType } from "type-graphql";

@ObjectType()
export default class Library {
  
  @Field()
  album: string;


  @Field()
  duration: number;
  
  @Field()
  title: string;
  
  @Field(type => Int)
  id: number;

  @Field()
  artist: string;


}
