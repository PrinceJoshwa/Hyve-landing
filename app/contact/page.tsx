import Header from "../home/components/header";
import Footer from "../home/components/footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-br from-yellow-50 to-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 lg:mb-6 text-[#2D2D2D] leading-tight">
              Get in{" "}
              <span className="bg-gradient-to-r from-[#F1AB13] via-[#FFD700] to-[#F1AB13] bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
              Have questions about HYVE? We'd love to hear from you. Send us a
              message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-8 border border-yellow-100">
            <div className="w-full h-[600px]">
              <iframe
                src="https://tally.so/embed/wdGMOd?alignLeft=1&hideTitle=1&transparentBackground=1&hideGreeting=1"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Contact Form"
              ></iframe>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">support@hyvefreelance.com</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Office</h3>
              <p className="text-gray-600">Bangalore, India</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Social</h3>
              <p className="text-gray-600">Follow us on LinkedIn</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
