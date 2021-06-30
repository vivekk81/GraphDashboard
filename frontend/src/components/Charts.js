import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Spin, Row, Col, Card } from 'antd';
import Chart from './Chart';

function Charts() {
  const [charts, setCharts] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    const fetchData = async() => {
      await axios.get('/api/v1/charts').then(result => {
        setCharts(result.data.charts);
        setLoading(false);
      })

    }
    fetchData();
  },[])
  console.log("charts", charts);
  return (
    <Row gutter={[
      { xs: 8, sm: 16, md: 24, lg: 32 },
      { xs: 8, sm: 16, md: 24, lg: 32 }
    ]}>
      {loading ? (
        <div className="spinner">
          <Spin />
        </div>
      ) : (
        <>
          {charts.map(chart => {
            return (
              <Col className="gutter-row" span={8} key={chart._id}>
                <Card style={{ width: "100%", height: "100%" }}>
                  <Chart type={chart.type} elements={chart.elements}/>
                </Card>
              </Col>
            )
          })}
        </>
      )}
    </Row>
  )
}

export default Charts
