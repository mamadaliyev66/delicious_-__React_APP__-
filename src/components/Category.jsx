import {FaPizzaSlice,FaHamburger} from "react-icons/fa"
import {GiNoodles,GiChopsticks} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import styled from "styled-components"
import { NavLink } from "react-router-dom"

function Category() {
  return (
    <Link>
        
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>

        <SLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        
        <SLink to={'/'}>
            <AiFillHome/>
            <h4>Home</h4>
        </SLink>
        
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>
        
        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </SLink>


    </Link>
  )
}

const Link=styled.div`
    display:flex;
    justify-content:center;
    margin:2rem 0rem;
`;
const SLink = styled(NavLink)`
    display:flex;
    display-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    margin-right:2rem;
    text-decloration:none;
    background:linear-gradient(35deg,#494949,#313131);
    width:5rem;
    height:5rem;
    transfrom:scale(0.8)
    cursor:pointer;
    h4{
        color:white;
        font-size:0.8rem;
    }
    svg{
        color:white;
        font-size:1.5rem;
    }

    &.active{
        background:linear-gradient(to right,#f27121,#e94057);
        text-decoration:none;
    }

`


export default Category

