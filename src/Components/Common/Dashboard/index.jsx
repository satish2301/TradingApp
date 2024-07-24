import { Card, Col, Row } from "antd";
import EnquiryCard from "../EnquiryCard/EnquiryCard";
import BrokageChart from "../BrokageChart/BrokageChart";
import RevenuChart from "../RevenuChart/RevenuChart";

const Dashboard = () => {
  return (
    <div className="dashboard px-0">
      <EnquiryCard />

      <Row
        gutter={[0, 10]}
        className=" justify-between  rounded-md items-center "
      >
        <Col
          md={{ span: 24, order: 2 }}
          lg={{ span: 13, order: 1 }}
          sm={{ span: 24, order: 2 }}
          className="!px-0"
        >
          <Card>
            <BrokageChart />
          </Card>
        </Col>
        <Col
          className=""
          md={{ span: 24, order: 1 }}
          lg={{ span: 10, order: 2 }}
          sm={{ span: 24, order: 1 }}
        >
          <Card>
            <RevenuChart />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
