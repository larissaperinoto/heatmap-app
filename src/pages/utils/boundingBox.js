export function calculateCentroidBoundingBox(x1, x2, y1, y2) {
  const x = (x1 + x2) / 2;
  const y = (y1 + y2) / 2;

  return { x, y };
}
