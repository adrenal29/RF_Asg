import React,{useState} from 'react'
import '../App.css'
import DetailsBox from './DetailsBox'
import Landmark from './Landmark'
import Option from './Option'
import { stepsData } from '../utils/stepsData'
const Details = () => {
    const [steps,setSteps]=useState(stepsData);
    const [step,changeStep]=useState(0);
    const handleStatus = (currentStep) => {
        console.log("Function called");
        const newSteps = [...steps];
        newSteps[currentStep].done=true;
        if(currentStep==3){
            setSteps(newSteps);
            return;
        }
        newSteps[currentStep+1].active=true;
        let jump=1;
        if(currentStep==1){
        newSteps[currentStep+1].done=true;
        newSteps[currentStep+2].active=true;
        jump=2;
        }
        console.log(newSteps);
        setSteps(newSteps);
        changeStep(currentStep + jump);
    };
    
    return (
        <div className='flex border border-gray-500  flex-wrap'>
            <div className='md:w-1/2  border-r border-gray-500 overflow-y-auto h-80 custom-scrollbar' >
                <DetailsBox text="Overview" />
                <DetailsBox text="What" />
                <DetailsBox text="Why" />
                <div className='p-5 border-b border-gray-500 border-b'>
                <h1 className='text-xl font-bold mb-7 '>Landmarks</h1>
                    <Landmark type="Airport" distance="100"/>
                    <Landmark type="Airport" distance="100"/>
                    <Landmark type="Highway" distance="100"/>
                </div>
                <div className='p-5 border-b border-gray-500'>
                <h1 className='text-xl font-bold mb-7 '>Map</h1>
                <img src="./Map.svg" alt="" />
                </div>
            </div>

            <div className='md:w-1/2 w-full border-r border-gray-500 overflow-y-auto h-80 custom-scrollbar'>
                {
                    steps && steps.map((step,idx)=>{
                        return <Option actionName={step.stepName} btnText={step.btnText} active={step.active} statusHead={step.statusHead} statusSubHead={step.statusSubHead} btnTextSuccess={step.btnTextSuccess} handleStatusChange={handleStatus} step={idx} key={idx} done={step.done} dateComp={step.dateComp}/>
                    })
                }
            </div>
        </div>
    )
}

export default Details