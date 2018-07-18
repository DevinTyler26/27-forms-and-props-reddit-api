import superagent from 'superagent';

export const getCache = (key) => {
  return new Promise((resolve, reject) => {
    const data = localStorage.getItem(key);
    if (data) {
      resolve(JSON.parse(data));
    } else {
      reject(new Error(`Invalid key: ${key}`));
    }
  });
};

export const setCache = (key, value) => {
  const safeValue = typeof value === 'string' ? value : JSON.stringify(value);
  localStorage.setItem(key, safeValue);
  return Promise.resolve();
};

export const fetchData = (url) => {
  return getCache(url)
    .then(data => data)
    .catch(() => {
      return superagent.get(url)
        .then((result) => {
          console.log('########## RES BODY', result.body.data.children);
          setCache(url, result.body.data.children);
          return result.body.data.children;
        })
        .catch(console.error);
    })
    .then(data => data);
};
