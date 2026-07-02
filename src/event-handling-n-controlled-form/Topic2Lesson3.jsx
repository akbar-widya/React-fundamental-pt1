import { useState } from "react";

function ProfileForm() {
    const [form, setForm] = useState({ name: "", email: "", bio: ""})
    
    function handleChange(e) {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(form)
        // saveProfile(form)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange} />
            <input name="email" value={form.email} onChange={handleChange} />
            <textarea name="bio" value={form.bio} onChange={handleChange} />
            <button type="submit">Save</button>
        </form>
    )
}

export default function Topic2Lesson3() {
  return <ProfileForm />;
}
