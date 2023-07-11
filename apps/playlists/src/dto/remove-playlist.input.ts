import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class RemovePlaylistInput {
  @Field(() => ID)
  id: number;
}
