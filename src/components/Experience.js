import { StyledEngineProvider } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";
import "../App.css";
import { motion } from "framer-motion";

// Experience timeline component with responsive typography and sizing

const Experience = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Box display={"flex"} justifyContent={"center"}>
        <Typography className="experienceHead">Experience</Typography>
      </Box>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <div class="timeline">
          <div class="outer">
            <motion.div
              class="card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <div class="info">
                <h3 class="extitle">Software Developer</h3>
                <h4 className="explace">SpeechDojo Education Foundation</h4>
                <h5 className="exdate">Jul 2024 - Present</h5>
                <p className="exdescription">
                  - Deployed Moodle on a virtual server and implemented a custom
                  theme to optimize the student user experience
                  <br />
                  <br />- Prototyped an LLM-powered interview bot to analyze
                  interview responses, offering AI-driven insights on strengths,
                  weaknesses, and areas for improvement
                </p>
              </div>
            </motion.div>
            <motion.div
              class="card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <div class="info">
                <h3 class="extitle">Website Developer</h3>
                <h4 className="explace">LaunchSTEM</h4>
                <h5 className="exdate">Apr 2024 - Sep 2024</h5>
                <p className="exdescription">
                  - Developed LaunchSTEM’s website using React.js to create a
                  responsive platform enhancing digital interaction
                  <br />
                  <br />
                  - Optimized keywords and meta tags to improve search rankings,
                  resulting in a 60% increase in audience engagement <br />
                  <br />- Developed a Google Apps Script to capture user emails
                  in a spreadsheet for a newsletter emailing service
                </p>
              </div>
            </motion.div>
            <motion.div
              class="card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <div class="info">
                <h3 class="extitle">Flight Sergeant</h3>
                <h4 className="explace">Royal Canadian Air Cadets</h4>
                <h5 className="exdate">Sep 2018 - Mar 2024</h5>
                <p className="exdescription">
                  - Led weekly training sessions for 20+ cadets, covering
                  diverse topics including aviation, survival, leadership, and
                  discipline. <br />
                  <br />
                  - Organized large-scale squadron events, including fitness
                  assessments, sports days, and field training exercises for
                  over 200 cadets. <br />
                  <br />
                  - Actively supported fundraising initiatives and community
                  engagement through events like poppy sales, food drives, and
                  cash calendar sales, demonstrating commitment to the
                  squadron's objectives. <br />
                  <br />- Achieved notable milestones in personal development,
                  participating in activities like biathlon, marksmanship, and
                  various summer camps, culminating in selection for a glider
                  scholarship training course in Manitoba and obtaining a glider
                  student pilot permit along with a radio license.
                </p>
              </div>
            </motion.div>
            <motion.div
              class="card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <div class="info">
                <h3 class="extitle">Flyer Distributor</h3>
                <h4 className="explace">Edmonton Flyer Force</h4>
                <h5 className="exdate">Jul 2020 - Sep 2022</h5>
                <p className="exdescription">
                  - Effectively managed the weekly delivery of 250 flyers to
                  houses in the neighborhood <br />
                  <br />
                  - Balanced the demands of flyer distribution with school and
                  extracurriculars <br />
                  <br />- Adapted seamlessly to route changes and increasing
                  workloads, consistently meeting deadlines and increasing
                  social awareness during COVID
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Box>
    </StyledEngineProvider>
  );
};

export default Experience;
