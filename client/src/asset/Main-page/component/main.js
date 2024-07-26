import React, { useEffect, useState } from 'react';
import { Layout, Menu, Carousel, Image } from 'antd';
import axios from 'axios';
import config from '../../../config';
import AppMenu from './AppMenu';

const { Content, Footer } = Layout;

const Main = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from the backend
    axios.get(`${config.serverUrlPrefix}/pics?populate=*`)
      .then(response => {
        // Get all images from the response
        const imageUrls = response.data.data.flatMap(pic => 
          pic.attributes.Image_pic.data.map(imageData => imageData.attributes.url)
        );
        console.log(`ImgUrl`,imageUrls); // Log the image URLs to the console
        setImages(imageUrls.slice(0, 8)); // Get the first 8 images
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <Layout>
      <AppMenu></AppMenu>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ padding: '24px 0', textAlign: 'center' }}>
          <Carousel arrows infinite={true} autoplay={true} autoplaySpeed={3000} 
             arrowSize={250}>
            {images.map((image, index) => (
              <div key={index}>
                <Image 
                  src={`${config.serverReceipt}${image}`}
                  alt={`Image ${index + 1}`}
                  style={{ width: '100%', height: '450px', objectFit: 'fill' }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        MyApp ©2024 Created by Your Name
      </Footer>
    </Layout>
  );
};

export default Main;
