export class UserEntity {
  id?: string;
  idCompany: string;
  email: string;
  name: string;
  password?: string;
  createdAt?: string;
  updateAt?: string;

  static fromJson(json: Record<string, any>): UserEntity {
    const user = new UserEntity({
      ...(json as UserEntity),
    });
    return user;
  }

  constructor({
    id,
    idCompany,
    email,
    name,
    password,
    createdAt,
  }: {
    id?: string;
    idCompany: string;
    name: string;
    email: string;
    password?: string;
    createdAt?: string;
  }) {
    Object.assign(this, {
      id,
      idCompany,
      name,
      email,
      password,
      createdAt,
    });
  }
}
