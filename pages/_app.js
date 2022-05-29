import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <img
        src='https://cdn-s-www.lalsace.fr/images/C98BBB76-0187-4F9E-83D2-137B06E4CB02/NW_detail_M/title-1576680650.jpg'
        alt='troll'
        width='400'
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
