import '../index.css'
import CustomModal from './CustomModal.js'

function CustomForm() {
	return (
		<>
			<div id = "form" className="marginTB">
				<h2 className="text-primary">Bootstrap Form</h2>
					<form>
						<h3>Essential	 Info</h3>
					<div className="mb-3">
						<label for="exampleInputEmail1" className="form-label">Email address</label><span className="badge text-bg-primary" style={{marginLeft: 5, fontSize: 10}}>required</span>
						<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
						<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
					</div>
					<div className="mb-3">
						<label for="exampleInputUsername1" className="form-label">Username</label><span className="badge text-bg-primary" style={{marginLeft: 5, fontSize: 10}}>required</span>
						<input type="text" className="form-control" id="exampleInputUsernamel1" required/>
					</div>
					<div className="mb-3">
						<label for="exampleInputPassword1" className="form-label">Password</label><span className="badge text-bg-primary" style={{marginLeft: 5, fontSize: 10}}>required</span>
						<input type="password" className="form-control" id="exampleInputPassword1" required/>
					</div>
					<div className="mb-3">
						<h3>Other Info</h3>
						<div className="form-input">
							<label for="exampleInputAge1" className="form-label">Age</label><span className="badge text-bg-secondary" style={{marginLeft: 5, fontSize: 10}}>recommended</span>
							<input type="number" className="form-control" id="exampleInputAge1"/>
						</div>
						<h5>Purpose of Use<span className="badge text-bg-secondary" style={{marginLeft: 5, fontSize: 10}}>recommended</span></h5>
						<div className="form-check">
							<input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1"/>
							<label className="form-check-label" for="radioDefault1">
								Personal
							</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2"/>
							<label className="form-check-label" for="radioDefault2">
								Work
							</label>
						</div>
						
						<div className="form-check">
							<input className="form-check-input" type="radio" name="radioDefault" id="radioDefault3"/>
							<label className="form-check-label" for="radioDefault3">
								Education
							</label>
						</div>
						<div className="form-check">
							<input class="form-check-input" type="radio" name="radioDefault" id="radioDisabled" disabled/>
							<label class="form-check-label" for="radioDisabled">
								Can't Click This
							</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio" name="radioDefault" id="radioDefault4"/>
							<label className="form-check-label" for="radioDefault4">
								General/All/Prefer not to say
							</label>
						</div>
					</div>
					<div className="mb-3 form-check">
						<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
						<label className="form-check-label text-danger" for="exampleCheck1">Agree to Privacy Policy and TOS</label>
					</div>
					<CustomModal></CustomModal>
					<button type="submit" className="btn btn-success" style={{marginRight: 5}}>Create Account</button>
					<button type="reset" className="btn btn-warning">Reset Input</button>
				</form>
			</div>
		</>
	);
}

export default CustomForm
