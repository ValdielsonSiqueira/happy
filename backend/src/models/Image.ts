/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Refuge from './Refuge';

@Entity('images')
export default class Images {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Refuge, refuge => refuge.images)
  @JoinColumn({ name: 'refuge_id' })
  refuge: Refuge;
}
