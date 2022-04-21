<template>
  <div class="m-10 grid justify-items-center">
    <div class="bg-gray-300 rounded-xl xl:w-3/6 w-full">
      <div class="grid grid-cols-12 p-10">
        <div
          v-for="item in ProductData"
          :key="item.name"
          class="col-span-12 px-4"
        >
          <div class="grid grid-cols-12">
            <div class="col-span-9 text-lg font-bold">
              name : {{ item.name }}
            </div>
            <div class="col-span-3 text-right text-lg font-bold">
              Total weight : {{ item.totalSubProductWeight }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      JsonData:
        'https://raw.githubusercontent.com/deeploydev/exam-frontend/master/exam-data.json',
      ProductData: [],
    }
  },
  setup() {},
  async fetch() {
    let Product = await fetch(this.JsonData).then((res) => res.json())

    for (const key in Product) {
      if (Product[key].is_editable_price == false) {
        for (const key2 in Product[key].products) {
          console.log(Product[key].products[key2])
          this.ProductData.push({
            name: Product[key].products[key2].name,
            totalSubProductWeight:
              Product[key].products[key2].weight *
              Product[key].products[key2].amount,
          })
        }
        // this.ProductData.push(
        //   { PD: Product[key].products }

        //   //{ name: Product[key].name,
        //   // totalSubProductWeight:
        //   //   Product[key].weight * Product[key].count_products,
        //   // status: Product[key].is_editable_price,   }
        // )
      }
    }
  },
}
</script>
