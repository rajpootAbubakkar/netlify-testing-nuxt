import client from "./client";

const API_V1_URL = process.env.VUE_APP_API_V1_URL;
const API_V3_URL = process.env.VUE_APP_API_V3_URL;

export function getHome() {
  return client()
    .get("pages/home")
    .then((response) => response.data);
}

export function getCampaigns() {
  return client()
    .get("pages/campaigns")
    .then((response) => response.data);
}

export function getPage(id) {
  return client()
    .get(`pages/${id}`)
    .then((response) => response.data);
}

export function login(params) {
  return client()
    .post("sessions", params)
    .then((response) => response.data);
}

export function googleLogin(params) {
  return client()
    .post("socials", params)
    .then((response) => response);
}

export function authUser(params) {
  return client()
    .post("socials/user_info", params)
    .then((response) => response);
}

export function getUser(params) {
  return client()
    .put("sessions", params)
    .then((response) => response);
}

export function registerUser(params) {
  return client()
    .post("profiles", params)
    .then((response) => response.data);
}

export function getLodgings(params) {
  return client()
    .get("lodgings", { params })
    .then((response) => response.data);
}

export function getLodging(id) {
  return client()
    .get(`lodgings/${id}`)
    .then((response) => response.data);
}

export function getPriceDetails(id, params) {
  return client()
    .get(`lodgings/${id}`, params)
    .then((response) => response.data);
}

export function getCumulativePrices(params) {
  return client()
    .get("lodgings/cumulative_price", { params })
    .then((response) => response.data);
}

export function getCumulativePricesForRoomTypes(parentId, params) {
  return client()
    .get(`lodgings/${parentId}/room_types/cumulative_price`, { params })
    .then((response) => response.data);
}

export function getFilters() {
  return client()
    .get("filters")
    .then((response) => response.data);
}

export function getAmenities(params) {
  return client()
    .get("amenities", { params })
    .then((response) => response.data);
}

export function getOptions(id) {
  return client()
    .get(`lodgings/${id}/options`)
    .then((response) => response.data);
}

export function getPrices(params) {
  return client()
    .get("lodgings/cumulative_price", { params })
    .then((response) => response.data);
}

export function getCountries() {
  return client()
    .get("countries")
    .then((response) => response.data);
}

export function getCountryRegions(params) {
  return client()
    .get("regions", params)
    .then((response) => response.data);
}

export function createMolliePayment(bookingId, params) {
  return client()
    .post(`bookings/${bookingId}/payments`, params)
    .then((response) => response.data);
}

export function getBookings(params) {
  return client()
    .get("bookings", { params })
    .then((response) => response.data);
}

export function getBooking(bookingId) {
  return client()
    .get(`bookings/${bookingId}`)
    .then((response) => response.data);
}

export function getPlaces(lodgingSlug) {
  return client()
    .get(`lodgings/${lodgingSlug}/places?places_within=500km`)
    .then((response) => response.data);
}

export function getVisitedLodgings() {
  return client()
    .get("visited_lodgings")
    .then((response) => response.data);
}

export function destroyVisitedLodgings() {
  return client()
    .delete("visited_lodgings")
    .then((response) => response);
}

export function getRecentSearches() {
  return client()
    .get("recent_searches")
    .then((response) => response.data);
}

export function destroyRecentSearches() {
  return client()
    .delete("recent_searches")
    .then((response) => response);
}

export function validateUser(params) {
  return new Promise((resolve, reject) => {
    client()
      .post("profiles/valid", params)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
}

export function autocomplete(query) {
  return new Promise((resolve, reject) => {
    client(API_V3_URL)
      .get(`autocompletes?query=${query}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
}

export function buildChannelCalendar(lodgingId, id, params) {
  return client()
    .get(`lodgings/${lodgingId}/room_rates/${id}/calendar_build`, { params })
    .then((response) => response.data);
}

export function channelCalendarDeparture(lodgingId, id, params) {
  return client()
    .get(`lodgings/${lodgingId}/room_rates/${id}/calendar_departure`, {
      params,
    })
    .then((response) => response.data);
}

export function getCumulativePricesForRoomRates(lodging_id, id, params) {
  return client()
    .get(`lodgings/${lodging_id}/room_rates/${id}/cumulative_price`, { params })
    .then((response) => response.data);
}

export function getMollieIssuers(params) {
  return client()
    .get(`payments/payment_method_details`, { params })
    .then((response) => response.data);
}

export function updatePaymentStatus(bookingId, params) {
  return client()
    .put(`bookings/${bookingId}/payments/update_status`, params)
    .then((response) => response.data);
}

export function getPaymentMethods(params) {
  return client()
    .get("payments/payment_methods", { params })
    .then((response) => response.data);
}

export function getExperiences(params) {
  return client(API_V1_URL)
    .get("experiences", { params })
    .then((response) => response.data);
}

export function buildCalendar(id, params) {
  return client()
    .get(`lodgings/${id}/calendar_build`, { params })
    .then((response) => response.data);
}

export function calendarDeparture(id, params) {
  return client()
    .get(`lodgings/${id}/calendar_departure`, { params })
    .then((response) => response.data);
}

export function getSupplements(slug, params) {
  return client()
    .get(`lodgings/${slug}/supplements`, { params })
    .then((response) => response.data);
}

export function getSupplement(slug, params) {
  return client()
    .get(`lodgings/${slug}/supplements`, { params })
    .then((response) => response.data);
}

export function getCarts(params) {
  return client(API_V3_URL)
    .get("carts", { params })
    .then((response) => response.data);
}

export function createTrip(params) {
  return client()
    .post("trips", params)
    .then((response) => response.data);
}

export function updateTrip(id, params) {
  return client()
    .put(`trips/${id}`, params)
    .then((response) => response.data);
}

export function getTrips() {
  return client()
    .get("trips")
    .then((response) => response.data);
}

export function getTrip(trip_id) {
  return client()
    .get(`trips/${trip_id}`)
    .then((response) => response.data);
}

export function deleteTrip(id) {
  return client()
    .delete(`trips/${id}`)
    .then((response) => response);
}

export function tripLinkedAccommodation(params) {
  return client()
    .post("favourites", params)
    .then((response) => response.data);
}

export function inviteMembers(trip_id, params) {
  return client()
    .post(`trips/${trip_id}/trip_members`, params)
    .then((response) => response.data);
}

export function removeMembers(trip_id, trip_member_id) {
  return client()
    .delete(`trips/${trip_id}/trip_members/${trip_member_id}`)
    .then((response) => response.data);
}

export function createReview(reservation_id, params) {
  return client()
    .post(`reservations/${reservation_id}/reviews`, params)
    .then((response) => response.data);
}

export function getReviews(lodging_id) {
  return client()
    .get(`lodgings/${lodging_id}/reviews`)
    .then((response) => response.data);
}

export function getAllReviews(params) {
  return client()
    .get(`pages/reviews`, { params })
    .then((response) => response.data);
}

export function createAdvice(params) {
  return client()
    .post("leads", params)
    .then((response) => response.data);
}

export function accept_booking_option(id) {
  return client()
    .put(`reservations/${id}/accept_option`)
    .then((response) => response.data);
}

export function cancel_booking_option(id, reservation) {
  return client()
    .put(`reservations/${id}/cancel_option`, { reservation })
    .then((response) => response.data);
}

export function forgot_password(params) {
  return client()
    .post("passwords", params)
    .then((response) => response.data);
}

export function update_password(params) {
  return client()
    .post("profiles/update_password", params)
    .then((response) => response.data);
}

export function reset_password(params) {
  return client()
    .put("passwords", params)
    .then((response) => response.data);
}

export function signup_confirmation(params) {
  return client()
    .post("profiles/confirmation", params)
    .then((response) => response.data);
}

export function getCustomText(seo_path) {
  if (seo_path.startsWith("/")) seo_path = seo_path.substring(1);
  if (!seo_path.endsWith("/")) seo_path += "/";
  return client()
    .get(`custom_texts/show?seo_path=${seo_path}`)
    .then((response) => response.data);
}
