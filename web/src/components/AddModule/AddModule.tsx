import classes from './AddModule.module.css';
import { useRef } from 'react';
import { ModuleType, moduleTypes } from '../../types/Module.ts';
import { addModule, toJson } from '../../stores/patch/patchStore.ts';

export function AddModule() {
  const selectRef = useRef<HTMLSelectElement>(null);

  const onAddModuleClick = () => {
    addModule({
      type: selectRef.current?.value as ModuleType,
      position: { x: 500 * Math.random(), y: 500 * Math.random() },
    });
  };

  const onToJsonClick = () => {
    const json = toJson();
    console.log(json);
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
