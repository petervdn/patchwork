import './App.css';
import { PatchViewport } from './components/PatchViewport/PatchViewport.tsx';
import { Controls } from './components/Controls/Controls.tsx';
import { useUiStore } from './utils/uiStore.ts';

function App() {
  const connectionDragStart = useUiStore((state) => state.connectionDragStart);

  return (
    <div style={{ margin: 20 }}>
      <h1>Patchwork</h1>
      <PatchViewport />
      <Controls />
      {connectionDragStart && (
        <>
          <h3>module: {connectionDragStart.moduleId}</h3>
          <h3>transput: {connectionDragStart.transputType}</h3>
          <h3>transput: {connectionDragStart.transputId}</h3>
        </>
      )}
    </div>
  );
}

export default App;
