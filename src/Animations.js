import React, { useState, useLayoutEffect  } from 'react';
import "./styles.css";
import { motion } from "framer-motion";

export default function Animations() {
    const [xCoord, setXCoord] = useState(0);
    const [yCoord, setYCoord] = useState(0);

    useLayoutEffect(() => {
        const handleResize = () => {
        setXCoord(window.innerWidth * 0.31); // Adjust multiplier as needed
        setYCoord(window.innerHeight * 0.1); // Adjust multiplier as needed
        };

        // Initial call to set initial coordinates
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className = "Animations" style={{ display: 'flex', justifyContent: 'center' }}>
          {/* Static squares */}
          <motion.div
            style={{
              x: "575%",
              y: '700%',
              width: '200px',
              height: '20px',
              background: '#5F9EA0',
              borderRadius: '10px',
              position: 'relative',
            }}
            whileTap={{ scale: 0.8 }}
          />
          <motion.div
            style={{
            x: '220%',
            y: '40%', // Adjust vertical position as needed
            color: 'white',
            fontSize: '50px',
            fontWeight: 'bold',
            position: 'relative',
            }}
           >
                Omer Mohiuddin  
          </motion.div>
          <motion.div
            style={{
            x: '334%',
            y: '67%', // Adjust vertical position as needed
            color: 'white',
            fontSize: '15px',
            fontWeight: 'bold',
            position: 'relative',
            }}
           >
            Back-End Developer
          </motion.div>
          <motion.div
            style={{
              x: "130%",
              y: '400%',
              width: '400px',
              height: '20px',
              background: '#FF7F50',
              borderRadius: '10px',
              position: 'relative',
            }}
            whileTap={{ scale: 0.8 }}
          />
          <motion.div
            style={{
                x: '-3000%',
                width: '2px',
                height: '500px', // Adjust height to match the total height of the squares
                background: 'white',
                borderRadius: '10px',
            }}
           />
          
    
          {/* Moving squares */}
          <motion.div
            initial={{ x: '100%', y: '500%' }}
            animate={{ x: -45, y: 80 }}
            transition={{ duration: 2 }}
            style={{
              width: '140px',
              height: '20px',
              borderRadius: '10px',
              background: '#DCDCDC',
            }}
          />
          <motion.div
            initial={{ x: '100%', y: '100%' }}
            animate={{ x: -176, y: 30 }}
            transition={{ duration: 1 }}
            style={{
              width: '500px',
              height: '20px',
              borderRadius: '10px',
              background: '#FFF0F5',
            }}
          />
          <motion.div
            initial={{ x: '100%', y: '100%' }}
            animate={{ x: -635, y: 400 }}
            transition={{ duration: 1 }}
            style={{
              width: '500px',
              height: '20px',
              borderRadius: '10px',
              background: '#7B68EE',
            }}
          />
          <motion.div
            initial={{ x: '100%', y: '100%' }}
            animate={{ x: -1095, y: 450 }}
            transition={{ duration: 1 }}
            style={{
              width: '600px',
              height: '20px',
              borderRadius: '10px',
              background: '#DB7093',
            }}
          />
        </div>
      );
}
