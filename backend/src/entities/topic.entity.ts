import { Column, CreateDateColumn, Entity } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Topic {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 250})
    content: string;


    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

}