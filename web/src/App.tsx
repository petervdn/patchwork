import './App.css';
import { PatchCanvas } from './components/PatchCanvas/PatchCanvas.tsx';
import { AddModule } from './components/AddModule/AddModule.tsx';

function App() {
  return (
    <div style={{ margin: 20 }}>
      <h1>Patchwork</h1>
      <PatchCanvas />
      <AddModule />
      {/*<div>*/}
      {/*  {connections?.map((connection) => (*/}
      {/*    <>*/}
      {/*      Connection from {connection.from.id} to {connection.to.id}*/}
      {/*    </>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  );
}

export default App;
