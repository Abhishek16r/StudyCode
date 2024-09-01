import React from 'react'

const Error = () => {
  return (
    <div class="flex flex-wrap flex-col bg-gray-50 items-center justify-center h-[500px] text-white">
      <h1 class="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p class="text-gray-600">Sorry, the page you're looking for doesn't exist.</p>

      <div class="mt-4 text-center flex gap-2">
        <p class="text-gray-600 mb-3">Let's get you back</p>
        <a href="/" class="text-blue-200 hover:underline">Home</a>
      </div>
  </div>
  )
}

export default Error
