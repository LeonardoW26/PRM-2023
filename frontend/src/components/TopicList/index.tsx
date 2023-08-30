import { Box } from "@mui/material";
import { Divider } from "@mui/material";
import TopicCard from "../../components/TopicCard/index"

type TopicListProps = {
    items: any
}

function TopicList({
    items
}: TopicListProps) {
    return (
        <Box id="topic-list" display="flex" flexDirection="column" gap={3}>

            {items.map((item: any, index: number) => (
                <Box display="flex" flexDirection="column" gap={3} key={index}>
                    <TopicCard topic={item} />
                    <Divider />
                </Box>
            ))}
        </Box>
    )
}

export default TopicList