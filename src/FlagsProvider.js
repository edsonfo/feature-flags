import React from 'react';
import firebase from './firebase';
import FlagsContext from './FlagsContext';

const remoteConfig = firebase.remoteConfig();

// For development only
remoteConfig.settings = {
  minimumFetchIntervalMillis: 60,
};

const FlagsProvider = ({ defaults, children }) => {
  const [flags, setFlags] = React.useState(defaults);

  React.useEffect(() => {
    remoteConfig.defaultConfig = defaults;

    remoteConfig
      .fetchAndActivate()
      .then(activated => {
        if (!activated) //  console.log('not activated');
        return remoteConfig.getAll();
      })
      .then(remoteFlags => {
        const newFlags = {
          ...flags,
        };

        for (const [key] of Object.entries(remoteFlags)) {
          newFlags[key] = remoteFlags[key]._value
          // console.log('AAA',remoteFlags[key]._value,c,key)
        }
        // console.log(newFlags)

        setFlags(newFlags);
      })
      .catch(error => console.error(error));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FlagsContext.Provider value={flags}>{children}</FlagsContext.Provider>
  );
};
export default FlagsProvider;
