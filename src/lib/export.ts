export async function exportPNG(svg: string): Promise<Blob> {
  return new Promise((resolve, reject) => {
    try {
      // 1. 确保 SVG 有 xmlns 命名空间
      let processedSvg = svg;
      if (!processedSvg.includes('xmlns="http://www.w3.org/2000/svg"')) {
        processedSvg = processedSvg.replace(
          '<svg',
          '<svg xmlns="http://www.w3.org/2000/svg"'
        );
      }

      // 最小化清理，只移除 @font-face
      processedSvg = processedSvg
        .replace(/@font-face\s*\{[^}]*\}/g, '');

      // 3. 提取 SVG 的尺寸信息
      const widthMatch = processedSvg.match(/width="([^"]+)"/);
      const heightMatch = processedSvg.match(/height="([^"]+)"/);
      const viewBoxMatch = processedSvg.match(/viewBox="([^"]+)"/);
      
      let width = 800;
      let height = 600;
      
      if (widthMatch && heightMatch) {
        width = parseFloat(widthMatch[1]);
        height = parseFloat(heightMatch[1]);
      } else if (viewBoxMatch) {
        const parts = viewBoxMatch[1].split(/\s+/).map(Number);
        if (parts.length === 4) {
          width = parts[2];
          height = parts[3];
        }
      }

      console.log('SVG 尺寸:', { width, height });

      // 动态计算缩放因子，确保 canvas 不超过浏览器限制（通常 4096x4096 是安全值）
      const maxCanvasSize = 4096;
      let scale = 2;
      let canvasWidth = width * scale;
      let canvasHeight = height * scale;
      
      if (canvasWidth > maxCanvasSize || canvasHeight > maxCanvasSize) {
        const widthScale = maxCanvasSize / width;
        const heightScale = maxCanvasSize / height;
        scale = Math.min(widthScale, heightScale, 2);
        canvasWidth = Math.floor(width * scale);
        canvasHeight = Math.floor(height * scale);
        console.log('调整缩放因子以适应 canvas 限制:', { scale, canvasWidth, canvasHeight });
      }

      // 4. 使用 data URL（不污染画布）
      const svgDataUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(processedSvg);

      const img = new Image();

      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = canvasWidth;
          canvas.height = canvasHeight;
          const ctx = canvas.getContext('2d');
          
          if (ctx) {
            // 先填充白色背景
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            
            ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
            
            canvas.toBlob((blob) => {
              if (blob) {
                console.log('PNG 导出成功，大小:', blob.size);
                resolve(blob);
              } else {
                reject(new Error('Failed to create PNG blob'));
              }
            }, 'image/png', 1.0);
          } else {
            reject(new Error('Failed to get canvas context'));
          }
        } catch (e) {
          console.error('Canvas 处理失败:', e);
          reject(e);
        }
      };

      img.onerror = (error) => {
        console.error('SVG 加载失败:', error);
        reject(new Error('Failed to load SVG'));
      };

      img.src = svgDataUrl;
    } catch (e) {
      console.error('导出 PNG 异常:', e);
      reject(e);
    }
  });
}

export function exportSVG(svg: string): string {
  // 确保 SVG 有 xmlns 命名空间
  if (!svg.includes('xmlns="http://www.w3.org/2000/svg"')) {
    return svg.replace(
      '<svg',
      '<svg xmlns="http://www.w3.org/2000/svg"'
    );
  }
  return svg;
}
