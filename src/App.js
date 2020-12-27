import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/sidebar';
import ChatContent from './components/chatContant';

function App() {



  return (
    <div className="App">
    <div className="row" style={{marginLeft: 0, marginRight: 0}}>
      <div className="col-md-3">
      <SideBar />
      </div>
      <div className="col-md-9">
        <ChatContent />
        </div>
        </div>
    </div>
  );
}

export default App;
