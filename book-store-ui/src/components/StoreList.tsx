import { useStoresData } from "../hooks/useStoresData";
import Store from "./Store/Store";

function StoreList() {
  const { stores, loading, error } = useStoresData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred.</div>;
  }

  return (
    <>{stores?.map((store) => <Store key={store.name} store={store} />)}</>
  );
}

export default StoreList;
