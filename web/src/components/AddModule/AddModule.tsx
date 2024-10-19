import classes from './AddModule.module.css';
import { useRef } from 'react';
import { ModuleType, moduleTypes } from '../../types/Module.ts';
import { downloadAsJson } from '../../utils/downloadAsJson.ts';
import { patchToJson } from '../../stores/patch/utils/patchToJson.ts';
import { addModule } from '../../stores/patch/utils/addModule.ts';

export function AddModule() {
  const selectRef = useRef<HTMLSelectElement>(null);

  const onAddModuleClick = () => {
    addModule({
      type: selectRef.current?.value as ModuleType,
      position: { x: 500 * Math.random(), y: 500 * Math.random() },
    });
  };

  const onToJsonClick = () => {
    downloadAsJson(patchToJson());
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
    </div>
  );
}
