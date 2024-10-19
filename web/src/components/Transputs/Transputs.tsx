import classes from './Transputs.module.css';
import { TransputsItem } from './TransputsItem.tsx';
import { TransputType } from '../../types/Transput.ts';
import { useModuleTransputs } from '../../stores/patch/hooks/useModuleTransputs.ts';
import classNames from 'classnames';

type Props = {
  moduleId: string;
  transputType: TransputType;
};

export function Transputs({ transputType, moduleId }: Props) {
  const transputs = useModuleTransputs({ moduleId, transputType });

  if (!transputs) {
    return null;
  }

  return (
    <div
      className={classNames(
        classes.wrapper,
        transputType === 'input' ? classes.top : classes.bottom,
      )}
    >
      {transputs.map((transput) => {
        return (
          <TransputsItem
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
