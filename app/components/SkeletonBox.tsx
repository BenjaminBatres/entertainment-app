interface Skeleton {
  width?: any;
  height?: any;
  marginBottom?: any;
  borderRadius?: any;
}

export default function SkeletonBox({
  width,
  height,
  marginBottom,
  borderRadius,
}: Skeleton) {
  return (
    <div
      className={`skeleton-box ${height}`}
      style={{ width, marginBottom, borderRadius }}
    ></div>
  );
}
