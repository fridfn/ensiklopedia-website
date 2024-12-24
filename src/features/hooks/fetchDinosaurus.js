const fetchDinosaurus = async (setDinosaurus, setIsLoading, setError) => {
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
    setIsLoading(false);
   }, 2000);
  }
 };
 
 export default fetchDinosaurus;