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
- draw line while dragging connection
- change connection line algorithm
- draw grid in background
- add knobs from trigger riot
- don't allow dragging module outside viewport
- connections should update on drag
- refactor current drag approach with own approach (+update module every drag)
- remove styled components
- rewrite dial to use canvas
- fix sizing of dial
- design transputs
- use transput labels
- delete a module
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
