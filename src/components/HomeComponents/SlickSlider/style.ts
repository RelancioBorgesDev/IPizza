import styled from 'styled-components';
import Slider from "react-slick";



export const SliderContainer = styled(Slider)`
   .slick-list {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem;


  }

  .slick-track{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

   
  }

  .slick-slide{
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  
`;
