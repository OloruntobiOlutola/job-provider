export default class CreateUserDto {
  name: string;

  email: string;

  password: string;

  passwordConfirm: string;

  role: string;

  passwordResetToken?: string;

  passwordChangedAt?: string;

  passwordTokenExpires?: string;
}
