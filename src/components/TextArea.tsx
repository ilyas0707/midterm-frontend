import React, { FunctionComponent } from "react"

interface TextAreaProps {
    id?: string
    cols?: number
    rows?: number
    className?: string
    type?: string
    placeholder?: string
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const TextArea: FunctionComponent<TextAreaProps> = ({ ...props }) => {
    return <textarea {...props} />
}
