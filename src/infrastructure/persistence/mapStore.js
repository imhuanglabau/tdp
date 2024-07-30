// mapStore.js
import create from 'zustand';

const useMapStore = create(set => ({
    position: [22.618106512016343, 120.2890457382087],
    siteLocations: [],
    zoom: 18,
    setPosition: (position) => set({ position }),
    setZoom: (zoom) => set({ zoom }),
    setSiteLocations: (siteLocations) => set({ siteLocations }),
}));

export default useMapStore;