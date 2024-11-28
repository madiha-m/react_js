import { Button } from '@/components/ui/button'
import { RefreshCw } from 'lucide-react'
import React from 'react'

const Dashboard = () => {
    return (
        <div>
            {/* Favorite Cities */}
            <div>
                <h1>My Location</h1>
                <Button variant={'outline'}
                    size={"icon"}
                // onClick={handleRefresh}   // fun not exist right now
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