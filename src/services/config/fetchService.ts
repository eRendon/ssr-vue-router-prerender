import { ISurePromise } from '../../interfaces/ISurePromise'
import surePromise from '../../helpers/surePromise'
import { inject } from 'vue'
import { $fetch } from 'ohmyfetch'
//import { $fetch } from 'ohmyfetch'
const usePostData = async <P, T>(
  data: P,
  url: string
): Promise<ISurePromise<T>> => {
  return await surePromise($fetch('https://test1-sureti-client-api.oiti.cloud:9001/'+url, {
    method: 'POST',
    body: data
  }))
};

const useGetData = async <P, T>(
  data: P,
  url: string
): Promise<ISurePromise<T>> => {
  let dataUrl = "";
  if (data != undefined) {
    dataUrl = `${url}?${jsonToURLEncoded(data)}`;
  } else {
    dataUrl = url;
  }
  return await surePromise($fetch('https://test1-sureti-client-api.oiti.cloud:9001/'+dataUrl, {
    method: 'GET',
    params: data
  }));
};


/** ToDo JSON Utl Encode Helper
 * Encode params into url to getData
 * @param jsonString
 * @type { [key: string]: number } ? need refactor types
 * @return string
 */

const jsonToURLEncoded = (jsonString: any): string => {
  return Object.keys(jsonString)
  .map(function (key) {
    return (
      encodeURIComponent(key) + "=" + encodeURIComponent(jsonString[key])
    );
  })
  .join("&");
};

export { usePostData, useGetData }
