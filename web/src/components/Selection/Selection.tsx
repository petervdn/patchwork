import { useSelectionStore } from '../../stores/selection/selectionStore.ts';
import { usePatch } from '../../stores/patch/hooks/usePatch.ts';
import { TransputType } from '../../types/Transput.ts';
import { getConnectedModulesToModule } from '../../utils/getConnectedModulesToModule.ts';

export function Selection() {
  const { selection } = useSelectionStore();
  const patch = usePatch();

  const onShowConnectedClick = (connectedTo: TransputType) => {
    if (selection && selection.type === 'module') {
      const results = getConnectedModulesToModule({
        connectedTo,
        patch,
        moduleId: selection.id,
      });
      console.log(results);
    }
  };

  return (
    <div>
      <h2>Selection</h2>
      {selection && (
        <>
          <p>
            {selection.type} {selection.id}
          </p>
          {selection.type === 'module' && (
            <>
              <button onClick={() => onShowConnectedClick('input')}>
                show connected to inputs
              </button>
              <button onClick={() => onShowConnectedClick('output')}>
                show connected to outputs
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}
