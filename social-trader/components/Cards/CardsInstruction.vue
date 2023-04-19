<template>
  <div
    v-if="cardInformation.numberCard === '02'"
    class="absolute w-[209px] h-[209px] bg-[#86DCA5] block laptop:hidden blur-[185px] rotate-[-90deg]"
  ></div>
  <div
    v-if="cardInformation.numberCard === '03'"
    class="block laptop:hidden absolute w-[254px] h-[235px] right-0 bg-[#6273bb] blur-[217px] rotate-[-90deg]"
  ></div>
  <p
    class="w-[192px] h-[140px] font-['Poppins'] not-italic text-[180px] leading-[140px] text-right uppercase text-[#1F252B] dark:text-white m-auto font-[900] drop-shadow-[0px_0px_rgba(0 0 0 / 85%)] relative"
    :class="{
      'laptop:left-0': cardInformation.numberCard === '01',
      'left-[-15px]': cardInformation.numberCard !== '01',
    }"
  >
    <span>{{ cardInformation.numberCard }}</span>
  </p>
  <div
    class="dark:bg-[#ffffff14] bg-[#1f252b0f] rounded-[24px] relative top-[-25px] back-filter my-auto w-full min-[360px]:w-[328px] min-[360px]:h-[316px] sm:w-[428px] sm:h-[416px] laptop:w-[24vw] laptop:h-[24.5vw] min-[1440px]:w-[20vw] min-[1440px]:h-[21vw] m-auto"
  >
    <div
      class="dark:bg-[#ffffff14] bg-[#1f252b0f] relative w-full min-[360px]:w-[328px] min-[316px]:h-[316px] sm:w-[428px] sm:h-[416px] laptop:w-[24vw] laptop:h-[24.5vw] min-[1440px]:w-[20vw] min-[1440px]:h-[21vw] border-[1px] dark:border-[#ffffff4b] border-[#989f9e85] rounded-[24px]"
    >
      <div class="text-center rounded-[24px]">
        <div
          class="text-center font-['Poppins'] not-italic relative top-0 w-full px-[1vw] pb-[2.3vw]"
        >
          <div>
            <div
              class="hidden dark:block w-[91px] h-[91px] background-gradient-title blur-[60px] rounded-full absolute top-[3.5vh] laptop:top-[2.5vh] left-[28vw] min-[480px]:left-[168px] laptop:left-[8vw] min-[1440px]:left-[7.5vw] min-[2100px]:left:[8vw] min-[2100px]:top:[3.5vw]"
            ></div>
            <img
              class="mx-auto hidden dark:block pt-[43px] sm:pt-[68px] laptop:pt-[3.5vh]"
              :src="`/svg/${cardInformation.icon}`"
              alt="Traders"
              :class="{
                'w-[86px]  sm:w-[98px] laptop:w-[6.6vw]':
                  cardInformation.numberCard === '01',
                'w-[86px] sm:w-[78px] laptop:w-[5vw]':
                  cardInformation.numberCard !== '01',
              }"
            />
            <img
              class="mx-auto block dark:hidden pt-[43px] sm:pt-[68px] laptop:pt-[3.5vh]"
              :src="`/svg/${cardInformation.iconLigth}`"
              alt="Traders"
              :class="{
                'w-[86px]  sm:w-[98px] laptop:w-[6.6vw]':
                  cardInformation.numberCard === '01',
                'w-[86px] sm:w-[78px] laptop:w-[5vw]':
                  cardInformation.numberCard === '02',
                'w-[56px] sm:w-[58px] laptop:w-[3vw]':
                  cardInformation.numberCard === '03',
              }"
            />
          </div>
          <div class="text-center pt-[22px] pb-[22px] [320px]:pb-0">
            <div
              class="font-[500] text-[22px] sm:text-[29px] laptop:text-[1.5vw] leading-6"
            >
              <p>{{ cardInformation.title }}</p>
            </div>
            <div
              class="font-light text-[12px] min-[320px]:text-[15px] sm:text-[20px] laptop:text-[1vw] min-[1440px]:text-[0.9vw] leading-7 mb-[45px] min-[320px]:mt-[15px] min-[320px]:mb-0 sm:mt-[18px]"
            >
              <p>{{ cardInformation.paragraphOne }}</p>
              <p>{{ cardInformation.paragraphTwo }}</p>
              <p v-if="cardInformation.numberCard !== '01'">
                {{ cardInformation.paragraphThree }}
              </p>
              <p
                v-if="cardInformation.numberCard === '01'"
                class="text-[1.1vw]"
                style="visibility: hidden"
              >
                01
              </p>
            </div>
          </div>
        </div>

        <div
          class="bg-[url('../../assets/svg/border-card-cropped.svg')] w-screen"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  interface ICardInstroduction {
    numberCard?: string;
    icon?: string;
    title?: string;
    description?: string;
  }
  defineProps<{
    cardInformation: ICardInstroduction;
  }>();
</script>
