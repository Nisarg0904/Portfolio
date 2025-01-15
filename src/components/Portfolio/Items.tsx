import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import shapeImgTwo from "../../assets/shape-2.png";
import { motion } from "framer-motion"
import { Blurhash } from 'react-blurhash';

interface Props {
  projectItems: any[];
}

const Items: React.FC<Props> = ({ projectItems }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleImageLoad = () => {
    setImgLoaded(true);
  };

  return (
    <>
      {projectItems.map((projectItem: { id: any; img: any; category: any; title: any; link: any; description: any; blurhash: any; }) => {
        const { id, img, category, title, link, description, blurhash } = projectItem;
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className="portfolio__items card card-two" key={id}
          >
            <div className="portfolio__img-wrapper">
              {imgLoaded ? (
                <img
                src={img}
                alt="Original"
                className='portfolio-img'
                loading="lazy"
                srcSet={`${img} 800w, ${img} 1200w`}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
              />              
              ) : (
                <Blurhash
                  hash={blurhash}
                  width={400}
                  height={300}
                  resolutionX={32}
                  resolutionY={32}
                  punch={1}
                  className='portfolio-img'
                />
              )}
            </div>

            <span className="portfolio__category text-cs">{category}</span>
            <h3 className="portfolio__title">{title}</h3>
            <p className="portfolio__description">{description}</p>

            <a href={link} className="link">
              See Website
              <FaArrowRight className='link__icon'></FaArrowRight>
            </a>

            <img src={shapeImgTwo} alt="shapeImg2" className='shape c__shape' onLoad={handleImageLoad} />
          </motion.div>
        )
      })}
    </>
  )
}

export default Items;
