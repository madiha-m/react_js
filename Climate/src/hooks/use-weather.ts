import { Coordinates } from '@/api/types'
import { weatherApi } from '@/api/weather'
import React from 'react'
import { useQuery } from 'react-query'

export const WEATHER_KEYS = {
    weather: (cords: Coordinates) => {
        ["weather", cords] as const
    }
}

export function useWeatherQuery(coordinates: Coordinates | null) {
    return useQuery({
        queryKey: WEATHER_KEYS.weather(coordinates ?? { lat: 0, lon: 0 }),
        queryFn: () =>
            coordinates ? weatherApi.getCurrentWeather(coordinates) : null,
        enabled: !!coordinates,
    })
}
