import { useEffect, useState } from "react";
import { IComment, ITopic } from "../../@types";
import TopicCardActions from "../TopicCardActions";
import TopicCardBody from "../TopicCardBody";
import TopicCardHeader from "../TopicCardHeader";
import TopicComment from "../TopicComment";
import { Alert, Snackbar } from "@mui/material";
import { createComment, getCommentByTopic } from "../../services";
import { useAuth } from "../../hook/useAuth";

type TopicCardProps = {
    topic: ITopic
}

function TopicCard({
    topic
}: TopicCardProps) {

    //USER
    const { user } = useAuth();


    //STATES = CONTROL
    const [MessageError, setMessageError] = useState('');
    const [MessageSuccess, setMessageSuccess] = useState('');

    //COMMENTS
    const [showComments, setShowComments] = useState('');
    const [comment, setComment] = useState<IComment>({} as IComment);
    const [comments, setComments] = useState<IComment[]>([]);
    const [totalComments, setTotalComments] = useState(0);

    const handleClickComment = () => {

    }

    const postComment = async (contentText: string): Promise<void> => {
        const commentForm: IComment = {
            user: user,
            topic: topic,
            content: contentText
        }

        createComment(commentForm)
            .then(result => {
                setComment(result.data);
                setTotalComments(totalComments+1);

                setComments([...comments, result.data]);

                setMessageSuccess('Comentario Enviado!');

                setTimeout(() => {
                    setMessageSuccess('');
                }, 5000);
            })
            .catch(error => {
                setMessageError(error.message)
            })
    }
    //REPOSTS
    
    //LIKES

    //EFFECT
    useEffect(() => {

        //comments
        getCommentByTopic( topic )
            .then(result => {
                const dados: IComment[] = result.data;
                setComments(dados);
                setTotalComments(dados.length);

                const found = dados.find(item => (item.user?.id == user?.id));
                if (found) {
                    setComment(found);
                }
            })
            .catch(error => {
                setMessageError(error.message);
            });

        //reposts

        //likes
    }, []);

    return (
        <div id="topic-card">
            <TopicCardHeader 
                createdAt={topic.createdAt}
                owner={topic.owner}
             />
            <TopicCardBody content={topic.content} />

            <TopicCardActions 
                commented={Boolean(comment.user)} 
                totalComments={totalComments} 
                clickComment={handleClickComment} />

            {showComments && (
                <TopicComment 
                comments={ comments}
                postComment={postComment} />
            )}

            <Snackbar
                open={Boolean(MessageError)}
                autoHideDuration={6000}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}>

                    <Alert severity="error" variant="filled" onClose={() => setMessageError('')}>
                        {MessageError}
                    </Alert>

                    </Snackbar>

                    <Snackbar
                        open={Boolean(MessageSuccess)}
                        autoHideDuration={6000}
                        anchorOrigin={{vertical: 'top', horizontal: 'right'}}>

                        <Alert severity="success" variant="filled" onClose={() => setMessageSuccess('')}>
                            {MessageError}
                        </Alert>

                    </Snackbar>
        </div>
    )
}

export default TopicCard;