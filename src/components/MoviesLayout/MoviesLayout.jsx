import { Grid, Stack } from '@mui/material'
import React from 'react'
import { MoviesCard } from '..'

const MoviesLayout = ({ movies }) => {
    return (
        <Grid container sx={{
            py: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
        }}>
            {/* <MoviesCard movie={movies} /> */}
            {
                movies.slice(0, 12).map((item, index) => (
                    <MoviesCard key={index} movie={item} i={index} />
                ))
            }
        </Grid >
    )
}

export default MoviesLayout