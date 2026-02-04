import './index.css';
import CustomForm from './components/CustomForm.js'
import CustomGrid from './components/CustomGrid.js'
import CustomNavBar from './components/CustomNavBar.js'
import Objectives from './components/Objectives.js'

function App() {
  return (
    <div style={{minHeight: "100vh", padding: 15}}>

			<CustomNavBar></CustomNavBar>
			<Objectives></Objectives>
			<CustomGrid></CustomGrid>
			<CustomForm></CustomForm>

    </div>
  );
}

export default App
