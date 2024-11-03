import classes from './Controls.module.css';
import { ModuleType, moduleTypes } from '../../types/Module.ts';
import { downloadAsJson } from '../../utils/downloadAsJson.ts';
import { patchToJson } from '../../stores/patch/utils/patchToJson.ts';
import { addModule } from '../../stores/patch/utils/addModule.ts';
import { LoadPatch } from './LoadPatch.tsx';
import { useModules } from '../../stores/patch/hooks/useModules.ts';

export function Controls() {
  const modules = useModules();

  const onAddModuleClick = (type: ModuleType) => {
    addModule({
      type,
      position: { x: 100 + modules.length * 300, y: 200 },
    });
  };

  const onToJsonClick = () => {
    console.log(patchToJson());
  };
  const onToFileClick = () => {
    downloadAsJson('patch.pw', patchToJson());
  };

  return (
    <div className={classes.wrapper}>
      <div>
        <h3>Add module</h3>
        {moduleTypes.map((type) => (
          <button onClick={() => onAddModuleClick(type)} key={type}>
            {type}
          </button>
        ))}
      </div>
      <div>
        <h3>Load/save</h3>
        <button onClick={onToJsonClick}>to JSON</button>
        <button onClick={onToFileClick}>to file</button>
      </div>

      <LoadPatch />
    </div>
  );
}
