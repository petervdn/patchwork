import { TransputsItem } from './TransputsItem.tsx';
import { TransputType } from '../../types/Transput.ts';
import { useModuleTransputs } from '../../stores/patch/hooks/useModuleTransputs.ts';

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
    <>
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
    </>
  );
}
