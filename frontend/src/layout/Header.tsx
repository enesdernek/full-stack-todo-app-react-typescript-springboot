import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AppsIcon from '@mui/icons-material/Apps';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { changeTheme } from '../redux/slices/appSlice';

function Header() {

    const dispatch = useDispatch()
    const theme = useSelector((state: RootState) => state.app.theme)

    const backgroundColor = theme === "dark" ? "#121212" : "#FAFAFA"
    const color = theme === "light" ? "#121212" : "#FAFAFA"

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor, color }}>
                <Container>

                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{
                                mr: 2,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1, 
                                flexGrow: 1 
                            }}
                        >
                            <AppsIcon />
                            <Typography variant="h6" component="span" sx={{ fontSize: '1.25rem' }}>
                                Todo App
                            </Typography>
                        </IconButton>

                        {theme === "light" ? (
                            <IconButton onClick={() => dispatch(changeTheme())}>
                                <LightModeIcon />
                            </IconButton>
                        ) : (
                            <IconButton onClick={() => dispatch(changeTheme())}>
                                <DarkModeIcon sx={{ color: "#FAFAFA" }} />
                            </IconButton>
                        )}
                    </Toolbar>
                </Container>

            </AppBar>
        </Box>
    )
}

export default Header    