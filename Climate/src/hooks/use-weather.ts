import { Coordinates } from '@/api/types'
import { weatherApi } from '@/api/weather'
import React from 'react'
import { useQuery } from 'react-query'

export const WEATHER_KEYS = {
    weather: (cords: Coordinates) =>
        ["weather", cords] as const
    ,
    forecast: (cords: Coordinates) =>
        ["forecast", cords] as const
    ,
    location: (cords: Coordinates) =>
        ["location", cords] as const

} as const;

export function useWeatherQuery(coordinates: Coordinates | null) {
    return useQuery({
        queryKey: WEATHER_KEYS.weather(coordinates ?? { lat: 0, lon: 0 }),
        queryFn: () =>
            coordinates ? weatherApi.getCurrentWeather(coordinates) : null,
        enabled: !!coordinates,
    })
}

export function useForecastQuery(coordinates: Coordinates | null) {
    return useQuery({
        queryKey: WEATHER_KEYS.forecast(coordinates ?? { lat: 0, lon: 0 }),
        queryFn: () =>
            coordinates ? weatherApi.getForecast(coordinates) : null,
        enabled: !!coordinates,
    })
}

export function useReverseGeocodeQuery(coordinates: Coordinates | null) {
    return useQuery({
        queryKey: WEATHER_KEYS.location(coordinates ?? { lat: 0, lon: 0 }),
        queryFn: () =>
            coordinates ? weatherApi.reverseGeocode(coordinates) : null,
        enabled: !!coordinates,
    })
}
