import React,  { useEffect, useRef, useState }  from "react";
import Hammer from 'hammerjs';
import './AddViews.css';
import { makeStyles, createStyles } from '@material-ui/core/styles';
// component
import AddReal from '../AddReal/AddReal';
import AddOnline from '../AddOnline/AddOnline';
import Real from '../Real/Real';
import Online from '../Online/Online';
import BtnMap from '../BtnMap/BtnMap';

const AddViews = props => {
    const delay = useRef(1000)
    const useStyles = makeStyles( () => createStyles({
        transition: {
            transition: `all ${delay.current}ms cubic-bezier(0.55, 0.06, 0.68, 0.19)`,
            opacity: "0",
            backgroundColor: "#C2B548"
        },
        p: {
            padding: "0px 20px"
        }
      }));
    const style = useStyles();

    const [current, setCurrent] = useState(0);
    const Dynamic = [AddReal, AddOnline, Real, Online]
    const [firstComponent] = useState(React.createElement(Dynamic[props.comp1], null, null));
    const [secondComponent] = useState(React.createElement(Dynamic[props.comp2], null, null));
    const ref = useRef(current);
    const nbr_views = useRef(2)
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// display the view and add hammer js event
    useEffect( () => {

        const views = document.querySelectorAll('.view')
        const app = document.querySelector('#views')

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

    }, []);
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// transition
    useEffect(() => {
        const self = document.querySelector("#transi")
        const reverse = Object.assign([], self.childNodes).reverse()
        console.log(reverse)
        
        console.log(typeof(delay.current))
        self.style.backgroundColor = "#EEEEEE"
        self.style.opacity = 1

        reverse.forEach((el, i) => {
            el.style.opacity = 0
            console.log(i)
            setTimeout(() => {
                el.style.opacity = 1
            }, (i+1)*(delay.current/3));
        })       
    }, []);
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// do the navigation with btn
    const nav = target => {

        let destination = -target * window.innerWidth

        document.querySelector('#views').style.transform = "translateX("+destination+"px)";
        ref.current = target
        setCurrent(target)

    }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// change target value on swipe
    const fcttarget = target => {

        setCurrent(target)

    }

    
    return(
        <div className={style.transition} id="transi"> 
            <div id="views">
            { firstComponent }
            { secondComponent }
            </div>
            <BtnMap click={nav} fcttarget={fcttarget} target={current} lock="/list/wishlist"/>
        </div>

    );

}

export default AddViews;
