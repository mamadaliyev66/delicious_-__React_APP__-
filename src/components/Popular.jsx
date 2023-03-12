import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide,SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from "react-router-dom";


function Popular() {

    const [popular,setPopular]=useState([]);
    useEffect(()=> {
        getPopular()
    },[])



    const getPopular = async () => {

      const check=localStorage.getItem('popular');
            
      if(check){
        const checked=JSON.parse(check)
        // console.log(checked.recipes);
        setPopular(checked.recipes);
      }else{
        // console.log('check is false');
        const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        const data=await api.json();
        // console.log(data);
        setPopular(data.recipes);
        localStorage.setItem('popular',JSON.stringify(data));
      }

    }

  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>

        <Splide options={{
          perPage:4,
          arrows:false,
          drag:'free',
          pagination:false,
          gap:'5rem'
        }}>
        {popular.map((recipe)=>{
          return(
            <SplideSlide key={recipe.id}>
            <Card>
              <Link to={'/recipes/'+recipe.id}>
                <p >{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient/>
              </Link>
            </Card>
            </SplideSlide>
            
          )
        })}
        </Splide>
      </Wrapper>

    </div>
  )
}

const Wrapper = styled.div`
  margin:4rem 0rem;
`
const Card = styled.div`
  min-height:25rem;
  border-radius:2rem;
  overflow:hidden;
  position:relative;
  img{
    border-radius:2rem;
    position:absolute;
    left:0;
    height:100%;
    width:100%;
    object-fit:cover;
  }
  p{
    position:absolute;
    z-index:10;
    left:0%;
    bottom:0%;
    transform:translateX(-50%,0%);
    color:#fff;
    width:100%;
    text-align:center;
    font-size:1rem;
    font-weight:600;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;

  }



`

const Gradient = styled.div`
  z-index:3;
  position:absolute;
  width:100%;
  height:100%;
  background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`



export default Popular