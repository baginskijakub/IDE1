import React from 'react'
import {ExpirationData} from "@/components/ExpirationPanel/utils";

interface Props {
    data: ExpirationData
}

export const ExpirationRow = (props: Props ) => {
    const { name, quantity, expirationDate } = props.data
    return (
        <div className={'px-3 py-2 flex justify-between items-center bg-slate-100 rounded-md'}>
            <div className={'flex-1'}>
                {name}
            </div>
            <div className={'w-[200px] text-right text-sm text-gray-600'}>
                {quantity}
            </div>
            <div className={'w-[200px] text-right text-sm text-gray-600'}>
                {expirationDate.toDateString()}
            </div>
        </div>
    )
}