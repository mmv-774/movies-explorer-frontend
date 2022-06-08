import React from 'react';

const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

function useCurrentWidth() {
  let [width, setWidth] = React.useState(getWidth());

  React.useEffect(() => {
    //debounce on
    // let timeoutId = null;
    // const resizeListener = () => {
    //   clearTimeout(timeoutId);
    //   timeoutId = setTimeout(() => setWidth(getWidth()), 100);
    // };

    //debounce off
    const resizeListener = () => {
      setWidth(getWidth());
    };
    
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return width;
}

export default useCurrentWidth;
