import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { api } from '../services/api';
import { VectorSearchResponse } from '../types/Person';

export const PersonSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<VectorSearchResponse[]>([]);

  const handleSearch = async () => {
    try {
      const response = await api.searchPersons({ query, k: 5 });
      setResults(response.data);
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  return (
    <div>
      <TextField
        fullWidth
        label="Search People"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
      <List>
        {results.map((person) => (
          <ListItem key={person.id}>
            <ListItemText
              primary={person.name}
              secondary={`${person.title} at ${person.company} (Score: ${person.score.toFixed(2)})`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
