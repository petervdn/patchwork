import { Module } from '../../types/Module.ts';
import classes from './PatchModuleHeader.module.css';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { IconButton } from '../IconButton/IconButton.tsx';
import { removeModule } from '../../stores/patch/utils/removeModule.ts';
import { useModuleOrder } from '../../utils/hooks/useModuleOrder.ts';

type Props = {
  module: Module;
};

export function PatchModuleHeader({ module }: Props) {
  const onCloseClick = () => {
    removeModule(module.id);
  };

  const moduleOrder = useModuleOrder();
  const order = moduleOrder[module.id] !== undefined ? `#${moduleOrder[module.id]}` : undefined;

  return (
    <div className={classes.header}>
      <h2>
        {module.type}{' '}
        <small>
          ({module.id}) {order}
        </small>
      </h2>
      <IconButton
        onClick={onCloseClick}
        icon={<IoIosCloseCircleOutline size={20} style={{ strokeWidth: 20 }} />}
      ></IconButton>
    </div>
  );
}
