import { Divider } from "@mui/material"
import HeaderProfile from "./components/HeaderProfile/index"
import TopicCard from "./components/TopicCard/index"
import TopicCardSkeleton from "./components/TopicCardSkeleton/index"


function App() {

  return (
      <div id="App">
        <HeaderProfile/>
        <TopicCard/>
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
