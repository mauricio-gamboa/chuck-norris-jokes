function setStorage(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}

function getStorage(key) {
    return sessionStorage.getItem(key);
}

export {
    setStorage,
    getStorage
}