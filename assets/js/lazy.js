const Observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(LoadImage);
});

const isIntersecting = (entry) => entry.isIntersecting;

const LoadImage = (entry) => {
  const imgNode = entry.target;
  imgNode.src = imgNode.dataset.src;
  imgNode.onload = () => {
    console.log(imgNode);
  };
  Observer.unobserve(imgNode);
};

export const RegisterImage = (image) => {
  Observer.observe(image);
};