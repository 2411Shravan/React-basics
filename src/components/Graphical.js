import React from 'react';
import {Bar,Line} from 'react-chartjs-2';

export default function Chart(){

 const arr=['jonathan','suhas','kiran','chandan','shravan','shreyas','praveen']
 const marks=[90,90,95,92,91,92,98]
const arrayD=['jonathan','suhas','kiran','chandan','shravan','shreyas','praveen']
const marksJ=[56,78,90,95,88,98,95]
return (
    <div>
        <Line
        
            data={{
                
                labels: arr,arrayD,
                datasets:[
                    {
                        label: 'marks in ADA',
                        data:marks,
                       // backgroundColor: '#87CEFA',
                        //fill:true,
                        Color: '#87CEFA'
                    },
                    {
                        label: 'marks in Java',
                        data:marksJ,
                        //backgroundColor: 'red',
                        //fill:true,
                        Color: 'red'
                    }
                ]
            
            
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio:false,
            }}
        />
    </div>
);
}