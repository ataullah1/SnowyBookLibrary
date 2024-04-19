import { Outlet, useNavigation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import LoderPage from './pages/LoderPage';

function App() {
  const lodingDta = useNavigation();
  if (lodingDta.state === 'loading') {
    return <LoderPage />;
  }
  return (
    <div>
      <div className="w-11/12 mx-auto max-w-[1500px]">
        <Nav />
        <div className="min-h-[calc(100vh-120px)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
