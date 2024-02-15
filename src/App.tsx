import AudioList from "./components/AudioList";
import AudioPlayerProvider from "./providers/AudioPlayerProvider";

function App() {
  return (
    <AudioPlayerProvider>
      <div className="app">
        <h1>Audio Players</h1>
        <AudioList />
      </div>
    </AudioPlayerProvider>
  );
}

export default App;