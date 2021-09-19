import refs from './refs';

const { responseContainer } = refs;

export default function removeContainerColor() {
  responseContainer.classList.remove('container_color');
}
