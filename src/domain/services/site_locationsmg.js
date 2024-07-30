import { readResourceList } from '../../infrastructure/tool/apiClient';

export const GetActiveLocationList = async () => {
    const response = await readResourceList('VehicleTracking/GetActiveLocationList');
    if (response.success) {
        return response.data;
    } else {
        return [];
    }
};