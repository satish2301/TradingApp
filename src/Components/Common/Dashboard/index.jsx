import { Button, Card, Col, Pagination, Row, Select } from "antd";
import EnquiryCard from "../EnquiryCard/EnquiryCard";
import BrokageChart from "../BrokageChart/BrokageChart";
import RevenuChart from "../RevenuChart/RevenuChart";

import { BiEdit } from "react-icons/bi";

const Dashboard = () => {
  return (
    <div className="dashboard px-0 bottomToTopAni">
      <EnquiryCard />

      <Row
        gutter={[0, 10]}
        className=" justify-between  rounded-md items-center "
      >
        <Col
          md={{ span: 24, order: 2 }}
          lg={{ span: 13, order: 1 }}
          sm={{ span: 24, order: 2 }}
          xs={{ span: 24, order: 2 }}
          className="!px-0"
        >
          <Card className="">
            <BrokageChart />
          </Card>
        </Col>
        <Col
          className=""
          md={{ span: 24, order: 1 }}
          lg={{ span: 10, order: 2 }}
          sm={{ span: 24, order: 1 }}
          xs={{ span: 24, order: 1 }}
        >
          <Card>
            <RevenuChart />
          </Card>
        </Col>
      </Row>
      <Row className="my-2">
        <Col span={24}>
          <Card className="bg-white">
            <div className="order-head bg-gray-100 p-2 rounded shadow flex justify-between">
              <h2 className="text-lg font-bold">Order List</h2>
              <div>
                <Select
                  className="bg-white"
                  defaultValue="Monthly"
                  style={{ width: 120 }}
                  options={[
                    { value: "Monthly", label: "Monthly" },
                    { value: "Yearly", label: "Yearly" },
                  ]}
                />
              </div>
            </div>
            <div className="mt-3 overflow-auto">
              <table className="w-full order-list whitespace-nowrap">
                <thead className="border-b text-justify ">
                  <tr className="">
                    <th>No</th>
                    <th className="flex gap-1">
                      ID
                      <span>⇅</span>
                    </th>
                    <th>Date</th>
                    <th className="flex gap-1">
                      Customer Name
                      <span>⇅</span>
                    </th>
                    <th>Location</th>
                    <th>Amount</th>
                    <th className="flex gap-1">
                      Status Order
                      <span>⇅</span>
                    </th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-100 cursor-pointer">
                    <td>1</td>
                    <td>#12594</td>
                    <td>Oct 15, 2023</td>
                    <td>Frank Murlo</td>
                    <td>312 S Wilmette Ave</td>
                    <td>$847.69</td>
                    <td className="flex">
                      {" "}
                      <p className="light bg-blue-700"></p>New Order
                    </td>
                    <td>
                      <Button icon={<BiEdit />} type="dashed">
                        Action
                      </Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 cursor-pointer">
                    <td>1</td>
                    <td>#12594</td>
                    <td>Oct 15, 2023</td>
                    <td>Frank Murlo</td>
                    <td>312 S Wilmette Ave</td>
                    <td>$847.69</td>
                    <td className="flex">
                      {" "}
                      <p className="light bg-yellow-400"></p>New Order
                    </td>
                    <td>
                      <Button icon={<BiEdit />} type="dashed">
                        Action
                      </Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 cursor-pointer">
                    <td>1</td>
                    <td>#12594</td>
                    <td>Oct 15, 2023</td>
                    <td>Frank Murlo</td>
                    <td>312 S Wilmette Ave</td>
                    <td>$847.69</td>
                    <td className="flex">
                      {" "}
                      <p className="light bg-green-400"></p>New Order
                    </td>
                    <td>
                      <Button icon={<BiEdit />} type="dashed">
                        Action
                      </Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 cursor-pointer">
                    <td>1</td>
                    <td>#12594</td>
                    <td>Oct 15, 2023</td>
                    <td>Frank Murlo</td>
                    <td>312 S Wilmette Ave</td>
                    <td>$847.69</td>
                    <td className="flex">
                      {" "}
                      <p className="light bg-red-600"></p>New Order
                    </td>
                    <td>
                      <Button icon={<BiEdit />} type="dashed">
                        Action
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pagination">
              <Pagination align="end" defaultCurrent={1} total={50} />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
