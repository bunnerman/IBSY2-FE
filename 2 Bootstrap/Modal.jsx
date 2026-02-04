import '../index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Modal() {
	return (
		<>
			<div className="modal" tabIndex="-1" id="exampleModal" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Modal title</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<p>
								In FrontEnd terminology, a modal is a graphical user interface (UI) element that appears 
                as a pop-up overlay ontop of the main content
							</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close Modal</button>
							<button type="button" className="btn btn-primary">Dummy Btn</button>
						</div>
					</div>
				</div>
			</div>
			<button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  			Open Modal
			</button>
		</>
	);
}

export default Modal;
