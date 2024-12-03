import React, { useState, useEffect } from 'react';

const widthDelayedItems = (items, delay) => {
  const [visible, setVisible] = useState([]);
  
  useEffect(() => {
   if (items.length > 0) {
    const showItemsDelayed = (index) => {
     if (index < items.length) {
      setVisible((prevItems) => [
       ...prevItems,
       items[index]
      ])
      
      setTimeout(() => {
       showItemsDelayed(index + 1);
      }, delay)
     }
    }
    showItemsDelayed(0);
   }
  }, [items, delay]);
  return visible;
}

export default widthDelayedItems;