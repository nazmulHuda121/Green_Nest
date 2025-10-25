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
        <main className="lg:px-0">
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
