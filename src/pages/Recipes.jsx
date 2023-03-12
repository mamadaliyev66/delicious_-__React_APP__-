import { useEffect,useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react'


function Recipes() {
  const params=useParams()
  const [detail,setDetail] =useState({})
  const [activeTab,setActiveTab] = useState('instructions')

  const fetchDetails=async ()=>{
    const data=await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const result=await data.json()
    setDetail(result)
  }
  useEffect(() =>{
    fetchDetails()
  },[params.name])

  return (
      <DetaillWrapper>
        <div>
          <h2>{detail.title}</h2>
          <img src={detail.image} alt={detail.title} />
        </div>
        <Info>
          <Button className={activeTab == 'instructions' ? "active": ""} onClick={()=>{setActiveTab('instructions')}}>Instructions</Button>
          <Button className={activeTab == 'ingredients' ? "active": ""} onClick={()=>{setActiveTab('ingredients')}}>Ingredients</Button>

        {activeTab === 'instructions' && ( 
        <div>
            <h3 dangerouslySetInnerHTML={{__html:detail.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html:detail.instructions}}></h3>
        </div>
        )}    
         {activeTab ==='ingredients' && (
          <ul>
          {detail.extendedIngredients.map((ingredient)=>{
            return(
              <li key={ingredient.id}>
                {ingredient.original}
              </li>
            )
          })}
          
          </ul>

         )}
           
        
        </Info>
      </DetaillWrapper>

  )
}


const DetaillWrapper = styled.div`
  margin-bottom:5rem;
  margin-top:10rem;
  display:flex;

  .active{
    background:linear-gradient(35deg,#494949,#313131);
    color:white;
  }

  h2{
    margin-bottom:2rem;

  }
  li{
    font-size:1.5rem;
    line-height:2.5rem;
  }
  ul{
    margin-top:2rem; 
  }


`
const Button= styled.button`
padding:1rem 2rem;
color:#313131;
background:white;
border:2px solid black;
margin-right:2rem;
font-weight:600;
`

const Info = styled.div`
margin-left:10rem;
`




export default Recipes