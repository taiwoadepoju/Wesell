// import 'tailwindcss/tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.min.css';
import '../styles/globals.css';
import PropTypes from 'prop-types';

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

App.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.shape({}),
    PropTypes.func,
  ]).isRequired,

  pageProps: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.node,
    PropTypes.shape({}),
  ]).isRequired,
};

export default App;
