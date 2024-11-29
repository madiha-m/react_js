import { GeoLocationState } from "@/api/types";
import { useEffect, useState } from "react";

export function useGeolocation() {

    const [locationData, setLocationData] = useState<GeoLocationState>({
        coordinates: null,
        error: null,
        isLoading: true,
    });

    const getLocation = () => {
        setLocationData((prev) => ({ ...prev, isLoading: true, error: null }));
    };

    useEffect(() => {
        getLocation();
    }, []);

    return {
        ...locationData,
        getLocation
    }
}
