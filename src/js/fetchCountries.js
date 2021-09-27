export default function fetchCountries(country) {
  return fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(response => {
    if (response.status === 404) {
      return;
    }
    console.log(response);
    return response.json();
  });
}
