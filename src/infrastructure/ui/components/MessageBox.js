import { Flex, Text, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const MessageBox = ({ onClose }) => (
    <Flex position="absolute" top="10%" left="50%" transform="translate(-50%, -50%)" zIndex="1000" bg="green.500" p="5px" borderRadius="5px" color="white" onDoubleClick={onClose}>
        <Text mb="5px" whiteSpace="nowrap">縮小頁面方法:下拉、停頓、放手</Text>
        <IconButton aria-label="Close" icon={<CloseIcon size="sm" />} onClick={onClose} bg="transparent" />
    </Flex>
);

export default MessageBox;