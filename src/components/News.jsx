import { Avatar, Card, Col, Row, Select, Typography } from "antd"
import moment from "moment"
import React from "react"
import { useGetCryptoNewsQuery } from "../app/service/cryptoNewsApi"
import demoImage from "../images/demoImage.jpg"
const { Text, Title } = Typography
const { Option } = Select

const News = ({ simplified }) => {
  const { data } = useGetCryptoNewsQuery()
  const cryptoNews = simplified ? data?.slice(0, 5) : data

  if (!data) return "Loading...."

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews?.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news?.link} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news?.title}
                </Title>
                <img
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                  src={news?.media[0] || demoImage}
                  alt=""
                />
              </div>
              <p>
                {news?.summary.length > 100
                  ? `${news.summary.substring(0, 100)}...`
                  : news.summary}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar src={news?.media[0] || demoImage} alt="" />
                  <Text className="provider-name">
                    {news?.authors[0]?.name}
                  </Text>
                </div>
                <Text>{moment(news?.published).startOf("ss").fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News
