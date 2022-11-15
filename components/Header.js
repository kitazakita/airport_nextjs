import { useState } from "react";
import { useEffect } from "react";
import { Link as Scroll } from "react-scroll";
import Head from "next/head";
import { AppBar, Button, List, ListItem, ListItemButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ElderlyWomanIcon from "@mui/icons-material/ElderlyWoman";
import QuizIcon from "@mui/icons-material/Quiz";
import FlightIcon from "@mui/icons-material/Flight";
import Link from "next/link";

const Header = (props) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const clickHandler = () => {
    setMenuToggle((prev) => {
      return !prev;
    });
  };

  const [isVisible, setIsVisible] = useState(false);
  const pageUpToggleVisibility = () => {
    window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
  };
  const pageTopButtonStyle = {
    position: "fixed",
    bottom: "10px",
    right: "10px",
    minWidth: "50px",
    minHeight: "50px",
    maxWidth: "50px",
    maxHeight: "50px",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: ".7rem",
    zIndex: "10",
  };

  useEffect(() => {
    window.addEventListener("scroll", pageUpToggleVisibility);
    window.addEventListener("resize", () => {});
  }, []);

  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Scroll
        to="top"
        className={isVisible ? "pageUp" : "pageUp d-none"}
        smooth={true}
      >
        <Button variant="contained" sx={pageTopButtonStyle}>
          <FlightIcon
            sx={{
              color: "white",
              width: "150%",
              height: "150%",
            }}
          />
          TOP
        </Button>
      </Scroll>

      <header id="top">
        <div className="spacer"></div>
        <AppBar sx={{ height: "70px" }}>
          <div className="inner-wrapper">
            <Link href="./">
              <div className="header-logo">
                <img src="./images/logo_white.png" alt="" />
              </div>
            </Link>

            <div className="sub-menu">
              <ul>
                <li>
                  <Link href="./info">
                    <ContactSupportIcon />
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link href="./info">
                    <QuizIcon />
                    よくある質問
                  </Link>
                </li>
                <li>
                  <Link href="./info">
                    <ElderlyWomanIcon />
                    お手伝いが必要な方
                  </Link>
                </li>
              </ul>
            </div>
            <Button
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={clickHandler}
            >
              {/* <MenuIcon
                sx={{ color: "white", width: "40px", height: "40px" }}
              /> */}

              <div
                className={
                  menuToggle
                    ? "hamburger-menu-btn active"
                    : "hamburger-menu-btn"
                }
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Button>
          </div>
        </AppBar>

        <nav className="main-menu">
          <Grid
            container
            sx={{
              padding: "0 5%",
              alignItems: "flex-end",
            }}
          >
            <Grid
              container
              md={6}
              sx={{
                padding: "2% 0",
                textAlign: "center",
                display: { xs: "none", md: "flex" },
              }}
            >
              {/* 左側のメニュー */}
              <Grid md={6}>
                <Link href="./flight">
                  <Box>
                    <Box>
                      <img src="./images/headerMenuJapan.png" alt="" />
                    </Box>
                    <Box>
                      <p>国内線フライト情報</p>
                    </Box>
                  </Box>
                </Link>
              </Grid>
              <Grid md={6}>
                <Link href="./flight">
                  <Box>
                    <Box>
                      <img src="./images/headerMenuWorld.png" alt="" />
                    </Box>
                    <Box>
                      <p>国際線フライト情報</p>
                    </Box>
                  </Box>
                </Link>
              </Grid>
            </Grid>
            <Grid
              container
              md={6}
              sx={{
                padding: "2% 0",
                textAlign: "center",
                display: { xs: "none", md: "flex" },
              }}
            >
              {/* 右側のメニュー */}
              <Grid md={4}>
                <Link href="./stay">
                  <Box>
                    <Box>
                      <img src="./images/headerMenuFood.png" alt="" />
                    </Box>
                    <Box>
                      <p>レストラン</p>
                    </Box>
                  </Box>
                </Link>
              </Grid>
              <Grid md={4}>
                <Link href="./stay">
                  <Box>
                    <Box>
                      <img src="./images/headerMenuShop.png" alt="" />
                    </Box>
                    <Box>
                      <p>ショップ</p>
                    </Box>
                  </Box>
                </Link>
              </Grid>
              <Grid md={4}>
                <Link href="./stay">
                  <Box>
                    <Box>
                      <img src="./images/headerMenuShop2.png" alt="" />
                    </Box>
                    <Box>
                      <p>免税店</p>
                    </Box>
                  </Box>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </nav>
        <nav className="mobileNav">
          <div className={menuToggle ? "mobileMenu toggleMenu" : "mobileMenu"}>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link href="./flight" sx={{ display: "flex" }}>
                    <div className="mobile-menu-icon">
                      <img src="./images/headerMenuJapan.png" alt="" />
                    </div>
                    <Box>
                      <p>国内線フライト情報</p>
                    </Box>
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link href="./flight" sx={{ display: "flex" }}>
                    <div className="mobile-menu-icon">
                      <img src="./images/headerMenuWorld.png" alt="" />
                    </div>
                    <Box>
                      <p>国際線フライト情報</p>
                    </Box>
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link href="./stay" sx={{ display: "flex" }}>
                    <div className="mobile-menu-icon">
                      <img src="./images/headerMenuFood.png" alt="" />
                    </div>
                    <Box>
                      <p>レストラン</p>
                    </Box>
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link href="./stay" sx={{ display: "flex" }}>
                    <div className="mobile-menu-icon">
                      <img src="./images/headerMenuShop.png" alt="" />
                    </div>
                    <Box>
                      <p>ショップ</p>
                    </Box>
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link href="./stay" sx={{ display: "flex" }}>
                    <div className="mobile-menu-icon">
                      <img src="./images/headerMenuShop2.png" alt="" />
                    </div>
                    <Box>
                      <p>免税店</p>
                    </Box>
                  </Link>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <Link href="./info">お問い合わせ</Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link href="./info">よくある質問</Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link href="./info">お手伝いが必要な方</Link>
                </ListItemButton>
              </ListItem>
            </List>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
