import { usePatchStore } from '../../utils/patchStore.ts';

export function AddModule() {
  const addModule = usePatchStore((state) => state.addModule);

  const onAddModuleClick = () => {
    addModule('lfo');
  };

  return (
    <div>
      <button onClick={onAddModuleClick}>Add module</button>
    </div>
  );
}
