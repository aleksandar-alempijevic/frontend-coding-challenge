import { useEffect, useState } from "react";
import { getStores } from "../services/stores.service";
import { IStore } from "../model/book-shop.model";
import { normalizeResponse } from "../lib/normalize-response";
export const useStoresData = () => {
  const [stores, setStores] = useState<IStore[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getStores().then((response) => {
      setStores(normalizeResponse(response));
      setLoading(false);
    }).catch((e) => {
      setError(true);
      setLoading(false);
    });
  }, []);

  return {stores, loading, error};
};

