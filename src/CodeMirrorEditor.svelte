<script lang="ts">
  import { onMount } from 'svelte';
  import { EditorView, basicSetup } from 'codemirror';
  import { EditorState } from '@codemirror/state';
  import { materialDark } from '@fsegurai/codemirror-theme-material-dark';
  import { mermaid } from 'codemirror-lang-mermaid';

  export let code: string;
  export let editable: boolean = true;
  export let theme: 'light' | 'dark' = 'light';

  let editorEl: HTMLDivElement;
  let view: EditorView;

  // 监听外部 code 变化，更新编辑器内容
  $: if (view && view.state.doc.toString() !== code) {
    view.dispatch({
      changes: {
        from: 0,
        to: view.state.doc.length,
        insert: code,
      },
    });
  }

  onMount(() => {
    view = new EditorView({
      state: EditorState.create({
        doc: code,
        extensions: [
          basicSetup,
          mermaid(),
          EditorView.editable.of(editable),
          EditorView.theme({
            '&': {
              fontSize: '14px',
              fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
              height: '100%',
            },
            '.cm-scroller': {
              fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
            },
          }),
          materialDark,
          EditorView.updateListener.of((update) => {
            if (update.docChanged) {
              code = update.state.doc.toString();
            }
          }),
        ],
      }),
      parent: editorEl,
    });

    return () => {
      view.destroy();
    };
  });
</script>

<div bind:this={editorEl} class="cm-editor-container" />

<style>
  .cm-editor-container {
    height: 100%;
    width: 100%;
  }

  .cm-editor-container :global(.cm-editor) {
    height: 100%;
  }
</style>
