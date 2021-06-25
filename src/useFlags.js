import React from 'react';
import FlagsContext from './FlagsContext';

const useFlags = () => {
    const context = React.useContext(FlagsContext);
    return context;
  }
export default useFlags