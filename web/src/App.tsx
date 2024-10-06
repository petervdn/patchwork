import './App.css';
import { PatchCanvas } from './components/PatchCanvas.tsx';
import { Patch } from './utils/types.ts';

function getRandomPosition() {
  return {
    x: Math.random() * 800,
    y: Math.random() * 800,
  };
}

const patch: Patch = {
  modules: [
    { id: '1', type: 'lfo', position: getRandomPosition() },
    { id: '2', type: 'lfo', position: getRandomPosition() },
    { id: '3', type: 'lfo', position: getRandomPosition() },
    { id: '4', type: 'lfo', position: getRandomPosition() },
  ],
  connections: [],
};

function App() {
  return (
    <>
      <h1>Patchwork</h1>
      <PatchCanvas patch={patch} />
    </>
  );
}

export default App;
