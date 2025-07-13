import Hero from './components/hero'; // adjust the path if needed
import Header from './components/header'
import Footer from './components/footer';

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero />
      <Footer />
    </div>
  );
}