import { HourlyTemperatureProps } from '@/api/types'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const HourlyTemperature = ({ data }: HourlyTemperatureProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {/* title as Today's Temperature */}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* holding card content */}
      </CardContent>
    </Card>
  )
}

export default HourlyTemperature