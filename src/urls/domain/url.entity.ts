import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Urls{
    @PrimaryGeneratedColumn('uuid')
    urlId: string;

    @Column({ length: 100 })
    title: string;

    @Column({ length: 100 })
    url: string;
}