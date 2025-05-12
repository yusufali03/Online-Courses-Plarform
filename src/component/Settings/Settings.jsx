// // src/pages/Settings/Settings.jsx

// import React, { useState, useContext, useEffect } from 'react';
// import {
//   Box,
//   List,
//   ListItemButton,
//   ListItemText,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   Avatar,
//   InputAdornment,
//   IconButton,
//   Grid,
// } from '@mui/material';
// import {
//   Visibility,
//   VisibilityOff,
// } from '@mui/icons-material';
// import AuthContext from '../../contexts/AuthContext';
// import './Settings.scss';

// // replace these imports with your actual image paths
// import visaLogo   from '../../assests/images/visa.png';
// import paymeLogo  from '../../assests/images/payme.png';
// import uzumLogo   from '../../assests/images/uzum.jpg';
// import clickLogo  from '../../assests/images/click.png';

// export default function Settings() {
//   const { user = {} } = useContext(AuthContext);

//   const [section, setSection] = useState('profile');

//   // Profile state
//   const [firstName, setFirstName] = useState('');
//   const [lastName,  setLastName]  = useState('');
//   const [phone,     setPhone]     = useState('');

//   // Photo state
//   const [photoFile,    setPhotoFile]    = useState(null);
//   const [photoPreview, setPhotoPreview] = useState(null);

//   // Security state
//   const [currentPwd, setCurrentPwd] = useState('');
//   const [newPwd,     setNewPwd]     = useState('');
//   const [confirmPwd, setConfirmPwd] = useState('');
//   const [showCurrent, setShowCurrent] = useState(false);
//   const [showNew,     setShowNew]     = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);

//   // When user loads
//   useEffect(() => {
//     setFirstName(user.full_name?.split(' ')[0] || '');
//     setLastName(user.full_name?.split(' ')[1]  || '');
//     setPhone(user.phone_number || '');
//     setPhotoPreview(user.profile_picture || null);
//   }, [user]);

//   const onPhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setPhotoFile(file);
//       setPhotoPreview(URL.createObjectURL(file));
//     }
//   };

//   // Submit handlers (stubbed)
//   const handleProfileSave = () => alert(`Save profile: ${firstName} ${lastName}, ${phone}`);
//   const handlePhotoSave   = () => alert(`Upload photo: ${photoFile?.name}`);
//   const handlePwdChange   = () => alert(`Change pwd: current=${currentPwd}, new=${newPwd}`);
//   const handleSubscribe   = () => alert('Subscribe now!');

//   return (
//     <Box className="settings-container" mt={"20vh"} >
//       {/* Sidebar */}
//       <Paper className="settings-sidebar" elevation={2}>
//         <Typography variant="h6" gutterBottom>
//           Settings
//         </Typography>
//         <List component="nav">
//           <ListItemButton selected={section==='profile'} onClick={()=>setSection('profile')}>
//             <ListItemText primary="Profile" />
//           </ListItemButton>
//           <ListItemButton selected={section==='photo'} onClick={()=>setSection('photo')}>
//             <ListItemText primary="Photo" />
//           </ListItemButton>
//           <ListItemButton selected={section==='security'} onClick={()=>setSection('security')}>
//             <ListItemText primary="Account Security" />
//           </ListItemButton>
//           <ListItemButton selected={section==='payment'} onClick={()=>setSection('payment')}>
//             <ListItemText primary="Payment Methods" />
//           </ListItemButton>
//         </List>
//       </Paper>

//       {/* Content */}
//       <Box className="settings-content">
//         {/* Profile */}
//         {section==='profile' && (
//           <Paper className="settings-form" elevation={1}>
//             <Typography variant="h5" gutterBottom>Profile</Typography>
//             <TextField
//               fullWidth label="First Name" margin="normal"
//               value={firstName} onChange={e=>setFirstName(e.target.value)}
//             />
//             <TextField
//               fullWidth label="Last Name"  margin="normal"
//               value={lastName}  onChange={e=>setLastName(e.target.value)}
//             />
//             <TextField
//               fullWidth label="Phone Number" margin="normal"
//               value={phone} onChange={e=>setPhone(e.target.value)}
//             />
//             <Box sx={{ mt:2, textAlign:'right' }}>
//               <Button variant="contained" onClick={handleProfileSave}>
//                 Save Changes
//               </Button>
//             </Box>
//           </Paper>
//         )}

//         {/* Photo */}
//         {section==='photo' && (
//           <Paper className="settings-form" elevation={1}>
//             <Typography variant="h5" gutterBottom>Change Photo</Typography>
//             <Box sx={{ display:'flex', alignItems:'center', mb:2 }}>
//               <Avatar
//                 src={photoPreview}
//                 sx={{ width:80, height:80, mr:2, bgcolor:'secondary.main' }}
//               >
//                 {!photoPreview && (
//                   user.full_name?.split(' ').map(n=>n[0]).join('').toUpperCase()
//                 )}
//               </Avatar>
//               <Button variant="outlined" component="label">
//                 Choose File
//                 <input type="file" hidden accept="image/*" onChange={onPhotoChange}/>
//               </Button>
//             </Box>
//             <Box sx={{ textAlign:'right' }}>
//               <Button
//                 variant="contained"
//                 disabled={!photoFile}
//                 onClick={handlePhotoSave}
//               >
//                 Upload
//               </Button>
//             </Box>
//           </Paper>
//         )}

//         {/* Security */}
//         {section==='security' && (
//           <Paper className="settings-form" elevation={1}>
//             <Typography variant="h5" gutterBottom>Account Security</Typography>
//             <TextField
//               fullWidth label="Current Password" type={showCurrent?'text':'password'} margin="normal"
//               value={currentPwd} onChange={e=>setCurrentPwd(e.target.value)}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={()=>setShowCurrent(!showCurrent)} edge="end">
//                       {showCurrent ? <VisibilityOff/> : <Visibility/>}
//                     </IconButton>
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <TextField
//               fullWidth label="New Password" type={showNew?'text':'password'} margin="normal"
//               value={newPwd} onChange={e=>setNewPwd(e.target.value)}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={()=>setShowNew(!showNew)} edge="end">
//                       {showNew ? <VisibilityOff/> : <Visibility/>}
//                     </IconButton>
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <TextField
//               fullWidth label="Confirm New Password" type={showConfirm?'text':'password'} margin="normal"
//               value={confirmPwd} onChange={e=>setConfirmPwd(e.target.value)}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={()=>setShowConfirm(!showConfirm)} edge="end">
//                       {showConfirm ? <VisibilityOff/> : <Visibility/>}
//                     </IconButton>
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <Box sx={{ mt:2, textAlign:'right' }}>
//               <Button variant="contained" onClick={handlePwdChange}>
//                 Change Password
//               </Button>
//             </Box>
//           </Paper>
//         )}

//         {/* Payment */}
//         {section==='payment' && (
//           <Paper className="settings-form" elevation={1}>
//             <Typography variant="h5" gutterBottom>Payment Methods</Typography>
//             <Typography variant="body1" color='black'>
//               We accept:
//             </Typography>
//             <Grid container spacing={2} alignItems="center">
//               {[visaLogo, paymeLogo, uzumLogo, clickLogo].map((logo, i) => (
//                 <Grid item key={i} xs={3}>
//                   <Box component="img" src={logo} alt="" sx={{width:"15vw", height:"30vh"}} />
//                 </Grid>
//               ))}
//             </Grid>
//             <Typography variant="body2" sx={{ mt:2 }}>
//               To subscribe, choose your preferred method above and follow its instructions.
//             </Typography>
//             <Box sx={{ mt:2, textAlign:'right' }}>
//               <Button variant="contained" onClick={handleSubscribe}>
//                 Subscribe Now
//               </Button>
//             </Box>
//           </Paper>
//         )}
//       </Box>
//     </Box>
//   );
// }


// src/pages/Settings/Settings.jsx

import React, { useState, useContext, useEffect } from 'react';
import {
  Box, List, ListItemButton, ListItemText,
  TextField, Button, Typography, Paper, Avatar,
  InputAdornment, IconButton, Grid,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import api from '../../api';                                // ← your axios instance
import { toast, ToastContainer } from 'react-toastify';    // ← toasts
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../../contexts/AuthContext';
import './Settings.scss';

import visaLogo  from '../../assests/images/visa.png';
import paymeLogo from '../../assests/images/payme.png';
import uzumLogo  from '../../assests/images/uzum.jpg';
import clickLogo from '../../assests/images/click.png';

export default function Settings() {
  const { user = {}, refreshUser } = useContext(AuthContext);

  const [section, setSection] = useState('profile');

  // Profile form
  const [firstName, setFirstName] = useState('');
  const [lastName,  setLastName]  = useState('');
  const [phone,     setPhone]     = useState('');
  const [profileLoading, setProfileLoading] = useState(false);

  // Photo upload
  const [photoFile,    setPhotoFile]    = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoLoading, setPhotoLoading] = useState(false);

  // Password change
  const [currentPwd, setCurrentPwd] = useState('');
  const [newPwd,     setNewPwd]     = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew,     setShowNew]     = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [pwdLoading, setPwdLoading] = useState(false);

  useEffect(() => {
    // initialize fields when user object arrives
    setFirstName(user.full_name?.split(' ')[0] || '');
    setLastName(user.full_name?.split(' ')[1]  || '');
    setPhone(user.phone_number || '');
    if (user.profile_picture){
      let pic = user.profile_picture;
      console.log(pic)
      if (pic.startsWith('/media/')) {
         pic = `${process.env.REACT_APP_API_URL}${pic}`;
      }
      setPhotoPreview(pic);
    }
  }, [user]);

  const onPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  // 1) Save Profile
  const handleProfileSave = async () => {
    setProfileLoading(true);
    try {
      await api.patch('/users/me/', {
        full_name:    `${firstName} ${lastName}`,
        phone_number: phone,
      });
      toast.success('Profile updated!', { position: 'top-center' });
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.detail ||
        'Could not update profile.',
        { position: 'top-center' }
      );
    } finally {
      setProfileLoading(false);
    }
  };

  // 2) Upload Photo
  const handlePhotoSave = async () => {
    if (!photoFile) return;
    setPhotoLoading(true);
    const formData = new FormData();
    formData.append('profile_picture', photoFile);
    try {
      const { data } = await api.patch('/users/me/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success('Photo uploaded!', { position: 'top-center' });

      // 1) Immediately update the preview from the response
      setPhotoPreview(data.profile_picture);

      await refreshUser()
    } catch (err) {
      console.error(err);
      toast.error('Upload failed.', { position: 'top-center' });
    } finally {
      setPhotoLoading(false);
    }
  };

  // 3) Change Password
  const handlePwdChange = async () => {
    if (newPwd !== confirmPwd) {
      toast.error("New passwords don’t match", { position: 'top-center' });
      return;
    }
    setPwdLoading(true);
    try {
      await api.post('/users/change-password/', {
        current_password: currentPwd,
        new_password:     newPwd,
        confirm_password: confirmPwd,
      });
      toast.success('Password changed!', { position: 'top-center' });
      // clear fields
      setCurrentPwd(''); setNewPwd(''); setConfirmPwd('');
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.current_password?.[0] ||
        err.response?.data?.detail ||
        'Password update failed.',
        { position: 'top-center' }
      );
    } finally {
      setPwdLoading(false);
    }
  };

  const handleSubscribe = () => {
    toast.info('Subscription flow TBD', { position: 'top-center' });
  };

  return (
    <Box className="settings-container" mt={"20vh"} >
      <ToastContainer />
      <Paper className="settings-sidebar" elevation={2}>
        <Typography variant="h6" gutterBottom>Settings</Typography>
        <List component="nav">
          <ListItemButton selected={section==='profile'} onClick={()=>setSection('profile')}>
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton selected={section==='photo'} onClick={()=>setSection('photo')}>
            <ListItemText primary="Photo" />
          </ListItemButton>
          <ListItemButton selected={section==='security'} onClick={()=>setSection('security')}>
            <ListItemText primary="Account Security" />
          </ListItemButton>
          <ListItemButton selected={section==='payment'} onClick={()=>setSection('payment')}>
            <ListItemText primary="Payment Methods" />
          </ListItemButton>
        </List>
      </Paper>

      <Box className="settings-content">
        {/* Profile */}
        {section==='profile' && (
          <Paper className="settings-form" elevation={1}>
            <Typography variant="h5" gutterBottom>Profile</Typography>
            <TextField
              fullWidth label="First Name" margin="normal"
              value={firstName} onChange={e=>setFirstName(e.target.value)}
            />
            <TextField
              fullWidth label="Last Name" margin="normal"
              value={lastName} onChange={e=>setLastName(e.target.value)}
            />
            <TextField
              fullWidth label="Phone Number" margin="normal"
              value={phone} onChange={e=>setPhone(e.target.value)}
            />
            <Box sx={{ mt:2, textAlign:'right' }}>
              <Button
                variant="contained"
                onClick={handleProfileSave}
                disabled={profileLoading}
              >
                {profileLoading ? 'Saving…' : 'Save Changes'}
              </Button>
            </Box>
          </Paper>
        )}

        {/* Photo */}
        {section==='photo' && (
          <Paper className="settings-form" elevation={1}>
            <Typography variant="h5" gutterBottom>Change Photo</Typography>
            <Box sx={{ display:'flex', alignItems:'center', mb:2 }}>
              <Avatar
                src={photoPreview}
                sx={{ width:80, height:80, mr:2, bgcolor:'secondary.main' }}
              >
                {/* initials fallback */}
                  {!photoPreview && (user.full_name || '')
                   .split(' ')
                   .map(n => n[0] || '')
                   .join('')
                   .toUpperCase()
                  }
              </Avatar>
              <Button variant="outlined" component="label">
                Choose File
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={onPhotoChange}
                />
              </Button>
            </Box>
            <Box sx={{ textAlign:'right' }}>
              <Button
                variant="contained"
                onClick={handlePhotoSave}
                disabled={!photoFile || photoLoading}
              >
                {photoLoading ? 'Uploading…' : 'Upload'}
              </Button>
            </Box>
          </Paper>
        )}

        {/* Account Security */}
        {section==='security' && (
          <Paper className="settings-form" elevation={1}>
            <Typography variant="h5" gutterBottom>Account Security</Typography>
            <TextField
              fullWidth
              label="Current Password"
              type={showCurrent?'text':'password'}
              margin="normal"
              value={currentPwd}
              onChange={e=>setCurrentPwd(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={()=>setShowCurrent(!showCurrent)}
                      edge="end"
                    >
                      {showCurrent ? <VisibilityOff/> : <Visibility/>}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <TextField
              fullWidth
              label="New Password"
              type={showNew?'text':'password'}
              margin="normal"
              value={newPwd}
              onChange={e=>setNewPwd(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={()=>setShowNew(!showNew)}
                      edge="end"
                    >
                      {showNew ? <VisibilityOff/> : <Visibility/>}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <TextField
              fullWidth
              label="Confirm New Password"
              type={showConfirm?'text':'password'}
              margin="normal"
              value={confirmPwd}
              onChange={e=>setConfirmPwd(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={()=>setShowConfirm(!showConfirm)}
                      edge="end"
                    >
                      {showConfirm ? <VisibilityOff/> : <Visibility/>}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Box sx={{ mt:2, textAlign:'right' }}>
              <Button
                variant="contained"
                onClick={handlePwdChange}
                disabled={pwdLoading}
              >
                {pwdLoading ? 'Updating…' : 'Change Password'}
              </Button>
            </Box>
          </Paper>
        )}

        {/* Payment Methods */}
        {section==='payment' && (
          <Paper className="settings-form" elevation={1}>
            <Typography variant="h5" gutterBottom>Payment Methods</Typography>
            <Typography variant="body1" gutterBottom>
              We accept:
            </Typography>
            <Grid container spacing={2} alignItems="center">
              {[visaLogo, paymeLogo, uzumLogo, clickLogo].map((logo, i) => (
                <Grid item xs={3} key={i}>
                  <Box
                    component="img"
                    src={logo}
                    alt=""
                    sx={{ maxWidth:'100%' }}
                  />
                </Grid>
              ))}
            </Grid>
            <Typography variant="body2" sx={{ mt:2 }}>
              To subscribe, choose your preferred method above and follow its instructions.
            </Typography>
            <Box sx={{ mt:2, textAlign:'right' }}>
              <Button variant="contained" onClick={handleSubscribe}>
                Subscribe Now
              </Button>
            </Box>
          </Paper>
        )}
      </Box>
    </Box>
  );
}
