'use client'
import React, { useEffect, useMemo } from 'react'
import { SelectCPR } from '@/components/SelectionPanel/SelectCPR'
import { mockedData } from '@/components/SelectionPanel/utils'
import { SelectionRow } from '@/components/SelectionPanel/SelectionRow'
import { Button } from '@/components/ui/button'

export const SelectionPanel = () => {
  const [selectedCPR, setSelectedCPR] = React.useState<string | null>(null)
  const [hasBeenClicked, setHasBeenClicked] = React.useState<boolean>(false)

  const memoizedData = useMemo(() => mockedData.find((d) => d.cpr === selectedCPR), [selectedCPR])

  useEffect(() => {
    setHasBeenClicked(false)
  }, [selectedCPR])

  return (
    <div className={'w-1/3 bg-white p-4 rounded-md flex flex-col gap-5'}>
      <h3 className={'font-medium'}>Distribute medicine</h3>
      <SelectCPR value={selectedCPR} onChange={setSelectedCPR} />
      {memoizedData && (
        <>
          {memoizedData.medicines.map((data) => (
            <SelectionRow name={data.name} quantity={data.quantity} link={data.link} />
          ))}
          <Button onClick={() => setHasBeenClicked(true)} disabled={hasBeenClicked}>
            {hasBeenClicked ? 'Medicine already distributed' : 'Distribute medicine'}
          </Button>
        </>
      )}
    </div>
  )
}
