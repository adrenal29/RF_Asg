import React, { useState } from 'react'
import '../App.css'
import DetailsBox from './DetailsBox'
import Landmark from './Landmark'
import Option from './Option'
import { stepsData } from '../utils/stepsData'
import { useEffect } from 'react'

const Details = () => {
    const [steps, setSteps] = useState(stepsData);
    const [step, changeStep] = useState(0);
    const [content1, setContent1] = useState('');
    const [content2, setContent2] = useState('');
    const fetchData = async () => {
        const data = await fetch("https://baconipsum.com/api/?type=meat-and-filler")
        const parseData = await data.json();
        setContent1(parseData[0]);
        const data2 = await fetch("https://baconipsum.com/api/?type=meat-and-filler")
        const parseData2 = await data2.json();
        setContent2(parseData2[0]);
    }
    useEffect(() => {
        fetchData();
    }, [])
    const handleStatus = (currentStep) => {
        console.log("Function called");
        const newSteps = [...steps];
        newSteps[currentStep].done = true;
        if (currentStep == 3) {
            setSteps(newSteps);
            return;
        }
        newSteps[currentStep + 1].active = true;
        let jump = 1;
        if (currentStep == 1) {
            newSteps[currentStep + 1].done = true;
            newSteps[currentStep + 2].active = true;
            jump = 2;
        }
        console.log(newSteps);
        setSteps(newSteps);
        changeStep(currentStep + jump);
    };

    return (
        <div className='flex border border-gray-500  flex-wrap'>
            <div className='md:w-1/2  border-r border-gray-500 overflow-y-auto h-80 custom-scrollbar' >
                <DetailsBox text="Overview" content={content1} />
                <DetailsBox text="What" content={content2} />
                <DetailsBox text="Why" content={content1} />
                <div className='p-5 border-b border-gray-500 border-b'>
                    <h1 className='text-xl font-bold mb-7 '>Landmarks</h1>
                    <Landmark type="Airport" distance="100" />
                    <Landmark type="Airport" distance="100" />
                    <Landmark type="Highway" distance="100" />
                </div>
                <div className='p-5 border-b border-gray-500'>
                    <h1 className='text-xl font-bold mb-7 '>Map</h1>
                    <img src="./Map.svg" alt="" />
                    <div className='flex justify-end mt-2'>
                        <button className={`flex items-center p-6 pt-3 pb-3 text-buttonColor text-xs border border-buttonColor border-1`}>
                            Schedule a call <span className='ml-2'>{'>'}</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='md:w-1/2 w-full border-r border-gray-500 overflow-y-auto h-80 custom-scrollbar'>
                {
                    steps && steps.map((step, idx) => {
                        return <div className='border border-gray-300'>
                            <Option actionName={step.stepName} btnText={step.btnText} active={step.active} statusHead={step.statusHead} statusSubHead={step.statusSubHead} btnTextSuccess={step.btnTextSuccess} handleStatusChange={handleStatus} step={idx} key={idx} done={step.done} dateComp={step.dateComp} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Details