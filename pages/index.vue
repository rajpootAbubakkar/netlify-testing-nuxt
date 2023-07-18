<template>
  <div class="main-content pt-5 pt-md-0">
    <div class="container-fluid px-0">
      <div class="card">
        <div class="card-body p-0">
          <div class="home">
            <section class="section hero-section p-0 bg-ico-hero" id="home">
              <div class="row mx-0"></div>
            </section>

            <div class="p-0">
              <div class="card">
                <div class="card-body p-0">Hello World</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCampaigns, getAllReviews } from "~/utils/api";
import { setLocale } from "~/utils/client";

export default {
  name: "Home",
  layout: "home",

  async asyncData(context) {
    const { $cookies } = context;
    const payload = {
      page: 1,
      per_page: 10,
    };

    const locale = $cookies.get("i18n_redirected") ?? "en";
    locale && setLocale(locale);

    const [response, campaigns] = await Promise.all([
      getAllReviews(payload),
      getCampaigns(),
    ]);
    return {
      campaigns: campaigns?.homepage_collections,
      collections: campaigns?.homepage_accommodation_types,
      reviews: response?.data,
    };
  },
};
</script>

<style scoped>
.top-header {
  font-size: 2rem;
}
.marginTop {
  padding-top: 170px !important;
}
@media only screen and (max-width: 991px) {
  .marginTop {
    padding-top: 50px !important;
  }

  .top-header {
    font-size: 1.5rem !important;
  }
}
.shaddy-backgound {
  background: rgba(70, 70, 70, 0.3);
  height: 100%;
}
</style>
