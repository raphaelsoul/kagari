import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from '@kagari/database';
import { RoleEntity } from './Role.entity';
import { UserEntity } from './User.entity';

@Entity()
export class PermissionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  token: string;

  // permissions belongs to many roles
  @ManyToMany(() => RoleEntity, (role) => role.permissions)
  roles: RoleEntity[];

  // permissions belongs to many users
  @ManyToMany(() => UserEntity, (user) => user.permissions)
  users: UserEntity[];
}
