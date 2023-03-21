import { Box, Grid, Grow } from '@mui/material';
import React from 'react'

const VideoLayout = ({ videos }) => {
    return (
        <Grid container sx={{
            py: "30px",
            alignSelf: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
        }}>
            {
                videos?.slice(0, 12).map((item, index) => (
                    <VideoCard video={item} key={index} i={index} />
                ))
            }
        </Grid>
    );
}


function VideoCard({ video, i }) {
    return (
        <Box sx={{ padding: "10px", backgroundColor: 'transparent', maxWidth: 270, borderRadius: '10px', "&:hover": { transform: 'scale(1.02)', cursor: "pointer" } }}>
            <Grow in key={i} timeout={(i + 1) * 250}>
                <Box
                    component="video"
                    style={{
                        height: '150px', width: '100%', borderRadius: '10px',

                    }}
                    muted='muted'
                    onMouseOver={event => event.target.play()
                    }
                    onMouseOut={event => event.target.pause()}
                    src={video.videoLink}
                >
                    as
                </Box>
            </Grow>
        </Box>
    )
}

export default VideoLayout