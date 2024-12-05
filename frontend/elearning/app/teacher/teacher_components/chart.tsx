import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, ChartData, ChartOptions } from 'chart.js';

// Register CategoryScale with Chart.js
ChartJS.register(CategoryScale);

const ChartContent = ({ data, options, category }: { data: ChartData<'line'>; options: ChartOptions<'line'>; category: string }) => {
    return (
        <div className="bg-white rounded-xl row-span-6 col-start-3 col-end-8 grid grid-cols-12 mb-4">
            <h2 className="col-span-12 text-center">{category}</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default ChartContent;
