export type Theme = 'light' | 'dark' | 'neutral';

export interface MermaidEditorConfig {
  container: HTMLElement;
  initialCode?: string;
  theme?: Theme;
  autoRender?: boolean;
  editable?: boolean;
}
