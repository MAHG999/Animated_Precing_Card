import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
      <div className="wrapper">
        <input type="radio" name="slider" id="tab-1" />
        <input type="radio" name="slider" id="tab-2" checked/>
        <input type="radio" name="slider" id="tab-3" />

        <header>
          <label for="tab-1" className="tab-1"> Basic </label>
          <label for="tab-2" className="tab-2"> Standar </label>
          <label for="tab-3" className="tab-3"> Team </label>
        </header>

        <div className="card-area">
          <div className="cards">
            <div className="row row-1">
              <div className="price-details">
                <span className="price"> 19 </span>
                <p> For beginner use</p>
              </div>
              <ul className="features">
                <li><i className="fas fa-check"></i><span>Unlimited GB Premium Bandwidth</span></li>
                <li><i className="fas fa-check"></i><span>FREE 200+ Installation Scripts WordPress Supported</span></li>
                <li><i className="fas fa-check"></i><span>Five FREE Domain Registration .com and .np extensions only</span></li>
                <li><i className="fas fa-check"></i><span>Unlimited Email Accounds & Databases</span></li>
              </ul>
            </div>
            <div className="row">
            <div className="price-details">
                <span className="price"> 19 </span>
                <p> For beginner use</p>
              </div>
              <ul className="features">
                <li><i className="fas fa-check"></i><span>Unlimited GB Premium Bandwidth</span></li>
                <li><i className="fas fa-check"></i><span>FREE 200+ Installation Scripts WordPress Supported</span></li>
                <li><i className="fas fa-check"></i><span>Five FREE Domain Registration .com and .np extensions only</span></li>
                <li><i className="fas fa-check"></i><span>Unlimited Email Accounds & Databases</span></li>
              </ul>
            </div>
          </div>
        </div>
        <button> Choose plan</button>
      </div>
    </body>
  );
}

export default App;
