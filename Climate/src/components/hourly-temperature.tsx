import { HourlyTemperatureProps } from '@/api/types'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { format } from 'date-fns'

const HourlyTemperature = ({ data }: HourlyTemperatureProps) => {
  const chartData = data.list.slice(0, 8).map((item) => ({
    time: format(new Date(item.dt * 1000), "ha"),
    temp: Math.round(item.main.temp),
    feels_like: Math.round(item.main.feels_like)
  }))

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>
          Today's Temperature
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer
            width={'100%'}
            height={'100%'}
          >
            <LineChart
              data={chartData}
            >
              <XAxis
                dataKey="time"
                stroke='#888888'
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke='#888888'
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}°`}
              />

              {/* tooltip of the line chart */}
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div>
                        <div>
                          <div>
                            <span>Temperature</span>
                            <span>{payload[0].value}°</span>
                          </div>
                        </div>
                        <div>
                          <span>Feels Like</span>
                          <span>{payload[1].value}°</span>
                        </div>
                      </div>
                    )
                  }
                }}
              />
              {/* temperature line */}
              <Line
                type="monotone"
                dataKey="temp"
                stroke="#2563eb"
                strokeWidth={2}
                dot={false}
              />
              {/* Feels like line */}
              <Line
                type="monotone"
                dataKey="feels_like"
                stroke="#64748b"
                strokeWidth={2}
                dot={false}
                strokeDasharray="5 5"
              />

            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export default HourlyTemperature