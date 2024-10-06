import { usePatchStore } from '../../utils/patchStore.ts';
import { ModuleType, moduleTypes } from '../../utils/types.ts';
import classes from './AddModule.module.css';
import { useRef } from 'react';

export function AddModule() {
  const addModule = usePatchStore((state) => state.addModule);
  const selectRef = useRef<HTMLSelectElement>(null);

  const onAddModuleClick = () => {
    addModule(selectRef.current?.value as ModuleType);
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
    </div>
  );
}
