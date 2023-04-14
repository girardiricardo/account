import { useEffect, useState } from 'react';

import { theme, fetchLoggedUser } from '@golden-gamble/utils';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const muiTheme = createTheme(theme);

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = fetchLoggedUser();

    setUser(data);
  }, [])

  if (!user) return <div>Loading..</div>

  return (
    <ThemeProvider theme={muiTheme}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 50 }}>
      <Paper elevation={5} sx={{ paddingLeft: 2, paddingRight: 2, width: 500, height: 90, backgroundColor: '#1A212A', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: 2 }}>
        <Typography variant="caption" color="white" sx={{ opacity: 0.4}}>Account ID</Typography>
        <Typography color="white">{user.accountId}</Typography>
      </Paper>
      <Paper elevation={5} sx={{ paddingLeft: 2, paddingRight: 2, width: 500, height: 90, backgroundColor: '#1A212A', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: 2 }}>
        <Typography variant="caption" color="white" sx={{ opacity: 0.4}}>Fullname</Typography>
        <Typography color="white">{user.fullName}</Typography>
      </Paper>
      <Paper elevation={5} sx={{ paddingLeft: 2, paddingRight: 2, width: 500, height: 90, backgroundColor: '#1A212A', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: 2 }}>
        <Typography variant="caption" color="white" sx={{ opacity: 0.4}}>Email</Typography>
        <Typography color="white">{user.email}</Typography>
      </Paper>
      <Paper elevation={5} sx={{ paddingLeft: 2, paddingRight: 2, width: 500, height: 90, backgroundColor: '#1A212A', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: 2 }}>
        <Typography variant="caption" color="white" sx={{ opacity: 0.4}}>Fullname</Typography>
        <Typography color="white">{user.fullName}</Typography>
      </Paper>
      <Paper elevation={5} sx={{ paddingLeft: 2, paddingRight: 2, width: 500, height: 90, backgroundColor: '#1A212A', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: 2 }}>
        <Typography variant="caption" color="white" sx={{ opacity: 0.4}}>Balance</Typography>
        <Typography color="white">{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(user.balance)}</Typography>
      </Paper>
      </div>
    </ThemeProvider>
  )
}

export default App;