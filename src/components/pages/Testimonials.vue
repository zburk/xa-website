<template>
  <div>
    <div class="flex">
      <div class="flex-1">
        <base-banner
          class="h-128"
          text="Testimonials"
          img="https://via.placeholder.com/2000x1200"
        ></base-banner>
      </div>
    </div>

    <div class="container mx-auto mt-20 px-20" ref="testimonials">
      <section v-for="(testimonial, index) in testimonials" :key="index" class="mb-20">
        <div class="mb-5">
          <h1 class="uppercase font-bold my-3 text-base font-sans">{{ testimonial.name }}</h1>
          <h2 class="text-grey-darker my-1 text-base font-sans font-normal">{{ testimonial.school }}</h2>
          <div :class="classObject(testimonial.school)"></div>
        </div>
        <p>{{ testimonial.text }}</p>
      </section>
    </div>

    <!-- Paypal button  -->
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" class="donation-button pin-b pin-r fixed m-10" :class="{ 'show-button': showDonationButton }">
      <input type="hidden" name="cmd" value="_s-xclick">
      <input type="hidden" name="hosted_button_id" value="39VYWBX7ZN2RA">
      <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
      <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
    </form>
  </div>
</template>

<script>
import inView from 'in-viewport';

export default {
  name: 'Testimonials',
  data() {
    return {
      showDonationButton: false,
      testimonials: [
        {
          name: 'John Smith',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue eu leo pharetra mollis eget vitae ex. Praesent congue nunc dolor, vel semper lacus maximus vel. Mauris neque tellus, placerat faucibus feugiat non, accumsan vel nunc. Aenean faucibus velit laoreet risus cursus porttitor. Donec sem arcu, pharetra et diam vel, elementum fringilla augue. Mauris ante mauris, efficitur ac orci nec, tincidunt ultrices turpis. Morbi in ante sed diam interdum vehicula. Nullam nec porttitor quam, eu tempor sem. Aenean vitae ultrices ex, sed efficitur urna. Integer imperdiet mattis condimentum. Pellentesque non sem nec diam scelerisque lobortis. Suspendisse potenti. Aliquam in eleifend ex, id interdum eros. Vestibulum aliquam tellus et risus maximus, sit amet fringilla mauris imperdiet. Quisque egestas luctus luctus. Duis vel lorem nec turpis rhoncus elementum nec nec nulla.',
          school: 'North Carolina State University'
        },
        {
          name: 'Jane Doe',
          text: 'In pulvinar neque non erat lacinia tincidunt. Phasellus bibendum metus risus, nec vulputate leo dictum ut. In laoreet quam ac aliquam sagittis. Donec egestas risus eu mauris pharetra gravida. Sed gravida mattis arcu, et rutrum augue dignissim vel. Pellentesque non nunc nec elit tempus semper quis id dolor. Cras nisl nisi, consectetur eu tortor a, aliquet dapibus elit. Aliquam pharetra urna pretium leo bibendum, id fermentum leo pretium. Aliquam imperdiet ultricies rhoncus. Donec malesuada non massa nec laoreet. Cras est ex, luctus dictum neque a, molestie blandit lectus. Sed pulvinar volutpat ligula. Sed eget placerat odio, sed accumsan lacus. Nam eget est eget ante accumsan tristique. Nullam rhoncus pharetra augue ultrices pharetra.',
          school: 'University of North Carolina at Chapel Hill'
        }
      ]
    }
  },
  methods: {
    classObject(school) {
      var color;
      switch (school) {
        case 'North Carolina State University':
          color = 'red';
          break;
        default:
          color = 'blue';
          break;
      }

      return {
        'w-12 h-1': true,
        ['bg-' + color]: true
      }
    }
  },
  mounted() {
    inView(this.$refs['testimonials'], () => {
      this.showDonationButton = true;
    });
  }
}
</script>

<style scoped>
  .donation-button {
    opacity: 0;
    visibility: hidden;
  }

  .show-button {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.5s linear;
  }
</style>
