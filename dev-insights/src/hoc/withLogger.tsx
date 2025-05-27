import React, { useEffect } from 'react';

const withLogger = <P extends object>(Component: React.ComponentType<P>): React.FC<P> => {
  return (props: P) => {
    useEffect(() => {
      console.log(`${Component.name} mounted`);
      return () => console.log(`${Component.name} unmounted`);
    }, []);

    return <Component {...props} />;
  };
};

export default withLogger;


