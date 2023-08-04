import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { UserAuth } from '../context/AuthContext.jsx'
import { Bar } from 'react-chartjs-2';
import moment from 'moment';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  
);



function ChartReact() {
  const {user,incomes,expenses} = UserAuth()

  function getTotalAmountByMonth(items) {
    const amountsByMonth = Array(12).fill(0);
  
    items.forEach((item) => {
      const date = new Date(item.date);
      const month = date.getMonth();
  
      amountsByMonth[month] += item.amount;
    });
  
    return amountsByMonth;
  }


 
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: 'Income',
        data: getTotalAmountByMonth(incomes),
        backgroundColor: "green",
      },
      {
        label: 'Expense',
        data: getTotalAmountByMonth(expenses),
        backgroundColor: "red",
      },
    ],
  };


  return (
    <div className='text-white bg-white p-2'>
      
      <Bar data={data} />
  
      
    </div>
  )
}

export default ChartReact