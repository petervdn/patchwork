import classes from './TransputRow.module.css';
import { TransputRowItem } from './TransputRowItem.tsx';
import { TransputType } from '../../types/Transput.ts';
import { useModuleTransputs } from '../../stores/patch/hooks/useModuleTransputs.ts';

type Props = {
  moduleId: string;
  transputType: TransputType;
};

export function TransputRow({ transputType, moduleId }: Props) {
  const transputs = useModuleTransputs({ moduleId, transputType });

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
