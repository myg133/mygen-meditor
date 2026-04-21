<script lang="ts">
  import type { Theme } from './types';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let theme: Theme;
  export let onExportPNG: () => void;
  export let onExportSVG: () => void;

  function handleThemeChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    dispatch('themeChange', select.value as Theme);
  }
</script>

<div class="toolbar">
  <select value={theme} on:change={handleThemeChange}>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
    <option value="neutral">Neutral</option>
  </select>

  <div class="export-group">
    <button on:click={onExportPNG}>Export PNG</button>
    <button on:click={onExportSVG}>Export SVG</button>
  </div>
</div>

<style>
  .toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    background: #f5f5f5;
    border-bottom: 1px solid #ddd;
  }

  .export-group {
    display: flex;
    gap: 8px;
  }

  button, select {
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: white;
    cursor: pointer;
    font-size: 14px;
  }

  button:hover {
    background: #e9e9e9;
  }

  /* 深色主题样式 */
  :global(.theme-dark) .toolbar {
    background: #2d2d2d;
    border-bottom-color: #444;
  }

  :global(.theme-dark) button, 
  :global(.theme-dark) select {
    background: #3d3d3d;
    border-color: #555;
    color: #eee;
  }

  :global(.theme-dark) button:hover {
    background: #4d4d4d;
  }

  /* 中性主题样式 */
  :global(.theme-neutral) .toolbar {
    background: #e5e5e5;
  }
</style>
