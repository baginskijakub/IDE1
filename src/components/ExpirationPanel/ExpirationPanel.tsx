import React from 'react'
import {expirationMocks} from "@/components/ExpirationPanel/utils";
import {ExpirationRow} from "@/components/ExpirationPanel/ExpirationRow";


export const ExpirationPanel = () => {

    return (
        <div className={'w-2/3 bg-white p-4 rounded-md flex flex-col gap-2'}>
            <h3 className={'font-medium'}>Expiring medicine</h3>
            {expirationMocks.map((data, index) => (
            <ExpirationRow key={index} data={data} />
                ))}
        </div>
    )
}