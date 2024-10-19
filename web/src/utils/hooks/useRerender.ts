import { useCallback, useState } from 'react';

export function useRerender() {
  const [rerenderFlag, setRerenderFlag] = useState(false);

  const rerender = useCallback(() => setRerenderFlag((state) => !state), []);

  return { rerender, rerenderFlag };
}
