import '../index.css'

function CustomGrid() {
	return (
		<>
		<h2 className="text-primary">Responsive Grid</h2>
		<div id="responsiveGrid" className = "container text-center">
			<div className="row mb-4">
				<div className="col m-2 p-3 border rounded">
					<h5 className="text-info">Test Column A</h5>
					<p>
						<b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div className="col m-2 p-3 border rounded">
					<h5 className="text-info">Test Column B</h5>
					<p>
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
						nisi ut aliquip ex ea commodo consequat.
					</p>
				</div>
				<div className="col m-2 p-3 border rounded">
					<h5 className="text-info">Test Column C</h5>
					<p>
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
						dolore eu fugiat nulla pariatur.
					</p>
				</div>
			</div>
			<div className="row">
				<div className="col m-2 p-3 border rounded">
					<h5 className="text-info">Test Column D</h5>
					<p>
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia deserunt mollit anim id est laborum.
					</p>
				</div>
				<div className="col m-2 p-3 border rounded">
					<h5 className="text-info">Test Column E</h5>
					<p>
						Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
						varius, turpis et commodo pharetra.
					</p>
				</div>
			</div>
		</div>
		</>
	);
}

export default CustomGrid
