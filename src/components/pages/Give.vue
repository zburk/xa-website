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
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick">
              <input type="hidden" name="hosted_button_id" value="39VYWBX7ZN2RA">
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
            </form>
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
