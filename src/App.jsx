import './App.css'
import Greetings from "./components/Greetings.jsx";

function App() {
  return (
      <>
        <div className="card">
          <Greetings message={"This is an argument (props) that is inputed to a react function."} />
        </div>
      </>
  )
}

export default App