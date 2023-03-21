import { Box, Card, CardMedia, Grid, Grow, Typography } from '@mui/material';
import React from 'react';

const SongsLayout = ({ songs }) => {
    return (
        <Grid container sx={{
            py: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
        }}>
            {
                songs?.slice(0, 12).map((item, index) => (
                    <SongsCard song={item} key={index} i={index} />
                ))
            }
        </Grid>
    );
};

const SongsCard = ({ song, i }) => {
    return (
        <Grid item xs={12} sm={6} md={6} lg={4} sx={{ py: '10px', }
        }>
            <Grow in key={i} timeout={(i + 1) * 250}>
                <Box sx={{
                    gap: 2,
                    display: 'flex', flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Box component={Card}
                        sx={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 5,
                        }}>
                        <CardMedia
                            component="img"
                            // src={test}
                            src={song.imageUrl}
                            alt="Movie Cover"
                            sx={{
                                height: "100px",
                                opacity: 1,
                                background: 'red', p: 0, m: 0,
                                objectFit: 'repeat',
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
                            // variant="h6"
                            sx={{
                                alignSelf: 'center',
                                textColor: 'white',
                                fontWeight: 'bold',
                                letterSpacing: '0.2px',
                                fontSize: "12px",
                                width: '200px',
                                // textOverflow: 'ellipsis',
                                // whiteSpace: 'nowrap',
                                // overflow: 'hidden',
                                // textAlign: 'center'
                            }}
                        >
                            {song.title.slice(3)}
                        </Typography>
                    </Box>
                </Box>
            </Grow>

        </Grid >
    )
}

export default SongsLayout;
