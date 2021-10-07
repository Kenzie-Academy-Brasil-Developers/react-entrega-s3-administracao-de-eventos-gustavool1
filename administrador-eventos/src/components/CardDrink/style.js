import styled from "styled-components"
export const Card = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 1px solid red;
    min-width: 300px;
    max-width: 300px;
    
    margin: 10px;
    h1{
        font-size: 25px;
        font-weight: 500;
    }
    img{
        width:150px;
        height: 200px;
    }
    p{
        text-align: center;
        max-width: 20ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`

