import { Box, Collapse, IconButton, Tabs, TabList, Tab, TabPanels, TabPanel, useDisclosure } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { useSwipeable } from 'react-swipeable';

function CollapsiblePanel() {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

  const handlers = useSwipeable({
    onSwipedUp: () => onToggle(),
    onSwipedDown: () => onToggle(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <>
      <IconButton
        aria-label="Toggle"
        icon={<ChevronUpIcon />}
        onClick={onToggle}
        position="absolute"
        bottom="0"
        left="50%"
        transform="translateX(-50%)"
        zIndex="9999"
        display={isOpen ? "none" : "block"}
      />

      <Collapse in={isOpen} {...handlers}>
        <Box height="33.33vh" boxShadow="sm">
          <Tabs position='relative' variant="" isLazy>
            <TabList justifyContent="center">
              <Tab>我要預約</Tab>
              <Tab>查詢訂單</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
              </TabPanel>
              <TabPanel>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Collapse>
    </>
  );
}

export default CollapsiblePanel;
