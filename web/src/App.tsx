import './App.css';
import { PatchViewport } from './components/PatchViewport/PatchViewport.tsx';
import { Controls } from './components/Controls/Controls.tsx';
import { useUiStore } from './utils/uiStore.ts';

/*
todo:
- linting for css
- pre commit hook
- dragging a module should bring it to the front
- allow dragging of viewport
- allow zooming of viewport?
- draw grid in background
- add knobs from trigger riot
- don't allow dragging module outside viewport
- use svg for connections
 */

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
