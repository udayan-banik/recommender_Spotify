import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Dashboard from './Dashboard';

const code = new URLSearchParams(document.location.search).get('code')

console.log(code)

function App() {
  return code ? <Dashboard code={code} /> : <Login />
}

export default App;
