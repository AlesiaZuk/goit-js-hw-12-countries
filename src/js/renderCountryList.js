import refs from './refs';
import createListMarkup from '../templates/countriesList.hbs';
import addContainerColor from './addContainerColor.js';
import cleanContainerContent from './cleanContainerContent.js';

const { responseContainer } = refs;

export default function renderCountryList(datas) {
  addContainerColor();
  cleanContainerContent();

  const dataArray = datas.map(data => data.name);
  const cardMarkup = createListMarkup(dataArray);
  responseContainer.insertAdjacentHTML('beforeend', cardMarkup);
}
