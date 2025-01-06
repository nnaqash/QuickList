import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-emerald-900 text-orange-200 py-4">
        <div className="logo">
            <span className="font-bold text-xl mx-9">Quick List</span>
        </div>
        <ul className="flex gap-5 mx-8">
            <li className="cursor-pointer hover:bg-orange-600 hover:rounded px-1">Home</li>
            <li className="cursor-pointer hover:bg-orange-600 hover:rounded px-1">Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
