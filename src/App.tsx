import ContactInfo from "./components/ContactInfo"
import Projects from "./components/Projects"
import Summary from "./components/Summary"
import Timeline from "./components/Timeline/Timeline"
import TimelineData from "./components/Timeline/TimelineData"

function App() {
  return (
    <>
      <Summary />
      <Timeline events={TimelineData}/>
      <Projects />
      <ContactInfo />
    </>
  )
}

export default App
