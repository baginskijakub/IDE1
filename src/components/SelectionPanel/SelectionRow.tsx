import React from 'react'

interface Props {
    name: string
    quantity: number
}
export const SelectionRow = (props: Props) => {
    const { name, quantity } = props

    return (
        <div className={'px-3 py-2 flex justify-between bg-slate-100 rounded-md items-center'}>
            <div>
                {name}
            </div>
            <div className={'text-sm text-gray-600'}>
                {quantity}
            </div>
        </div>
    )
}