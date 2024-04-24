'use client'
import React, {useMemo} from 'react'
import {SelectCPR} from "@/components/SelectionPanel/SelectCPR";
import {mockedData} from "@/components/SelectionPanel/utils";
import {SelectionRow} from "@/components/SelectionPanel/SelectionRow";

export const SelectionPanel = () => {
    const [selectedCPR, setSelectedCPR] = React.useState<string | null>(null)

    const memoizedData = useMemo(() => mockedData.find(d => d.cpr === selectedCPR), [selectedCPR]);

    return (
        <div className={'w-1/3 bg-white p-4 rounded-md flex flex-col gap-5'}>
            <h3 className={'font-medium'}>Distribute medicine</h3>
            <SelectCPR value={selectedCPR} onChange={setSelectedCPR} />
            {memoizedData && <SelectionRow name={memoizedData.name} quantity={memoizedData.quantity} link={memoizedData.link} />}
        </div>
    )
}