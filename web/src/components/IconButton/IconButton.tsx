import classes from './IconButton.module.css';
import { ReactElement } from 'react';

type Props = {
  icon: ReactElement;
  onClick?: () => void;
};

export function IconButton({ icon, onClick }: Props) {
  return (
    <button className={classes.button} onClick={onClick}>
      {icon}
    </button>
  );
}
