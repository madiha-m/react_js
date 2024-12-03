import WeatherError from '@/components/display-error'
import WeatherSkeleton from '@/components/loading-skeleton'
import { Button } from '@/components/ui/button'
import { useGeolocation } from '@/hooks/use-geolocation'
import { RefreshCw } from 'lucide-react'
import React from 'react'

const Dashboard = () => {
    const {
        coordinates,
        error: locationError,
        getLocation,
        isLoading: locationLoading
    } = useGeolocation();
    // console.log(coordinates);

    const handleRefresh = () => {
        getLocation();
        if (coordinates) {
            // reload weather data
        }
    }

    if (locationLoading) {
        return <WeatherSkeleton />
    }

    if (locationError) {
        return <WeatherError title={'Location Error'} desc={locationError} currentLocation={getLocation} />
    }

    if (!coordinates) {
        return <WeatherError
            title={'Location Required'}
            desc={'Please enable location access to see your local weather'}
            currentLocation={getLocation}
        />
    }

    return (
        <div className='space-y-4'>
            {/* Favorite Cities */}
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-bold tracking-tight'>My Location</h1>
                <Button variant={'outline'}
                    size={"icon"}
                    onClick={handleRefresh}
                // disabled={ }              // will be disabled while fetching current/forecast data
                >
                    <RefreshCw className='h-4 w-4' />
                </Button>
            </div>
            {/* Current and Hourly weather */}
        </div>
    )
}

export default Dashboard