<template>
  <div id="instructions" class="flex flex-col ... pt-[10vw] laptop:pt-[2vw]">
    <div id="title-introducction">
      <h1
        class="relative text-[13vw] sm:text-[13.4vw] lg:text-[13.7vw] upper-title laptop:text-[12.2vw] text-border-white dark:text-border-dark text-white dark:text-black text-center"
      >
        INSTRUCTION
      </h1>

      <div
        class="relative top-[-8vw] uppercase ml-1 text-center title-introduction laptop:text-[4.1vw]"
      >
        <div
          class="w-100 absolute w-[81.5vw] h-[35px] ml-[4vw] top-[2.1vw] blur-[64px] laptop:w-[33.5vw] laptop:h-[66px] laptop:ml-[29vw] laptop:top-[2.1vw] background-gradient-title laptop:blur-[160px]"
        ></div>
        How does it work?
      </div>
    </div>
    <div id="cards" class="flex justify-center w-full relative top-[-3.8vw]">
      <div
        class="grid grid-cols-3 gap-4 w-full laptop:pl-[6.5vw] laptop:pr-[6.5vw]"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="w-full col-span-3 laptop:col-span-1 relative"
        >
          <CardInstruction :card-information="item" />
        </div>
      </div>
    </div>
    <div id="table">
      <div id="cards"></div>

      <div
        class="mb-8 flex items-center flex-row relative top-[1vw] uppercase ml-1 text-center title-introduction laptop:text-[3.7vw]"
      >
        <div class="basis-3/4">
          <h1 class="relative title uppercase ml-1 text-left">
            Top traders&nbsp;🔥
          </h1>
        </div>
        <div class="basis-1/4 text-right relative center">
          <div
            class="absolute top-[-3.5vw] right-0 bg-[#86DCA5] w-[16rem] h-[16rem] blur-[252px] rounded-full max-[480px]:w-full"
          ></div>
          <span class="max-[987px]:hidden relative z-[1]">
            <button
              class="w-[180px] h-[48px] min-[1920px]:w-[250px] min-[1920px]:h-[62px] max-[480px]:w-[175px] max-[480px]:h-[45px] bg-dark dark:bg-white text-white dark:text-dark font-['Poppins'] not-italic font-[500] text-[14px] leading-6 rounded-[12px] button-shadow hover:shadow-mainDark dark:hover:shadow-main focus:shadow-none"
            >
              Join as a trader
            </button>
          </span>
        </div>
      </div>
      <span id="full-screen-table" class="relative max-[987px]:hidden">
        <div
          class="absolute left-0 bg-[#6273BB] w-[15.8rem] h-[14.6rem] blur-[217px] rounded-full max-[480px]:w-full"
        ></div>
        <DataTable :table-data="tableData" :table-header="tableHeader">
          <template #cell-num="{ row: data }"> {{ data.id }} </template>
          <template #cell-nickName="{ row: data }">
            <div class="flex align-items-center">
              <img
                class="rounded-full h-10 w-10 object-cover"
                :src="data.nickName.icon"
                alt="unsplash image"
              />
              <div class="ml-3 mt-3">
                {{ data.nickName?.name }}
              </div>
            </div>
          </template>
          <template #cell-roi="{ row: data }">
            <span
              class="gradiant-text-table-opacity-l dark:gradiant-text-table-opacity-d rounded-[40px] px-3 py-2"
              ><span
                class="font-[500] gradiant-text-table-l gradiant-text dark:gradiant-text-table-d dark:gradiant-text"
                >+&nbsp;{{ data.roi }}%</span
              >
            </span>
          </template>
          <template #cell-masterPL="{ row: data }">
            <span>{{ data.masterPL }}</span>
          </template>
          <template #cell-followers="{ row: data }">
            <span>{{ data.followers }}</span>
          </template>
          <template #cell-tradeVolume="{ row: data }">
            <span>+&nbsp;{{ data.tradeVolume }}</span>
          </template>
          <template #cell-winRate="{ row: data }">
            <span
              class="font-[500] gradiant-text-table-l gradiant-text dark:gradiant-text-table-d dark:gradiant-text"
              >{{ data.winRate }}</span
            >
          </template>
          <template #cell-actions="{}">
            <span class="flex justify-center">
              <div>
                <button
                  class="hover:shadow-main hover:border-dark dark:hover:border-white hover:bg-white hover:text-dark active:bg-white focus:shadow-none focus:bg-transparent focus:text-dark dark:focus:text-white bg-transparent rounded-[12px] mt-2 mb-2 py-2 px-34 laptop:px-[3.2vw] border"
                >
                  Copy
                </button>
              </div>
            </span>
          </template>
        </DataTable>
      </span>
      <span id="small-screen-table-to-card" class="relative min-[988px]:hidden">
        <div id="example-swipeee">
          <Swiper
            :watch-slides-progress="true"
            slides-per-view="auto"
            :space-between="10"
            :centered-slides="true"
            :grab-cursor="true"
            class="mySwiper"
          >
            <SwiperSlide v-for="(item, index) in tableData" :key="index">
              <Card>
                <div class="flex justify-between">
                  <div>
                    <span v-for="(ite, ind) in tableHeader" :key="ind">
                      <div
                        class="py-[3.5px] max-[298px]:text-[18px] min-[306px]:text-[14px] text-sm opacity-[.6] leading-[24px] font-[400]"
                      >
                        {{ tableHeader[ind].name }}
                      </div>
                    </span>
                  </div>
                  <div
                    class="pb-2 text-end max-[298px]:text-[18px] min-[306px]:text-[14px] text-sm leading-[24px] font-[500]"
                  >
                    <div id="swiper-card-id" class="py-[3.5px]">
                      {{ item.id }}
                    </div>
                    <div id="swiper-card-nickname" class="pb-[3px]">
                      <div class="flex">
                        <div class="mx-2">
                          {{ item.nickName?.name }}
                        </div>
                        <img
                          class="rounded-full h-[1.7rem] w-[1.7rem] object-cover"
                          :src="item.nickName.icon"
                          alt="unsplash image"
                        />
                      </div>
                    </div>
                    <div id="swiper-card-roi" class="py-[3.5px]">
                      <span
                        class="gradiant-text-table-opacity-l dark:gradiant-text-table-opacity-d rounded-[40px] px-[0.4rem] py-[0.3rem]"
                        ><span
                          class="font-[500] gradiant-text-table-l gradiant-text dark:gradiant-text-table-d dark:gradiant-text"
                        >
                          +&nbsp;{{ item.roi }}%</span
                        ></span
                      >
                    </div>
                    <div id="swiper-card-masterPl" class="py-[3.5px]">
                      {{ item.masterPL }}
                    </div>
                    <div id="swiper-card-followers" class="py-[3.5px]">
                      {{ item.followers }}
                    </div>
                    <div id="swiper-card-tradeVolume" class="py-[3.5px]">
                      +&nbsp;{{ item.tradeVolume }}
                    </div>
                    <div id="swiper-card-winRate" class="py-[3.5px]">
                      <span
                        class="font-[500] gradiant-text-table-l gradiant-text dark:gradiant-text-table-d dark:gradiant-text"
                      >
                        {{ item.winRate }}</span
                      >
                    </div>
                  </div>
                </div>
                <span class="my-2">
                  <button
                    class="py-2 w-[100%] rounded-[12px] hover:shadow-main hover:border-dark dark:hover:border-white hover:bg-white hover:text-dark active:bg-white focus:shadow-none focus:bg-transparent focus:text-dark dark:focus:text-white bg-transparent border"
                  >
                    Copy
                  </button>
                </span>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </span>
      <div class="max-[987px]:hidden flex justify-center text-center flex-row">
        <div class="basis-4/4 text-center">
          <p
            class="text-[16px] pt-[40px] font-[600] leading-[24px] gradiant-text gradiant-text-table-d hover:gradiant-text-hover hover:gradiant-text active:gradiant-text-table-l active:gradiant-text"
          >
            Show more
          </p>
        </div>
      </div>
      <!--</div>-->
    </div>
    <!---->
    <span class="min-[988px]:hidden flex justify-center text-center flex-row">
      <div class="basis-4/4 text-center py-[2.5rem]">
        <button
          class="w-[180px] h-[48px] min-[1920px]:w-[250px] min-[1920px]:h-[62px] max-[480px]:w-[175px] max-[480px]:h-[45px] bg-dark dark:bg-white text-white dark:text-dark font-['Poppins'] not-italic font-[500] text-[14px] leading-6 rounded-[12px] button-shadow hover:shadow-mainDark dark:hover:shadow-main focus:shadow-none"
        >
          Join as a trader
        </button>
      </div>
    </span>
    <!---->
  </div>
</template>
<script lang="ts">
  export default {
    name: 'IntroductionComponent',
  };
</script>
<script setup lang="ts">
  // eslint-disable-next-line import/first
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // eslint-disable-next-line import/first
  import 'swiper/css';
  // eslint-disable-next-line import/first
  import DataTable from '../Tables/DataTable.vue';
  // eslint-disable-next-line import/first
  import CardInstruction from '../Cards/CardsInstruction.vue';
  // eslint-disable-next-line import/first
  import Card from '../Cards/Card.vue';
  useHead({
    title: 'Social Trader - Introduction',
  });
  interface IData {
    id: number;
    nickName: {
      icon: string;
      name: string;
    };
    roi: string;
    masterPL: string;
    followers: string;
    tradeVolume: string;
    winRate: string;
  }
  const datas: Array<IData> = [
    {
      id: 1,
      nickName: {
        icon: 'https://i0.wp.com/artplugged.co.uk/wp-content/uploads/2022/09/The-Digital-Asset-Policy-Alliance-barbora-dostalova-art-plugged_.jpg?fit=1500%2C844&ssl=1',
        name: 'Jessse Lauriston Livermore',
      },
      roi: '63.55',
      masterPL: '785.89',
      followers: '320/1000',
      tradeVolume: '52,785.26',
      winRate: '100%',
    },
    {
      id: 2,
      nickName: {
        icon: 'https://images6.alphacoders.com/101/thumbbig-1012089.webp',
        name: 'CEO - JeffBezos',
      },
      roi: '34.64',
      masterPL: '785.89',
      followers: '320/1000',
      tradeVolume: '52,785.26',
      winRate: '100%',
    },
    {
      id: 3,
      nickName: {
        icon: 'https://images.unsplash.com/photo-1569081156361-c98e05e7f1e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        name: 'Adam Shwimmer',
      },
      roi: '25.96',
      masterPL: '785.89',
      followers: '320/1000',
      tradeVolume: '52,785.26',
      winRate: '100%',
    },
    {
      id: 4,
      nickName: {
        icon: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGE7juZY4NJIVM3oXdubCElreX3XPFnsUWRo6x9yfd9lQZjWi0',
        name: 'Anna Block',
      },
      roi: '25.96',
      masterPL: '785.89',
      followers: '320/1000',
      tradeVolume: '52,785.26',
      winRate: '100%',
    },
    {
      id: 5,
      nickName: {
        icon: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKeECGIn7DTkInrCUHrogf9H6jdm78-c4LXptzoul34gQvaSHI',
        name: 'Angela Bariotti',
      },
      roi: '25.96',
      masterPL: '785.89',
      followers: '320/1000',
      tradeVolume: '52,785.26',
      winRate: '100%',
    },
    {
      id: 6,
      nickName: {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD9p4mz3Kssa8fBQRdEyrHu9xIVHlhS0IMESCoI3yBgKybwtIe',
        name: 'KIMBIT',
      },
      roi: '25.96',
      masterPL: '785.89',
      followers: '320/1000',
      tradeVolume: '52,785.26',
      winRate: '100%',
    },
    {
      id: 7,
      nickName: {
        icon: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQEYU5vazWsAZn2jqT6IH3yue_T6uZdq8an_m7MpDDi-L7-zxH_',
        name: 'Positive',
      },
      roi: '25.96',
      masterPL: '785.89',
      followers: '320/1000',
      tradeVolume: '52,785.26',
      winRate: '100%',
    },
    {
      id: 8,
      nickName: {
        icon: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSf_ODE65A3YdQ2aPHQXCltnvk-RHZQKcFcEvcVS7lraTPsmItk',
        name: 'Bugs Bunny',
      },
      roi: '25.96',
      masterPL: '785.89',
      followers: '320/1000',
      tradeVolume: '52,785.26',
      winRate: '100%',
    },
    {
      id: 9,
      nickName: {
        icon: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRxwGb2xlQBmuLHjlEa0DiDz0biCAJu192jg2wB8s7LbJ7uwbBm',
        name: 'Pablo Picaso',
      },
      roi: '25.96',
      masterPL: '785.89',
      followers: '320/1000',
      tradeVolume: '52,785.26',
      winRate: '100%',
    },
    {
      id: 10,
      nickName: {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ94f6LsA8uAV6xhAYs05Yl9ymwGhfmcl0a6yHJ8QYPzCEVdPMv',
        name: 'MIAMITRADING',
      },
      roi: '25.96',
      masterPL: '785.89',
      followers: '320/1000',
      tradeVolume: '52,785.26',
      winRate: '100%',
    },
  ];
  const tableHeader = ref([
    {
      name: '#',
      key: 'num',
      sortable: true,
    },
    {
      name: 'Nickname',
      key: 'nickName',
      sortable: true,
    },
    {
      name: 'ROI',
      key: 'roi',
      sortable: true,
    },
    {
      name: 'Master’s P&L',
      key: 'masterPL',
      // sortingField: 'payment.label',
      sortable: true,
    },
    {
      name: 'Followers',
      key: 'followers',
      sortable: true,
    },
    {
      name: 'Trade Volume',
      key: 'tradeVolume',
      sortable: true,
    },
    {
      name: 'Win rate',
      key: 'winRate',
      sortable: true,
    },
    {
      key: 'actions',
    },
  ]);
  const tableData = ref<Array<IData>>(datas);
  defineExpose({
    tableData,
    tableHeader,
  });

  const items = [
    {
      numberCard: '01',
      icon: 'card-trader-icon.svg',
      iconLigth: 'card-trader-icon-dark.svg',
      title: 'Choose a trader',
      paragraphOne: 'Discover top traders who best match ',
      paragraphTwo: 'your investment goals',
    },
    {
      numberCard: '02',
      icon: 'card-amount-icon.svg',
      iconLigth: 'card-amount-icon-dark.svg',
      title: 'Set an amount',
      paragraphOne: 'Choose how much money with ',
      paragraphTwo: 'which to copy -the proportions will ',
      paragraphThree: 'be calculated automatically',
    },
    {
      numberCard: '03',
      icon: 'card-copy-icon.svg',
      iconLigth: 'card-copy-icon-dark.svg',
      title: 'Hit Copy',
      paragraphOne: 'Click the "Copy" button to start',
      paragraphTwo: 'copying the trader´s positions ',
      paragraphThree: 'automaticaly',
    },
  ];
</script>
<style>
  .mySwiper {
    width: 100%;
  }
  .swiper-slide {
    width: 328px !important;
  }
  @media (max-width: 360px) {
    .swiper-slide {
      width: 100% !important;
    }
  }
</style>
