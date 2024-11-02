import classes from './Controls.module.css';
import { useRef } from 'react';
import { ModuleType, moduleTypes } from '../../types/Module.ts';
import { downloadAsJson } from '../../utils/downloadAsJson.ts';
import { patchToJson } from '../../stores/patch/utils/patchToJson.ts';
import { addModule } from '../../stores/patch/utils/addModule.ts';
import { LoadPatch } from './LoadPatch.tsx';
import { useModules } from '../../stores/patch/hooks/useModules.ts';

export function Controls() {
  const selectRef = useRef<HTMLSelectElement>(null);
  const modules = useModules();

  const onAddModuleClick = () => {
    addModule({
      type: selectRef.current?.value as ModuleType,
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
      <button onClick={onAddModuleClick}>Add module</button>
      <select ref={selectRef}>
        {moduleTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <button onClick={onToJsonClick}>to JSON</button>
      <button onClick={onToFileClick}>to file</button>

      <LoadPatch />
    </div>
  );
}
