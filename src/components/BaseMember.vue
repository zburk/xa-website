<template>
  <div :class="classObject(member.borderColor)">
    <div :style="styleObject(member)" class="rounded-full staff-member bg-center" @click="$emit('select', member)">
      <div class="h-full rounded-full" :class="{ 'lg:hover:bg-blue-500 cursor-pointer': hoverable, 'lg:bg-blue-500': selectedMember === member }">
        <img :src="member.headshot" class="invisible">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseMember',
  props: ['member', 'selectedMember', 'hoverable'],
  methods: {
    styleObject(member) {
      return "background-image: url('" + member.headshot + "')"
    },

    classObject(borderColor) {
      var color = 'blue';
      if (borderColor) {
        color = borderColor;
      }

      return {
        'p-1 rounded-full border-4 outermost': true,
        ['border-' + color + '-400']: true
      }
    }
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
