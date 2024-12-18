import WeatherError from '@/components/display-error'
import WeatherSkeleton from '@/components/loading-skeleton'
import { Button } from '@/components/ui/button'
import CurrentWeather from '@/components/current-weather'
import { useGeolocation } from '@/hooks/use-geolocation'
import { useForecastQuery, useReverseGeocodeQuery, useWeatherQuery } from '@/hooks/use-weather'
import { RefreshCw } from 'lucide-react'
import React from 'react'
import HourlyTemperature from '@/components/hourly-temperature'

const Dashboard = () => {
    const {
        coordinates,
        error: locationError,
        getLocation,
        isLoading: locationLoading
    } = useGeolocation();

    const weatherQuery = useWeatherQuery(coordinates);
    const forecastQuery = useForecastQuery(coordinates);
    const locationQuery = useReverseGeocodeQuery(coordinates);

    const handleRefresh = () => {
        getLocation();
        if (coordinates) {
            // refetch all queries for weather data
            weatherQuery.refetch();
            forecastQuery.refetch();
            locationQuery.refetch();
        }
    }

    if (locationLoading) {
        return <WeatherSkeleton />
    }

    if (locationError) {
        return <WeatherError
            title={'Location Error'}
            desc={locationError}
            btnCall={getLocation}
            btn='Enable Location'
        />
    }

    if (!coordinates) {
        return <WeatherError
            title={'Location Required'}
            desc={'Please enable location access to see your local weather'}
            btnCall={getLocation}
            btn='Enable Location'
        />
    }

    const locationName = locationQuery.data?.[0];

    if (weatherQuery.error || forecastQuery.error) {
        return <WeatherError
            desc={'Failed to fetch weather data. Please try again.'}
            btnCall={handleRefresh}
            btn={'Retry'}
        />
    }

    if (!weatherQuery.data || !forecastQuery.data) {
        return <WeatherSkeleton />
    }

    return (
        <div className='space-y-4'>
            {/* Favorite Cities */}
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-bold tracking-tight'>My Location</h1>
                <Button variant={'outline'}
                    size={"icon"}
                    onClick={handleRefresh}
                    disabled={weatherQuery.isFetching || forecastQuery.isFetching}
                >
                    <RefreshCw className={`h-4 w-4 ${weatherQuery.isFetching ? "animate-spin" : ""
                        }`} />
                </Button>
            </div>
            <div className='grid gap-6'>
                <div>
                    {/* current weather */}
                    <CurrentWeather
                        data={weatherQuery.data}
                        locationName={locationName}
                    />
                    {/* hourly Temperature */}
                    <HourlyTemperature
                        data={forecastQuery.data}
                    />
                </div>
                <div>
                    {/* details */}
                    {/* forecast */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard