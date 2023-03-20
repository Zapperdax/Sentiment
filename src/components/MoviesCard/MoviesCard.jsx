import { Box, Card, CardMedia, Grid, Grow, Typography } from '@mui/material';
import React from 'react';

const MoviesCard = ({ movie, i }) => {
    return (
        <Grid item xs={12} sm={4} md={4} lg={3} sx={{ py: '20px', }}>
            <Grow in key={i} timeout={(i + 1) * 250}>
                <Box sx={{
                    // maxWidth: '200px',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Box component={Card}
                        sx={{
                            alignItems: 'center',
                            borderRadius: 5,
                        }}>
                        <CardMedia
                            component="img"
                            // src={test}
                            src={movie.imageUrl}
                            alt="Movie Cover"
                            sx={{
                                height: "280px",
                                opacity: 1,
                                background: 'red', p: 0, m: 0,
                                objectFit: 'fill',
                                "&:hover": {
                                    transform: 'scale(1.05)',
                                    opacity: 0.5,
                                    cursor: 'pointer',
                                }
                            }}
                        />

                    </Box>
                    <Box
                        sx={{
                            color: 'white',
                            p: 0.3,
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                alignSelf: 'center',
                                textColor: 'white',
                                fontWeight: 'bold',
                                letterSpacing: '0.2px',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                width: '200px',
                                overflow: 'hidden',
                                textAlign: 'center'
                            }}
                        >
                            {movie.title}
                        </Typography>
                    </Box>
                </Box>
            </Grow>

        </Grid >
    );
};

export default MoviesCard;
/* <Stack sx={{ color: 'white', width: 220, }}>
    <Box component="img" src={test} sx={{ height: 300, borderRadius: "10px", "&:hover": { transform: 'scale(1.05)' } }} />
</Stack> */