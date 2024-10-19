import { ChangeEvent, useState } from 'react';
import { patchFromJson } from '../../stores/patch/utils/patchFromJson.ts';

export function LoadPatch() {
  const [file, setFile] = useState<File | null>(null);

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0] ?? null);
  };

  const onLoadClick = () => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (onLoadEvent) => {
      const contents = onLoadEvent.target?.result;
      if (typeof contents !== 'string') {
        throw new Error('Invalid file');
      }
      patchFromJson(contents);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <input type={'file'} onChange={onFileChange} />
      <button disabled={!file} onClick={onLoadClick}>
        load patch
      </button>
    </div>
  );
}
