import React from "react";
import Table from "../components/Table/Table";
import customerList from "../assets/JsonData/customers-list.json";
const newCustomerList = [];
for (let i = 0; i < 100; i++) {
  newCustomerList.push({
    id: i + 1,
    name: "Brittan Rois",
    email: "brois@unicef.org",
    location: "Bator",
    phone: "+62 745 807",
    total_orders: 2000,
    total_spend: 4500,
  });
}
const customerTableHead = [
  "#",
  "name",
  "email",
  "phone",
  "total orders",
  "total spend",
  "location",
];
const renderHead = (item, index) => <th key={index}> {item} </th>;
const renderBody = (item, index) => (
  <tr key={index}>
    <td> {item.id} </td>
    <td> {item.name} </td>
    <td> {item.email} </td>
    <td> {item.phone} </td>
    <td> {item.total_orders} </td>
    <td> {item.total_spend} </td>
    <td> {item.location} </td>
  </tr>
);
const Customers = () => {
  return (
    <div>
      <h2 className="page-header">Customers</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit="10"
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={newCustomerList}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
