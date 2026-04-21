# mygen-meditor

> Mermaid Live Editor — 基于 Svelte + CodeMirror 的可嵌入编辑器

## 1. Concept & Vision

一个轻量、零依赖运行时、即嵌即用的 Mermaid 编辑器 npm 包。目标是让任何网页只要一行代码就能拥有专业的 Mermaid 图表编辑体验。

**data URL 入口**（概念验证 / 极简演示）：
```
data:text/html,
<script type="module">
  import { MermaidEditor } from 'https://esm.sh/mygen-meditor';
  new MermaidEditor({ container: document.body }).init();
</script>
```

---

## 2. Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| UI Framework | **Svelte** | 轻量、编译时优化、产物小 |
| Editor | **CodeMirror 6** | 现代、模块化、支持语法高亮 |
| Mermaid | **Mermaid 11** | 官方最新版，支持所有 diagram 类型 |
| Build | **Vite** | 快速构建 ESM 模块 |
| CDN | **esm.sh** | 稳定的 ESM CDN，支持版本锁定 |

---

## 3. Project Structure

```
mygen-meditor/
├── src/
│   ├── index.ts              # 入口，导出 MermaidEditor 类
│   ├── Editor.svelte         # 根组件
│   ├── CodeMirrorEditor.svelte # CodeMirror 集成
│   ├── Preview.svelte         # Mermaid 渲染预览区
│   ├── Toolbar.svelte         # 工具栏（主题/导出/全屏等）
│   ├── lib/
│   │   ├── mermaid.ts         # Mermaid 初始化与渲染
│   │   ├── themes.ts          # 主题配置
│   │   └── export.ts          # 导出 PNG/SVG 逻辑
│   └── types.ts               # TS 类型定义
├── dist/                      # 构建产物（ESM）
├── package.json
├── vite.config.ts
├── tsconfig.json
└── SPEC.md                    # 本文件
```

---

## 4. Features

### 4.1 核心功能（先做）

| Feature | Description |
|---------|-------------|
| 代码编辑 | CodeMirror 6，Mermaid 语法高亮，行号 |
| 实时预览 | 文档变化时自动重新渲染 Mermaid |
| 错误展示 | 渲染失败时显示友好错误信息 |
| 主题切换 | light / dark / neutral 三种内置主题 |
| 容器挂载 | `container` 参数指定挂载点 |

### 4.2 扩展功能（后做）

| Feature | Description |
|---------|-------------|
| 导出 PNG | 将渲染结果导出为 PNG 图片 |
| 导出 SVG | 导出 SVG 矢量图 |
| 全屏模式 | 编辑器和预览全屏展示 |
| 自动保存 | localStorage 记忆上次编辑内容 |
| 快捷键支持 | Ctrl+S 手动保存、Ctrl+E 切换预览 |

---

## 5. API Design

```typescript
import { MermaidEditor } from 'mygen-meditor';

// 初始化
const editor = new MermaidEditor({
  container: document.getElementById('app'),  // 必填，HTMLElement
  initialCode: 'graph TD\n  A --> B',         // 可选，默认空图
  theme: 'light',                             // 可选：'light' | 'dark' | 'neutral'
  autoRender: true,                           // 可选，默认 true
  editable: true,                             // 可选，默认 true
});

// 初始化（挂载到 DOM 后调用）
editor.init();

// 获取当前代码
editor.getCode(): string;

// 设置代码
editor.setCode(code: string): void;

// 切换主题
editor.setTheme(theme: 'light' | 'dark' | 'neutral'): void;

// 导出
editor.exportPNG(): Promise<Blob>;
editor.exportSVG(): Promise<string>;

// 销毁实例
editor.destroy(): void;
```

---

## 6. Component Architecture

```
┌─────────────────────────────────────┐
│           MermaidEditor             │
│  ┌───────────────────────────────┐  │
│  │          Toolbar              │  │
│  │  [Theme] [Export▾] [Fullscreen]│  │
│  └───────────────────────────────┘  │
│  ┌─────────────┬─────────────────┐  │
│  │             │                 │  │
│  │  CodeMirror │    Preview      │  │
│  │   Editor    │   (Mermaid)     │  │
│  │             │                 │  │
│  │             │                 │  │
│  └─────────────┴─────────────────┘  │
└─────────────────────────────────────┘
```

- **Editor** 和 **Preview** 默认左右分栏，可通过 CSS 调整布局
- 响应式：小屏幕下自动切换为上下布局

---

## 7. Data Flow

```
User Input → CodeMirror → (debounce 300ms) → Mermaid.parse → render SVG/PNG
                                      ↓
                               parse error → show error message
```

- 渲染使用 `mermaid.render()` API
- 错误捕获后展示友好信息，不打断编辑

---

## 8. Build & Publish

### 8.1 构建配置

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['mermaid'],  // 运行时从 esm.sh 加载
    },
  },
});
```

### 8.2 发布流程

1. `npm publish` → 发布到 npm（包名 `mygen-meditor`）
2. 版本锁定 → esm.sh 使用 `@version` 语义
3. data URL 入口随时可复制使用

---

## 9. CDN Entry Points

| Environment | Import URL |
|-------------|------------|
| 生产 | `https://esm.sh/mygen-meditor` |
| 指定版本 | `https://esm.sh/mygen-meditor@1.0.0` |
| 开发调试 | `https://esm.sh/mygen-meditor@latest` |

---

## 10. Constraints & Non-Goals

### Constraints
- 产物需 < 50KB（gzipped，不含 mermaid 本身）
- 无运行时依赖（mermaid 从 CDN 按需加载）
- 兼容现代浏览器（Chrome/Firefox/Safari/Edge 最新两个版本）

### Non-Goals
- 不做用户认证/云存储
- 不做多人协作
- 不做完整 Mermaid 语法校验（由 mermaid 库处理）

---

## 11. Out-of-Scope（暂不做）

- 独立页面部署（仅做 npm 包 + CDN 入口）
- 移动端优化（优先桌面体验）
- 自定义 Mermaid 主题配置
- LLM 辅助编辑

---

## 12. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-04-21 | assistant-feishu | Initial spec |
