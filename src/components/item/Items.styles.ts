// import { FullscreenExitOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: Flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    border:1px solid lightblue;
    border-radius: 20px;
    height: 100%;

    button{
        border-radius: 0 0 10px 10px;
    }

    img{
        max-height: 100px;
        object-fit:scale-down ;
        border-radius: 20px 20px 0 0;
    }

    div{
        font-family: Arial, Helvetica, sans-serif;
        padding:1rem;
        height:100%;
    }
`;