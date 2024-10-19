import { Module } from '../../types/Module.ts';
import classes from './PatchModuleHeader.module.css';

type Props = {
  module: Module;
};

export function PatchModuleHeader({ module }: Props) {
  return <h2 className={classes.header}>{module.type}</h2>;
}
