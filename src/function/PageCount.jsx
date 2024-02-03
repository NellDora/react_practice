import React, {useState} from "react";

function pageCounter({initValue}){
    const [pageCount, setPageCount] = useState(initValue);

    const increaseCount = () => setPageCount((pageCount) =>pageCount +1);
    const decreaseCount = () => setPageCount((pageCount) => Math.max(pageCount-1));

    return [pageCount, increaseCount, decreaseCount];
}

export default pageCounter;