import React from 'react'

interface Props {
  name: string
  quantity: number
  link: string
}
export const SelectionRow = (props: Props) => {
  const { name, quantity, link } = props

  return (
    <div className={'px-3 py-2 flex flex-col gap-1 bg-slate-100 rounded-md '}>
      <div className={'flex justify-between items-center'}>
        <div>{name}</div>
        <div className={'text-sm text-gray-600'}>{quantity}</div>
      </div>

      <a href={link} target="_blank" className={'text-blue-500 text-sm underline'}>
        View details
      </a>
    </div>
  )
}
