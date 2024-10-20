import { Dial } from './dial/Dial.tsx';
import { useState } from 'react';

export function PatchModuleContent() {
  const [value, setValue] = useState(50);

  return <Dial min={0} max={100} value={value} size={120} buttonSize={80} onChange={setValue} />;
}
