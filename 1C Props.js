// App.js
import './index.css';
import Compo from './Compo';
import { useState } from 'react';
function App() {
	const [text, setText] = useState("propVar initial text");
	return (
		<>
			<Compo propVar={text}/>
			<button onClick={()=>setText("propVar updated")}>Update propVar</button>
		</>
	);
}
export default App;

// Compo.js
import './index.css'
function Compo(obj) {
	return (
		<>
			<p>{obj.propVar}</p>
		</>
	);
}
export default Compo;

//index.css
body
{
  font-family: 'Segoe UI';
  font-size: 200%;
  color: hsl(0, 0%, 95%);
  background-color: hsl(210, 5%, 12%);
  text-align: center;
  padding: 4px;
}

button
{
  padding: 15px;
  font-size: 100%;
  margin: 2px;
}
