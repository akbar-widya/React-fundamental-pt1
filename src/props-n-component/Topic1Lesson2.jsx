import { useState } from "react"

// 3. Composition: pass the already-built element down instead
export default function Topic1Lesson2() {
    const [theme, setTheme] = useState("dark")
    return (
    <Page>
        <Sidebar theme={theme} />
    </Page>
    )
}

function Page({ children }) {
    return <div>{children}</div>
}

function Sidebar({ theme }) {
    return <button class={`btn-${theme}`}>Settings</button>
}

// 2. Problem because only parent can update them: Prop drilling
// export default function Topic1Lesson2() {
//     const [theme, setTheme] = useState("dark")
//     return <Page theme={theme} />
// }

// function Page({ theme }) {   // page doesnt need the prop, but forced to grab it
//     return <Sidebar theme={theme} />
// }

// function Sidebar({ theme }) {    // only button who actually need the prop
//     return <button class={`btn-${theme}`}>Settings</button>
// }

// 1. Prop as children
// function Card({ children }) {
//     return <div>{children}</div> // In composition, children prop is used inside an element & to grab elements or components, not on attribute or to grab state.
// }

// const Topic1Lesson2 = () => {
//   return (
//     <Card>
//         <h2>Weekly stats</h2>
//         <p>You completed 4 workouts.</p>
//     </Card>
//   )
// }

// export default Topic1Lesson2