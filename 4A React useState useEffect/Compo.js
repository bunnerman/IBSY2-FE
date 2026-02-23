import '../index.css'
import {useState, useEffect} from 'react'

function Compo() {
	const [count, setCount] = useState(0)
	useEffect(() => {
		console.log("Component Updated")
	}, [count])
	
	return (
		<div style={{padding: "10px"}}>
			<h1 style={{textAlign: "center"}}>Count: {count}</h1>
			<div className="text-center">
				<button type="button" className="btn btn-lg btn-outline-success m-1" onClick={()=>setCount(count + 1)}>Increment</button>
				<button type="button" className="btn btn-lg btn-outline-danger m-1" onClick={()=>setCount(count -1)}>Decrement</button>
				<button type="button" className="btn btn-lg btn-outline-secondary m-1" onClick={()=>setCount(0)}>Reset</button>
				<br/>
				<button type="button" className="btn btn-lg btn-success m-1" onClick={()=>setCount(count * 2)}>x2</button>
				<button type="button" className="btn btn-lg btn-danger m-1" onClick={()=>setCount(count / 2)}>/2</button>
				<button type="button" className="btn btn-lg btn-outline-info m-1" onClick={()=>setCount(Math.round(count))}>Round to Integer</button>
			</div>
		</div>
	);
}

export default Compo
