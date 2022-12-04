import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  passwordConfirm: string;

  @Prop()
  role: string;

  @Prop()
  passwordResetToken: string;

  @Prop()
  passwordChangedAt: Date;

  @Prop()
  passwordTokenExpires: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
