import 'whatwg-fetch';
import getBaseUrl from './base_url';

const baseUrl = getBaseUrl();

export function getProducts() {
  return get('products.json');
}

// export function deleteProduct(id) {
//   return del(`products/${id}`);
// }

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

// function del(url) {
//   const request = new Request(baseUrl + url, {
//     method: 'DELETE'
//   });

//   return fetch(request).then(onSuccess, onError);
// }

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
