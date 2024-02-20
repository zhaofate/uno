import React, { useRef, useEffect } from "react";

const Leaf: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas!.getContext("2d");

    function resizeCanvas() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    canvas!.setAttribute(
      "style",
      "position: fixed;left: 0;top: 0;pointer-events: none;"
    );

    const img = new Image();
    img.src = "./style/leaf.webp";

    interface Petal {
      x: number;
      y: number;
      size: number;
      drift: number;
    }

    //  绘制花瓣
    function drawPetal(petal: Petal) {
      ctx!.save(); // 保存当前绘图状态
      ctx!.translate(petal.x, petal.y); // 将绘图原点移动到花瓣中心
      ctx!.rotate((Math.PI / 180) * petal.drift); // 按照旋转角度旋转
      ctx!.drawImage(img, -petal.size / 2, -petal.size / 2, petal.size, (petal.size)); // 绘制花瓣，注意坐标为负的一半大小，使得旋转中心在花瓣中心
      ctx!.restore(); // 恢复之前保存的绘图状态
    }
    

    // 创建随机花瓣
    function createFlowerPetal() {
      const x = Math.random() * canvas!.width;
      const y = Math.random() * canvas!.height;
      const size = Math.random()*20 + 5; // 飘动方向和速度
      const drift = Math.random() * 6; // 下落速度
      // 绘制花瓣
      drawPetal({ x, y, drift, size });

      return { x, y, drift, size };
    }
      // 更新花瓣位置
    function updateFlowerPetal(petal: Petal) {
      const a = -0.5 + Math.random() * 1;
      const b = 1.5 + Math.random() * 0.7;

      petal.y += b;
      petal.x -= 0.5 * a + 1.7;
      petal.drift += Math.random() * 1;

      // 如果花瓣超出屏幕则重置位置
      if (petal.y > canvas!.height + 20) {
        if(Math.random() < 0.5){
          petal.x = Math.random() * canvas!.width;
          petal.y = -(Math.random()*100);
        }else {
          petal.x = canvas!.width+(Math.random()*100);
          petal.y = Math.random() * canvas!.height/2;
        }
        petal.drift = Math.random() * 360;
      }
    }

    // 渲染画布
    function render() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      flowerPetals.forEach((petal: Petal) => {
        updateFlowerPetal(petal);
        drawPetal(petal);
      });
      requestAnimationFrame(render);
    }

    // 花瓣数组
    const flowerPetals: Petal[] = [];

    // 初始化花瓣
    for (let i = 0; i < 10; i++) {
      flowerPetals.push(createFlowerPetal());
    }

    // 调整画布大小
    resizeCanvas();

    // 监听窗口大小变化，动态调整画布大小
    window.addEventListener("resize", resizeCanvas);

    // 开始渲染
    render();

    // 组件卸载时移除事件监听器
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Leaf;
