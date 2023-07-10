import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/users/entities/user.entity';

@Injectable()
export abstract class UserRepository {
  public abstract searchId(id: string): Promise<UserEntity>;

  public abstract create(users: UserEntity): Promise<UserEntity>;

  public abstract update(user: UserEntity): Promise<Record<string, boolean>>;

  public abstract remove(id: string): Promise<Record<string, boolean>>;
  
}
