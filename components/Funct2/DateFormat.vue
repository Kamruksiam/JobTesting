<template>
  <div>
    <div class="m-10 grid justify-items-center">
      <div class="bg-gray-300 rounded-xl w-3/6">
        <div class="m-10 text-2xl font-bold grid justify-items-center">
          <div class="my-2">2020-08-10T14:54:52+07:00</div>
          <div class="my-2">รูปแบบปฏิทินอังกฤษ : {{ dateEn }}</div>
          <div class="my-2">รูปแบบปฏิทินไทย : {{ dateTH }}</div>
          <div class="my-2">จำนวนวันในเดือนนี้ : {{ dayCount }}</div>
          <div class="my-2">ไตรมาตรของเดือนนี้ : {{ quarterDate }}</div>
          <div class="my-2">unixTimestamp : {{ unixTimestamp }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      unixTimestamp: '',
      dateTH: '',
      dateEn: '',
      quarterDate: '',
      dayCount: '',
    }
  },
  methods: {
    daysInMonth(month, year) {
      return new Date(year, month, 0).getDate()
    },
    quarter(date) {
      var month = date.getMonth() + 1
      return Math.ceil(month / 3)
    },
  },
  created() {
    let time = '2020-08-10T14:54:52+07:00'
    let a = new Date(time)

    let b = a.toString()
    let c = b.split(' ')

    let e = []
    e.push({
      day: c[0],
      mon: c[1],
      mondate: c[2],
      year: c[3],
      time: c[4],
    })
    var thmonth = new Array(
      'มกราคม',
      'กุมภาพันธ์',
      'มีนาคม',
      'เมษายน',
      'พฤษภาคม',
      'มิถุนายน',
      'กรกฎาคม',
      'สิงหาคม',
      'กันยายน',
      'ตุลาคม',
      'พฤศจิกายน',
      'ธันวาคม'
    )

    var enmonth = new Array(
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    )
    let d = 0
    let ki = 0
    for (const key in enmonth) {
      //   console.log(key)
      //   console.log(e[0].mon)
      if (e[0].mon == enmonth[key]) {
        d = ki
      }
      ki++
    }
    let dateENG = time.slice(0, 10).split('-')
    this.dateEn =
      dateENG[2] +
      '/' +
      dateENG[1] +
      '/' +
      dateENG[0] +
      '  ' +
      e[0].time.slice(0, 5)

    this.dateTH =
      e[0].mondate + ' ' + thmonth[d] + ' ' + (parseInt(e[0].year) + 543)

    this.dayCount = this.daysInMonth(dateENG[1], dateENG[0])
    this.quarterDate = this.quarter(
      new Date(dateENG[0], dateENG[1], dateENG[2])
    )

    this.unixTimestamp = new Date(time).valueOf()

    // )
    // console.log(e[0].time.slice(0, 5))
  },
}
</script>
