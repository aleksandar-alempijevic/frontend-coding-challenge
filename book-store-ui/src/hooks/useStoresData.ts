import { useEffect, useState } from "react";
import { getStores } from "../services/stores.service";
import { IStore } from "../model/book-shop.model";
import { normalizeResponse } from "../lib/normalize-response";
export const useStoresData = () => {
  const [stores, setStores] = useState<IStore[]>();

  useEffect(() => {
    getStores().then((response) => {
      setStores(normalizeResponse(response));
    });
  }, []);

  return stores;
};

