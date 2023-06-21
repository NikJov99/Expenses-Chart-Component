import "./Main.css";
import ChartComponent from "../chart/ChartComponent";

const Main = () => {
  return (
    <main>
      <h2 className="spending-heading">Spending - Last 7 days</h2>
      <div className="chart-container">
        <ChartComponent />
      </div>
      <hr />
      <div className="total-container">
        <p>Total this month</p>
        <div className="month-spendings">
          <div className="monthly-balances">
            <h1 className="total-this-month">$478.33</h1>
            <div className="last-month">
              <span>+2.4%</span>
              <p>from last month</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
