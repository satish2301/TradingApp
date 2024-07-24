import { Col, Row } from "antd";

import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaBagShopping,
  FaUserGroup,
} from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { TfiBackRight } from "react-icons/tfi";
const EnquiryCard = () => {
  return (
    <>
      <Row gutter={[16, 16]} className=" p-1 pb-4 rounded-md">
        <Col lg={6} md={12} sm={12} xs={24}>
          <div
            className="p-1 enq-card "
            style={{ border: "1px solid #1e2253" }}
          >
            <div className="enq-bg bg-[#1e2253]"></div>
            <div className=" enq-head flex justify-between ">
              <span>
                <h3 className="text-[25px] font-bold">196</h3>
                <small className="text-[16px] font-semibold">
                  clients acquired
                </small>
              </span>
              <span className="icon">
                <FaUserGroup color="#fff" className="z-2" />
              </span>
            </div>
            <div className="enq-content flex gap-4">
              <FaArrowTrendUp />
              <span>percentile</span>
              <span>
                +x this week
                <br /> /month/year/custo vs target
              </span>
            </div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} xs={24}>
          <div
            className="p-1   enq-card  h-full"
            style={{ border: "1px solid #FD8584" }}
          >
            <div className="enq-bg bg-[#FD8584]"></div>
            <div className="enq-head flex justify-between ">
              <span>
                <h3 className="text-[25px] font-bold">38</h3>
                <small className="text-[16px] font-semibold">
                  outgoing calls
                </small>
              </span>
              <span className="icon">
                <FaBagShopping color="#fff" />
              </span>
            </div>
            <div className="enq-content flex gap-4">
              <FaArrowTrendUp />
              <span>talktime</span>
              <span>mins this week</span>
            </div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} xs={24}>
          <div
            className="p-1   enq-card    h-full"
            style={{ border: "1px solid #967FF2" }}
          >
            <div className="enq-bg bg-[#967FF2]"></div>
            <div className="enq-head flex justify-between ">
              <span>
                <h3 className="text-[25px] font-bold">4</h3>
                <small className="text-[16px] font-semibold">
                  Products distributed
                </small>
              </span>
              <span className="icon">
                <IoMdCheckmarkCircle color="#fff" />
              </span>
            </div>
            <div className="enq-content flex gap-4">
              <FaArrowTrendDown />
              <span>2.56</span>
              <span>20,086 trail income</span>
            </div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} xs={24}>
          <div
            className="p-1   enq-card  h-full"
            style={{ border: "1px solid #FD981F" }}
          >
            <div className="enq-bg bg-[#FD981F]"></div>
            <div className="enq-head flex justify-between ">
              <span>
                <h3 className="text-[25px] font-bold">124,854</h3>
                <small className="text-[16px] font-semibold">Revenue</small>
              </span>
              <span className="icon">
                <TfiBackRight color="#fff" />
              </span>
            </div>
            <div className="enq-content flex gap-4">
              <FaArrowTrendUp />
              <span>7.2</span>
              <span>+1.51% this week</span>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default EnquiryCard;
