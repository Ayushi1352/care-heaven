// Fills "{n}"-style slots of a label from templates.json (each section keeps its own labels).
export const fill = (template: string | undefined, values: Record<string, string | number>) =>
  template?.replace(/\{(\w+)\}/g, (slot, name: string) => (name in values ? String(values[name]) : slot));

// The lines of a templates.json text; "\n" in the text starts a new line.
export const lines = (text: string) => text.split('\n');

// Accent colour of a card in a list: orange, green, orange, green ... (the design alternates them).
export const accentAt = (index: number) => (index % 2 === 0 ? 'orange' : 'green');
