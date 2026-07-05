import { useEffect, useState } from "react"

function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key)
        return stored ? JSON.parse(stored) : initialValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}

function DraftEditor() {
    const [draft, setDraft] = useLocalStorage("post-draft", "")
    return <textarea value={draft} onChange={(e) => setDraft(e.target.value)} />
}

export default function Topic6Lesson2() {
    return <DraftEditor />
}