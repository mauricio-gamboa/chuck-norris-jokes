function setStorage(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}

function getStorage(key) {
    return sessionStorage.getItem(key);
}

function clearStorage() {
    sessionStorage.clear();
}

export {
    setStorage,
    getStorage,
    clearStorage
}