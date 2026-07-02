import { useRef } from "react";

function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const credentials = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(credentials);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" ref={emailRef} defaultValue="" />
      <input type="password" ref={passwordRef} defaultValue="" />
      <button type="submit">Log in</button>
    </form>
  );
}

export default function Topic2Lesson2() {
  return <LoginForm />;
}
