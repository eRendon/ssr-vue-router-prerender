import { $fetch } from 'ohmyfetch';
import { FastifyRequest } from 'fastify';

export { createHttpClient };

const defaultHeaders = {
  Accept: 'application/json',
};

function createHttpClient(req?: FastifyRequest) {
  // $fetch.create does not work
  return async (uri: string, options: Object) => {
    let requestHeaders = {};
    if (typeof window === 'undefined' && typeof req !== 'undefined') {
      requestHeaders = {
        cookie: req.headers['cookie'],
      };
    }

    const headers = {
      ...requestHeaders,
      ...defaultHeaders,
    };
    console.log('la url', import.meta.env.VITE_API_BASE_URL)
    return await $fetch(uri, {
      // @ts-ignore
      baseURL: 'https://test1-sureti-client-api.oiti.cloud:9001/',
      headers,
      ...options,
    })
  }
}
