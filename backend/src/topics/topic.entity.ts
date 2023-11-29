import { Column, CreateDateColumn, UpdateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, VirtualColumn, TreeParent, Tree } from "typeorm";
import { User } from "../users/user.entity";
import { Like } from "src/likes/like.entity";


@Tree('materialized-path')
@Entity()
export class Topic {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 250})
    content: string;

    @ManyToOne(() => User, {eager: true, nullable: false})
    @JoinColumn({name: 'user_id'})
    owner: User;

    @TreeParent()
    @JoinColumn({name: 'topic_id'})
    repost: Topic;

    @TreeParent()
    @JoinColumn({name: 'like_id'})
    like: Like;

    @Column({name: 'like_id', nullable: true})
    like_id: number;

    @Column({name: 'topic_id', nullable: true})
    topic_id: number;

    @VirtualColumn({query: (alias) => `select count(id) from topic_user_comment where topic_id = ${alias}.id`})
    totalComments:number;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})Column
    updatedAt: Date;
}