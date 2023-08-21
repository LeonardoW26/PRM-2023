import { Box } from "@mui/material";
import { Divider } from "@mui/material";
import TopicCard from "../../components/TopicCard/index"
import TopicCardSkeleton from "../../components/TopicCardSkeleton/index"

type TopicListProps = {
    items: any
}

function TopicList({
    items
}: TopicListProps) {
    return (
        <Box id="topic-list" display="flex" flexDirection="column" gap={3}>

            {items.map((item: any) => (
                <Box display="flex" flexDirection="column" gap={3}>
                    <TopicCard />
                    <Divider />
                </Box>
            ))}

            <TopicCard/>
            <Divider/>
            <TopicCard/>
            <Divider/>
            <TopicCard/>
            <Divider/>
            <TopicCard/>
            <Divider/>
            <TopicCard/>
            <Divider/>
            <TopicCardSkeleton/>
        </Box>


    )
}

export default TopicList