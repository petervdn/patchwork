import classes from './TransputRow.module.css';
import { ModuleType, TransputType } from '../../utils/types.ts';
import { getModuleDefinition } from '../../data/moduleDefinitions.ts';
import { useMemo } from 'react';

type Props = {
  transputType: TransputType;
  moduleType: ModuleType;
};

export function TransputRow({ transputType, moduleType }: Props) {
  const transputs = useMemo(() => {
    const moduleDefinition = getModuleDefinition(moduleType);
    return transputType === 'input' ? moduleDefinition.inputs : moduleDefinition.outputs;
  }, [moduleType, transputType]);

  return (
    <div className={classes.wrapper}>
      {transputs.map((transput) => {
        return <div key={transput.id} className={classes.transput} />;
      })}
    </div>
  );
}
