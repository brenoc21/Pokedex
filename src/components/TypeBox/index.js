import React, { useEffect, useState } from 'react';

 import { TypeContainer } from './styles';

function TypeBox({Type}) {
    const [color, setColor] = useState()
    const [background, setBackground] = useState()
    function getColor(){
        switch(Type){
            case "poison":
                setColor("#b97fc9")
                break;
            case "grass": 
                setColor("#9bcc50")
                break;
            case "psychic":
                setColor("#f366b9")
                break;
            case "ice":
                setColor("#51c4e7")
                break;
            case "fairy":
                setColor("#fdb9e9")
                break;
            case "steel":
                setColor("#9eb7b8")
                break;
            case "electric":
                setColor("#eed535")
                break;
            case "rock":
                setColor("#a38c21")
                break;
            case "ground":
                setColor("#linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)")
                break;
            case "flying":
                setBackground("linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)")
                break;
            case "bug":
                setColor("#729f3f")
                break;
            case "normal":
                setColor("#a4acaf")
                break;
            case "dragon":
                setBackground("linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)")
                break;
            case "ghost":
                setColor("#7b62a3")
                break;
            case "dark":
                setColor("#707070")
                break;
            case "water":
                setColor("#4592c4")
                break;
            case "fire":
                setColor("#fd7d24")
                break;
            case "fighting":
                setColor("#d56723")
                break;
        }
    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    useEffect(()=> {
        getColor()
    },[])
  return (
    <TypeContainer color={color} background={background}>
        {capitalizeFirstLetter(Type)}
    </TypeContainer>
  );
}

export default TypeBox;