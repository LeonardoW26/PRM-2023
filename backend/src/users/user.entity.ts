import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class User {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 50})
    fullname: string;
    
    @Column({nullable: false, length: 20})
    username: string;
    
    @Column({nullable: true, length: 250})
    description: string;

    @Exclude()
    @Column({nullable: false, length: 20})
    password: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
}