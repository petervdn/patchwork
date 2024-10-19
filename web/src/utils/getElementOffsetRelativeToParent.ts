export function getElementOffsetRelativeToParent(
  element: HTMLElement,
  levelsUp: number,
): { top: number; left: number } {
  let parent: HTMLElement | null = element;

  for (let i = 0; i < levelsUp; i++) {
    if (parent) {
      parent = parent.parentElement;
    } else {
      return { top: 0, left: 0 };
    }
  }

  if (parent) {
    const rect = element.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    return {
      top: rect.top - parentRect.top,
      left: rect.left - parentRect.left,
    };
  }

  return { top: 0, left: 0 };
}
