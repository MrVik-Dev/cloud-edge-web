"use client"

import BadgeLabel from '@/components/shared/BadgeLabel'
import GetinTouchCard from '@/components/ui/GetinTouchCard'
import { AForm, AFormInput } from '@ascendtis/react-a-form'
import React from 'react'

const ContactUsSection = () => {

  const onSubmit = (val: any) => {
    try {

    } catch (error) {
      console.error(error);
    }
  }

  const commonInputStyle = {
    borderRadius: "10px",
    padding: "7px",
    background: "#F7F9FD",
  }

  return (
    <section className='bg-white py-10 sm:py-20 overflow-hidden'>
      <div className='container mx-auto px-4'>

        {/* Heading */}
        <div className='flex items-center flex-col justify-center text-center'>
          <BadgeLabel
            label='Contact us'
            theme='light'
            labelBgColor='#EDEBFF'
          />

          <h2 className="text-[#1D1F20] font-medium leading-[120%] mt-5 text-[30px] sm:text-4xl md:text-5xl max-w-[900px]">
            Ask us a Question
          </h2>
        </div>

        {/* Content */}
        <div className='grid grid-cols-1 lg:grid-cols-12 mt-10 sm:mt-14 gap-8 lg:gap-12'>

          {/* Left Card */}
          <div className='lg:col-span-5 w-full'>
            <GetinTouchCard />
          </div>

          {/* Form */}
          <div className='lg:col-span-7 w-full'>
            <div className='space-y-1'>
              <div className='font-semibold text-black text-2xl sm:text-3xl'>
                Start Your Learning Journey
              </div>

              <div className='text-sm sm:text-base text-[#6E6E6E]'>
                Fill out the form below and our team will contact you within 24 hours.
              </div>
            </div>

            <div className='mt-6'>
              <AForm onSubmit={onSubmit}>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

                  <div key={'first_name'}>
                    <AFormInput
                      name='first_name'
                      type='text'
                      label="First name"
                      validation={{ required: true }}
                      placeholder='Enter First name'
                      containerStyle={commonInputStyle}
                    />
                  </div>

                  <div key={'last_name'}>
                    <AFormInput
                      name='last_name'
                      type='text'
                      label="Last name"
                      validation={{ required: true }}
                      placeholder='Enter Last name'
                      containerStyle={commonInputStyle}
                    />
                  </div>

                  <div key={'email'}>
                    <AFormInput
                      name='email'
                      type='text'
                      label="Email"
                      validation={{ required: true }}
                      placeholder='Enter Email'
                      containerStyle={commonInputStyle}
                    />
                  </div>

                  <div key={'phone_number'}>
                    <AFormInput
                      name='phone_number'
                      type='text'
                      label="Phone Number"
                      validation={{ required: true }}
                      placeholder='Enter Phone Number'
                      containerStyle={commonInputStyle}
                    />
                  </div>

                  <div className='sm:col-span-2' key={'city'}>
                    <AFormInput
                      name='city'
                      type='text'
                      label="City"
                      validation={{ required: true }}
                      placeholder='Enter City'
                      containerStyle={commonInputStyle}
                    />
                  </div>

                  <div className='sm:col-span-2' key={'message'}>
                    <AFormInput
                      name='message'
                      type='textarea'
                      label="Message"
                      placeholder='Type here...'
                      inputClassName='!bg-[#F7F9FD] !rounded-[10px] !p-3 min-h-[120px]'
                    />
                  </div>

                  <div className='sm:col-span-2' key={'newsletter'}>
                    <AFormInput
                      name='newsletter'
                      type='checkbox'
                      label="Subscribe Our News Letter"
                    />
                  </div>
                </div>

                <div className='flex items-center justify-center sm:justify-start mt-8 sm:mt-10'>
                  <button
                    type='submit'
                    className='px-6 py-3 bg-primary rounded-xl text-white w-full sm:w-auto'
                  >
                    Submit
                  </button>
                </div>
              </AForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUsSection