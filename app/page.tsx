"use client";
import React, { useState} from 'react';
import { Bar } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto';
import {items} from "./data";
import {items2} from "./data";
import _ from "underscore";

Chart.register(CategoryScale);


const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'График сравнения характеристик облачных серверов',
    },
  },
};




export default function Home() {
  
  const [item1, setItem1] = useState(items[0]);
  const [item2, setItem2] = useState(items[0]);
  const [item3, setItem3] = useState(items2[0]);
  const [item4, setItem4] = useState(items2[0]);
  


  
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let arr4 = [];
 
  arr1.push(_.omit(item1, 'name'));
  arr2.push(_.omit(item2, 'name'));
  arr3.push(_.omit(item3, 'name'));
  arr4.push(_.omit(item4, 'name'));
  



  function set1 () {
    
    setItem1(items[event?.target.value])
    setItem3(items2[event?.target.value])
  
  }
  function set2 () {
    
    setItem2(items[event?.target.value])
    setItem4(items2[event?.target.value])
  }

  let labels: string[] = _.keys(arr1[0]);
  let labels2: string[] = _.keys(arr3[0]);

  let data = {
    labels,
    datasets: [
      {
        label: item1.name,
        data: _.values(arr1[0]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: item2.name,
        data: _.values(arr2[0]),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  let data2 = {
    labels: labels2,
    datasets: [
      {
        label: item3.name,
        data: _.values(arr3[0]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: item4.name,
        data: _.values(arr4[0]),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
 
  return (<>
  <h4 className='title'>Выберите компании для сравнения</h4>
  <div className='selectdiv'>
<select  onChange={set1}>
         <option value={0}>GCE</option>
         <option value={1}>AWS</option>
         <option value={2}>Azure</option>
         <option value={3}>Яндекс облако</option>
         <option value={4}>Майл.ру облако</option>
         <option value={5}>Selectel</option>
         <option value={6}>VPC</option>
      </select>
  </div>
   <div className='selectdiv'>
<select onChange={set2}>
         <option value={0}>GCE</option>
         <option value={1}>AWS</option>
         <option value={2}>Azure</option>
         <option value={3}>Яндекс облако</option>
         <option value={4}>Майл.ру облако</option>
         <option value={5}>Selectel</option>
         <option value={6}>VPC</option>
      </select>
   </div>
      

  <div style={{ width: '1200px', height: '1200px' }}>
    <Bar options={options} data={data}/>
    <Bar options={options} data={data2}/>
  </div>
  </>
  );
}
