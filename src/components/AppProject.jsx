import React from 'react';
import './AppPorject.css'; // 引入自定義的CSS
import { styles } from '../styles';
import {  textVariant }  from '../utils/motion';
import { motion } from 'framer-motion';
const AppProject = () => {
  return (
    <div className='-mt-[6rem] p-8 md:p-4'>

      <motion.div className='ml-44 mb-12' variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>IOS 製作作品</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>APP作品集</h2>
      </motion.div>
    <div className="flex flex-wrap justify-center items-center">


      <div className="w-full md:w-3/4 flex flex-wrap md:flex-nowrap justify-center mb-4 gap-8">
        <div className="w-full md:w-1/3 justify-center flex flex-wrap">
        <h1 className={`${styles.sectionTony}`}>友誼測試App</h1>
        <video  autoPlay muted loop>
          <source src="/video/Video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        <div className="w-full md:w-1/3 justify-center flex flex-wrap">
        <h1 className={`${styles.sectionTony}`}>即時天氣查詢App</h1>
        <video  autoPlay muted loop>
          <source src="/video/Video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        <div className="w-full md:w-1/3 justify-center flex flex-wrap">
        <h1 className={`${styles.sectionTony}`}>BMI計算App</h1>
        <video  autoPlay muted loop>
          <source src="/video/Video3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
      </div>



      <div className="w-full md:w-3/4 flex flex-wrap md:flex-nowrap justify-center mt-4 gap-8">
        <div className="w-full md:w-1/3 justify-center flex flex-wrap">
        <h1 className={`${styles.sectionTony}`}>AU虛擬女友App</h1>
        <video  autoPlay muted loop>
          <source src="/video/Video4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        <div className="w-full md:w-1/3 justify-center flex flex-wrap">
        <h1 className={`${styles.sectionTony}`}>AI多國語言翻譯App</h1>
        <video  autoPlay muted loop>
          <source src="/video/Video5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        <div className="w-full md:w-1/3 justify-center flex flex-wrap">
        <h1 className={`${styles.sectionTony}`}>煮蛋計時器</h1>
        <video  autoPlay muted loop>
          <source src="/video/Video6.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AppProject;
