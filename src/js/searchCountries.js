import { alert, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

import debounce from 'lodash/debounce';
import fetchCountries from './fetchCountries.js';
import renderCountryCard from './renderCountryCard.js';
import renderCountryList from './renderCountryList.js';
import cleanInput from './cleanInput.js';
import cleanContainerContent from './cleanContainerContent';
import removeContainerColor from './removeContainerColor';

import refs from './refs';

const { input } = refs;

input.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
  e.preventDefault();

  const country = e.target.value;

  fetchCountries(country)
    .then(data => {
      if (data.length > 10) {
        cleanContainerContent();
        removeContainerColor();
        return showAllert();
      } else if (data.length === 1) {
        renderCountryCard(data);
      } else if (data.length >= 2 || data.length <= 10) {
        showNotice();
        renderCountryList(data);
      }
    })
    .catch(() => {
      cleanContainerContent();
      removeContainerColor();
      showError();
    });

  cleanInput();
}

function showError() {
  error({
    text: `Country does not exist, please check spelling!`,
  });
}

function showAllert() {
  alert({
    text: `Too many Matches found. Please enter a more specific query!`,
  });
}

function showNotice() {
  alert({
    text: `Please, specify your request!`,
  });
}
