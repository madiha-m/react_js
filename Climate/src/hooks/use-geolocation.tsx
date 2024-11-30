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

        if (!navigator.geolocation) {
            setLocationData({
                coordinates: null,
                error: "GeoLocation is not supported by the browser.",
                isLoading: false,
            })
            return;
        }
        navigator.geolocation.getCurrentPosition((position) => {
            setLocationData({
                coordinates: {
                    lon: position.coords.longitude,
                    lat: position.coords.latitude,
                },
                error: null,
                isLoading: false,
            });
        });
    };

    useEffect(() => {
        getLocation();
    }, []);

    return {
        ...locationData,
        getLocation
    }
}
