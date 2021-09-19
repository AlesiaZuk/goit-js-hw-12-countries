import refs from './refs';

const { responseContainer } = refs;

export default function cleanContainerContent() {
  responseContainer.innerHTML = '';
}
