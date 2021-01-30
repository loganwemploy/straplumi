import React, { useState , useEffect } from 'react'
import styled from 'styled-components';

const StyledApiStrapiCall = styled.div`
  
`;

const ApiStrapiCall = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
      fetch('http://104.248.115.204/products')
      .then(res => res.json())
      .then(data => setProducts(data) )
    }, []);
    return (
        <StyledApiStrapiCall>
            <h1>products.name: {products[0].name}</h1>
        </StyledApiStrapiCall>
    )
}

export default ApiStrapiCall
