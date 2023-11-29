import { Column, CreateDateColumn, UpdateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../users/user.entity";
import { Topic } from "src/topics/topic.entity";

@Entity('topic_user_like')
export class Like {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 250})
    content: string;

    @ManyToOne(() => User, {eager: true, nullable: false})
    @JoinColumn({name: 'user_id'})
    user: User;

    @ManyToOne(() => Topic, {eager: true, nullable: false})
    @JoinColumn({name: 'topic_id'})
    topic: Topic;

    @ManyToOne(() => Like, {eager: true, nullable: false})
    @JoinColumn({name: 'like_id'})
    like: Like;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})Column
    updatedAt: Date;
}