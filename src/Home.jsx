import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import PhoneV from "./PhoneV";
import "./App.css";
import HeaderText from "./HeaderText";
import VideoCall from "./videoCall";
import VideoUploadWithDetails from "./UploadVideo.jsx";

function Home({ theme }) {
  return (
    <>
      <HeaderText theme={theme} />
      <Tabs variant="soft-rounded" colorScheme="red" defaultIndex={0}>
        <TabList className="ml" ml={0} mb={3} mt={12}>
          <Tab mr={2} className="tabB">
            OUR PAGE
          </Tab>
          <Tab mr={2} className="tabB">
            PUBLIC
          </Tab>
          <Tab className="tabB">Video Call</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <PhoneV theme={theme} />
          </TabPanel>
          <TabPanel>
            <VideoUploadWithDetails theme={theme} />
          </TabPanel>
          <TabPanel>
            <VideoCall theme={theme} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default Home;
