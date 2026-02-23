import './index.css';
import Information from './components/Information.js'
import ExampleForm from './components/ExampleForm.js'
import Carousel from './components/Carousel.js'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <div style={{minHeight: "100vh"}}>
			<BrowserRouter>
				<nav className="navbar navbar-expand-lg bg-body-tertiary">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">EXP-IV-C React Routes</a>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
								<li className="nav-item">
									<Link className="nav-link" to="/">Information <i>(HOMEPAGE)</i></Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/support">Example Form</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/carousel">Image Carousel</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				<Routes>
					<Route path="/" element={<Information/>}/>
					<Route path="/support" element={<ExampleForm/>}/>
					<Route path="/carousel" element={<Carousel/>}/>
				</Routes>
			</BrowserRouter>

    </div>
  )
}

export default App
