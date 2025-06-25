'use client'

import { useState } from 'react'

const PASSWORD = process.env.NEXT_PUBLIC_PROTECTED_PASSWORD || ''

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [enteredPassword, setEnteredPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (enteredPassword === PASSWORD) {
      setAuthenticated(true)
    } else {
      alert('Incorrect password')
    }
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-bold text-center">Enter Password</h2>
          <input
            type="password"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    )
  }

  return <>{children}</>
}
