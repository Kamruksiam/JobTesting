<template>
  <div class="my-10 grid justify-items-center">
    <div class="bg-gray-300 rounded-xl w-3/6">
      <div>
        <form action="#" class="mx-20 mt-20 mb-6">
          <h1 class="text-3xl text-gray-600 font-bold">
            Test form and invalidation
          </h1>
          <div class="mt-8">
            <div class="inline-flex w-full">
              <h1
                class="w-48 my-5 text-gray-600 font-bold text-xl text-right mr-6"
              >
                First Name
              </h1>
              <div class="w-full">
                <input
                  v-model="firstName"
                  type="text"
                  :class="
                    errfirstName
                      ? 'w-full hover:border-white border-2 border-red-600 text-lg px-2 h-10 mt-4 rounded-lg'
                      : 'w-full text-lg px-2 h-10 mt-4 rounded-lg'
                  "
                  placeholder=" Please fill first name "
                />
                <label class="pl-2 text-red-500" v-if="errfirstName == true"
                  >Please fill Out this field</label
                >
              </div>
            </div>

            <div class="inline-flex w-full">
              <h1
                class="w-48 my-5 text-gray-600 font-bold text-xl text-right mr-6"
              >
                Last Name
              </h1>
              <div class="w-full">
                <input
                  v-model="lastName"
                  type="text"
                  placeholder="Please fill last name"
                  :class="
                    errlastName
                      ? 'w-full hover:border-white border-2 border-red-600 text-lg px-2 h-10 mt-4 rounded-lg'
                      : 'w-full text-lg px-2 rounded-lg h-10 mt-4'
                  "
                />
                <label class="pl-2 text-red-500" v-if="errlastName == true"
                  >Please fill Out this field</label
                >
              </div>
            </div>

            <div class="inline-flex w-full">
              <h1
                class="w-48 my-5 text-gray-600 font-bold text-xl text-right mr-6"
              >
                E-mail
              </h1>
              <div class="w-full">
                <input
                  v-model="Email"
                  type="text"
                  :class="
                    errEmail
                      ? 'w-full hover:border-white border-2 border-red-600 text-lg px-2 h-10 mt-4 rounded-lg'
                      : 'w-full text-lg px-2 h-10 mt-4 rounded-lg'
                  "
                  placeholder=" Please fill E-mail"
                />
                <label class="pl-2 text-red-500" v-if="errEmail == true"
                  >Please fill Out this field</label
                >
              </div>
            </div>
            <div class="inline-flex w-full">
              <h1
                class="w-48 my-5 text-gray-600 font-bold text-xl text-right mr-6"
              >
                Password
              </h1>
              <div class="w-full">
                <input
                  v-model="Password"
                  type="password"
                  placeholder="Please fill password"
                  :class="
                    errPassword ||
                    (VPassword != Password && errPassword == true)
                      ? 'w-full hover:border-white  border-2 border-red-600 text-lg px-2 h-10 mt-4 rounded-lg'
                      : 'w-full text-lg px-2 rounded-lg h-10 mt-4'
                  "
                />
                <label class="pl-2 text-red-500" v-if="errPassword == true"
                  >Please fill Out this field</label
                >
                <div
                  class="pl-2 text-red-500"
                  v-if="VPassword != Password && errVPassword == true"
                >
                  Passwords do not match
                </div>
              </div>
            </div>

            <div class="inline-flex w-full">
              <h1
                class="w-48 my-5 text-gray-600 font-bold text-xl text-right mr-6"
              >
                Verify Password
              </h1>
              <div class="w-full">
                <input
                  v-model="VPassword"
                  type="password"
                  :class="
                    errVPassword ||
                    (VPassword != Password && errVPassword == true)
                      ? 'w-full hover:border-white text-lg px-2 h-10 mt-4 rounded-lg border-2 border-red-600'
                      : 'w-full text-lg px-2 h-10 mt-4 rounded-lg'
                  "
                  placeholder=" Please fill verify password "
                />
                <label class="pl-2 text-red-500" v-if="errVPassword == true"
                  >Please fill Out this field</label
                >
                <div
                  class="pl-2 text-red-500"
                  v-if="VPassword != Password && errVPassword == true"
                >
                  Passwords do not match
                </div>
              </div>
            </div>
            <div class="inline-flex w-full">
              <h1
                class="w-48 my-5 text-gray-600 font-bold text-xl text-right mr-6"
              >
                Gender
              </h1>
              <div class="w-full">
                <select
                  id="Gender"
                  :class="
                    errVPassword
                      ? 'w-full hover:border-white h-10 mt-4 rounded-lg border-2 border-red-600'
                      : 'w-full h-10 mt-4 rounded-lg'
                  "
                  @change="ChangeSelect()"
                >
                  <option value="">Please select a gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
                <label class="pl-2 text-red-500" v-if="errgenDer == true"
                  >Please fill Out this field</label
                >
              </div>
            </div>
          </div>
        </form>
        <div class="px-20 pb-10">
          <button
            @click="save"
            class="bg-green-400 font-bold text-xl h-12 w-full grid justify-items-center rounded-lg shadow-lg py-2 text-white"
          >
            บันทึก
          </button>
        </div>
        <div class="text-gray-900 text-xl px-20 pb-20" v-if="result">
          result
          <div class="text-lg text-gray-700">
            <div>First name : {{ firstName }}</div>
            <div>Last name : {{ lastName }}</div>
            <div>Email : {{ Email }}</div>
            <div>Password : {{ Password }}</div>
            <div>Gender : {{ genDer }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
  data() {
    return {
      errEmail: false,
      errfirstName: false,
      errlastName: false,
      errPassword: false,
      errVPassword: false,
      errgenDer: false,

      firstName: '',
      lastName: '',
      Email: '',
      Password: '',
      VPassword: '',
      genDer: '',
      result: false,
      cst: false,
    }
  },
  methods: {
    ChangeSelect() {
      var select = document.getElementById('Gender')
      var option = select.options[select.selectedIndex]
      this.genDer = option.value
    },
    NamePlat(inputtxt) {
      var text =
        /^[กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุูเแโใไๅๆ็่้๊๋์+a-zA-z]+$/
      if (inputtxt.match(text)) {
        return true
      } else {
        return false
      }
    },
    ValidateEmail(input) {
      var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

      if (input.match(validRegex)) {
        return true
      } else {
        return false
      }
    },

    save() {
      let mail = this.ValidateEmail(this.Email)

      let checkFname = this.NamePlat(this.firstName)
      let checkLname = this.NamePlat(this.lastName)
      console.log(checkLname)

      this.errEmail = this.Email != '' && mail == true ? false : true
      this.errfirstName = this.firstName && checkFname == true ? false : true
      this.errlastName =
        this.lastName != '' && checkLname == true ? false : true
      this.errPassword = this.Password != '' ? false : true
      this.errVPassword = this.VPassword != '' ? false : true
      this.errgenDer = this.genDer != '' ? false : true

      // console.log(this.errEmail)
      // console.log(this.errfirstName)
      // console.log(this.errlastName)
      // console.log(this.errPassword)
      // console.log(this.errVPassword)
      // console.log(this.errgenDer)

      this.result =
        this.errEmail == false &&
        this.errfirstName == false &&
        this.errlastName == false &&
        this.errPassword == false &&
        this.errVPassword == false &&
        this.errgenDer == false
          ? true
          : false
    },
  },
}
</script>
