import React,  { useEffect }  from "react";
// component
import AddReal from '../AddReal/AddReal';
import AddOnline from '../AddOnline/AddOnline';

const AddViews = () => {

    useEffect(() => {

        const views = document.querySelectorAll('.view')
        const nbr_view = views.length
        views.forEach((el, i) => {
            let x = (window.innerWidth * (i))
            el.style.transform = "translateX("+x+"px)";
        }, [nbr_view])
        
    });

    return(
      <div id="views">
          <AddReal/>
          <AddOnline/>
      </div>
    ); 
  
}

export default AddViews;
