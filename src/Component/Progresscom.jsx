import { Box, LinearProgress, Paper, Typography } from '@mui/material'
import React from 'react'
import {papernewstyle} from '../Style/Conts'
export default function Progresscom() {
  return (
    <div>
       <Paper style={papernewstyle}>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Typography sx={{ color: "black", mt: 3, ml: 2 }}>
              Miami, FL
            </Typography>
            <LinearProgress
              value={15}
              sx={{
                width: "434px",
                height: "10px",
                borderRadius: "60px",
                background: "#723ADE",
                mt: 2,
                ml: 7,
              }}
            />
            <p
              style={{ marginTop: "13px", marginLeft: "4px", color: "#723ADE" }}
            >
              15%
            </p>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Typography sx={{ color: "black", mt: 2, ml: 2 }}>
              New York, NY
            </Typography>
            <LinearProgress
              value={15}
              sx={{
                width: "372px",
                height: "10px",
                borderRadius: "60px",
                background: "#723ADE",
                mt: 2,
                ml: 4,
              }}
            />
            <p
              style={{ marginTop: "13px", marginLeft: "4px", color: "#723ADE" }}
            >
              12%
            </p>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Typography sx={{ color: "black", mt: 2, ml: 2 }}>
              Boston, MA
            </Typography>
            <LinearProgress
              value={15}
              sx={{
                width: "321px",
                height: "10px",
                borderRadius: "60px",
                background: "#723ADE",
                mt: 2,
                ml: 5.5,
              }}
            />
            <p
              style={{ marginTop: "13px", marginLeft: "4px", color: "#723ADE" }}
            >
              10%
            </p>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Typography sx={{ color: "black", mt: 2, ml: 2 }}>
              Austin, TX
            </Typography>
            <LinearProgress
              value={15}
              sx={{
                width: "272px",
                height: "10px",
                borderRadius: "60px",
                background: "#723ADE",
                mt: 2,
                ml: 7,
              }}
            />
            <p
              style={{ marginTop: "13px", marginLeft: "4px", color: "#723ADE" }}
            >
              8%
            </p>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Typography sx={{ color: "black", mt: 2, ml: 2, mb: 2 }}>
              Denver, CO
            </Typography>
            <LinearProgress
              value={15}
              sx={{
                width: "207px",
                height: "10px",
                borderRadius: "60px",
                background: "#723ADE",
                mt: 2,
                ml: 6.5,
              }}
            />
            <p
              style={{ marginTop: "13px", marginLeft: "4px", color: "#723ADE" }}
            >
              5%
            </p>
          </Box>
        </Paper>
    </div>
  )
}
