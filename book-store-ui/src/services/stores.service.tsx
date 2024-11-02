import { IStoresResponse } from "../model/book-shop.model";

const apiBaseUrl = "http://localhost:3000";

export const getStores = async (): Promise<IStoresResponse> => {
  let data;
  try {
    const response = await fetch(`${apiBaseUrl}/stores`);
    data = await response.json();
  } catch (error) {
    console.error(error);
  }

  return data;
};
