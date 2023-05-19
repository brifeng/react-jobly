import { useEffect, useState } from "react";

const useLocalStorage = (key, val) => {
    const initialValue = localStorage.getItem(key) || val;

    const [item, setItem] = useState(initialValue);

    useEffect(function setKeyInLocalStorage() {
        if (item === null) {
            localStorage.removeItem(key);
        }
        else {
            localStorage.setItem(key, item);
        }
    }, [key, item]);

    return [item, setItem];
}

export default useLocalStorage;