<template>
  <div id="about" class="laptop:pt-[4vw]">
    <div id="seccion-2">
      <br />
      <div class="px-0 hidden laptop:block laptop:pb-[50px]">
        <div
          class="grid grid-cols-8 gap-4 laptop:px-[12vw] min-[1440px]:px-[7vw]"
        >
          <div class="... relative">
            <p
              class="absolute right-[-5vw] min-[1440px]:right-[-3.4vw] rotate-180 vertical-lr upper-title text-border-white dark:text-border-dark text-white dark:text-black laptop:text-[12.5vw] min-[1440px]:text-[11.5vw] min-[1944px]:text-[11.3vw]"
            >
              ABOUT
            </p>
          </div>
          <div class="relative col-span-7 ...">
            <div class="grid grid-cols-[40%_60%] gap-0">
              <div class="col-span-1">
                <h1
                  class="text-7xl title uppercase text-left ml-[2.5vw] mr-4 leading-[68px]"
                >
                  Social<br />Trader
                </h1>
              </div>
              <div
                class="col-span-1 font-['Poppins'] not-italic font-[300] laptop:text-[10.6px] laptop:pl-[40px] min-[1236px]:text-[14px] min-[1236px]:pl-0 leading-[28px]"
              >
                <p class="subtitle relative font-[400]">
                  Not just a copy, but a community!
                </p>
                <div class="laptop:mt-[7px] [1236px]:mt-[15px]">
                  <p class="text relative"></p>
                  <p>
                    Sales promotion unnaturally justifies the tactical consumer
                    market.
                  </p>
                  <p>
                    Strategic planning develops the image. Positioning in the
                    market
                  </p>
                  <p>
                    distorts the empirical image, realizing the social
                    responsibility of
                  </p>
                  <p>the business.</p>
                </div>
              </div>
              <div
                class="absolute top-[10vw] xl:top-[7vw] right-[12vw] xl:right-[17vw] background-gradient-title w-[53vw] h-[6rem] blur-[121px] rounded-full max-[480px]:w-full"
              />
            </div>
            <div
              class="row-span-2 col-span-2 ml-[2.5vw] mx-4 mt-10 xl:mr-[200px] lg:mr-[100px]"
            >
              <img
                src="@/assets/logos/video.png"
                width="100%"
                alt="video"
                class="relative"
              />
            </div>
          </div>
        </div>
      </div>
      <!--MOBILE-->
      <div class="sm:px-0 laptop:px-2 laptop:hidden max-[359px]:px-0">
        <div class="relative flex flex-col w-full space-x-1 items-start">
          <div>
            <h1
              class="relative top-[14vw] md:top-[13.2vw] min-[830px]:top-[12.6vw] min-[900px]:top-[12vw] upper-title about-mobile-text text-border-white dark:text-border-dark text-white dark:text-black"
            >
              ABOUT
            </h1>
            <h1
              class="relative uppercase ml-1 text-left text-[9vw]"
              style="font-size: min(8.5vw, 62px); font-weight: bold"
            >
              Social Trader
            </h1>
            <div
              class="absolute right-0 top-[45vw] w-[88%] h-[13%] rounded-l-full-oval background-gradient-title blur-[121px] max-[480px]:h-[25%] max-[280px]:h-[50%] opacity-75"
            />
          </div>
          <div class="mt-[4vw]">
            <p class="subtitle relative mr-4">
              Not just a copy, but a community!
            </p>
            <p
              class="relative mt-[15px] mb-[7vw] sm:mr-[2rem] min-[280px]:mr-2 font-['Poppins'] not-italic font-[300] text-[14px]"
            >
              Sales promotion unnaturally justifies the tactical consumer
              market. Strategic planning develops the image. Positioning in the
              market distorts the empirical image, realizing the social
              responsibility of the business.
            </p>
          </div>
          <div>
            <img
              src="@/assets/logos/video.png"
              width="900"
              alt="video"
              class="relative"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  export default {
    name: 'AboutComponent',
  };
</script>

<script setup lang="ts">
  useHead({
    title: 'Social Trader - About',
  });
</script>
