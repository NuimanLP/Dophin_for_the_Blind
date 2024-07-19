import React from 'react';
import { Layout, Menu, Carousel, Button, Image } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import image_test_1 from '../chaykaneng.jpg'

const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout>

    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content" style={{ padding: '24px 0', textAlign: 'center' }}>
        <Carousel arrows infinite={false}>

          <div>
            <Image
              src={image_test_1}
              alt="Test Image"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <Image
              src="https://via.placeholder.com/300"
              alt="Test Image"
              style={{ width: '100%', height: '160px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <Image
              src="https://via.placeholder.com/300"
              alt="Test Image"
              style={{ width: '100%', height: '160px', objectFit: 'cover' }}
            />
          </div>
        </Carousel>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      MyApp ©2024 Created by Your Name
    </Footer>
  </Layout>
);

export default App;
