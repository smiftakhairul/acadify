import { Line } from "react-chartjs-2";
import {CategoryScale, Chart as ChartJS, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js'; 
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Props = {
  title: string,
  titleDisabled?: boolean,
  labels: any,
  data: any,
};

const LineChart = (props: Props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: props?.titleDisabled || true,
        text: props?.title,
      },
    },
  };

  const data = {labels: props?.labels, datasets: props?.data};

  return (
    <Line options={options} data={data} />
  );
}

export default LineChart;
