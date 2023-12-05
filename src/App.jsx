import { useState } from 'react'
import { auth } from './firebase'

const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async () => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      console.log('User signed up:', userCredential.user)
      // Handle success, e.g., redirect to a dashboard
    } catch (error) {
      console.error('Error signing up:', error)
      // Handle error, show error message, etc.
    }
  }

  const handleSignIn = async () => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password
      )
      console.log('User signed in:', userCredential.user)
      // Handle success, e.g., redirect to a dashboard
    } catch (error) {
      console.error('Error signing in:', error)
      // Handle error, show error message, etc.
    }
  }

  return (
    <div>
      <h1>Firebase Authentication Demo</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  )
}

export default App
