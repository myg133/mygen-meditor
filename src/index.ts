import Editor from './Editor.svelte';
import { exportPNG, exportSVG as exportSVGUtil } from './lib/export';
import type { MermaidEditorConfig, Theme } from './types';

export class MermaidEditor {
  private config: MermaidEditorConfig;
  private component?: any;

  constructor(config: MermaidEditorConfig) {
    this.config = {
      initialCode: '',
      theme: 'light',
      autoRender: true,
      editable: true,
      ...config,
    };
  }

  init() {
    this.component = new Editor({
      target: this.config.container,
      props: {
        initialCode: this.config.initialCode,
        theme: this.config.theme,
        autoRender: this.config.autoRender,
        editable: this.config.editable,
      },
    });
  }

  getCode(): string {
    return this.component?.getCode() || '';
  }

  setCode(code: string) {
    if (this.component) {
      this.component.setCode(code);
    }
  }

  setTheme(theme: Theme) {
    if (this.component) {
      this.component.$set({ theme });
    }
  }

  async exportPNG(): Promise<Blob> {
    if (!this.component) {
      throw new Error('Editor not initialized');
    }
    const svg = this.component.svg;
    if (!svg) {
      throw new Error('No SVG content');
    }
    return exportPNG(svg);
  }

  async exportSVG(): Promise<string> {
    if (!this.component) {
      throw new Error('Editor not initialized');
    }
    const svg = this.component.svg;
    if (!svg) {
      throw new Error('No SVG content');
    }
    return exportSVGUtil(svg);
  }

  destroy() {
    this.component?.$destroy();
  }
}

export { Editor };
export type { MermaidEditorConfig, Theme };
