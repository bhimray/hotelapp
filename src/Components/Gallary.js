import React from 'react';
import {useState} from "react";
import "./Gallary.css";
import CloseIcon from '@mui/icons-material/Close';
import img1 from "./images/breakFast.jpg"
import img2 from "./images/eatingPeople.jpg"
import img3 from "./images/dinnerGlass.jpg"
import img4 from "./images/city.jpg"
import img5 from "./images/blueStreet.jpg"
import img6 from "./images/drinkingGlass.jpg"
import img7 from "./images/shadowCity.jpg"
import img8 from "./images/openHotel.jpg"
import img9 from "./images/sittingHall.jpg"

const itemData = [
    {
      img: img1,
      title: 'Breakfast',
      author: '@bkristastucchio',
      
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: img2,
      title: 'Party',
      author: '@arwinneil',
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: img4,
      title: 'Bed Room',
      author: '@peterlaster',
    },
    {
      img: img3,
      title: 'Dinner',
      author: '@southside_customs',
    },
    {
      img: img9,
      title: 'Breakfast',
      author: '@bkristastucchio',
      
    },
    {
      img: img8,
      title: 'Breakfast',
      author: '@bkristastucchio',
      
    },
    {
      img: img7,
      title: 'Breakfast',
      author: '@bkristastucchio',
      
    },
    {
      img: img6,
      title: 'Breakfast',
      author: '@bkristastucchio',
      
    },
    {
      img: img5,
      title: 'Breakfast',
      author: '@bkristastucchio',
      
    },
  ];


const Photos=()=>{
    const [model, setModel]= useState(false);
    const [tempImg, setTempImg]=useState("");

    const getImg=(img)=>{
      console.log(`clicked image is ${img}`);
      setTempImg(img);
      setModel(true);
      console.log(`clicked image is ${setModel}`);
    }
    return(
        <div className='gallaryCont'>
          <div className='gallaryhead'>
            <h1>Gallary</h1>
            <span>The best and best moment of life</span>
          </div>
          
            <div className={model? "model open": "model"}>
              <img className="img" src={tempImg} onClick={()=>setModel(false)}/>
            </div>
            <div className='gallary'>
                {itemData.map((photo, index)=>{
                    console.log(photo, index);
                    return(
                        <div className='pics' key={index} onClick={()=>getImg(photo.img)}>
                            <img src={photo.img} style={{width:"100%"}} />
                            <article>{photo.title}</article>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    );
};

export default Photos;


