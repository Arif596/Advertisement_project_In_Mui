import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import { gridpaper} from '../Style/Conts'
import { Box, Button, Paper, Typography } from '@mui/material';
export default function Papercom3() {
  return (
    <div>
       <Paper style={gridpaper}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "5px",
                  }}
                >
                  <Button
                    sx={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "12px",
                      background: "rgba(114, 58, 222, 0.10)",
                      color: "#723ADE1A",
                      marginTop: "10px",
                    }}
                  >
                    <SettingsIcon
                      sx={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "12px",
                        color: "#723ADE",
                      }}
                    />
                  </Button>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "10px",
                    }}
                  >
                    <Typography sx={{ color: "black", fontWeight: "bold" }}>
                      67%
                    </Typography>
                    <Typography
                      sx={{
                        color: "black",
                        fontWeight: "bold",
                        marginTop: "2px",
                      }}
                    >
                     Click Rates
                    </Typography>
                  </Box>
                </Box>
              </Paper>
    </div>
  )
}
