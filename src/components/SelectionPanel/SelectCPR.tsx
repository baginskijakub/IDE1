"use client"
import * as React from "react"
import {CaretSortIcon, CheckIcon} from "@radix-ui/react-icons"

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem, CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {mockedData} from "@/components/SelectionPanel/utils";

interface SelectCPRProps {
    value: string | null
    onChange: (value: string) => void
}
export const SelectCPR = (props: SelectCPRProps) => {
    const {value, onChange: setValue} = props
    const [open, setOpen] = React.useState(false)

    const data = mockedData.map((d) => ({
        label: d.cpr,
        value: d.cpr,
    }))

    return (
        <Popover open={open} onOpenChange={setOpen} modal={false}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    {value
                        ? data.find((item) => item.value === value)?.label
                        : "Select CPR number..."}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0 left-0">
                <Command>
                    <CommandInput placeholder="Search framework..." className="h-9"/>
                    <CommandEmpty>Nothing found.</CommandEmpty>
                    <CommandList>
                        <CommandGroup>
                            {data.map((item) => (
                                <CommandItem
                                    key={item.value}
                                    value={item.value}
                                    onSelect={(currentValue) => {
                                        console.log(currentValue)
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {item.label}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            value === item.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}