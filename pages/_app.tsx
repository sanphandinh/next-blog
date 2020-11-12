import '../styles/index.css';
function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-64 py-8">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
