import React from "react"
import styles from "./App.module.css"
import "./index.css"
import styled from "styled-components"

function App() 
{
	const Button = styled.button
		`
			color: red;
		`

	return (
		<div className = "customTheme" style = {{backgroundColor: "hsl(210, 8%, 80%)", minHeight: "100vh", borderStyle: "none", margin: "0", textAlign: "center", zoom: "200%"}}>
			<div className={styles.container}>
				<h2 className={styles.title}>React Styling</h2>
				<p className = "blueText">Usual CSS (internal/external) via class (blue text)</p>
				<Button>Red Text on button via styled-components</Button>
				<p>Background, centering, padding, etc was done via inline CSS</p>
				<small>Resize smaller to see the effect of @media</small>
			</div>
		</div>
	);
}

export default App;