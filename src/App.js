import { Container, Paper } from '@mui/material';
import './App.css';
import { Button, Input } from '@mui/base';
import { padding } from '@mui/system';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container sx={{
          maxWidth: '400px'
        }}>
          <Paper sx={{
            marginTop: '2rem',
            padding: '1rem'
          }}>
            <Input fullWidth placeholder='First Name'/>
            <Input fullWidth placeholder='Last Name'/>
            <Input fullWidth placeholder='Website'/>
            <Button sx={{
              marginTop: '2px',
            }} variant='contained'>Submit</Button>
          </Paper>
        </Container>
      </header>
    </div>
  );
}

export default App;
