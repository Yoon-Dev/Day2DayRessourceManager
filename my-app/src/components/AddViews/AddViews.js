import React,  { useEffect, useRef }  from "react";
import Hammer from 'hammerjs';
import './AddViews.css';
import Button from '@material-ui/core/Button';
// component
import AddReal from '../AddReal/AddReal';
import AddOnline from '../AddOnline/AddOnline';

const AddViews = () => {


    // const [current, setCurrent] = useState(0);
    // const [tabView, setTabView] = useState({0: "#add-real", 1: "#add-online"});
    const ref = useRef(0);
    const nbr_views = useRef(2)
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// display the view and add hammer js event
    useEffect( () => {
        
        const views = document.querySelectorAll('.view')
        const app = document.querySelector('#App')

        views.forEach((el, i) => {
            let x = (window.innerWidth * (i))
            el.style.transform = "translateX("+x+"px)";
        })
        
        const hammer = new Hammer(app) 
        hammer.on('panleft', e => {

            let tsl_current = (-ref.current * window.innerWidth) + e.deltaX
            if(ref.current === (views.length - 1)){
                if(Math.abs(e.deltaX) < (window.innerWidth/2)){
                    document.querySelector("#views").classList.add("no-transi")
                    document.querySelector("#views").style.transform = "translateX("+tsl_current+"px)";
                  }  
            }else{
                document.querySelector("#views").classList.add("no-transi")
                document.querySelector("#views").style.transform = "translateX("+tsl_current+"px)";
            }

        })
        hammer.on('panright', e => {

            let tsl_current = (-ref.current * window.innerWidth) + e.deltaX
            if(ref.current === 0){
                if(Math.abs(e.deltaX) < (window.innerWidth/2)){
                    document.querySelector("#views").classList.add("no-transi")
                    document.querySelector("#views").style.transform = "translateX("+tsl_current+"px)";
                  }  
            }else{
                document.querySelector("#views").classList.add("no-transi")
                document.querySelector("#views").style.transform = "translateX("+tsl_current+"px)";
            }

        })
        hammer.on("panend", (e) => {
          
            document.querySelector("#views").classList.remove("no-transi")
            // °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
            // Droite
            if(Math.abs(e.deltaX) > (window.innerWidth/3) && ref.current < (nbr_views.current -1) && e.deltaX < 0){
              nav(ref.current+1)
            }else if(e.deltaX < 0){
              // derniere page
              document.querySelector("#views").style.transform = "translateX("+(-ref.current) * window.innerWidth+"px)";
            }
            // °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
            // Gauche
            if(Math.abs(e.deltaX) > (window.innerWidth/3) && ref.current > 0 && e.deltaX > 0){
                nav(ref.current-1)
            }else if(e.deltaX > 0){
                // premiere page
                document.querySelector("#views").style.transform = "translateX("+(-ref.current) * window.innerWidth+"px)";
            }
          })

    });
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// do the navigation with btn
    const nav = target => {

        let destination = -target * window.innerWidth
        const btn = document.querySelectorAll('.btn-add')
        btn.forEach(el => {
            el.style.transform = "translateX("+(-destination)+"px)";
        })
        document.querySelector('#views').style.transform = "translateX("+destination+"px)";
        ref.current = target

    }
    
    return(
      <div id="views">
        <Button className="btn-add" onClick={() =>{nav(0)}}>Real</Button>
        <Button className="btn-add" onClick={() =>{nav(1)}}>Online</Button>
        <AddReal/>
        <AddOnline/>
      </div>

    ); 
  
}


export default AddViews;
