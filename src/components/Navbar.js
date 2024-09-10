import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/CatLogoNoWords.png';
import { Box, HStack, VStack, Text } from '@chakra-ui/react';

const menuData = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    submenu: [
      { title: 'About', url: '/about' },
      { title: 'Merch', url: '/merch' },
      { title: 'Philosophy', url: '/blogs' },
    ],
  },
  {
    title: 'Information',
    submenu: [
      { title: 'Class Schedule', url: '/class-schedule' },
      { title: 'Follow Along Videos', url: '/follow-along' },
      { title: 'Demonstrations', url: '/demonstrations' },
    ],
  },
  {
    title: 'Contact',
    url: '/contact',
  },
];

const Navbar = () => {
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isInfoMenuOpen, setIsInfoMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const toggleAboutMenu = () => {
    setIsAboutMenuOpen(!isAboutMenuOpen);
    setIsInfoMenuOpen(false); // Close Information menu if About menu is opened
  };

  const toggleInfoMenu = () => {
    setIsInfoMenuOpen(!isInfoMenuOpen);
    setIsAboutMenuOpen(false); // Close About menu if Information menu is opened
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const handleMouseOver = (linkId) => {
    setHoveredLink(linkId);
  };

  const handleMouseOut = () => {
    setHoveredLink(null);
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <Box
      flex="1"
      zIndex={1000}
      position="fixed"
      top={0}
      left={0}
      right={0}
      backgroundColor="#95a2bc"
    >
      <Box color="#CED5DF" maxWidth="1280px" height="85px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          <nav alignItems="center">
            <HStack spacing={4} style={{ margin: 0, padding: 0 }}>
              <Link to="/" onClick={() => {
                setIsAboutMenuOpen(false);
                setIsInfoMenuOpen(false);
                setIsMenuOpen(false);
              }}>
                <img src={logo} alt="logo" style={{ width: '50px', height: 'auto' }} />
              </Link>
              <Text>
                <h1 style={{ color: '#fff', marginLeft: '0px', fontSize: '35px', margin: '0', padding: '0' }}>
                  The Tai-Chi Club
                </h1>
              </Text>
            </HStack>
          </nav>
          <nav>
          {isMobile ? (
            <>
              <button
                style={{
                  padding: '8px',
                  color: '#ebeff3',
                  background: 'none',
                  border: '1px solid',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  backgroundColor: hoveredLink === 'button' ? '#6e86bb' : 'transparent',
                }}
                onClick={toggleMenu}
                onMouseOver={() => handleMouseOver('button')}
                onMouseOut={handleMouseOut}
              >
                ☰
              </button>
              {isMenuOpen && (
                <VStack
                  spacing={4}
                  alignItems="center"
                  onMouseOver={() => setIsMenuOpen(true)}
                  onMouseOut={handleMouseOut}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    backgroundColor: '#fff',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    padding: '10px',
                    borderRadius: '4px',
                    width: '150px',
                    fontFamily: 'Times New Roman'
                  }}
                >
                  {menuData.map((menu, index) => (
                    <div key={index} style={{ position: 'relative', width: '150px' }}>
                      {menu.url ? (
                        <Link
                          to={menu.url}
                          onMouseOver={() => handleMouseOver(menu.title)}
                          onMouseOut={handleMouseOut}
                          style={{
                            color: hoveredLink === menu.title ? '#0D3759' : '#95a2bc',
                            textDecoration: 'none',
                            padding: '8px 0',
                            borderBottom: '1px solid #0D3759',
                            width: '100%',
                            textAlign: 'center',
                          }}
                        >
                          {menu.title}
                        </Link>
                      ) : (
                        <div
                          onMouseOver={() => handleMouseOver(menu.title)}
                          onMouseOut={handleMouseOut}
                          style={{ width: '100%' }}
                        >
                          <button
                            onClick={() => {
                              if (menu.title === 'About') {
                                toggleAboutMenu();
                              } else {
                                toggleInfoMenu();
                              }
                            }}
                            style={{
                              color: hoveredLink === menu.title ? '#0D3759' : '#95a2bc',
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              textDecoration: 'none',
                              fontSize: '16px',
                              fontFamily: 'Times New Roman',
                              width: '100%',
                              textAlign: 'center',
                              padding: '8px 0',
                              borderBottom: '1px solid #0D3759',
                            }}
                          >
                            {menu.title}
                          </button>
                          {menu.submenu && (menu.title === 'About' ? isAboutMenuOpen : isInfoMenuOpen) && (
                            <VStack
                              spacing={2}
                              style={{
                                position: 'absolute',
                                top: 0,
                                right: '100%', // Open to the left
                                backgroundColor: '#fff',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                padding: '10px',
                                borderRadius: '4px',
                                width: '150px',
                                zIndex: 1100, // Ensure it appears above other elements
                              }}
                            >
                              {menu.submenu.map((item, i) => (
                                <Link
                                  key={i}
                                  to={item.url}
                                  onMouseOver={() => handleMouseOver(item.title)}
                                  onMouseOut={handleMouseOut}
                                  style={{
                                    color: hoveredLink === item.title ? '#0D3759' : '#95a2bc',
                                    textDecoration: 'none',
                                    padding: '8px 0',
                                    borderBottom: '1px solid #0D3759',
                                    width: '100%',
                                    textAlign: 'center',
                                  }}
                                >
                                  {item.title}
                                </Link>
                              ))}
                            </VStack>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </VStack>
              )}
            </>
          ) : ( // Desktop Version below
              <HStack spacing={20} style={{ fontSize: '18px', fontFamily: 'Times New Roman' }}>
                <a
                  href="/"
                  onMouseOver={() => handleMouseOver('home')}
                  onMouseOut={handleMouseOut}
                  style={{
                    color: hoveredLink === 'home' ? '#0D3759' : '#fff',
                    textDecoration: 'none',
                    background: 'none',
                  }}
                >
                  Home
                </a>
                <div style={{ position: 'relative' }} onMouseLeave={() => setIsAboutMenuOpen(false)}>
                  {menuData.map((menu, index) =>
                    menu.title === 'About' ? (
                      <div key={index} style={{ position: 'relative' }}>
                        <button
                          onMouseOver={() => handleMouseOver('about')}
                          onMouseOut={handleMouseOut}
                          onClick={toggleAboutMenu}
                          style={{
                            color: hoveredLink === 'about' ? '#0D3759' : '#fff',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            fontSize: '19px',
                            fontFamily: 'Times New Roman',
                          }}
                        >
                          About
                        </button>
                        {isAboutMenuOpen && (
                          <VStack
                            spacing={2}
                            style={{
                              position: 'absolute',
                              top: '100%',
                              left: 0,
                              backgroundColor: '#fff',
                              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                              padding: '10px',
                              borderRadius: '4px',
                            }}
                          >
                            {menu.submenu.map((item, i) => (
                              <Link
                                key={i}
                                to={item.url}
                                onMouseOver={() => handleMouseOver(item.title)}
                                onMouseOut={handleMouseOut}
                                style={{
                                  color: hoveredLink === item.title ? '#0D3759' : '#95a2bc',
                                  textDecoration: 'none',
                                  padding: '8px 0',
                                  borderBottom: '1px solid #0D3759',
                                  width: '150px',
                                }}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </VStack>
                        )}
                      </div>
                    ) : null
                  )}
                </div>
                <div style={{ position: 'relative' }} onMouseLeave={() => setIsInfoMenuOpen(false)}>
                  {menuData.map((menu, index) =>
                    menu.title === 'Information' ? (
                      <div key={index} style={{ position: 'relative' }}>
                        <button
                          onMouseOver={() => handleMouseOver('information')}
                          onMouseOut={handleMouseOut}
                          onClick={toggleInfoMenu}
                          style={{
                            color: hoveredLink === 'information' ? '#0D3759' : '#fff',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            fontSize: '19px',
                            fontFamily: 'Times New Roman',
                          }}
                        >
                          Information
                        </button>
                        {isInfoMenuOpen && (
                          <VStack
                            spacing={2}
                            style={{
                              position: 'absolute',
                              top: '100%',
                              left: 0,
                              backgroundColor: '#fff',
                              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                              padding: '10px',
                              borderRadius: '4px',
                            }}
                          >
                            {menu.submenu.map((item, i) => (
                              <Link
                                key={i}
                                to={item.url}
                                onMouseOver={() => handleMouseOver(item.title)}
                                onMouseOut={handleMouseOut}
                                style={{
                                  color: hoveredLink === item.title ? '#0D3759' : '#95a2bc',
                                  textDecoration: 'none',
                                  padding: '8px 0',
                                  borderBottom: '1px solid #0D3759',
                                  width: '150px',
                                }}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </VStack>
                        )}
                      </div>
                    ) : null
                  )}
                </div>
                <a
                  href="/contact"
                  onMouseOver={() => handleMouseOver('contact')}
                  onMouseOut={handleMouseOut}
                  style={{
                    color: hoveredLink === 'contact' ? '#0D3759' : '#fff',
                    textDecoration: 'none',
                    background: 'none',
                  }}
                >
                  Contact
                </a>
              </HStack>
            )}
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Navbar;