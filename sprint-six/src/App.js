import './App.css';
import FetchData from './components/API Call/FetchData';
import PostData from './components/API Call/PostData';
import UseCallBackHookOne from './components/useCallback/UseCallBackHookOne';

function App() {
  return (
    <div className="App">
      <PostData />
      <FetchData />
    </div>
  );
}

export default App;
