import { useEffect, useRef } from "react";
import { FaStar, FaDollarSign, FaCaretDown } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { PieChart, Pie, Label, Tooltip } from "recharts";
import "./Dashboard.css";
import Chart from "chart.js/auto";

const Dashboard = () => {
  const chartRef = useRef(null);

  // Dummy data for demonstration
  const schoolData = {
    name: "ABC Driving School",
    location: "City, Country",
    overallRating: 4.5,
    monthlyEarning: 5000,
    overallEarning: 80000,
    rank: 5,
    earningData: [4000, 6000, 7000, 5500, 8000, 9000],
  };

  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];

  useEffect(() => {
    if (chartRef.current) {
      // If chart already exists, destroy it before re-initializing
      chartRef.current.destroy();
    }

    const ctx = document.getElementById("earningChart").getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Earnings",
            data: schoolData.earningData,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [schoolData]);

  return (
    <div className="min-h-screen container dashboard-container grid mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-3">
          <div className="school-info">
            <h2 className="text-xl font-bold mb-2">{schoolData.name}</h2>
            <div className="dashboard-card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20 justify-center">
              <div className="dashboard-card">
                <div className="title">
                  <span>
                    <FaStar />
                  </span>
                  <p className="title-text">Rating</p>
                  <p className="percent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1792 1792"
                      fill="currentColor"
                      height="20"
                      width="20"
                    >
                      <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
                    </svg>{" "}
                    20%
                  </p>
                </div>
                <div className="data">
                  <p>{schoolData.overallRating}</p>

                  <div className="range">
                    <div className="fill"></div>
                  </div>
                </div>
              </div>

              <div className="dashboard-card">
                <div className="title">
                  <span>
                    <FaDollarSign />
                  </span>
                  <p className="title-text">Monthly</p>
                  <p className="percent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1792 1792"
                      fill="currentColor"
                      height="20"
                      width="20"
                    >
                      <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
                    </svg>{" "}
                    5%
                  </p>
                </div>
                <div className="data">
                  <p>{"₹" + schoolData.monthlyEarning}</p>

                  <div className="range">
                    <div className="fill"></div>
                  </div>
                </div>
              </div>

              <div className="dashboard-card">
                <div className="title">
                  <span>
                    <FaDollarSign />
                  </span>
                  <p className="title-text">Total</p>
                  <p className="percent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1792 1792"
                      fill="currentColor"
                      height="20"
                      width="20"
                    >
                      <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
                    </svg>{" "}
                    135%
                  </p>
                </div>
                <div className="data">
                  <p>{"₹" + schoolData.overallEarning}</p>

                  <div className="range">
                    <div className="fill"></div>
                  </div>
                </div>
              </div>

              <div className="dashboard-card">
                <div className="title">
                  <span>
                    <FaRankingStar />
                  </span>
                  <p className="title-text">Rank</p>
                  <p className="percent">
                    <FaCaretDown className="text-red-700 size-5" />
                    <p className="rank text-red-700">1</p>
                  </p>
                </div>
                <div className="data">
                  <p>{schoolData.rank}</p>

                  <div className="range">
                    <div className="fill"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="charts flex">
          <div className="pie-chart">
            <PieChart width={400} height={300} margin={0}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#8884d8"
                label
              />
              <Label value="Test Label" position="center" />
              <Tooltip />
            </PieChart>
          </div>

          <div className="bar-chart mt-20">
            <canvas id="earningChart" width="400" height="200"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
