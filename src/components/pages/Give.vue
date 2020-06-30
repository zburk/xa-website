<template>
  <div>
    <div class="flex flex-col">
      <div class="flex-1">
        <base-banner
          class="h-128"
          text="Give"
          img="/img/give.jpg"
        ></base-banner>
      </div>
      <div class="flex-1 py-24">
        <div class="container mx-auto leading-normal">
          <p>Thank you for your generosity to Chi Alpha at UNC. Your donation is tax-deductible and goes directly to our organization at UNC. To give through PayPal, click the Donate button. You can also find us on Venmo by searching for "UNC Chi Alpha" or contact <a href="mailto:info@xa-unc.com">info@xa-unc.com</a> for more information.</p>
          <center class="py-24">
            <iframe src="//xaunc.generush.org/donate/?embedded=true" style="width: 100%; height: 2400px; border: none;"></iframe>
          </center>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Give'
}
</script>

<style scoped>
</style>
