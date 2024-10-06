import './App.css';
import { PatchCanvas } from './components/PatchCanvas/PatchCanvas.tsx';
import { usePatchStore } from './utils/patchStore.ts';
import { Patch } from './utils/types.ts';
import { useEffect } from 'react';
import { AddModule } from './components/AddModule/AddModule.tsx';

function createPatch(): Patch {
  return {
    modules: [
      // { id: '1', type: 'lfo', position: { x: 200, y: 200 } },
      // { id: '2', type: 'lfo', position: { x: 600, y: 200 } },
      // { id: '3', type: 'lfo', position: { x: 200, y: 400 } },
      // { id: '4', type: 'lfo', position: { x: 600, y: 400 } },
    ],
    connections: [],
  };
}

function App() {
  const setPatch = usePatchStore((state) => state.setPatch);
  const modules = usePatchStore((state) => state.modules);

  useEffect(() => {
    setPatch(createPatch());
  }, [setPatch]);

  return (
    <>
      <h1>Patchwork</h1>
      <PatchCanvas modules={modules ?? []} />
      <AddModule />
    </>
  );
}

export default App;
