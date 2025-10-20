(() => {
  const heartRateCanvas = document.getElementById("heartRateChart");
  if (heartRateCanvas) {
    drawHeartRateChart(heartRateCanvas);
  }

  const pillSwitches = document.querySelectorAll(".pill-switch");
  pillSwitches.forEach((switchEl) => {
    switchEl.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        switchEl.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
        button.classList.add("active");
      });
    });
  });

  const chips = document.querySelectorAll(".chip-button");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chip.classList.toggle("toggled");
    });
  });

  function drawHeartRateChart(canvas) {
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "rgba(77, 105, 255, 0.28)");
    gradient.addColorStop(1, "rgba(77, 105, 255, 0)");

    const points = [68, 66, 65, 63, 62, 63, 62, 61, 62, 61, 60, 60, 61, 62, 62];
    const max = Math.max(...points);
    const min = Math.min(...points);
    const padding = 30;
    const step = (width - padding * 2) / (points.length - 1);

    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.strokeStyle = "rgba(20, 24, 31, 0.08)";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    points.forEach((value, index) => {
      const x = padding + index * step;
      const y =
        padding +
        ((max - value) / (max - min || 1)) * (height - padding * 2);
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.strokeStyle = "rgba(77, 105, 255, 0.8)";
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.stroke();

    const path = new Path2D();
    points.forEach((value, index) => {
      const x = padding + index * step;
      const y =
        padding +
        ((max - value) / (max - min || 1)) * (height - padding * 2);
      if (index === 0) {
        path.moveTo(x, y);
      } else {
        path.lineTo(x, y);
      }
    });
    path.lineTo(width - padding, height - padding);
    path.lineTo(padding, height - padding);
    path.closePath();

    ctx.fillStyle = gradient;
    ctx.fill(path);
  }
})();
