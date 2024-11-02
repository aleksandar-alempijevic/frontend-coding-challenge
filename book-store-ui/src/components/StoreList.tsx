import { useStoresData } from "../hooks/useStoresData";
import Store from "./Store";

function StoreList() {
  const stores = useStoresData();

  return (
    <>{stores?.map((store) => <Store key={store.name} store={store} />)}</>
  );
}

export default StoreList;
