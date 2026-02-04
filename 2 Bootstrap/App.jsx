import './index.css';

import Badges from './components/Badges'
import Modal from './components/Modal'
import Carousel from './components/Carousel'
import Accordion from './components/Accordion'

function App() {
  return (
    <div className = "customTheme">

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">React + Bootstrap Experiment II Feature Showcase Page</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="#badges">Badges</a>
              <a className="nav-link" href="#">Modal</a>  
              <a className="nav-link" href="#carousel">Carousel</a>
              <a className="nav-link" href="#">ac</a>
            </div>
          </div>
        </div>
      </nav>

      <div style={{marginLeft: 10, marginRight: 4, marginTop: 4}}>


        <h3>Bootstrap Integration and Responsive Design: Setting Up Bootstrap in React, Advanced Bootstrap Components & Theming and Customization with Bootstrap</h3>
          <ol>
            <li>Integrate Bootstrap into a React project, customize styles using Bootstrap classes. Verify the integration by styling components.</li>
            <li>Explore and implement advanced Bootstrap components (e.g., carousels, modals). Customize and integrate these components into React applications. Ensure proper functionality and responsiveness.</li>
            <li>Theme Bootstrap components to match the overall design. Customize Bootstrap styles for a unique look and feel. Integrate Bootstrap seamlessly with React components, following best practices.</li>
          </ol>
        <div className="card cardMargin">
          <div className="card-body">
            <h2 id="badges" className="card-title">Badges</h2>
              <p>These are badges with FrontEnd Semantic Colors<Badges></Badges></p>
          </div>
        </div>
        <div className="card cardMargin">
          <div className="card-body">
            <h2 id="modal" className="card-title">Modal</h2>
              <p>
                Click the button below
              </p>
              <Modal></Modal>
          </div>
        </div>
        <div className="card cardMargin">
          <div className="card-body">
            <h2 id="carousel" className="card-title">Carousel</h2>
              <p>A Carousel in FrontEnd refers to an UI component that lets you cycle between elements/images</p>
              <Carousel></Carousel>
          </div>
        </div>
        <div className="card cardMargin">
          <div className="card-body">
            <h2 id="test" className="card-title">Carousel</h2>
              <p>A Carousel in FrontEnd refers to an UI component that lets you cycle between elements/images</p>
          </div>
        </div>
        <div className="card cardMargin">
          <div className="card-body">
            <h2 id="test" className="card-title">Accordion</h2>
              <p>
                An Accordion is a responsive UI element in FrontEnd terminology which opens certain sections of itself on clicking
                the corrresponding sections of it
              </p>
              <Accordion></Accordion>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
