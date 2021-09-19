import refs from './refs';
import createCardMarkup from '../templates/countriesCard.hbs';
import addContainerColor from './addContainerColor.js';
import cleanContainerContent from './cleanContainerContent.js';

const { responseContainer } = refs;

export default function renderCountryCard(data) {
  if (data.status === 404) {
    return;
  }

  addContainerColor();
  cleanContainerContent();

  const cardMarkup = createCardMarkup(data[0]);
  responseContainer.insertAdjacentHTML('beforeend', cardMarkup);
}
