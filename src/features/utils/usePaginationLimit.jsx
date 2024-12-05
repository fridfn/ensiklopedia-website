
const getPaginatedList = (currentPage, pageNumber, dinoPerPages, dinosaurus) => {
  
  const startIndex = (currentPage - 1) * dinoPerPages;
  const endIndex = startIndex + dinoPerPages;
  
  return dinosaurus.slice(startIndex, endIndex);
 }
 
export default getPaginatedList;