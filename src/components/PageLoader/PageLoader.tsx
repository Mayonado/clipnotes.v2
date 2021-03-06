import React from "react";
import NProgress from "nprogress";
import Router from "next/router";
// import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
const PageLoader = (props: any) => {
  const { color, height, options } = props;
  //   let timer = null;

  const routeChangeStart = () => {
    NProgress.set(props.startPosition);
    NProgress.start();
  };

  const routeChangeEnd = () => {
    // clearTimeout(timer);
    setTimeout(() => {
      NProgress.done(true);
    }, 0);
  };

  React.useEffect(() => {
    if (options) {
      NProgress.configure(options);
    }

    Router.events.on("routeChangeStart", routeChangeStart);
    Router.events.on("routeChangeComplete", routeChangeEnd);
    Router.events.on("routeChangeError", routeChangeEnd);
  }, []);

  return (
    <style jsx global>{`
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: ${color};
        position: fixed;
        z-index: 1331 !important;
        top: 0;
        left: 0;
        width: 100%;
        height: ${height}px;
      }
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
        opacity: 1;
        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
      }
      .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
      }
      .nprogress-custom-parent #nprogress .spinner,
      .nprogress-custom-parent #nprogress .bar {
        position: absolute;
      }
      @-webkit-keyframes nprogress-spinner {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      @keyframes nprogress-spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  );
};

// PageLoaders.propTypes = {
//   color: PropTypes.string,
//   startPosition: PropTypes.number,
//   stopDelayMs: PropTypes.number,
//   options: PropTypes.object,
// };

PageLoader.defaultProps = {
  color: "#80cbc4",
  startPosition: 0.3,
  stopDelayMs: 200,
  height: 3,
};

export default PageLoader;
