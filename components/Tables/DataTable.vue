<!-- eslint-disable vue/no-template-shadow -->
<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto">
      <div class="py-2 inline-block min-w-full sm:px-6">
        <div class="overflow-x-auto table-radius backdrop-blur-[13px]">
          <table
            class="min-w-full text-left text-sm white-mode backdrop-blur-[13px] dark:bg-whiteOpacity"
          >
            <thead
              class="text-dark dark:text-white max-[298px]:text-[18px] min-[306px]:text-[14px] text-sm opacity-[.6] leading-[24px] font-[400] backdrop-blur-[13px] border-b-[1px] border-white/[0.2]"
            >
              <tr>
                <template v-for="(cell, i) in tableHeader" :key="i">
                  <th
                    :class="[
                      cell.name && 'min-w-125px',
                      tableHeader.length - 1 === i && 'text-end',
                    ]"
                    class="px-22 py-4 font-medium text-dark dark:text-white"
                    tabindex="0"
                    rowspan="1"
                    colspan="1"
                    style="cursor: pointer"
                  >
                    {{ cell.name }}
                  </th>
                </template>
              </tr>
            </thead>
            <tbody
              class="text-dark dark:text-white max-[298px]:text-[20px] min-[306px]:text-[16px] text-sm leading-[24px] font-[500]"
            >
              <template v-if="getItems?.length">
                <template v-for="(item, i) in getItems" :key="i">
                  <tr
                    class="hover:bg-whiteOpacity"
                    :class="
                      i == 0
                        ? 'bg-[#2f2f2f]/[0.09] dark:bg-white/[0.12]'
                        : i == 1
                        ? 'bg-[#1f252b]/[0.04] dark:bg-white/[0.06]'
                        : i == 2
                        ? 'bg-[#1f252b]/[0.02] dark:bg-white/[0.02]'
                        : ''
                    "
                  >
                    <template v-for="(cell, i) in tableHeader" :key="i">
                      <td
                        class="px-22"
                        :class="{ 'text-end': tableHeader.length - 1 === i }"
                      >
                        <slot :name="`cell-${cell.key}`" :row="item">
                          {{ item[prop] }}
                        </slot>
                      </td>
                    </template>
                    <!--end::Item=-->
                  </tr>
                </template>
              </template>
              <template v-else>
                <tr class="odd">
                  <td colspan="7" class="dataTables_empty">
                    {{ emptyTableText }}
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  interface IHeaderConfiguration {
    name?: string;
    key: string;
    sortingField?: string;
    sortable?: boolean;
  }

  export default defineComponent({
    name: 'TableComponent',
    props: {
      tableHeader: {
        type: Array as () => Array<IHeaderConfiguration>,
        required: true,
      },
      tableData: { type: Array, required: true },
      emptyTableText: { type: String, default: 'No data found' },
      loading: { type: Boolean, default: false },
      currentPage: { type: Number, default: 1 },
      enableItemsPerPageDropdown: { type: Boolean, default: true },
      total: { type: Number, default: 0 },
      rowsPerPage: { type: Number, default: 10 },
      order: { type: String, default: 'asc' },
      sortLabel: { type: String, default: '' },
    },
    setup(props) {
      const data = ref(props.tableData);
      const getItems = computed(() => {
        return data.value;
      });
      return {
        data,
        getItems,
      };
    },
  });
</script>
