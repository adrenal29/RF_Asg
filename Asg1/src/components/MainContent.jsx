import React from 'react'
import Breadcrumb from './BreadCrumb'
import Button from './Button'
import ContentHead from './ContentHead'
import Details from './Details'
import FeatureBox from './FeatureBox'
import Navbar from './Navbar'
import ProgressBar from './ProgressBar'

const MainContent = () => {
    return (
        <div>
            <div className='sticky top-0 bg-white z-10 '>
                <div className='border-b border-gray-300'>
                    <Navbar />
                </div>
                <div className='border-b border-gray-300  '>
                    <ContentHead />
                </div>
            </div>
            <div>
                <div className='md:ml-20 mt-5 ml-5'>
                    <Breadcrumb items={["Market", "Category 1", "Theme dark site"]} />
                </div>
                <div className='md:ml-20 mt-5 md:mr-20 ml-5 mr-5'>
                    <img src="./Land.svg" alt="Image " className='' />
                </div>
            </div>
            <div className='md:mr-20 md:ml-20 mt-5 ml-5 mr-5'>
                <div className='flex p-5 border border-gray-500 flex-wrap'>
                    <div className='md:w-1/2 w-full'>
                        <h1 className='text-2xl font-bold p-5'>Theme Park Site</h1>
                        <div className='p-5  flex'>
                            <img src="./Location.svg" alt="" />
                            Address of the site
                        </div>
                        <div className='p-5 flex flex-wrap'>
                            <FeatureBox text="Adult" icon="Feat1" />
                            <FeatureBox text="Family Ride" icon="Feat2" />
                            <FeatureBox text="Restaurants" icon="Feat3" />
                            <FeatureBox text="Premium" icon="Feat1" />
                        </div>
                        <div className='flex items-center p-5 text-buttonColor flex-wrap'>
                            <img src="./NorthEast.svg" alt="" />
                            <h1 className='ml-2 border-b border-buttonColor '>View opportunities on polygon</h1>
                        </div>
                        <div className='p-5 flex justify-between flex-wrap'>
                            <div>
                                <h1 className='text-lg'>200 Acres</h1>
                                <h1 className='text-sm text-gray-300'>Area</h1>
                            </div>
                            <div>
                                <h1 className='text-lg'>5 Lakhs</h1>
                                <h1 className='text-sm text-gray-300'>Starting price</h1>
                            </div>
                            <div>
                                <h1 className='text-lg'>10 days</h1>
                                <h1 className='text-sm text-gray-300'>Remaining days</h1>
                            </div>
                            <div>
                                <h1 className='text-lg'>2.5 years</h1>
                                <h1 className='text-sm text-gray-300'>Next check</h1>
                            </div>
                        </div>
                    </div>
                    <div className='p-5  md:w-1/2 w-full '>
                        <div className='flex flex-col ml-auto  items-end'>
                            <div className='md:w-2/3 w-full'>
                            <Button text="Complete" />
                            </div>
                            <button className='border mt-2 border-buttonColor h-10 p-2'>Visit Site {`>`} </button>
                            <div  className='w-full md:w-2/3 mt-10'>
                            <div className='flex justify-between flex-wrap'>
                                <h1 className='text-lg font-bold text-buttonColor'>Rs 2500000</h1>
                                <h1 className='text-sm mt-2 font-bold text-gray-300'>Rs 2500000</h1>
                            </div>
                            <ProgressBar maxValue={6500000} currentValue={2000000}/>
                            </div>
                        </div>
                       
                        
                    </div>

                </div>
                <Details/>
            </div>
        </div>
    )
}

export default MainContent