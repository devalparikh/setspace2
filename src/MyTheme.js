import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import shadows from '@material-ui/core/styles/shadows';

export default createMuiTheme({
    palette: {
        primary: { // works
          main: '#165788',
          contrastText: '#fff',
        },
        secondary: { // works
          main: '#69BE28',
          contrastText: '#fff',
        },
        companyBlue: { // doesnt work - defaults to a grey button
            main: '#65CFE9',
            contrastText: '#fff',
        },
        companyRed: { // doesnt work - grey button
            main: '#E44D69',
            contrastText: '#000',
        },
        appBar: { 
            //backgroundColor: '#282c3400', // Transparent
            backgroundColor: 'black',
            fontWeight: '700',
            boxShadow: 'none',
            color: '#fff'
        },
        wideBtn: {
            backgroundColor: '#282c34',
            color: 'white',
            width: '19.5rem',
            height: '50px',
            border: '3px',
        }
    },
});