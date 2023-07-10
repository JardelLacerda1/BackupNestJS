import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ name: 'idCompany', nullable: false })
  idCompany: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'password', nullable: false })
  password?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updateAt?: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

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
    deletedAt,
    updateAt,
  }: {
    id?: string;
    idCompany: string;
    name: string;
    email: string;
    password?: string;
    createdAt?: string;
    deletedAt?: string;
    updateAt?: string;
  }) {
    Object.assign(this, {
      id,
      idCompany,
      name,
      email,
      password,
      createdAt,
      deletedAt,
      updateAt,
    });
  }
}
