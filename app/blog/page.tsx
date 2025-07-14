import Blogpage from './blogpage'; // adjust the path if needed
import Header from '../home/components/header'
import Footer from '../home/components/footer';

export default function Blog() {
  return (
    <div>
      <Header/>
      <Blogpage />
      <Footer />
    </div>
  );
}