// import React, { useRef } from 'react';
// import "./styles.css";
// import "remixicon/fonts/remixicon.css";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/thumbs';

// SwiperCore.use([Navigation, Pagination, Thumbs]);

// export default function Languages() {
//   const thumbsSwiper = useRef(null);

//   return (
//     <div className="gallery">
//       {/* =============== SWIPER GALLERY CARDS =============== */}
//       <Swiper
//         className="swiper gallery-cards"
//         spaceBetween={10}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         }}
//         pagination={{
//           el: '.swiper-pagination',
//           clickable: true,
//         }}
//         thumbs={{ swiper: thumbsSwiper.current }}
//       >
//         <div className="swiper-wrapper">
//           <SwiperSlide>
//             <article className="gallery__card">
//               <img src="assets/img/img1.png" alt="image gallery" className="gallery__img" />
//               <div className="gallery__data">
//                 <h3 className="gallery__title">Ornament Vase</h3>
//                 <span className="gallery__subtitle">Modern</span>
//               </div>
//             </article>
//           </SwiperSlide>
//           <SwiperSlide>
//             <article className="gallery__card">
//               <img src="assets/img/img2.png" alt="image gallery" className="gallery__img" />
//               <div className="gallery__data">
//                 <h3 className="gallery__title">Ornament Vase</h3>
//                 <span className="gallery__subtitle">Modern</span>
//               </div>
//             </article>
//           </SwiperSlide>
//           <SwiperSlide>
//             <article className="gallery__card">
//               <img src="assets/img/img3.png" alt="image gallery" className="gallery__img" />
//               <div className="gallery__data">
//                 <h3 className="gallery__title">Ornament Vase</h3>
//                 <span className="gallery__subtitle">Modern</span>
//               </div>
//             </article>
//           </SwiperSlide>
//           <SwiperSlide>
//             <article className="gallery__card">
//               <img src="assets/img/img4.png" alt="image gallery" className="gallery__img" />
//               <div className="gallery__data">
//                 <h3 className="gallery__title">Ornament Vase</h3>
//                 <span className="gallery__subtitle">Modern</span>
//               </div>
//             </article>
//           </SwiperSlide>
//           <SwiperSlide>
//             <article className="gallery__card">
//               <img src="assets/img/img5.png" alt="image gallery" className="gallery__img" />
//               <div className="gallery__data">
//                 <h3 className="gallery__title">Ornament Vase</h3>
//                 <span className="gallery__subtitle">Modern</span>
//               </div>
//             </article>
//           </SwiperSlide>
//         </div>
//       </Swiper>

//       {/* =============== SWIPER GALLERY THUMBNAIL =============== */}
//       <div className="gallery__overflow">
//         <Swiper
//           className="swiper gallery-thumbs"
//           onSwiper={(swiper) => {
//             if (thumbsSwiper.current === null) {
//               thumbsSwiper.current = swiper;
//             }
//           }}
//           spaceBetween={10}
//           slidesPerView={4}
//           freeMode
//           watchSlidesVisibility
//           watchSlidesProgress
//         >
//           <div className="swiper-wrapper">
//             <SwiperSlide>
//               <div className="gallery__thumbnail">
//                 <img src="assets/img/img1.png" alt="image thumbnail" className="gallery__thumbnail-img" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="gallery__thumbnail">
//                 <img src="assets/img/img2.png" alt="image thumbnail" className="gallery__thumbnail-img" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="gallery__thumbnail">
//                 <img src="assets/img/img3.png" alt="image thumbnail" className="gallery__thumbnail-img" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="gallery__thumbnail">
//                 <img src="assets/img/img4.png" alt="image thumbnail" className="gallery__thumbnail-img" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="gallery__thumbnail">
//                 <img src="assets/img/img5.png" alt="image thumbnail" className="gallery__thumbnail-img" />
//               </div>
//             </SwiperSlide>
//           </div>

//           {/* Swiper pagination */}
//           <div className="swiper-pagination"></div>
//         </Swiper>

//         {/* Swiper arrows */}
//         <div className="swiper-button-next">
//           <i className="ri-arrow-right-line"></i>
//         </div>
//         <div className="swiper-button-prev">
//           <i className="ri-arrow-left-line"></i>
//         </div>
//       </div>
//     </div>
//   );
// }
