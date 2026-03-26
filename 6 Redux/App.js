import React from "react"
import "./index.css"
import { useSelector, useDispatch } from "react-redux"

function App() 
{
	const balance = useSelector(state => state.balance)
	const dispatch = useDispatch();

	return (
		<div className = "customTheme" style = {{ minHeight: "100vh", borderStyle: "none", margin: "0", textAlign: "center"}}>
			<h2>Balance: {balance}</h2>
			<button className = "depositBtn" onClick={()=> dispatch({type: "DEPOSIT"})}>Deposit ($100)</button>
			<button className = "withdrawBtn" onClick={()=> dispatch({type: "WITHDRAW"})}>WITHDRAW ($50)</button>
		</div>
	)
}

export default App;