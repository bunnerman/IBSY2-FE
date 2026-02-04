import '../index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Carousel() {
	return (
		<>
				<div id="carouselExample" className="carousel slide" style={{width: 1000}}>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src="https:picsum.photos/1000/200" className="d-block w-100" alt="..."/>
					</div>
					<div className="carousel-item">
						<img src="https://picsum.photos/1000/201" className="d-block w-100" alt="..."/>
					</div>
					<div className="carousel-item">
						<img src="https://picsum.photos/1000/202" className="d-block w-100" alt="..."/>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</>
	);
}

export default Carousel;
