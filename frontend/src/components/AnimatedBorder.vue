<template>
  <div class="card animate" ref="cardRef">
    <div class="bg" ref="bgRef"></div>
    <canvas ref="canvasRef"></canvas>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted, onUnmounted, watch} from 'vue';

class Bull {
  private ctx: CanvasRenderingContext2D;
  private mw: number;
  private mh: number;
  private _x: number;
  private r: number;
  private _y: number;
  private direction: 'up' | 'down' | 'left' | 'right';
  private gradient: CanvasGradient;

  constructor(ctx: CanvasRenderingContext2D, r: number, x: number, y: number, mw: number, mh: number, direction: 'up' | 'down' | 'left' | 'right') {
    this.ctx = ctx;
    this._x = x;
    this._y = y;
    this.r = r;
    this.mw = mw;
    this.mh = mh;
    this.direction = direction;
    this.gradient = this.createGradient(ctx, x, y, mw, mh);
  }

  public draw(): void {
    switch (this.direction) {
      case 'up': this._y--; break;
      case 'down': this._y++; break;
      case 'left': this._x--; break;
      case 'right': this._x++; break;
    }

    if (this._x <= 0 || this._x >= this.mw || this._y < 0 || this._y >= this.mh) {
      this.changeDirection();
      this.gradient = this.createGradient(this.ctx, this._x, this._y, this.mw, this.mh);
    }

    this.ctx.fillStyle = this.gradient;
    this.ctx.beginPath();
    this.ctx.arc(this._x, this._y, this.r, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  private changeDirection(): void {
    switch (this.direction) {
      case 'up': this.direction = 'right'; this._y = 1; break;
      case 'down': this.direction = 'left'; this._y = this.mh - 1; break;
      case 'left': this.direction = 'up'; this._x = 1; break;
      case 'right': this.direction = 'down'; this._x = this.mw - 1; break;
    }
  }

  private createGradient(ctx: CanvasRenderingContext2D, x: number, y: number, mw: number, mh: number): CanvasGradient {
    const gradient = ctx.createLinearGradient(x - 10, y - 10, x + 10, y + 10);
    gradient.addColorStop(0, '#ffadad'); // Light red
    gradient.addColorStop(0.4, '#FF00FF'); // Light orange
    gradient.addColorStop(0.7, '#8f4b2e'); // Light yellow
    gradient.addColorStop(1, '#40c463'); // Light yellow
    return gradient;
  }
}

export default defineComponent({
  name: 'AnimatedBorder',
  props: {
    isActive: { type: Boolean, required: true }
  },
  setup(props) {
    const canvasRef = ref<HTMLCanvasElement | null>(null);
    const bgRef = ref<HTMLDivElement | null>(null);
    let animationFrameId: number | null = null;
    let bulls: Bull[] = [];

    const clearCanvas = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const animate = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, canvasWidth: number, canvasHeight: number) => {
      bulls = Array.from({ length: canvasWidth / 2 }, (_, i) => new Bull(ctx, 5, i, 5, canvasWidth, canvasHeight, 'right'));
      bulls.push(new Bull(ctx, 20, 0, 20, canvasWidth, canvasHeight, 'right'));

      const draw = () => {
        clearCanvas(ctx, canvas);
        bulls.forEach(bull => props.isActive && bull.draw());
        animationFrameId = requestAnimationFrame(draw);
      };

      draw();
    };

    const initCanvas = () => {
      const canvas = canvasRef.value;
      const bg = bgRef.value;
      if (!canvas || !bg) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const { width, height } = bg.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;

      animate(ctx, canvas, width, height);
    };

    onMounted(initCanvas);

    watch(() => props.isActive, (newValue) => {
      if (newValue) {
        // Start animation
        initCanvas();
      } else {
        // Stop animation and clear data
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        bulls = []; // Clear bull objects
        const ctx = canvasRef.value?.getContext('2d');
        if (ctx && canvasRef.value) {
          clearCanvas(ctx, canvasRef.value);
        }
      }
    });

    onUnmounted(() => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    });

    return { canvasRef, bgRef };
  }
});
</script>

<style scoped>
canvas {
  position: absolute;
  display: block;
  z-index: -3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.card {
  position: relative;
  z-index: -2;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}

.bg {
  position: absolute;
  top: 5px;
  left: 5px;
  height: calc(100% - 10px);
  width: calc(100% - 10px);
  z-index: -1;
  background: rgba(255, 255, 255);
  backdrop-filter: blur(24px);
  overflow: hidden;
  outline: 2px solid white;
}
</style>
