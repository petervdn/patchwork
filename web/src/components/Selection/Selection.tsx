import { useSelectionStore } from '../../stores/selection/selectionStore.ts';
import { usePatch } from '../../stores/patch/hooks/usePatch.ts';
import { TransputType } from '../../types/Transput.ts';
import { getConnectedModulesToModule } from '../../utils/getConnectedModulesToModule.ts';
import { traverseAndCollectModules } from '../../utils/traverseAndCollectModules.ts';

export function Selection() {
  const { selection } = useSelectionStore();
  const patch = usePatch();

  const onShowConnectedClick = (connectedTo: TransputType) => {
    if (!selection || selection.type !== 'module') {
      return;
    }

    const results = getConnectedModulesToModule({
      connectedTo,
      patch,
      moduleId: selection.id,
    });
    console.log(results);
  };

  const onTraverseClick = (connectedTo: TransputType) => {
    if (!selection || selection.type !== 'module') {
      return;
    }

    const results = traverseAndCollectModules({
      patch,
      traverseType: connectedTo,
      startModuleId: selection.id,
    });

    console.log(results);
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
              <div>
                <button onClick={() => onShowConnectedClick('input')}>
                  show connected to inputs
                </button>
                <button onClick={() => onShowConnectedClick('output')}>
                  show connected to outputs
                </button>
              </div>
              <div>
                <button onClick={() => onTraverseClick('input')}>traverse inputs</button>
                <button onClick={() => onTraverseClick('output')}>traverse outputs</button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
