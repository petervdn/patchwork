import { Module } from '../../types/Module.ts';
import classes from './PatchModuleHeader.module.css';

type Props = {
  module: Module;
};

export function PatchModuleHeader({ module }: Props) {
  return (
    <div className={classes.header}>
      <h2>
        {module.type} (id={module.id})
      </h2>
    </div>
  );
}
