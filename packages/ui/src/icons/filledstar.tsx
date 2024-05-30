interface FilledstarProps {
  size?: number;
  fill?: string;
}

function Filledstar({
  size = 24,
  fill = "black",
}: FilledstarProps): React.ReactElement {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="filledStar">
        <path
          id="Vector"
          d="M5.825 21L7.45 13.975L2 9.25L9.2 8.625L12 2L14.8 8.625L22 9.25L16.55 13.975L18.175 21L12 17.275L5.825 21Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Filledstar;
