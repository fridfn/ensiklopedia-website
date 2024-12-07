import React from 'react';

const useDuplicateItems = (Component, count) => {
 return Array.from({ length: count }).map((_, index) => (
  <Component key="index"/>
 ))
}

export default useDuplicateItems;