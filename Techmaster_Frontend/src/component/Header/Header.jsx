import React, { useEffect, useState, useContext } from "react";
import Logo from "../../assests/images/Logo.jpg";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { languageChange } from "../../reduxToolkit/languageSlice/index.js";
import AuthContext from "../../contexts/AuthContext.jsx";
import "./Headers.scss";

// Material-UI imports
import {
  Box,
  IconButton,
  Avatar,
  Popover,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  School,
  ShoppingCart,
  Subscriptions,
  Settings as SettingsIcon,
} from "@mui/icons-material";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInitial, setIsInitial] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const location = useLocation();
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const { t, i18n } = useTranslation("header");
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.language.language);

  const { isAuthenticated, user = {}, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
        setIsInitial(false);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // compute initials if no profile_picture
  const initials = user?.full_name
  ?.split(' ')
  .map(n => n[0])
  .join('')
  .toUpperCase() || '';


  // Popover handlers
  const handlePopoverOpen = (e) => setAnchorEl(e.currentTarget);
  const handlePopoverClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    dispatch(languageChange(lng));
  };

  const handleSignOut = async () =>{
    await logout();
    navigate("/sign-in")
    
  }

  return (
    <header
      className={`header ${menuOpen ? "menu-opened" : ""} ${
        isScrolled ? "scrolled" : ""
      } ${isInitial ? "" : "hidden"}`}
    >
      <div className="container">
        <Link to="/dashboard" className="logo">
          <img className="logo_picture" src={Logo} alt="logo" />
        </Link>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                {t("home")}
              </Link>
            </li>

            <CDropdown className="nav-item">
              <CDropdownToggle className="nav-link">
                {t("pages")} <FaCaretDown />
              </CDropdownToggle>
              <CDropdownMenu className="dropdown-menu">
                <CDropdownItem href="/about">{t("about_us")}</CDropdownItem>
                <CDropdownItem href="/our-team">{t("our_team")}</CDropdownItem>
                <CDropdownItem href="/team-details">{t("team_details")}</CDropdownItem>
                <CDropdownItem href="/privacy-policy">{t("privacy_policy")}</CDropdownItem>
                <CDropdownItem href="/terms-conditions">{t("terms_conditions")}</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <CDropdown className="nav-item">
              <CDropdownToggle className="nav-link">
                {t("courses")} <FaCaretDown />
              </CDropdownToggle>
              <CDropdownMenu className="dropdown-menu">
                <CDropdownItem href="/courses-list/item">
                  {t("courses_list")}
                </CDropdownItem>
                <CDropdownItem href="/courses-list/grid">
                  {t("courses_grid")}
                </CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <CDropdown className="nav-item">
              <CDropdownToggle className="nav-link">
                {t("language")} <FaCaretDown />
              </CDropdownToggle>
              <CDropdownMenu className="dropdown-menu">
                <CDropdownItem
                  onClick={() => changeLanguage("en")}
                  disabled={currentLanguage === "en"}
                >
                  English
                </CDropdownItem>
                <CDropdownItem
                  onClick={() => changeLanguage("ru")}
                  disabled={currentLanguage === "ru"}
                >
                  Русский
                </CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                {t("contact")}
              </Link>
            </li>

            {/* Avatar & Popover */}
            {isAuthenticated && (
              <li className="nav-item">
                <Box
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                  sx={{ display: 'inline-block' }}
                >
                  <IconButton>
                    <Avatar src={user.profile_picture ?? ''} sx={{ bgcolor: 'secondary.main' }}>
                      {!user.profile_picture && initials}
                    </Avatar>
                  </IconButton>

                  <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    PaperProps={{
                      sx: {
                        mt: "100px",
                        mr: '150px',
                        width: 240,
                        p: 1,
                        boxShadow: 3,
                      },
                    }}
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                  >
                    {/* User info */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Avatar
                        src={user.profile_picture ?? ''}
                        sx={{ mr: 1, bgcolor: 'secondary.main' }}
                      >
                        {!user.profile_picture && initials}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle1">
                          {user.full_name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" noWrap>
                          {user.phone_number}
                        </Typography>
                      </Box>
                    </Box>
                    <Divider />

                    {/* Menu items */}
                    <List dense disablePadding>
                      <ListItemButton component={Link} to="/my-learning">
                        <ListItemIcon><School /></ListItemIcon>
                        <ListItemText primary="My Learning" />
                      </ListItemButton>
                      <ListItemButton component={Link} to="/my-cart">
                        <ListItemIcon><ShoppingCart /></ListItemIcon>
                        <ListItemText primary="My Cart" />
                      </ListItemButton>
                      <ListItemButton component={Link} to="/subscriptions">
                        <ListItemIcon><Subscriptions /></ListItemIcon>
                        <ListItemText primary="Subscriptions" />
                      </ListItemButton>
                      <ListItemButton component={Link} to="/settings">
                        <ListItemIcon><SettingsIcon /></ListItemIcon>
                        <ListItemText primary="Account Settings" />
                      </ListItemButton>
                    </List>
                    <Divider sx={{ my: 1 }} />

                    {/* Sign Out */}
                    <Typography
                      variant="button"
                      onClick={handleSignOut}
                      sx={{ cursor: 'pointer', display: 'block', textAlign: 'center' }}
                    >
                      Sign Out
                    </Typography>
                  </Popover>
                </Box>
              </li>
            )}
          </ul>
        </nav>

        <div className="burger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}


// src/component/Header/Header.jsx

// import React, { useState, useEffect, useContext } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import Logo from "../../assests/images/Logo.jpg";
// import {
//   CDropdown,
//   CDropdownToggle,
//   CDropdownMenu,
//   CDropdownItem,
// } from '@coreui/react';
// import { FaCaretDown } from 'react-icons/fa';
// import { useTranslation } from 'react-i18next';
// import { useDispatch, useSelector } from 'react-redux';
// import { languageChange } from '../../reduxToolkit/languageSlice';
// import AuthContext from '../../contexts/AuthContext.jsx';
// import './Headers.scss';

// import {
//   AppBar,
//   Toolbar,
//   Box,
//   IconButton,
//   Avatar,
//   Popover,
//   Typography,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Divider,
// } from '@mui/material';
// import {
//   School,
//   ShoppingCart,
//   Subscriptions,
//   Settings as SettingsIcon,
// } from '@mui/icons-material';

// export default function Header() {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const { t, i18n } = useTranslation('header');
//   const currentLanguage = useSelector((state) => state.language.language);

//   const { isAuthenticated, user = {}, logout } = useContext(AuthContext);

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);

//   // Scroll handler for sticky header
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     dispatch(languageChange(lng));
//   };

//   // Build initials from full_name
//   const initials = (user.full_name ?? '')
//     .split(' ')
//     .map((n) => n[0] ?? '')
//     .join('')
//     .toUpperCase();

//   // Popover handlers
//   const open = Boolean(anchorEl);
//   const handlePopoverOpen = (e) => setAnchorEl(e.currentTarget);
//   const handlePopoverClose = () => setAnchorEl(null);

//   return (
//     <AppBar
//       position="sticky"
//       color="inherit"
//       elevation={isScrolled ? 4 : 0}
//       className={menuOpen ? 'menu-opened' : ''}
//     >
//       <Toolbar className="header-toolbar">
//         {/* Logo */}
//         <Box component={Link} to="/dashboard" className="logo">
//           <img src={Logo} alt="TechMaster Logo" className="logo_picture" />
//         </Box>

//         {/* Main navigation */}
//         <nav className={`nav ${menuOpen ? 'open' : ''}`}>
//           <ul>
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 {t('home')}
//               </Link>
//             </li>

//             <CDropdown className="nav-item">
//               <CDropdownToggle className="nav-link">
//                 {t('pages')} <FaCaretDown />
//               </CDropdownToggle>
//               <CDropdownMenu className="dropdown-menu">
//                 <CDropdownItem href="/about">{t('about_us')}</CDropdownItem>
//                 <CDropdownItem href="/our-team">{t('our_team')}</CDropdownItem>
//                 <CDropdownItem href="/team-details">{t('team_details')}</CDropdownItem>
//                 <CDropdownItem href="/privacy-policy">{t('privacy_policy')}</CDropdownItem>
//                 <CDropdownItem href="/terms-conditions">{t('terms_conditions')}</CDropdownItem>
//               </CDropdownMenu>
//             </CDropdown>

//             <CDropdown className="nav-item">
//               <CDropdownToggle className="nav-link">
//                 {t('courses')} <FaCaretDown />
//               </CDropdownToggle>
//               <CDropdownMenu className="dropdown-menu">
//                 <CDropdownItem href="/courses-list/item">{t('courses_list')}</CDropdownItem>
//                 <CDropdownItem href="/courses-list/grid">{t('courses_grid')}</CDropdownItem>
//                 <CDropdownItem href="/courses-details">{t('courses_details')}</CDropdownItem>
//               </CDropdownMenu>
//             </CDropdown>

//             <CDropdown className="nav-item">
//               <CDropdownToggle className="nav-link">
//                 {t('language')} <FaCaretDown />
//               </CDropdownToggle>
//               <CDropdownMenu className="dropdown-menu">
//                 <CDropdownItem onClick={() => changeLanguage('en')} disabled={currentLanguage === 'en'}>
//                   English
//                 </CDropdownItem>
//                 <CDropdownItem onClick={() => changeLanguage('ru')} disabled={currentLanguage === 'ru'}>
//                   Русский
//                 </CDropdownItem>
//               </CDropdownMenu>
//             </CDropdown>

//             <li className="nav-item">
//               <Link className="nav-link" to="/contact">
//                 {t('contact')}
//               </Link>
//             </li>

//             {/* Profile avatar & popover */}
//             {isAuthenticated && (
//               <li className="nav-item">
//                 <Box
//                   onMouseEnter={handlePopoverOpen}
//                   onMouseLeave={handlePopoverClose}
//                   sx={{ display: 'inline-block' }}
//                 >
//                   <IconButton>
//                     <Avatar src={user.profile_picture ?? ''} sx={{ bgcolor: 'secondary.main' }}>
//                       {!user.profile_picture && initials}
//                     </Avatar>
//                   </IconButton>

//                   <Popover
//                     open={open}
//                     anchorEl={anchorEl}
//                     onClose={handlePopoverClose}
//                     disableRestoreFocus
//                     anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//                     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//                     PaperProps={{
//                       sx: {
//                         mt: 1,
//                         mr: '150px',
//                         width: 240,
//                         p: 1,
//                         boxShadow: 3,
//                       },
//                     }}
//                     onMouseEnter={handlePopoverOpen}
//                     onMouseLeave={handlePopoverClose}
//                   >
//                     {/* User info */}
//                     <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                       <Avatar
//                         src={user.profile_picture ?? ''}
//                         sx={{ mr: 1, bgcolor: 'secondary.main' }}
//                       >
//                         {!user.profile_picture && initials}
//                       </Avatar>
//                       <Box>
//                         <Typography variant="subtitle1">
//                           {user.full_name}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary" noWrap>
//                           {user.phone_number}
//                         </Typography>
//                       </Box>
//                     </Box>
//                     <Divider />

//                     {/* Menu items */}
//                     <List dense disablePadding>
//                       <ListItemButton component={Link} to="/my-learning">
//                         <ListItemIcon><School /></ListItemIcon>
//                         <ListItemText primary="My Learning" />
//                       </ListItemButton>
//                       <ListItemButton component={Link} to="/my-cart">
//                         <ListItemIcon><ShoppingCart /></ListItemIcon>
//                         <ListItemText primary="My Cart" />
//                       </ListItemButton>
//                       <ListItemButton component={Link} to="/subscriptions">
//                         <ListItemIcon><Subscriptions /></ListItemIcon>
//                         <ListItemText primary="Subscriptions" />
//                       </ListItemButton>
//                       <ListItemButton component={Link} to="/settings">
//                         <ListItemIcon><SettingsIcon /></ListItemIcon>
//                         <ListItemText primary="Account Settings" />
//                       </ListItemButton>
//                     </List>
//                     <Divider sx={{ my: 1 }} />

//                     {/* Sign Out */}
//                     <Typography
//                       variant="button"
//                       onClick={logout}
//                       sx={{ cursor: 'pointer', display: 'block', textAlign: 'center' }}
//                     >
//                       Sign Out
//                     </Typography>
//                   </Popover>
//                 </Box>
//               </li>
//             )}
//           </ul>
//         </nav>

//         {/* Burger menu for mobile */}
//         <div className="burger-menu" onClick={toggleMenu}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// }

