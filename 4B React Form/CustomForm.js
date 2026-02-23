import '../index.css'
import { useState } from 'react'

function CustomForm() {
	const [emailId, setEmailId] = useState("")
	const [username, setUsername] = useState("")
	const [pwd, setPwd] = useState("")
	const [name, setName] = useState("")
	const [msg, setMsg] = useState("")

	const customSubmitLogic = (e) => {
		e.preventDefault()
		console.log(e)
	}

	return (
		<>
			<h2 style={{textAlign: "center", fontSize: "250%"}}>React Form</h2>

			<form className="formArea" onSubmit={customSubmitLogic}>
				<input id="emailId" type="email" placeholder="Email ID" value={emailId}
					onChange={(e) => setEmailId(e.target.value)}/><br/>
				<input id="pwd" type="password" placeholder="Password" value={pwd}
					onChange={(e) => setPwd(e.target.value)}/><br/>
				<input id="name" type="text" placeholder="Name" value={name}
					onChange={(e) => setName(e.target.value)}/><br/>
				<input id="subject" type="text" placeholder="Subject" value={username}
					onChange={(e) => setUsername(e.target.value)}/><br/>
				<textarea id="msg" placeholder="Type your message here" value={msg}
					onChange={(e) => setMsg(e.target.value)}/><br/>
					
				<button type="submit" className="submitBtn">Submit</button>
			</form>
		</>
	);
}

export default CustomForm
