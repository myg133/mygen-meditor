<script lang="ts">
  import CodeMirrorEditor from './CodeMirrorEditor.svelte';
  import Preview from './Preview.svelte';
  import Toolbar from './Toolbar.svelte';
  import type { Theme } from './types';
  import { exportPNG, exportSVG as exportSVGUtil } from './lib/export';

  export let initialCode: string = '';
  export let theme: Theme = 'light';
  export let autoRender: boolean = true;
  export let editable: boolean = true;

  let code: string = initialCode;
  let svg: string = '';
  let isResizing = false;
  let editorPaneWidth = 50; // 百分比

  export { code, svg };

  // 暴露方法供外部调用
  export function getCode() {
    return code;
  }

  export function setCode(newCode: string) {
    code = newCode;
  }

  function handleThemeChange(newTheme: Theme) {
    theme = newTheme;
  }

  function handleSvgChange(newSvg: string) {
    svg = newSvg;
  }

  function handleMouseDown(e: MouseEvent) {
    isResizing = true;
    e.preventDefault();
  }

  function handleMouseMove(e: MouseEvent) {
    if (isResizing) {
      const container = document.querySelector('.editor-main') as HTMLElement;
      if (container) {
        const rect = container.getBoundingClientRect();
        const newWidth = ((e.clientX - rect.left) / rect.width) * 100;
        editorPaneWidth = Math.max(20, Math.min(80, newWidth));
      }
    }
  }

  function handleMouseUp() {
    isResizing = false;
  }

  async function handleExportPNG() {
    console.log('handleExportPNG 被调用');
    console.log('svg 是否存在:', !!svg);
    if (svg) {
      console.log('svg 长度:', svg.length);
      try {
        console.log('开始调用 exportPNG...');
        const blob = await exportPNG(svg);
        console.log('得到 blob:', blob);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'diagram.png';
        a.click();
        URL.revokeObjectURL(url);
      } catch (e) {
        console.error('导出 PNG 失败:', e);
      }
    }
  }

  function handleExportSVG() {
    if (svg) {
      try {
        const svgContent = exportSVGUtil(svg);
        const blob = new Blob([svgContent], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'diagram.svg';
        a.click();
        URL.revokeObjectURL(url);
      } catch (e) {
        console.error('导出 SVG 失败:', e);
      }
    }
  }
</script>

<svelte:window on:mousemove={handleMouseMove} on:mouseup={handleMouseUp} />

<div class="editor-root" class:theme-dark={theme === 'dark'} class:theme-neutral={theme === 'neutral'}>
  <Toolbar
    {theme}
    on:themeChange={(e) => handleThemeChange(e.detail)}
    onExportPNG={handleExportPNG}
    onExportSVG={handleExportSVG}
  />

  <div class="editor-main">
    <div class="editor-pane" style="width: {editorPaneWidth}%;">
      <CodeMirrorEditor 
        bind:code={code}
        {editable}
        theme={theme === 'dark' ? 'dark' : 'light'}
      />
    </div>
    <div 
      class="resizer"
      on:mousedown={handleMouseDown}
      class:resizing={isResizing}
    />
    <div class="preview-pane" style="width: {100 - editorPaneWidth}%;">
      <Preview 
        {code}
        {theme}
        on:svgChange={(e) => handleSvgChange(e.detail)}
      />
    </div>
  </div>
</div>

<style>
  .editor-root {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 0;
    overflow: hidden;
  }

  .editor-main {
    display: flex;
    flex: 1;
    overflow: hidden;
  }

  .editor-pane, .preview-pane {
    overflow: hidden;
  }

  .resizer {
    width: 6px;
    background: #ddd;
    cursor: col-resize;
    flex-shrink: 0;
    transition: background 0.2s;
  }

  .resizer:hover,
  .resizer.resizing {
    background: #888;
  }

  /* 简单的主题样式 */
  .theme-dark {
    background: #1e1e1e;
    border-color: #333;
  }

  .theme-dark .resizer {
    background: #444;
  }

  .theme-dark .resizer:hover,
  .theme-dark .resizer.resizing {
    background: #666;
  }

  .theme-neutral {
    background: #f5f5f5;
  }

  @media (max-width: 768px) {
    .editor-main {
      flex-direction: column;
    }

    .editor-pane, .preview-pane {
      width: 100% !important;
    }

    .resizer {
      height: 6px;
      width: 100%;
      cursor: row-resize;
    }
  }
</style>
