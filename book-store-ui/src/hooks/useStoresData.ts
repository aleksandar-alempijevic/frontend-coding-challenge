import { useEffect, useState } from "react";
import { getStores } from "../services/stores.service";
import { IStore } from "../model/book-shop.model";
import { normalizeResponse } from "../lib/normalize-helpers";
export const useStoresData = () => {
  const [stores, setStores] = useState<IStore[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchStores = async () => {
    setLoading(true);
    try {
      const response = await getStores();
      setStores(normalizeResponse(response));
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStores();
  }, []);

  return { stores, loading, error };
};
