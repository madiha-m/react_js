import { GeoLocationState } from "@/api/types";
import { useEffect, useState } from "react";

export function useGeolocation() {

    const [locationData, setLocationData] = useState<GeoLocationState>({
        coordinates: null,
        error: null,
        isLoading: true,
    });

    const getLocation = () => { };

    useEffect(() => {
        getLocation();
    }, []);

    /*
    return 
    
    - locationData with spread operator, as using refresh btn getting data manually

    - call getLocation fun as well
     */

}
