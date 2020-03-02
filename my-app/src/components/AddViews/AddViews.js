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
    const delay = useRef(600)
    const useStyles = makeStyles( () => createStyles({
        transition: {
            transition: `all ${delay.current}ms cubic-bezier(0.55, 0.06, 0.68, 0.19)`,
            opacity: "0",
            filter: "blur(25px)"
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
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// display the view and add hammer js event
    useEffect( () => {

        const views = document.querySelectorAll('.view')
        const app = document.querySelector('#views')

        views.forEach((el, i) => {
            let x = (window.innerWidth * (i))
            el.style.transform = "translate3d("+x+"px, 0px, 0px)";
        })
        
        const hammer = new Hammer(app) 
        hammer.on('swipeleft', e => {
            nav(ref.current+1)
        })
        hammer.on('swiperight', e => {
            nav(ref.current-1)
        })

    }, []);
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// transition
    useEffect(() => {
        const self = document.querySelector("#transi")
        const reverse = Object.assign([], self.childNodes).reverse()

        self.style.opacity = 1
        self.style.filter = "blur(0)"

        reverse.forEach((el, i) => {
            el.style.opacity = 0

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
        if(target >= 0 && target < 2 ){
            document.querySelector('#views').style.transform = "translate3d("+destination+"px, 0px, 0px)";
            ref.current = target
            setCurrent(target)
        }

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
