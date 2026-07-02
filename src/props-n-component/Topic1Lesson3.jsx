import profile from '../assets/boy-profile.png'

// give default value for prop the same way giving default value for common parameter 
function Avatar({ src, size = 40, alt = "User avatar" }) {
    return <img src={src} width={size} height={size} alt={alt} />
}

const Topic1Lesson3 = () => {
  return <Avatar src={profile} />
}

export default Topic1Lesson3