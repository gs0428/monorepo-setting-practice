interface WaterProps {
  size?: number;
  fill?: string;
}

function Water({ size = 24, fill = "black" }: WaterProps): React.ReactElement {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="water">
        <path
          id="Vector"
          d="M12 2.05829C12 2.05829 5.25 9.4786 5.25 14.7286C5.25 18.8705 7.85812 21.4786 12 21.4786C16.1419 21.4786 18.75 18.8705 18.75 14.7286C18.75 9.4786 12 2.05829 12 2.05829ZM12.75 19.0411V17.9161C13.4957 17.9152 14.2105 17.6186 14.7378 17.0914C15.265 16.5641 15.5616 15.8493 15.5625 15.1036H16.6875C16.6864 16.1475 16.2712 17.1484 15.533 17.8866C14.7948 18.6248 13.7939 19.04 12.75 19.0411Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Water;
