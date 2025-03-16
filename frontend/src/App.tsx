import { Container, Typography } from '@mui/material';
import { PersonSearch } from './components/PersonSearch';

function App() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Vector Search Demo
      </Typography>
      <PersonSearch />
    </Container>
  );
}

export default App;
