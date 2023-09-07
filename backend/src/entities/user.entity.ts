import { Column, CreateDateColumn } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";

export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 50})
    fullname: string;

    @Column({nullable: false, length: 20})
    username: string;

    @Column({length: 250})
    description: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

}