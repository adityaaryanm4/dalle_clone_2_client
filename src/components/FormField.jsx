import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, handleSurpriseMe, isSurpriseMe }) => {
  return (
    <div>
      <div className='flex gap-2 items-center mb-1'>
        <label htmlFor={name} className='capitalize text-sm font-medium text-gray-900'>{labelName}</label>
        {isSurpriseMe && <button type='button' className='bg-[#EcECF1] text-xs font-bold py-1 px-2 rounded' onClick={handleSurpriseMe}>Surprise me</button>}
      </div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className='outline-none bg-gray-50 rounded-lg w-full text-gray-900 text-sm p-3 border border-gray-300  focus:border-[#4649ff] focus:ring-1 focus:ring-[#4649ff]'
      // block
      />
    </div>
  )
}

export default FormField