import AppRouter from './Routers/AppRouter';
import './assets/css/App.css';
import AuthProvider from './components/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
