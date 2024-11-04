import { IStoresResponse } from "../model/book-shop.model";

const apiBaseUrl = import.meta.env.VITE_API_BASE;

export const flagCDN = import.meta.env.VITE_FLAG_CDN;

export const getStores = async (): Promise<IStoresResponse> => {
  let data;
  try {
    const response = await fetch(`${apiBaseUrl}/stores`);
    data = await response.json();
  } catch (error) {
    throw new Error("Error fetching stores data");
  }

  return data;
};

export const getFlagImageUrl = (code: string, size?: string) =>
  `${flagCDN}/${size ?? "h24"}/${code.toLowerCase()}.png`;
