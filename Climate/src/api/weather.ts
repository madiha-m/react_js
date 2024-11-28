import { API_CONFIG } from "./config"
import { Coordinates, ForecastData, WeatherData } from "./types";

class WeatherAPI {
    private createUrl(
        endpoint: string,
        params: Record<string, string | number>
    ) {
        const searchParams = new URLSearchParams({
            appid: API_CONFIG.API_KEY,
            ...params,
        })
        return `${endpoint}?${searchParams.toString()}`
    }

    private async fetchData<T>(url: string): Promise<T> {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Weather Api Error: ${response.statusText}`)
        }

        return response.json();
    }

    async getCurrentWeather({ lat, lon }: Coordinates): Promise<WeatherData> {
        const url = this.createUrl(`${API_CONFIG.BASE_URL}/weather`, {
            lon: lon.toString(),
            lat: lat.toString(),
            units: API_CONFIG.DEFAULT_PARAMS.units,
        });

        return this.fetchData<WeatherData>(url);
    }

    async getForecast({ lat, lon }: Coordinates): Promise<ForecastData> {
        const url = this.createUrl(`${API_CONFIG.BASE_URL}/forecast`, {
            lon: lon.toString(),
            lat: lat.toString(),
            units: API_CONFIG.DEFAULT_PARAMS.units,
        });

        return this.fetchData<ForecastData>(url);
    }

    async reverseGeocode() { }
}