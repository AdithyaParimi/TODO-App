<template>
  <div id="main">
    <form v-cloak>
      <h1>Facilities</h1>

      <ul>
        <!-- Loop through the facilities array, assign a click handler, and set or
             remove the "active" css class if needed -->
        <li
          v-for="faciliti in facilities"
          v-on:click="toggleActive(faciliti)"
          v-bind:class="faciliti.active ? 'active' : ''"
        >
          <!-- Display the name and price for every entry in the array .
                Use the formatCurrency method for formatting the price -->
          {{ faciliti.name }} <span>{{ formatCurrency(faciliti.price) }}</span>
        </li>
      </ul>

      <div class="total">
        <!-- Calculate the total price of all chosen facililtys. Format it as currency using formatCurrency. -->
        Total: <span>{{ formatCurrency(total()) }}</span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    // The model properties. The view should loop
    // through the facilities array and generate a li
    // element for every one of its items.
    return {
      facilities: [
        {
          name: "Ballroom",
          price: 5000,
          active: true,
        },
        {
          name: "Backyard",
          price: 400,
          active: false,
        },
        {
          name: "Wellness Area",
          price: 250,
          active: false,
        },
        {
          name: "Restaurant",
          price: 220,
          active: false,
        },
      ],
    };
  },
  methods: {
    // this method will toggle an item to make it active/inactive (no change necessary)
    toggleActive: function (s) {
      s.active = !s.active;
    },
    // method to calculate the total amount
    total: function () {
      // variable to hold total
      var total = 0;
      this.facilities?.forEach((f) => {
        if (f.active) {
          total = total + f.price;
        }
      });
      //loop through facilities
      //
      //check whether item is active
      //
      //sum up for total
      //
      //
      //

      return total;
    },
    // method to format as currency
    formatCurrency(value) {
      // put dollar sign in front of value and show 2 deci,al places e.g $500.00
      return `$ ${(Math.round(value * 100) / 100).toFixed(2)}`;
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Shadows+Into+Light);
[v-cloak] {
  display: none;
}

* {
  margin: 0;
  padding: 0;
}

body {
  font: 15px/1.3 "Open Sans", sans-serif;
  color: #5e5b64;
  text-align: center;
}

a,
a:visited {
  outline: none;
  color: #389dc1;
}

a:hover {
  text-decoration: none;
}

section,
footer,
header,
aside,
nav {
  display: block;
}

/*-------------------------
    The order form
--------------------------*/

form {
  background-color: #8931ef;
  border-radius: 2px;
  box-shadow: 0 1px 1px #ccc;
  width: 400px;
  padding: 35px 60px;
  margin: 50px auto;
}

form h1 {
  color: #fff;
  font-size: 64px;
  font-family: "Cookie", cursive;
  font-weight: normal;
  line-height: 1;
  text-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
}

form ul {
  list-style: none;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin: 20px 0 15px;
}

form ul li {
  padding: 20px 30px;
  background-color: #a5949a;
  margin-bottom: 8px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

form ul li span {
  float: right;
}

form ul li.active {
  background-color: #87e911;
}

div.total {
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding: 15px 30px;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  color: #fff;
}

div.total span {
  float: right;
}
</style>
