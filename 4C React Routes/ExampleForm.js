import '../index.css'

function ExampleForm() {
	return (
		<>
			<div style={{padding: "10px"}}>
				<h4>This is an Example Form</h4>
				<form>
					<div className="mb-3">
						<label for="exampleInputUserN1" className="form-label">Username</label>
						<input type="text" className="form-control" id="exampleInputUserN1"/>
					</div>
					<div className="mb-3">
						<label for="exampleInputPassword1" className="form-label">Password</label>
						<input type="password" className="form-control" id="exampleInputPassword1"/>
					</div>
					<div className="mb-3 form-check">
						<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
						<label className="form-check-label text-success" for="exampleCheck1">Agree to Privacy Policy and TOS</label>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		</>
	);
}

export default ExampleForm