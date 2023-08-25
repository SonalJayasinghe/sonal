import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from "../components/NavBar/navbar";
import NotFound404 from '../components/NotFound404'
import { useEffect, useLayoutEffect } from 'react';

function PageNotFound() {
    useEffect(() => {
        document.title = "404 Page Not Found";
      }, []);


  useLayoutEffect(() => {
    window.scrollTo(0, 0)
}, []);
      
  return (
    <Grid>
    <GridItem>
      <NavBar></NavBar>
    </GridItem>
    <GridItem>
      <NotFound404/>
    </GridItem>
  </Grid>
  )
}

export default PageNotFound