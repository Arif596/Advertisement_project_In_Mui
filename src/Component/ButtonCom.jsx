import React from 'react'
import {stylebtn} from '../Style/Conts'
import { Button } from '@mui/material'
export default function ButtonCom() {
  return (
    <div>
       <div
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              gap:'7px',
            }}
          >
            <div
              style={{
                background: "#F3EDFF",
                borderRadius: "10px",
                padding: "8px 10px",
                
              }}
            >
              <Button style={stylebtn}>Miami</Button>
            </div>

            <div
              style={{
                background: "#F3EDFF",
                borderRadius: "10px",
                padding: "8px 10px",
              
              }}
            >
              <Button style={stylebtn}>Texas</Button>
            </div>
            <div
              style={{
                background: "#F3EDFF",
                borderRadius: "10px",
                padding: "8px 10px",
               
              }}
            >
              <Button  style={stylebtn}>NewYork</Button>
            </div>
          </div>
    </div>
  )
}
