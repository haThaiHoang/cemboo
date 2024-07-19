import React, { useMemo, Suspense } from 'react'

interface IProps {
  className?: string
  name: string
  size?: number
  rotate?: number
  alt?: string
  color?: string
}

const loadSVG = (fileName: string) => React.lazy(async () => {
  let moduleComp;
  try {
    moduleComp = await import(`../../../public/icons/${fileName}.svg`);
  } catch (e) {
    moduleComp = await import(`../../../public/icons/bank-outline.svg`);
  }
  return typeof moduleComp.default === "function" ? moduleComp : moduleComp.default;
});

const Icon = ({
  className,
  name,
  size = 24,
  alt,
  rotate = 0,
  color,
}: IProps) => {
  const SvgComponent = useMemo(() => loadSVG(name), [name]);

  return (
    <Suspense fallback={<div style={{ width: size, height: size }} />}>
      <SvgComponent
        className={className}
        alt={alt || "icon"}
        fill={color}
        style={{
          transform: `rotate(${rotate}deg)`,
          fontSize: 40
        }}
      />
    </Suspense>
  )
}

export default Icon
