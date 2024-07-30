import React, { useState, useEffect, useCallback } from 'react';
import { GetActiveLocationList } from '../../../domain/services/site_locationsmg';
import { useToast, Box, useBreakpointValue, Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react';

import liff from '@line/liff';
import 'leaflet/dist/leaflet.css';

import useMapStore from '../../persistence/mapStore'; // 請根據你的目錄結構調整這個路徑

//引入MapComponent
import MapComponent from '../components/MapComponent';
import MessageBox from '../components/MessageBox';
import CollapsiblePanel from '../components/CollapsiblePanel';


function MapPage() {
    const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
    const [showBox, setShowBox] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [accessToken, setAccessToken] = useState(null);
    const toast = useToast();
    const { setPosition } = useMapStore();
    const setSiteLocations = useMapStore(state => state.setSiteLocations);
    const checkMobileDevice = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (!isMobile) {
            setAccessToken(null);
        }
    };

    const handlePositionUpdate = useCallback((position) => {
        setPosition([position.coords.latitude, position.coords.longitude]);
    }, [setPosition]);

    const handleError = useCallback((error) => {
        toast({
            title: "無法獲取位置",
            description: "請確認你的瀏覽器或裝置已經開啟地理位置服務。",
            status: "error",
            duration: 3000,
            isClosable: true,
        });
    }, [toast]);

    const watchPosition = useCallback(() => {
        let watchId;
        if (navigator.geolocation) {
            /* watchId = navigator.geolocation.watchPosition(handlePositionUpdate, handleError, {
                 maximumAge: 0, // 強制更新位置
                 enableHighAccuracy: true, // 使用最準確的位置來源
             });*/
        } else {
            setIsModalOpen(true);
        }
        return watchId;
    }, [handlePositionUpdate, handleError]);
    //執行一次
    useEffect(() => {
        //檢查是否為行動裝置
        checkMobileDevice();
        //呼叫站點
        fetchActiveLocations();
    }, []);

    useEffect(() => {
        //啟動liff
        liff.init({ liffId: '2004573455-vYaQNa4z' })
            .then(() => {
                let token = liff.getAccessToken();
                if (token != null) {
                    setAccessToken(token);
                    const watchId = watchPosition();
                    // 當組件卸載時，停止監聽位置
                    return () => {
                        if (watchId) {
                            navigator.geolocation.clearWatch(watchId);
                        }
                    };
                } else {
                    setAccessToken(null);
                    setIsModalOpen(true);
                }
            })
            .catch((err) => {
                toast({
                    title: "LIFF Initialization failed",
                    description: String(err),
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            });
    }, [toast, accessToken, watchPosition]);

    const fetchActiveLocations = async () => {
        const data = await GetActiveLocationList();
        setSiteLocations(data);
    };

    return (
        <>
            {accessToken ? (
                <Box display="flex" flexDirection={flexDirection} height="100vh">
                    <Box height="100vh" overflow="hidden" position="relative">
                        < MapComponent />
                        {showBox && <MessageBox onClose={() => setShowBox(false)} />}
                    </Box>
                    <CollapsiblePanel />
                </Box >
            ) : (
                // 顯示模態視窗
                <Modal isOpen={isModalOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalBody style={{ textAlign: 'center' }}>
                            系統初始化失敗
                        </ModalBody>
                    </ModalContent>
                </Modal>
            )
            }
        </>
    );
}

export default MapPage;