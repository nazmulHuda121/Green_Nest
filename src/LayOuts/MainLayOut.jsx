import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayOut = () => {
  return (
    <>
      <div>
        <header className="sticky top-0 z-50 transition-all duration-300">
          <NavBar />
        </header>
        <main>
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
