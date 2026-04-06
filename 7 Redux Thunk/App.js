import React, { useMemo } from "react"
import "./index.css"
import { useSelector, useDispatch } from "react-redux"
import { depositAsync } from "./components/actions.js"

function App() 
{
	const balance = useSelector(state => state.balance)
	const interest = useSelector(state => state.interest)
	const dispatch = useDispatch();

	const total = useMemo(() => balance + interest, [balance, interest])

	return (
		<div className = "customTheme" style = {{ minHeight: "100vh", borderStyle: "none", margin: "0", textAlign: "center"}}>
			<h2>Balance: {balance}</h2>
			<button className = "depositBtn" onClick={()=> dispatch(depositAsync())}>Deposit ($100) + ASYNC (2s)</button>
			<h3>Interest Added: {interest}</h3>
			<h2>Total: {total}</h2>
		</div>
	)
}

export default App;