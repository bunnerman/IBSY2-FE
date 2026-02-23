import '../index.css'

function Support() {
	return (
		<>
			<div style={{padding: "10px"}}>
				<h4>This page features multiple image carousels to scroll through</h4>
				<p className="text-secondary"><b>picsum</b> was used for image fetching</p>
				<div id="carouselExample" class="carousel slide">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src="https://picsum.photos/1920/200" class="d-block w-100"/>
						</div>
						<div class="carousel-item">
							<img src="https://picsum.photos/1920/201" class="d-block w-100"/>
						</div>
						<div class="carousel-item">
							<img src="https://picsum.photos/1920/202" class="d-block w-100"/>
						</div>
					</div>
					<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
				</div>
				<br/>
				<div id="carouselExample2" class="carousel slide">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src="https://picsum.photos/1920/204" class="d-block w-100"/>
						</div>
						<div class="carousel-item">
							<img src="https://picsum.photos/1920/205" class="d-block w-100"/>
						</div>
						<div class="carousel-item">
							<img src="https://picsum.photos/1920/206" class="d-block w-100"/>
						</div>
					</div>
					<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button class="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
				</div>
				<br/>
				<div id="carouselExample3" class="carousel slide">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src="https://picsum.photos/1920/207" class="d-block w-100"/>
						</div>
						<div class="carousel-item">
							<img src="https://picsum.photos/1920/208" class="d-block w-100"/>
						</div>
						<div class="carousel-item">
							<img src="https://picsum.photos/1920/209" class="d-block w-100"/>
						</div>
					</div>
					<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample3" data-bs-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button class="carousel-control-next" type="button" data-bs-target="#carouselExample3" data-bs-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
				</div>
				<div></div>
			</div>
		</>
	);
}

export default Support