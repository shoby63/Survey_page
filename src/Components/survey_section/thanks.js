import React from 'react'

export default function thanks() {
  const submitHandler=()=>{
    window.location.reload();
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-400">
    <h2 className="text-3xl font-bold mb-4 text-white">Thank You for Completing the Survey!</h2>
    <p className="text-lg text-white mb-8">We appreciate your valuable feedback.</p>
    <button className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600" onClick={submitHandler}>
      Take Another Survey
    </button>
  </div>
  
  
  )
}
