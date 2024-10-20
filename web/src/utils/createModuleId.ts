let idCounter = 0;

export function createModuleId(): string {
  return `module-${++idCounter}`;
}
