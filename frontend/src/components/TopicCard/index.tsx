import TopicCardActions from "../TopicCardActions/index";
import TopicCardBody from "../TopicCardBody/index";
import TopicCardHeader from "../TopicCardHeader/index"

function TopicCard() {
    return (
        <div id="topic-card">
            <TopicCardHeader />
            <TopicCardBody />
            <TopicCardActions />
        </div>
    )
}

export default TopicCard;