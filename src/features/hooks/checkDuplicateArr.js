
const checkDuplicateArr = (arr) => {
  let uniqueArray = [];
  arr.forEach((item) => {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  });
  return uniqueArray;
}

export default checkDuplicateArr;