<template>
  <div>
    <div class="flex">
      <div class="flex-1">
        <base-banner
          class="h-128"
          text="Staff"
          img="https://via.placeholder.com/2000x1200"
        ></base-banner>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row flex-wrap mx-auto justify-center">
      <div class="m-10" v-for="(member, index) in staff1" :key="index">
        <base-member
          :member="member"
          :selectedMember="selectedMember"
          v-on:select="selectedMember = $event">
        </base-member>

        <div class="lg:hidden">
          <h2 class="text-3xl mt-3">{{ member.name }}</h2>
          <h3 class="font-sans text-black text-xl mt-3" v-if="member.title">
            {{ member.title }}
          </h3>

          <p>{{ member.text }}</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row flex-wrap mx-auto justify-center">
      <div class="m-10" v-for="(member, index) in staff2" :key="index">
        <base-member
          :member="member"
          :selectedMember="selectedMember"
          v-on:select="selectedMember = $event">
        </base-member>

        <div class="lg:hidden">
          <h2 class="text-3xl mt-3">{{ member.name }}</h2>
          <h3 class="font-sans text-black text-xl mt-3" v-if="member.title">
            {{ member.title }}
          </h3>

          <p>{{ member.text }}</p>
        </div>
      </div>
    </div>

    <div class="container mx-auto my-10 hidden lg:block">
      <h2 class="text-4xl">{{ selectedMember.name }}
        <span class="font-sans text-black text-2xl" v-if="selectedMember.title">
          <span class="mx-4">|</span>
          {{ selectedMember.title }}
        </span>
      </h2>

      <div class="flex flex-row my-10">
        <p class="flex-grow leading-normal pr-6">{{ selectedMember.text }}</p>
        <div class="flex-none">
          <img :src="selectedMember.img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Staff',
  data() {
    return {
      selectedMember: {},
      staff1: [
        {
          name: 'Joe Newell',
          headshot: 'https://via.placeholder.com/200x200',
          img: 'https://via.placeholder.com/400x350',
          title: 'Campus Pastor',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.'
        },
        {
          name: 'David Lao',
          headshot: 'https://via.placeholder.com/200x200',
          img: 'https://via.placeholder.com/400x350',
          title: '',
          text: ''
        },
        {
          name: 'Seth Collins',
          headshot: 'https://via.placeholder.com/200x200',
          img: 'https://via.placeholder.com/400x350',
          title: '',
          text: ''
        }
      ],
      staff2: [
        {
          name: 'Brooke Collins',
          headshot: 'https://via.placeholder.com/200x200',
          img: 'https://via.placeholder.com/400x350',
          title: '',
          text: ''
        },
        {
          name: 'Emily Shuman',
          headshot: 'https://via.placeholder.com/200x200',
          img: 'https://via.placeholder.com/400x350',
          title: '',
          text: ''
        }
      ]
    }
  },
  methods: {
    select(member) {
      this.selectedMember = member;
    }
  },
  created() {
    this.selectedMember = this.staff1[0];
  }
}
</script>

<style scoped>
</style>
