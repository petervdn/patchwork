import './App.css';
import { PatchViewport } from './components/PatchViewport/PatchViewport.tsx';
import { AddModule } from './components/AddModule/AddModule.tsx';
import { useUiStore } from './utils/uiStore.ts';
import { useConnections } from './stores/patch/hooks/useConnections.ts';

function App() {
  const connectionDragStart = useUiStore((state) => state.connectionDragStart);
  const connections = useConnections();

  return (
    <div style={{ margin: 20 }}>
      <h1>Patchwork</h1>
      <PatchViewport />
      <AddModule />
      {connectionDragStart && (
        <>
          <h3>module: {connectionDragStart.moduleId}</h3>
          <h3>transput: {connectionDragStart.transputType}</h3>
          <h3>transput: {connectionDragStart.transputId}</h3>
        </>
      )}
      <div>
        {connections.map((connection, index) => (
          // todo create unique ids for connections
          <div key={index}>
            Connection from {connection.from.moduleId} to {connection.to.moduleId}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
