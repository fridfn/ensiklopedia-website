const fetchDinosaurus = async (setDinosaurus, setIsLoading, setError, timeout) => {
  const delay = timeout || 2000;
  
  try {
    setIsLoading(true);
    const response = await fetch('/API/dinosaurs.json');
    if (!response.ok) {
      throw new Error('Jaringan ke API buruk');
    }
    
    const data = await response.json();
    setDinosaurus(data.dinosaurs);
    return data.dinosaurs;
  } catch (error) {
    setError(error.message);
  } finally {
   setTimeout(() => {
    window.scrollTo({ top: 0 });
    setIsLoading(false);
   }, delay);
  }
 };
 
 export default fetchDinosaurus;