import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Logo from '../Logo.svg'; // Adjust path as needed
import Test from './test';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


// Custom hook for window size
function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
  
}

export default function Test2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTab = useMediaQuery(theme.breakpoints.down('md'));
  
  //const [width, height] = useWindowSize(); // Using the custom hook
  const [drawerOpen, setDrawerOpen] = useState(false);
  const Bsize=isMobile?"small":"large";
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Test />

      <AppBar position="absolute" color="transparent" elevation={0} sx={{
        border: '2px solid #e7f5ff',
        backgroundColor: 'transparent',
        marginTop: '20px',
        borderRadius: '10px',
        padding: isMobile ? "10px" : 'none',

        position:"absolute"
      }}>
        <Toolbar>
          {isMobile &&  (
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <img src={Logo} alt="Logo" style={{ width: isMobile ? '80%' : isTab ? "100%" :"130%" , maxWidth: '200px', marginRight: '10px' }} />

          {!isMobile && (
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button color="inherit" >Home</Button>
              </Grid>
              <Grid item>
                <Button color="inherit">About</Button>
              </Grid>
              <Grid item>
                <Button color="inherit">Contact</Button>
              </Grid>
            </Grid>
          )}

          <IconButton color="inherit" edge="end" style={{justifyContent:"end"}}>
            <Button variant="contained"  size={Bsize} >Enquire Now</Button>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          {['Home', 'About', 'Contact'].map((text) => (
            <ListItem button key={text} onClick={() => setDrawerOpen(false)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box className="App" sx={{
        marginTop: isMobile? '-350px' :isTab?"-390px" : '-450px', // Using the width from useWindowSize
        justifyContent: 'center',
        textAlign: 'center',
        position: 'absolute'
      }}>
        <h1 className="bigHeading" style={{textDecoration:"underline",textDecorationThickness:isMobile?"2px":isTab?"4px":"",fontSize:isMobile?"50px":"70px"}}>techvertors</h1>
        <h1 style={{ marginTop: isMobile ? '-45px' : '-60px', color: '#1e6eb5',fontSize:isMobile?"20px":"30px" }}>together we grow</h1>
        <pre className="ptag" style={{ 
          margin: "0 90px",
          fontSize: isMobile?'15px' :isTab? "15px":'20px',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          overflowWrap: 'break-word'
        }}>
          Are you tired of dealing with the same old problems over and over again? Techvestors offers a fresh perspective. Our team of techies invests in the latest and greatest technology to solve your challenges once and for all.
        </pre>
        <Box style={{marginTop: "20px", justifyContent: "center", display: "flex", gap: "20px"}}>
          <Button variant="outlined" size={Bsize} >
            Work with us
          </Button>
          <Button variant="contained" size={Bsize}>Enquire Now</Button>
        </Box>
      </Box>
    </Box>
  );
}
