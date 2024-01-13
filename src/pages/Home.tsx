
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

const Home = () => {
  return (
		<div className="grid grid-cols-1 justify-items-center ">
			<Header />
			<Main />
            <Footer />
		</div>
	);
}

export default Home