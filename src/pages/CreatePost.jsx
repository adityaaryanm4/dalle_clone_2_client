import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormField, Loader } from '../components'
import { preview } from '../assets'
import { getRandomPrompt } from '../utils'

const CreatePost = () => {
  const navigate = useNavigate()
  //useState
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: ''

  })
  const [generatingImg, setGeneratingImg] = useState(false)
  const [loading, setLoading] = useState(false)
  //functions
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const handleSurpriseMe = () => {
    setForm({ ...form, prompt: getRandomPrompt(prompt) })
  }
  const generateImg = async (e) => {
    e.preventDefault()
    if (form.prompt) {
      setGeneratingImg(true)
      try {
        const response = await fetch('https://adi-dalle-server.cyclic.app/api/v1/dalle', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ prompt: form.prompt })
        })
        const resData = await response.json()
        setForm({ ...form, photo: resData.url })
      }
      catch (error) {
        console.log(error)
      }
      finally {
        setGeneratingImg(false)
      }
    }
    else {
      alert('Enter the prompt !')
    }
  }
  const shareWithCommunity = async () => {
    if (form.name && form.prompt && form.photo) {
      setLoading(true)
      try {
        const response = await fetch('https://adi-dalle-server.cyclic.app/api/v1/post', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name: form.name, prompt: form.prompt, photo: form.photo })
        })
        const data = await response.json()
      }
      catch (err) {
        console.log(err)
      }
      finally {
        setLoading(false)
        navigate('/')
      }
    }
    else {
      alert('Empty fields !')
    }
  }
  return (
    <section className='max-w-7xl mx-auto '>
      <div className='max-w-[800px] '>
        <h1 className='text-[#222328] text-[32px] font-extrabold capitalize'>create</h1>
        <p className='text-[#666e75] text-[16px] mt-2'>Create imaginative and visually stunning images through DALL_E AI and share them with the community.</p>
      </div>
      <form className='flex flex-col gap-4 mt-8 py-2 max-w-[800px]'>
        <FormField
          labelName='your name'
          type='text'
          name='name'
          placeholder='John Doe'
          value={form.name}
          handleChange={handleChange}
        />
        <FormField
          labelName='prooompt'
          type='text'
          name='prompt'
          placeholder='a pencil and watercolor drawing of a bright city in the future with flying cars'
          value={form.prompt}
          handleChange={handleChange}
          handleSurpriseMe={handleSurpriseMe}
          isSurpriseMe={true}
        />
        <div className='bg-gray-50 border border-gray-300 rounded-lg h-64 w-64 focus:ring focus:ring-blue-500 focus:border focus:border-blue-500 p-3 flex items-center justify-center relative'>
          {/* text-gray-900 text-sm*/}
          {form.photo ?
            (<img className='w-full h-full object-cover' src={form.photo} alt='ai_image' />) :
            (<img className='w-9/12 h-9/12 opacity-40 object-contain' src={preview} alt='preview' />)
          }
          {generatingImg && (
            <div className='absolute inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
              <Loader />
            </div>
          )}
        </div>
        <button className='text-white bg-green-700 py-2.5 rounded-lg w-full lg:w-28 md:w-28 text-sm font-medium' onClick={generateImg}>
          {generatingImg ? 'Generating...' : 'Generate'}
        </button>
      </form>
      <div className='mt-8'>
        <p className='text-[#666e75] text-[16px]'>Once you have created the image you want, you can share it with others in the community.</p>
        <button onClick={shareWithCommunity} className='text-white bg-[#6469ff] py-2.5 rounded-lg w-full lg:w-52 md:w-52  text-sm font-medium mt-3'>
          {loading ? 'Sharing...' : 'Share with the community'}
        </button>
      </div>
    </section>
  )
}

export default CreatePost  