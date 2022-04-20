<template>
  <div>
    <div class="m-10 grid justify-items-center">
      <div class="bg-gray-300 rounded-xl w-3/6">
        <div class="m-10 text-2xl font-bold grid justify-items-center">
          <input
            placeholder="กรอกตัวเลข"
            class="w-full rounded-lg h-12 px-2"
            ref="number"
            @keypress="CheckNumber($event)"
          />
          <div class="pt-2 w-full">
            <div class="py-2 w-full">
              <button
                @click="add"
                class="bg-green-400 h-12 w-full grid justify-items-center rounded-lg shadow-lg py-2 text-white"
              >
                เพิ่มตัวเลข
              </button>
            </div>
            <div class="py-2 w-full">
              <button
                @click="check"
                class="bg-black h-12 w-full grid justify-items-center text-white rounded-lg shadow-lg py-2"
              >
                ตรวจสอบ
              </button>
            </div>
            <div class="py-2 w-full">
              <button
                @click="resetArray"
                class="bg-red-400 h-12 w-full grid justify-items-center text-white rounded-lg shadow-lg py-2"
              >
                รีเซ็ต
              </button>
            </div>
          </div>

          <div class="py-10">
            <div>Array : {{ ArrayChecking }}</div>
            <div>result : {{ result }}</div>
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
      getdata: '',
      ArrayChecking: [],
      result: '',
    }
  },
  methods: {
    removeDuplicateStrings(inputArray) {
      return [...new Set(inputArray)]
    },
    CheckNumber(event) {
      const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
      if (!numbers.includes(event.key)) {
        //  if (!numbers.includes(event.key)) {
        //หากเป็นตัวเลขจะไม่สามารถพิมพ์ได้
        return event.preventDefault()
      }
    },

    check() {
      if (this.ArrayChecking.length == 0) {
        this.result = 'null'
      } else if (this.ArrayChecking.length == 1) {
        this.result = this.ArrayChecking[0]
      } else if (this.ArrayChecking.length > 1) {
        this.ArrayChecking.sort()

        this.ArrayChecking.sort(function (a, b) {
          return a - b
        })
        this.ArrayChecking.reverse()
        let dub = this.removeDuplicateStrings(this.ArrayChecking)

        this.result = dub[1]
      }
    },
    add() {
      this.getdata == ''

      if (this.$refs['number'].value != '') {
        this.ArrayChecking.push(parseInt(this.$refs['number'].value))
        this.$refs['number'].value = ''
      }
    },
    resetArray() {
      this.result = ''
      this.ArrayChecking = []
    },
  },
}
</script>
