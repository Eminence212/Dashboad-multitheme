import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import statusCards from "../assets/JsonData/status-card-data.json";
import StatusCard from "../components/status-card/StatusCard";
import Table from "../components/Table/Table";
import Badge from "../components/Badge/Badge";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ThemeAction from '../redux/actions/ThemeAction'
const chartOptions = {
  series: [
    {
      name: "Online Customers",
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60, 10, 20, 40],
    },
    {
      name: "Store Customers",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10, 60, 91],
    },
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    strocke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};
const topCustomers = {
  head: ["user", "total orders", "total spending"],
  body: [
    {
      username: "john doe",
      order: "400",
      price: "$15,870",
    },
    {
      username: "frank iva",
      order: "250",
      price: "$12,251",
    },
    {
      username: "anthony baker",
      order: "120",
      price: "$10,840",
    },
    {
      username: "john doe",
      order: "400",
      price: "$15,870",
    },
    {
      username: "frank iva",
      order: "250",
      price: "$12,251",
    },
  ],
};

const latestOrder = {
  header: ["order id", "user", "price", "date", "status"],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping",
    },
    {
      id: "#OD1712",
      user: "john doe",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      id: "#OD1713",
      user: "john doe",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending",
    },
    {
      id: "#OD1714",
      user: "john doe",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      id: "#OD1715",
      user: "john doe",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund",
    },
  ],
};
const renderCusomerHead = (item, index) => <th key={index}> {item} </th>;
const renderCusomerBody = (item, index) => (
  <tr key={index}>
    <td> {item.username} </td>
    <td> {item.order} </td>
    <td> {item.price} </td>
  </tr>
);

const orderStatus = {
  shipping: "primary",
  pending: "warning",
  paid: "success",
  refund: "danger",
};
const renderOrderHead = (item, index) => <th key={index}> {item} </th>;
const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td> {item.id} </td>
    <td> {item.user} </td>
    <td> {item.price} </td>
    <td> {item.date} </td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);
const Dashboard = () => {

  const themeReducer = useSelector(state => state.ThemeReducer.mode)
 
  return (
    <div>
      <h2 className="page-header"> Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6" key={index}>
                {/* status card here */}
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <div className="card full-height">
            {/* Chart */}
            <Chart
              options={
                themeReducer === "theme-mode-dark"
                  ? {
                      ...chartOptions.options,
                      theme: { mode: "dark" },
                    }
                  : { ...chartOptions.options, theme: { mode: "light" } }
              }
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h3>top customers</h3>
            </div>
            <div className="card__body">
              {/* table */}
              <Table
                headData={topCustomers.head}
                renderHead={(item, index) => renderCusomerHead(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index) => renderCusomerBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card__header">
              <h3>latest orders</h3>
            </div>
            <div className="card__body">
              <Table
                headData={latestOrder.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={latestOrder.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
