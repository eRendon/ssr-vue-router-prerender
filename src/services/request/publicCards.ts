import type { IFormLoanCard, IFormPublicCard, IPublicCard } from '../../interfaces/IPublicCards'

import type { ISurePromise } from "../../interfaces/ISurePromise";
import { useGetData, usePostData } from '../config/fetchService'

const useGetCards = async (): Promise<ISurePromise<IPublicCard[]>> => {
  try {
    return await useGetData<{ state: string }, IPublicCard[]>(
      { state: "open-closed" },
      "/user/public/investment_card"
    );
  } catch (e) {
    throw e;
  }
};

const usePostForm = async (
  form: IFormPublicCard,
  guarantee_id: string
) => {
  try {
    return await usePostData(
      form,
      `/user/public/investment_card/investment_request/${guarantee_id}`
    );
  } catch (e) {
    throw e;
  }
};

const usePostFormLoan = async (form: IFormLoanCard) => {
  try {
    return await usePostData(form, "/user/public/loan_lead");
  } catch (e) {
    throw e
  }
}

export { useGetCards, usePostForm, usePostFormLoan };
