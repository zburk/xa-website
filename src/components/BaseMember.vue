<template>
  <div class="p-1 rounded-full border-4 border-blue-light outermost">
    <div :style="styleObject(member)" class="rounded-full staff-member bg-center" @click="$emit('select', member)">
      <div class="h-full lg:hover:bg-blue rounded-full" :class="{ 'lg:bg-blue': selectedMember === member }">
        <img :src="member.headshot" class="invisible">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseMember',
  props: ['member', 'selectedMember'],
  methods: {
    styleObject(member) {
      return "background-image: url('" + member.headshot + "')"
    },
  }
}
</script>

<style scoped>
  .staff-member > div {
    @apply opacity-50
  }

  .outermost {
    width: 200px;
  }
</style>
