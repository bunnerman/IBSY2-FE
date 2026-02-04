import '../index.css'

function toggleTheme() 
{
  const html = document.documentElement;
  html.setAttribute
	(
    'data-bs-theme',
    html.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark'
  );
}

function CustomNavBar() {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary" style ={{borderRadius: 10}}>
				<div className="container-fluid">
					<a className="navbar-brand text-primary" style={{fontSize:40}} href="#">Experiment III</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" href="#objectives">Objectives</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#responsiveGrid">Responsive Grid</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#form">Bootstrap Form</a>
							</li>
						</ul>
					</div>
					<button onClick={toggleTheme} type="button" className="btn btn-secondary">Theme</button>
				</div>
			</nav>
	);
}

export default CustomNavBar
