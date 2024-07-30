// 引入需要的組件和函數
import { Box, Collapse, IconButton, Tabs, TabList, Tab, TabPanels, TabPanel, useDisclosure } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { useSwipeable } from 'react-swipeable';

// 定義 CollapsiblePanel 組件
function CollapsiblePanel() {
  // 使用 useDisclosure Hook 來控制 Collapse 的開啟和關閉
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

  // 使用 useSwipeable Hook 來添加滑動事件
  const handlers = useSwipeable({
    onSwipedUp: () => onToggle(),
    onSwipedDown: () => onToggle(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  // 返回組件的 JSX
  return (
    <>
      {/* IconButton 用於控制 Collapse 的開啟和關閉，並在 Collapse 關閉時顯示 */}
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

      {/* Collapse 組件包含了實際的內容 */}
      <Collapse in={isOpen} {...handlers}>
        <Box height="33.33vh" boxShadow="sm">
          {/* Tabs 組件包含了兩個 Tab：我要預約和查詢訂單 */}
          <Tabs position='relative' variant="" isLazy>
            <TabList justifyContent="center">
              <Tab>我要預約</Tab>
              <Tab>查詢訂單</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {/* 我要預約的內容 */}
              </TabPanel>
              <TabPanel>
                {/* 查詢訂單的內容 */}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Collapse>
    </>
  );
}

// 導出 CollapsiblePanel 組件
export default CollapsiblePanel;