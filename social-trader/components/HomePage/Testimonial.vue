<template>
  <div
    id="testimonials"
    class="flex flex-col ... pt-[10vw] laptop:pt-[2vw] laptop:pb-[8vw]"
  >
    <div class="text-center title-introduction laptop:text-[4.1vw]">
      <h1 class="text-7xl title my-[40px]">TESTIMONIALS</h1>
      <span id="small-screen-table-to-card" class="relative">
        <div id="example-swipeee" class="pl-[40px] max-sm:pl-0">
          <Swiper
            :watch-slides-progress="true"
            slides-per-view="auto"
            :space-between="10"
            :centered-slides="false"
            :grab-cursor="true"
            class="swiper-testimonial"
          >
            <SwiperSlide v-for="(item, index) in tableData" :key="index" >
              <Card>
                <div class="flex gap-4 h-[296px]">
                  <div class="pb-2 text-left my-[40px] mx-[24px]">
                    <div id="swiper-card-nickname" class="pb-[3px]">
                      <div
                        class="flex leading-[32px] font-[500] text-[24px] max-[298px]:text-[24px] min-[306px]:text-[20px]"
                      >
                        <img
                          class="relative rounded-full h-[3.2rem] w-[3.2rem] object-cover"
                          :src="item.nickName.icon"
                          alt="unsplash image"
                        />
                        <div
                          class="absolute top-15 left-9 bg-bluelight blur-[40px] w-[2.5rem] h-[2.5rem] rounded-full"
                        ></div>
                        <div class="ml-[24px] mt-2">
                          {{ item.nickName?.name }}
                        </div>
                      </div>
                    </div>
                    <div
                      id="swiper-card-masterPl"
                      class="mt-[24px] text-[14px] leading-[28px] font-['Poppins'] not-italic font-[300]"
                    >
                      {{ item.comment }}
                    </div>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </span>
    </div>
  </div>
</template>
<script lang="ts">
  export default {
    name: 'TestimonialComponent',
  };
</script>

<script setup lang="ts">
  // eslint-disable-next-line import/first
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // eslint-disable-next-line import/first
  import 'swiper/css';
  // eslint-disable-next-line import/first
  import Card from '../Cards/Card.vue';
  useHead({
    title: 'Social Trader - Testimonial',
  });
  interface IData {
    nickName: {
      icon: string;
      name: string;
    };
    comment: string;
  }
  const datas: Array<IData> = [
    {
      nickName: {
        icon: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQqaDqRDBA_QOrxrnFPE1j7oq4PhzSnlQAP7UgdBhpOsnh2osZg',
        name: 'Steve L.',
      },
      comment:
        'The segmentation strategy traditionally allows PR, using the experience of previous campaigns. The retroconversion of the national heritage, neglecting the details, broadcasts presentation material',
    },
    {
      nickName: {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4nYsJEWQyCXUFBePujhHWW29-MQumcYYo3p0YgQMadLPqudR6',
        name: 'Anna B.',
      },
      comment:
        'The segmentation strategy traditionally allows PR, using the experience of previous campaigns.',
    },
    {
      nickName: {
        icon: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT64Vh9PXJzVd0Xt5W2i9Q-N0xnuUymDCl289hHazqquW53YyT7',
        name: 'Adam C',
      },
      comment:
        'The tactics of building relationships with commercial agents, of course, translates institutional presentation material.',
    },
    {
      nickName: {
        icon: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLclf7adnR-qhLbxc0SWUXXKJwtIhVE0isyrFaZBjIcOrhTO2W',
        name: 'Amanda F.',
      },
      comment:
        'The segmentation strategy traditionally allows PR, using the experience of previous campaigns. ',
    },
    {
      nickName: {
        icon: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKeECGIn7DTkInrCUHrogf9H6jdm78-c4LXptzoul34gQvaSHI',
        name: 'Angela Bariotti',
      },
      comment:
        'The segmentation strategy traditionally allows PR, using the experience of previous campaigns.',
    },
    {
      nickName: {
        icon: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRxwGb2xlQBmuLHjlEa0DiDz0biCAJu192jg2wB8s7LbJ7uwbBm',
        name: 'Pablo Picaso',
      },
      comment:
        'The segmentation strategy traditionally allows PR, using the experience of previous campaigns. The retroconversion of the national heritage, neglecting the details, broadcasts presentation material',
    },
  ];
  const tableData = ref<Array<IData>>(datas);
  defineExpose({
    tableData,
  });
</script>
<style>
  .swiper-testimonial {
    width: 100%;
  }
  .swiper-slide {
    width: 348px !important;
  }
  @media (max-width: 360px) {
    .swiper-slide {
      width: 100% !important;
    }
  }
  @media (min-width: 2360px) {
    .swiper-wrapper {
      display: flex;
      justify-content: center;
    }
  }
</style>
