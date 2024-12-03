import React from 'react'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { AlertTriangle, MapPin } from 'lucide-react'
import { Button } from './ui/button'

const WeatherError = ({ title, desc, currentLocation }: any) => {
  return (
    <Alert variant="destructive">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription className='flex flex-col gap-4'>
        <p>
          {desc}
        </p>
        <Button
          onClick={currentLocation}
          variant={"outline"}
          className='w-fit'
        >
          <MapPin className='mr-2 h-4 w-4' />
          Enable Location
        </Button>
      </AlertDescription>
    </Alert>
  )
}

export default WeatherError