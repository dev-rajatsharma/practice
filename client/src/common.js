import qs from 'query-string';

export const setURL = (history, location, queryObject = {}) => {
    let currentQS = window.location.search;
    let currentQueryObject = currentQS !== '' ? qs.parse(currentQS) : {}
    let newQSObject = { ...currentQueryObject, ...queryObject }
    history.replace({
        pathname: location.pathname,
        search: qs.stringify(newQSObject)
    })
};
/* setting exact query string, instead of merging with existing query string */
export const setExactQS = (history, location, queryObject = {}) => {
    history.replace({
        pathname: location.pathname,
        search: qs.stringify(queryObject)
    })
};

export const getURL = () => {
    let currentQS = window.location.search;
    let queryObject = currentQS !== '' ? qs.parse(currentQS) : {};
    return queryObject;
};
