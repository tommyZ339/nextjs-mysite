'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '@/app/ui/global.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

import { Modal, Button } from 'antd';

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState('');

  const showModal = (albumName: string) => {
    setIsModalOpen(true);
    setCurrentAlbum(albumName);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const modalStyles = {
    header: {
      borderRadius: 0,
      paddingInlineStart: 5,
    },
    body: {
      boxShadow: 'inset 0 0 5px #999',
      borderRadius: 5,
      backgroundColor: 'rgba(51, 90, 207, 0.2)',
    },
    mask: {
      backdropFilter: 'blur(10px)',
    },
    content: {
      boxShadow: '0 0 30px #333',
    },
  };

  return (
    <>
      <div className="mx-40">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          width={1000}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <SwiperSlide key={i}>
              <img
                src={
                  i % 4 == 0
                    ? '/GNX.jpg'
                    : i % 4 == 1
                    ? '/Midwest.jpg'
                    : i % 4 == 2
                    ? '/Strategy.jpg'
                    : 'IveTried.jpg'
                }
                alt="mds"
                onClick={() =>
                  showModal(
                    i % 4 == 0
                      ? '/GNX.jpg'
                      : i % 4 == 1
                      ? '/Midwest.jpg'
                      : i % 4 == 2
                      ? '/Strategy.jpg'
                      : 'IveTried.jpg'
                  )
                }
                className="cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Modal
        title={currentAlbum}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        styles={modalStyles}
        footer={[
          <Button key="ok" type="dashed" onClick={handleOk}>
            阅！
          </Button>,
        ]}
      >
        <p> 神专，没啥可说的...</p>
      </Modal>
    </>
  );
}
