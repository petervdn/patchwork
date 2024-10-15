import classes from './TransputRow.module.css';
import { TransputRowItem } from './TransputRowItem.tsx';
import { Transput } from '../../types/Transput.ts';

type Props = {
  transputs: Array<Transput>;
};

export function TransputRow({ transputs }: Props) {
  return (
    <div className={classes.wrapper}>
      {transputs.map((transput) => {
        return <TransputRowItem transput={transput} key={transput.id} />;
      })}
    </div>
  );
}
