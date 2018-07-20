const updateObject = (obj, key, updatedValue) => {
    return {
      ...obj,
      [key]: updatedValue
    }
};

export default updateObject;