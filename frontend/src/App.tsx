import { Divider } from "@mui/material/index"
import TopicCard from "./components/TopicCard/index"
import TopicCardSkeleton from "./components/TopicCardSkeleton/index"


function App() {

  return (
      <div id="App">
        <TopicCard
        />
        <Divider/>
        <TopicCard/>
        <Divider/>
        <TopicCard/>
        <Divider/>
        <TopicCard/>
        <Divider/>
        <TopicCard/>
        <TopicCardSkeleton/>
      </div>
  )
}

export default App
