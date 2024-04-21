import Footer from "./Footer";
import { Grid, Typography, Box, Chip } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import "../App.css";
import Skillstar from "../animations/Skillstar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Component to display skills page

const Skills = () => {
  // Variable for animation shift value
  const [shift, setShift] = useState(null);

  // Store whether star animation has ran in session storage to stay consistent throughout user experience
  const [starAnim] = useState(JSON.parse(sessionStorage.getItem("starAnim")));

  setTimeout(() => {
    sessionStorage.setItem("starAnim", JSON.stringify(true));
  }, 2000);

  // Calculate shift value every time compoennt mounts
  useEffect(() => {
    const star = 10.417 * 16 + (27.778 / 100) * window.innerWidth;
    let shift = window.innerWidth / 2 - star / 1.55;
    setShift(shift);
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <Typography className="skillsHeader">My Skills</Typography>

      <Grid container spacing={1} mb={"clamp(6.25rem, 5rem + 6.25vw, 12.5rem)"}>
        <Grid item xs={12}>
          <Box
            display={"flex"}
            flexDirection={{ xs: "column-reverse", lg: "row" }}
            alignItems={{ xs: "center", lg: "flex-start " }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              flexGrow={1}
              marginLeft={{
                xs: 0,
                lg: "clamp(3.125rem, -5.208rem + 11.111vw, 8.125rem)",
              }}
              my={10}
              alignItems={{ xs: "center", lg: "flex-start" }}
            >
              <motion.div
                animate={
                  !starAnim && window.innerWidth > 1200
                    ? {
                        opacity: [0, 1],
                        x: [30, 0],
                      }
                    : { opacity: 1 }
                }
                transition={{
                  duration: 1.4,
                  ease: "easeInOut",
                  delay: 2.7,
                }}
              >
                <Typography className="languageTitle">Languages</Typography>
                <Box
                  display={"flex"}
                  gap={4}
                  flexWrap={"wrap"}
                  padding={5}
                  justifyContent={{ xs: "center", lg: "flex-start" }}
                >
                  <Chip label="Python" color="info" />
                  <Chip label="JavaScript" color="info" />
                  <Chip label="HTML" color="info" />
                  <Chip label="CSS" color="info" />
                  <Chip label="C++" color="info" />
                  <Chip label="SQL" color="info" />
                  <Chip label="C#" color="info" />
                </Box>
              </motion.div>
              <motion.div
                animate={
                  !starAnim && window.innerWidth > 1200
                    ? {
                        opacity: [0, 1],
                        x: [50, 0],
                      }
                    : { opacity: 1 }
                }
                transition={{
                  duration: 1.4,
                  ease: "easeInOut",
                  delay: 2.9,
                }}
              >
                <Typography
                  className="languageTitle"
                  mt={"clamp(1.563rem, 0.875rem + 3.438vw, 5rem)"}
                >
                  Frameworks / Tools
                </Typography>
                <Box
                  display={"flex"}
                  gap={4}
                  padding={5}
                  flexWrap={"wrap"}
                  justifyContent={{ xs: "center", lg: "flex-start" }}
                >
                  <Chip label="React.js" color="info" />
                  <Chip label="Git" color="info" />
                  <Chip label="GitHub" color="info" />
                  <Chip label="Material UI" color="info" />
                  <Chip label="MongoDB" color="info" />
                  <Chip label="Node.js" color="info" />
                  <Chip label="Express.js" color="info" />
                  <Chip label="PostgreSQL" color="info" />
                  <Chip label=".NET" color="info" />
                </Box>
              </motion.div>
            </Box>
            <Box
              flexGrow={1}
              display={"flex"}
              justifyContent={"end"}
              alignItems={"end"}
              marginRight={{
                xs: 0,
                lg: "clamp(3.125rem, -5.208rem + 11.111vw, 8.125rem)",
              }}
              component={motion.div}
              animate={
                !starAnim && window.innerWidth > 1200
                  ? {
                      opacity: [0, 1, 1],
                      x: [-shift, -shift, 0],
                    }
                  : { opacity: 1 }
              }
              transition={{
                duration: 3.5,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Skillstar />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </StyledEngineProvider>
  );
};

export default Skills;
