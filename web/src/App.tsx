import './App.css';
import { PatchViewport } from './components/PatchViewport/PatchViewport.tsx';
import { Controls } from './components/Controls/Controls.tsx';

/*
todo:
- linting for css
- pre commit hook
- dragging a module should bring it to the front
- allow dragging of viewport
- allow zooming of viewport?
- change connection line algorithm
- draw grid in background
- don't allow dragging module outside viewport
- connections should update on drag
- refactor current drag approach with own approach (+update module every drag)
- remove styled components (dial)
- rewrite dial to use svg?
- fix sizing of dial
- design transputs
- use transput labels
- have a versioned module definitions?
- sub patch module
- allow flipping transputs horizontally?
- connection as arrow?
- snap dragging line when hovering over valid input
 */

function App() {
  return (
    <div style={{ margin: 20 }}>
      <h1>Patchwork</h1>
      <PatchViewport />
      <Controls />
    </div>
  );
}

export default App;
