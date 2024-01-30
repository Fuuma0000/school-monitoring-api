import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => Int, { description: '学籍番号' })
  studentNumber: number;
}
