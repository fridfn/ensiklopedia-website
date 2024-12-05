import '@/global.css';
import '@/styles/App.scss';
import { useNavigate } from 'react-router-dom'

const ButtonPagination = ({pageNumber, currentPage, totalPages}) => {
  const navigate = useNavigate();
  const showListAndNavigate = (pageNumber)=> {
    const nextPage = parseInt(pageNumber, 10) + 1;
    if (currentPage < totalPages) {
     navigate(`/home/dinosaurus/pages/${nextPage}`);
    }
  }
  
  const undoListAndNavigate = (pageNumber)=> {
   const undoPage = parseInt(pageNumber, 10) - 1;
    if (undoPage < totalPages) {
     navigate(`/home/dinosaurus/pages/${undoPage}`);
    }
  }
  return (
   <div className="container-button-pagination center-flx">
   <button className="button-wrapper wrapper-flex" onClick={() => undoListAndNavigate(pageNumber)} disabled={currentPage == 1}>
    <ion-icon class="icon tiny" name="arrow-undo"></ion-icon>
    <p className="tiny-bold">UNDO</p>
   </button>
   <div className="button-wrapper tiny-bold">PAGE {pageNumber} OF {totalPages}</div>
   <button className="button-wrapper wrapper-flex" onClick={() => showListAndNavigate(pageNumber)} disabled={currentPage >= totalPages}>
     <p className="tiny-bold">NEXT</p>
     <ion-icon class="icon tiny" name="arrow-redo"></ion-icon>
    </button>
   </div>
  )
}

export default ButtonPagination;