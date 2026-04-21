<script lang="ts">
  import { onMount } from 'svelte';
  import { initMermaid, renderMermaid } from './lib/mermaid';
  import type { Theme } from './types';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let code: string;
  export let theme: Theme = 'light';

  let svg: string = '';
  let error: string = '';
  let previewId: string;
  let scale: number = 1;
  let offsetX: number = 0;
  let offsetY: number = 0;
  let isDragging: boolean = false;
  let startX: number = 0;
  let startY: number = 0;

  onMount(() => {
    previewId = `mermaid-preview-${Math.random().toString(36).substr(2, 9)}`;
    initMermaid(theme);
    render();
  });

  // 监听 code 和 theme 变化，重新渲染
  $: {
    // 这些变量声明确保 Svelte 跟踪依赖变化
    code;
    theme;
    previewId;
    
    if (previewId) {
      initMermaid(theme);
      render();
      // 重置位置
      offsetX = 0;
      offsetY = 0;
    }
  }

  function zoomIn() {
    scale = Math.min(scale + 0.25, 3);
  }

  function zoomOut() {
    scale = Math.max(scale - 0.25, 0.25);
  }

  function resetZoom() {
    scale = 1;
    offsetX = 0;
    offsetY = 0;
  }

  function handleWheel(e: WheelEvent) {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    scale = Math.max(0.25, Math.min(3, scale + delta));
  }

  function handleMouseDown(e: MouseEvent) {
    isDragging = true;
    startX = e.clientX - offsetX;
    startY = e.clientY - offsetY;
  }

  function handleMouseMove(e: MouseEvent) {
    if (isDragging) {
      offsetX = e.clientX - startX;
      offsetY = e.clientY - startY;
    }
  }

  function handleMouseUp() {
    isDragging = false;
  }

  function handleMouseLeave() {
    isDragging = false;
  }

  async function render() {
    try {
      error = '';
      const diagramCode = code && code.trim() ? code : 'graph TD\n  A[Start] --> B[End]';
      // 每次渲染使用不同的 ID 避免缓存问题
      const renderId = `${previewId}-${Date.now()}`;
      svg = await renderMermaid(diagramCode, renderId);
      // 通知父组件 SVG 更新
      dispatch('svgChange', svg);
    } catch (err) {
      error = err instanceof Error ? err.message : 'Unknown error';
      console.error('Mermaid 渲染错误:', err);
    }
  }
</script>

<div class="preview-container">
  <div class="zoom-controls">
    <button on:click={zoomOut} title="缩小">−</button>
    <span class="scale-display">{Math.round(scale * 100)}%</span>
    <button on:click={resetZoom} title="还原">100%</button>
    <button on:click={zoomIn} title="放大">+</button>
  </div>
  
  {#if error}
    <div class="error">
      <strong>Error:</strong>
      <pre>{error}</pre>
    </div>
  {/if}
  <div 
    class="svg-wrapper"
    on:wheel={handleWheel}
    on:mousedown={handleMouseDown}
    on:mousemove={handleMouseMove}
    on:mouseup={handleMouseUp}
    on:mouseleave={handleMouseLeave}
    class:dragging={isDragging}
  >
    {#if svg}
      <div 
        class="svg-container" 
        style="transform: translate({offsetX}px, {offsetY}px) scale({scale});"
      >
        {@html svg}
      </div>
    {/if}
  </div>
</div>

<style>
  .preview-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .zoom-controls {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    flex-shrink: 0;
  }

  .zoom-controls button {
    padding: 4px 10px;
    font-size: 14px;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: white;
  }

  .zoom-controls button:hover {
    background: #f0f0f0;
  }

  .scale-display {
    font-size: 13px;
    color: #666;
    min-width: 45px;
    text-align: center;
  }

  .error {
    background: #fee;
    color: #c33;
    padding: 12px;
    border-radius: 4px;
    margin-bottom: 16px;
  }

  .error pre {
    margin: 8px 0 0;
    white-space: pre-wrap;
  }

  .svg-wrapper {
    flex: 1;
    overflow: hidden;
    position: relative;
  }

  .svg-wrapper.dragging {
    cursor: grabbing;
  }

  .svg-wrapper:not(.dragging) {
    cursor: grab;
  }

  .svg-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    height: fit-content;
    transform-origin: center center;
    user-select: none;
  }
</style>
