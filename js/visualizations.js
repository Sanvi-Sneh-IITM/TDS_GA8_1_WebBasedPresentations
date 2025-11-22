function renderChart(){
  const container = document.getElementById('chart');
  if(!container) return;

  // Clear old content
  container.innerHTML = '';

  // Simple placeholder 'sparkline' (SVG)
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 200 80');
  svg.setAttribute('preserveAspectRatio', 'none');
  svg.style.width = '100%';
  svg.style.height = '100%';

  const data = [10, 20, 15, 35, 50, 45, 60, 55, 70, 80, 75];
  const max = Math.max(...data);
  const points = data.map((d,i) => {
    const x = (i / (data.length - 1)) * 200;
    const y = 80 - (d / max) * 70;
    return `${x},${y}`;
  }).join(' ');

  const poly = document.createElementNS(svgNS, 'polyline');
  poly.setAttribute('points', points);
  poly.setAttribute('fill', 'none');
  poly.setAttribute('stroke', '#0074D9');
  poly.setAttribute('stroke-width', '2');

  svg.appendChild(poly);
  container.appendChild(svg);
}
