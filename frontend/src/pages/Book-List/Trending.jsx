import React from "react"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper"
import "swiper/swiper-bundle.min.css"
import Cards from "./Cards"

const Trending = ({ books }) => {
  return (
    <div className="d-flex flex-col justify-content-center align-items-center ">
      <h1
        className="h1 text-center mt-5 mb-5 font-extrabold"
        style={{ color: "#d4a373", fontSize: "50px" }}
      >
        TRENDING
      </h1>
      <div className="h-auto  my-5 " style={{ width: "90%" }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          style={{
            "--swiper-navigation-color": "gray",
            "--swiper-navigation-size": "30px",
            "--swiper-pagination-color": "black",
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper pl-10 pb-10"
        >
          {books.length > 0 ? (
            books.map((book, index) => (
              <SwiperSlide key={index}>
                <Cards book={book} />
              </SwiperSlide>
            ))
          ) : (
            <div className="container h-64 d-flex flex-col justify-content-center align-items-center">
              <p className="h3 font-[PlayFair] text-gray-500">No books found</p>
            </div>
          )}
        </Swiper>
      </div>
    </div>
  )
}

export default Trending
