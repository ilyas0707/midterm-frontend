import React, { useState } from "react"
import "./App.css"
import { TextArea } from "./components/TextArea"

function App() {
    const [value, setValue] = useState("")

    const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value)
    }

    return (
        <div className='app'>
            <div className='container max-w-screen-lg mx-auto'>
                <form className='w-3/6 py-5'>
                    <label
                        htmlFor='message'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                    >
                        Your message
                    </label>
                    <TextArea
                        id='message'
                        rows={4}
                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 	dark:focus:border-blue-500'
                        placeholder='Enter your message...'
                        onChange={changeHandler}
                    />
                </form>

                <p className='text-sm'>
                    <span className='italic font-medium'>Message:</span> {value}
                </p>
            </div>
        </div>
    )
}

export default App
