import refs from './refs';

const { responseContainer } = refs;

export default function addContainerColor() {
  responseContainer.classList.add('container_color');
}
