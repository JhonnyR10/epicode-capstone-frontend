import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const WinRateChart = ({ winRatePercentage }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  // Dati per il grafico
  const data = {
    labels: ["Wins", "Losses"],
    datasets: [
      {
        data: [winRatePercentage, 100 - winRatePercentage],
        backgroundColor: ["#4CAF50", "#FF5733"], // Verde per le vittorie, Rosso per le sconfitte (puoi personalizzare i colori)
      },
    ],
  };

  // Configurazione del grafico
  const options = {
    maintainAspectRatio: true, // Per consentire al grafico di adattarsi alla dimensione del contenitore
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};
export default WinRateChart;
