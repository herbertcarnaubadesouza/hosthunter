function MenuHamburguer() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path fill="url(#hamburguer)" d="M0 0H30V30H0z"></path>
      <defs>
        <pattern
          id="hamburguer"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.01111)" xlinkHref="#image0_313_1130"></use>
        </pattern>
        <image
          id="image0_313_1130"
          width="90"
          height="90"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAA5UlEQVR4nO3ZMU7DMACF4eeKBSQE94MdVgbEIbgAXSs4HwwIBiTM0qkymWKnhO9bnUhPTrY/AQAAAAAAAKC78ttBrfUsyWOSqyQXwxb9TW9JXpLcl1I+Ww9MXfRTkptOw9ZqW0q5bR00L7rWuknynuS056oV+khyXkr5PjzYLDDmX2pe9P6L7AZvWYNd629OkpOJl+6SfCW5TnLZY9WKvCZ5TvKw9BAAAAAAgCMlzs5DnB1MnB1EnF2aODsvcbYzcRYAAAAAYJo4Ow9xdjBxdhBxdmni7LzE2c7EWQAAAAAAAIBj8AN5wEuaVS49SwAAAABJRU5ErkJggg=="
        ></image>
      </defs>
    </svg>
  );
}

export default MenuHamburguer;
