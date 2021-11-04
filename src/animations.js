import { gsap } from "gsap";

function createAnimation(delay, duration, ease, x = 0, y = 0, scale = 1) {
  return function animation(currentRef) {
    gsap.from(currentRef, {
      opacity: 0,
      delay: delay,
      duration: duration,
      ease: ease,
      x: x,
      y: y,
      scale: scale,
    });
  };
}

function searchAnimation(currentRef) {
  const search = createAnimation(1.8, 2.8, "elastic.out(1,0.3)", 0, -100);
  search(currentRef);
}

function navAnimation(currentRef) {
  const nav = createAnimation(1.6, 2.5, "elastic.out(1,0.3)", 0, -100);
  nav(currentRef);
}

function brandAnimation(currentRef) {
  const brand = createAnimation(2.2, 3, "elastic.out(1,0.3)", 0, -100);
  brand(currentRef);
}

function discountAnimation(currentRef) {
  const discount = createAnimation(1, 2.4, "expo.inOut", 100);
  discount(currentRef);
}

function bottomShoesAnimation(currentRef) {
  const botShoes = createAnimation(2.6, 3.5, "elastic.out(1,0.3)", 100);
  botShoes(currentRef);
}

function selectedProductAnimation(currentRef) {
  const selectedProduct = createAnimation(3, 4, "elastic.out(1,0.3)", 0, 100);
  selectedProduct(currentRef);
}

function sizeAnimation(currentRef) {
  const size = createAnimation(3.5, 0.5, "Expo.In", 0, 100);
  size(currentRef);
}

export {
  searchAnimation,
  navAnimation,
  brandAnimation,
  discountAnimation,
  bottomShoesAnimation,
  selectedProductAnimation,
  sizeAnimation,
};
