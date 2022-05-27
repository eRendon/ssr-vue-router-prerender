import type { ISurePromise } from "../interfaces/ISurePromise";
import { FetchError, FetchResponse } from 'ohmyfetch'

/**
 ToDo SurePromise
 * Deserialize token user when is login
 * @return Promise<ISurePromise>
 * @param promise
 * @type Promise<FetchResponse>
 */

const surePromise = <T>(
  promise: Promise<Response>
): Promise<ISurePromise<T>> =>
  promise
    .then((result) => {
      const { data, status, headers } = JSON.parse(result as  unknown as string) ;
      return {
        success: true,
        data,
        status,
      };
    })
    .catch((error: FetchError) => {
      if (!error.response) {
        throw error;
      } else {
        // @ts-ignore
        const { data, status } = error.response;
        return Promise.resolve({
          success: false,
          data,
          status,
        });
      }
    });

export default surePromise;
