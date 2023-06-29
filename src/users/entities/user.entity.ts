import { Column,
   CreateDateColumn,
   DeleteDateColumn,
   Entity,
   PrimaryGeneratedColumn,
   UpdateDateColumn 
  } from 'typeorm';
export { Entity, Column } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column({ name: 'name', length: '50', nullable: false })
  name: string;

  @Column({ name: 'nameCompany', length: '50', nullable: false })
  nameCompany: string;

  @Column({ name: 'email', length: '50', nullable: false })
  email: string;


  @Column({ name: 'password', length: '50', nullable: false })
  password: string;


  @CreateDateColumn({name: 'created_at'})
  createdAt: string;

  @UpdateDateColumn({name: 'updated_at'})
  updateAt: string;
 
  @DeleteDateColumn({name: 'deleted_at'})
  deleteAt: string;
}
