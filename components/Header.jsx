import { useLayoutEffect, useState } from "react";
import { useEffect } from "react";
import { Link as Scroll } from "react-scroll";
import Head from "next/head";
import { AppBar, Button, List, ListItem, ListItemButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ElderlyWomanIcon from "@mui/icons-material/ElderlyWoman";
import QuizIcon from "@mui/icons-material/Quiz";
import MenuIcon from "@mui/icons-material/Menu";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = (props) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const clickHandler = () => {
    setMenuToggle((prev) => {
      return !prev;
    });
  };

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
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
    justifyContent: "center",
    alignItems: "center",
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  useLayoutEffect(() => {
    // -- GSAP ANIMATION CODE HERE --

    return () => {
      // cleanup code (optional)
    };
  }, []); // <- empty dependency Array so it doesn't re-run on every render!

  return (
    <>
      <Head>
        <title>{props.title}</title>
        {/* BootStrap CDN */}
      </Head>
      <Scroll
        to="top"
        className={isVisible ? "pageUp" : "pageUp d-none"}
        smooth={true}
      >
        <Button variant="contained" sx={pageTopButtonStyle}>
          <VerticalAlignTopIcon
            sx={{
              color: "white",
              width: "150%",
              height: "150%",
            }}
          />
        </Button>
      </Scroll>
      <header id="top">
        <div className="spacer"></div>
        <AppBar>
          <div className="inner-wrapper">
            <div className="header-logo">
              <div className="logo-img">
                <AirplanemodeActiveIcon />
              </div>
              <h1>〇〇空港</h1>
            </div>

            <div className="sub-menu">
              <ul>
                <li>
                  <a href="#">
                    <ContactSupportIcon />
                    お問い合わせ
                  </a>
                </li>
                <li>
                  <a href="#">
                    <QuizIcon />
                    よくある質問
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ElderlyWomanIcon />
                    お手伝いが必要な方
                  </a>
                </li>
              </ul>
            </div>
            <Button
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={clickHandler}
            >
              <MenuIcon
                sx={{ color: "white", width: "40px", height: "40px" }}
              />
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
              sx={{ textAlign: "center", display: { xs: "none", md: "flex" } }}
            >
              {/* 左側のメニュー */}
              <Grid md={6}>
                <Box>
                  <a href="#">
                    <Box>
                      <img src="./images/headerMenuJapan.png" alt="" />
                    </Box>
                    <Box>
                      <p>国内線フライト情報</p>
                    </Box>
                  </a>
                </Box>
              </Grid>
              <Grid md={6}>
                <Box>
                  <a href="#">
                    <Box>
                      <img src="./images/headerMenuWorld.png" alt="" />
                    </Box>
                    <Box>
                      <p>国際線フライト情報</p>
                    </Box>
                  </a>
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              md={6}
              sx={{ textAlign: "center", display: { xs: "none", md: "flex" } }}
            >
              {/* 右側のメニュー */}
              <Grid md={4}>
                <Box>
                  <a href="#">
                    <Box>
                      <img src="./images/headerMenuFood.png" alt="" />
                    </Box>
                    <Box>
                      <p>レストラン</p>
                    </Box>
                  </a>
                </Box>
              </Grid>
              <Grid md={4}>
                <Box>
                  <a href="#">
                    <Box>
                      <img src="./images/headerMenuShop.png" alt="" />
                    </Box>
                    <Box>
                      <p>ショップ</p>
                    </Box>
                  </a>
                </Box>
              </Grid>
              <Grid md={4}>
                <Box>
                  <a href="#">
                    <Box>
                      <img src="./images/headerMenuShop2.png" alt="" />
                    </Box>
                    <Box>
                      <p>免税店</p>
                    </Box>
                  </a>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </nav>
        <nav className="mobileNav">
          <div className={menuToggle ? "mobileMenu toggleMenu" : "mobileMenu"}>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <a href="#" sx={{ display: "flex" }}>
                    <Box>
                      <img src="./images/headerMenuJapan.png" alt="" />
                    </Box>
                    <Box>
                      <p>国内線フライト情報</p>
                    </Box>
                  </a>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <a href="#" sx={{ display: "flex" }}>
                    <Box>
                      <img src="./images/headerMenuWorld.png" alt="" />
                    </Box>
                    <Box>
                      <p>国際線フライト情報</p>
                    </Box>
                  </a>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <a href="#" sx={{ display: "flex" }}>
                    <Box>
                      <img src="./images/headerMenuFood.png" alt="" />
                    </Box>
                    <Box>
                      <p>レストラン</p>
                    </Box>
                  </a>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <a href="#" sx={{ display: "flex" }}>
                    <Box>
                      <img src="./images/headerMenuShop.png" alt="" />
                    </Box>
                    <Box>
                      <p>ショップ</p>
                    </Box>
                  </a>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <a href="#" sx={{ display: "flex" }}>
                    <Box>
                      <img src="./images/headerMenuShop2.png" alt="" />
                    </Box>
                    <Box>
                      <p>免税店</p>
                    </Box>
                  </a>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <a href="#">お問い合わせ</a>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <a href="#">よくある質問</a>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <a href="#">お手伝いが必要な方</a>
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
