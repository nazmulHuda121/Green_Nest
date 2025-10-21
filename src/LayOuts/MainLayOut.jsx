import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayOut = () => {
  return (
    <>
      <div>
        <header>
          <NavBar />
        </header>
        <main className="max-w-7xl mx-auto px-4 lg:px-0 min-h-127 py-12">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default MainLayOut;
