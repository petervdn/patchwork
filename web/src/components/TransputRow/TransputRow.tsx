import classes from './TransputRow.module.css';
import { TransputRowItem } from './TransputRowItem.tsx';
import { TransputType } from '../../types/Transput.ts';
import { usePatchModuleTransputs } from '../../data/patchStore.ts';

type Props = {
  moduleId: string;
  transputType: TransputType;
};

export function TransputRow({ transputType, moduleId }: Props) {
  const transputs = usePatchModuleTransputs({ moduleId, transputType });

  if (!transputs) {
    return null;
  }

  return (
    <div className={classes.wrapper}>
      {transputs.map((transput) => {
        return (
          <TransputRowItem
            key={transput.id}
            transputId={transput.id}
            moduleId={moduleId}
            transputType={transputType}
          />
        );
      })}
    </div>
  );
}
