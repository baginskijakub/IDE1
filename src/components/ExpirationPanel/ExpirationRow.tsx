import React from 'react'
import {ExpirationData} from "@/components/ExpirationPanel/utils";

interface Props {
    data: ExpirationData
}

export const ExpirationRow = (props: Props ) => {
    const { name, quantity, expirationDate, link } = props.data
    return (
        <div className={'px-3 py-2 flex flex-col gap-1 bg-slate-100 rounded-md '}>
        <div className={'flex justify-between items-center'}>
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

            <a href={link} target="_blank" className={'text-blue-500 text-sm underline'}>
                View details
            </a>
        </div>
    )
}