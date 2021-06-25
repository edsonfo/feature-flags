import './App.css';
import FlagsProvider from './FlagsProvider';
import Demo from './Demo'

const App = () => {
  return (
    <FlagsProvider
      defaults={{
        someAwesomeFeatureEnabled: false,
        test1: false,
      }}
    >
      <Demo/>
    </FlagsProvider>
  );
}

export default App;
