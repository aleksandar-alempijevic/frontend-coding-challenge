import { IItem, IRelationshipEntity, IStore, IStoresResponse } from "../model/book-shop.model";

export const normalizeResponse = (response: IStoresResponse): IStore[] => {
    const includedItems = response.included;

    const normalizedStores = response.data.reduce((acc: IStore[], curr) => {
        let normalizedItem = { ...curr.attributes };
        const currentRelationships = curr.relationships;
        if (currentRelationships) {
        const currntRelationshipsKeys = Object.keys(currentRelationships);
            currntRelationshipsKeys.forEach((key) => {
            const currentRelationship = currentRelationships[key]?.data;
            const isCurrentRelationshipArray = Array.isArray(currentRelationship);
            if (
              !isCurrentRelationshipArray &&
              currentRelationship
            ) {
              const relatedItem = includedItems.find(
                (inc) =>
                  inc.type ===
                    (currentRelationship as IRelationshipEntity).type &&
                  inc.id === (currentRelationship as IRelationshipEntity).id,
              );
              if (relatedItem) {
                normalizedItem = {
                  ...normalizedItem,
                  [relatedItem.type]: relatedItem.attributes,
                };
              }
            } else if (isCurrentRelationshipArray) {
              const relatedItems = currentRelationship.map((rel) => {
                const relatedItem = includedItems.find(
                  (inc) => inc.type === rel.type && inc.id === rel.id,
                );
                if (relatedItem) {
                  const relatedItemRelationships = relatedItem.relationships;
                  if (relatedItemRelationships) {
                    const relatedItemRelationshipsKeys = Object.keys(relatedItemRelationships);
                    relatedItemRelationshipsKeys.forEach((key) => {
                      const relatedItemRelationship = relatedItemRelationships[key]?.data;
                      if (
                        relatedItemRelationship
                      ) {
                        const relatedSubItem =
                          includedItems.find(
                            (inc) =>
                              inc.type ===
                                (relatedItemRelationship as IRelationshipEntity).type &&
                              inc.id ===
                                (relatedItemRelationship as IRelationshipEntity).id,
                          );
                        if (relatedSubItem) {
                          relatedItem.attributes = {
                            ...relatedItem.attributes,
                            [relatedSubItem.type]: relatedSubItem.attributes,
                          };
                        }
                      }
                    });
                  }
                  return relatedItem.attributes;
                }
                return {};
              });
              normalizedItem = {
                ...normalizedItem,
                [key]: relatedItems,
              };
            }
          });
        }
        return [...acc, normalizedItem];
      }, []);

    return normalizedStores;
}