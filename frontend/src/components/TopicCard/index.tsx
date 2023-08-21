import TopicCardActions from "../TopicCardActions/index";
import TopicCardBody from "../TopicCardBody/index";
import TopicCardHeader from "../TopicCardHeader/index"

type TopicCardProps = {
    topic: any
}

function TopicCard({
    topic
}: TopicCardProps) {
    return (
        <div id="topic-card">
            <TopicCardHeader />
            <TopicCardBody />
            <TopicCardActions />
        </div>
    )
}

export default TopicCard;