import '../index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function failureModal() {
	return (
		<>

		</>
	);
}

function CustomModal() {

	return (
			<>
			<div className="modal" tabIndex="-1" id="exampleModal" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h3 className="modal-title">Privacy Policy and TOS</h3>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<h5>Privacy Policy</h5>
								<p>We will share your data with corporations, advertisers and data brokers</p>
							<h5>TOS</h5>
								<ul>
									<li>You can't sue us under any conditions</li>
									<li>You may not make alternate accounts</li>
									<li>We will share ur personal data inspite of <a href="https://gdpr-info.eu/">GDPR laws</a></li>
								</ul>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
			<button className="btn btn-danger mb-3" style={{fontSize: 15, padding: 5}} data-bs-toggle="modal" data-bs-target="#exampleModal">
				Privacy Policy & TOS
			</button><br></br>
		</>
	);
}

export default CustomModal
