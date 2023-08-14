import { Box } from "@mui/material/index";
import { Skeleton } from "@mui/material/index";

function TopicCardSkeleton() {
    return (
        <div id="topic-card-skeleton">
            
            <Box display="flex" flexDirection="row" alignItems="center" gap={1} >
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton width={150} />
                <Skeleton width={150} />
            </Box>
            
            <Skeleton stile={{marginLeft: '3rem', marginRight: '1rem'}} />
            <Skeleton stile={{marginLeft: '3rem', marginRight: '1rem'}} />
            <Skeleton stile={{marginLeft: '3rem', marginRight: '1rem'}} />

            <Box display="flex" flexDirection="row" gap={3} style={{marginLeft: '3rem', marginTop: '1rem'}} >
                
            <Skeleton width={60} />
            <Skeleton width={60} />
            <Skeleton width={60} />
            

            </Box>

        </div>
    )
}

export default TopicCardSkeleton;