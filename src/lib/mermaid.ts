import mermaid from 'mermaid';
import type { Theme } from '../types';
import { themes } from './themes';

export function initMermaid(theme: Theme = 'light') {
  // 完全重置 mermaid 的状态
  (mermaid as any).globalReset?.();
  
  mermaid.initialize({
    startOnLoad: false,
    theme: themes[theme] as any,
    securityLevel: 'loose',
    flowchart: {
      useMaxWidth: false,
      htmlLabels: false, // 禁用 HTML 标签，防止外部依赖
    },
    sequence: {
      showSequenceNumbers: false,
    },
    gantt: {
      fontSize: 14,
    },
  });
}

export async function renderMermaid(code: string, id: string): Promise<string> {
  try {
    const { svg } = await mermaid.render(id, code);
    return svg; // 直接返回原始 SVG，不做过度清理
  } catch (error) {
    throw error;
  }
}
