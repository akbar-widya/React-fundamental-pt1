import { useEffect, useRef } from "react"

function SearchInput() {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return <input type="text" ref={inputRef} />
}

export default function Topic4Lesson1() {
  return (
    <SearchInput />
  )
}
