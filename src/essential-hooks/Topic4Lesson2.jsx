import { useRef } from "react"

function FancyInput({ ref, ...props }) {
    return <input ref={ref} {...props} />
}

function Form() {
    const nameRef = useRef(null)
    return <FancyInput ref={nameRef} placeholder="Your name" />
}

export default function Topic4Lesson2() {
  return <Form />
}
