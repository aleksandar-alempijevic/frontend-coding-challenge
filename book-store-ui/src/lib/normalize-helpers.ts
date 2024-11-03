import {
  IAttributes,
  IItem,
  IRelationshipEntity,
  IStore,
  IStoresResponse,
} from "../model/book-shop.model";

//The findRelatedItem function takes an array of included items and a relationship object as arguments.
//It finds the related item in the included items array that matches the type and id of the relationship object.
//It returns the related item if found, otherwise returns undefined.
const findRelatedItem = (
  includedItems: IItem[],
  relationship: IRelationshipEntity,
) => {
  return includedItems.find(
    (inc) => inc.type === relationship.type && inc.id === relationship.id,
  );
};

//The normalizeSingleRelationship function finds the related item in the included items array and merges its attributes with the normalized item.
//It returns the normalized item with the related item's attributes.
const normalizeSingleRelationship = (
  includedItems: IItem[],
  relationship: IRelationshipEntity,
  normalizedItem: IAttributes,
) => {
  const relatedItem = findRelatedItem(includedItems, relationship);

  if (!relatedItem) return normalizedItem;

  return {
    ...normalizedItem,
    [relatedItem.type]: relatedItem.attributes,
  };
};

//The normalizeSubRelationships function normalizes the sub-relationships of a related item.
//It iterates over the relationships of the related item and normalizes each sub-relationship.
const normalizeSubRelationships = (
  includedItems: IItem[],
  relatedItem: IItem,
) => {
  const { relationships } = relatedItem;

  if (!relationships) return;

  Object.values(relationships).forEach((relationship) => {
    if (relationship?.data) {
      const relatedSubItem = findRelatedItem(includedItems, relationship?.data);
      if (relatedSubItem) {
        relatedItem.attributes = {
          ...relatedItem.attributes,
          [relatedSubItem.type]: relatedSubItem.attributes,
        };
      }
    }
  });
};

//The normalizeRelatedItem function finds the related item in the included items array and normalizes it.
//It then normalizes any sub-relationships of the related item.
const normalizeRelatedItem = (
  includedItems: IItem[],
  rel: IRelationshipEntity,
) => {
  const relatedItem = findRelatedItem(includedItems, rel);

  if (!relatedItem) return {};

  normalizeSubRelationships(includedItems, relatedItem);
  return relatedItem.attributes;
};

//The normalizeArrayRelationship function maps over the relationships array, calls the normalizeRelatedItem function for each relationship, and returns an array of related items.
//It then merges the array of related items with the normalized item and returns the normalized item with the related items.
const normalizeArrayRelationship = (
  includedItems: IItem[],
  relationships: IRelationshipEntity[],
  normalizedItem: IAttributes,
  key: string,
) => {
  const relatedItems = relationships.map((rel) =>
    normalizeRelatedItem(includedItems, rel),
  );
  return {
    ...normalizedItem,
    [key]: relatedItems,
  };
};

//This function normalizes the response from the API. It takes the response object and returns an array of IStore objects.
//The function first extracts the included items from the response object.
//It then iterates over the data array in the response object and normalizes each item.
//For each item, it extracts the attributes and relationships.
//If the item has relationships, it iterates over each relationship and normalizes it.
//If the relationship is a single relationship, it calls the normalizeSingleRelationship function.
//If the relationship is an array relationship, it calls the normalizeArrayRelationship function.
//The function returns an array of normalized store objects.
export const normalizeResponse = (response: IStoresResponse): IStore[] => {
  const includedItems = response.included;

  const normalizedStores = response.data.reduce((acc: IStore[], curr) => {
    let normalizedItem = { ...curr.attributes };
    const { relationships } = curr;

    if (!relationships) return [...acc];

    Object.entries(relationships).forEach(([key, relationship]) => {
      if (!Array.isArray(relationship?.data)) {
        normalizedItem = normalizeSingleRelationship(
          includedItems,
          relationship?.data,
          normalizedItem,
        );
      } else if (relationship?.data) {
        normalizedItem = normalizeArrayRelationship(
          includedItems,
          relationship?.data,
          normalizedItem,
          key,
        );
      }
    });

    return [...acc, normalizedItem];
  }, []);

  return normalizedStores;
};
