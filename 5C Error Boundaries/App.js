import ExampleComponent from "./components/ExampleComponent.js";
import ExampleComponent2 from "./components/ExampleComponent2.js"
import "./index.css";

function App() 
{
  return (
		<div className = "customTheme" style = {{ minHeight: "100vh", borderStyle: "none", margin: "0"}}>
				<ExampleComponent/>
				<ExampleComponent2/>
		</div>
  );
}

export default App; 
