const onPause = () => {
  document.querySelector("html")!.style.overflowY = "hidden";
};

const onPlay = () => {
  document.querySelector("html")!.style.overflowY = "scroll";
};

export { onPause as onPause };
export { onPlay as onPlay };
