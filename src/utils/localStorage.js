
export const toLocalStorage = (name, itemPerPage, sortingName, sortingValue, checkedField, fields) => {
    localStorage.setItem(`configuratorSetting${name.toLowerCase()}`, JSON.stringify({
        itemPerPage: itemPerPage,
        sortingName: sortingName,
        sortingValue: sortingValue,
        checkedField: checkedField,
        fields: fields,
    }));
};

export const loadSettingsFromLocalStorage = (name) => {
    const storedSettings = JSON.parse(localStorage.getItem(`configuratorSetting${name}`));

    if (storedSettings) {
        return storedSettings;
    };
};