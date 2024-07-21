import './BurgerStyle.css';
import { useState } from 'react';

export default function Burger () {

    const [ layers, setLayers ] = useState({lettuce: 0,
                                            tomato: 0,
                                            eggs: 0,
                                            meat: 0});
   
    const addRemoveIngredient = (action, ingredient) => {

        // ...layers - spreads "layers" object into separate variables
        // [ingredient]:layers[ingredient]+1 - substitutes property "ingredient"'s old value
        //                   with new value
        // {} - constructs the object again

        action === 'add' ? setLayers({...layers, [ingredient]:layers[ingredient]+1}) 
                         : layers[ingredient] > 0 && setLayers({...layers, [ingredient]:layers[ingredient]-1});
        


        // MISSION02: set new value of the state 
        //            while adding or removing 1 to the amount
        //            of layers.
        //            "action" value could be "add" or "remove"
        

    }

    // MISSION03: Copy Burger.js to Burger2.jsx
    //    and change this new component in the way
    //    that the layers will be shown by the order of
    //    their addition and not together by side type like here
    ////////////////////////////////
    // For example we could see in <Burger2 />:
    //     lettuce, meat, eggs, meat, tomatoes, eggs, lettuce

    const burgerContent = () => {
        
        let burger = [];


        // outputting the lettuce
        for (let i = 0; i < layers.lettuce; i++){
            burger.push(<div key={burger.length} className="lettuseSide"></div>);
        }
        // outputting the tomato
        for (let i = 0; i < layers.tomato; i++){
            burger.push(<div key={burger.length} className="tomatoSide"></div>);
        }
        // outputting the eggs
        for (let i = 0; i < layers.eggs; i++){
            burger.push(<div key={burger.length} className="eggsSide"></div>);
        }
        // outputting the meat
        for (let i = 0; i < layers.meat; i++){
            burger.push(<div key={burger.length} className="meatSide"></div>);
        }
        if(burger.length === 0)
            burger.push(<p key="0">Please start adding ingredients!</p>);
        return burger;
    }

    
        return (
            <div className="Burger">
                <div className="burgerIngredients">
                    <div className="topSide"></div>
                    {burgerContent()}
                    <div className="bottomSide"></div>
                </div>

                <input onChange={handleChange} />
                <h2>Prev layers= lettuce: ?, tomato: ?</h2>

                <div className="ingredientsBlock">
                    <p>Lettuce</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={()=>{addRemoveIngredient("add","lettuce");}}>Add</button>
                        <button className="ingrBtn" onClick={()=>{addRemoveIngredient("remove","lettuce")}}>Remove</button>
                    </div>
                    <p>TOMATO</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={()=>{addRemoveIngredient("add","tomato")}}>Add</button>
                        <button className="ingrBtn" onClick={()=>{addRemoveIngredient("remove","tomato")}}>Remove</button>
                    </div>
                    <p>EGGS</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={()=>{addRemoveIngredient("add","eggs")}}>Add</button>
                        <button className="ingrBtn" onClick={()=>{addRemoveIngredient("remove","eggs")}}>Remove</button>
                    </div>
                    <p>MEAT</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={()=>{addRemoveIngredient("add","meat")}}>Add</button>
                        <button className="ingrBtn" onClick={()=>{addRemoveIngredient("remove","meat")}}>Remove</button>
                    </div>
                </div>
            </div>
        );

}