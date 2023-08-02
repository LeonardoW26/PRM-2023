import { Divider } from "../node_modules/@mui/material/index"
import TopicCard from "./components/TopicCard/index"


function App() {

  return (
      <div id="App">
        <TopicCard
        />
        <Divider/>
        <TopicCard/>
      </div>
  )
}

export default App
