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
        },
            (error) => {
                let errorMessage: string;

                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage =
                            "Location permission denied. Please enable location access.";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMessage =
                            "Location information is unavailable.";
                        break;
                    case error.TIMEOUT:
                        errorMessage =
                            "Location request time out.";
                        break;
                    default:
                        errorMessage = "An unknown error occurred."
                }
                setLocationData({
                    coordinates: null,
                    error: errorMessage,
                    isLoading: false,
                })
            }, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        }
        );
    };

    useEffect(() => {
        getLocation();
    }, []);

    return {
        ...locationData,
        getLocation
    }
}
