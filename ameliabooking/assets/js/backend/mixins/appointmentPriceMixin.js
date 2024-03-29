export default {

  data () {
    return {}
  },

  methods: {
    getAppointmentService (appointment) {
      let provider = this.getProviderById(appointment.providerId)

      let providerService = provider.serviceList.find(service => service.id === appointment.serviceId)

      return providerService || this.getServiceById(appointment.serviceId)
    },

    getBookingServicePrice (service, booking) {
      return service.customPricing && service.customPricing.enabled &&
        booking.duration &&
        service.customPricing.durations.filter(i => i.duration === booking.duration).length
        ? service.customPricing.durations.find(i => i.duration === booking.duration).price : service.price
    },

    getAppointmentPrice (savedServiceId, service, bookings, isList, formatPrice = true) {
      let totalBookings = 0
      let $this = this

      let isChangedService = parseInt(savedServiceId) !== parseInt(service.id)

      bookings.filter(i => i.packageCustomerService === null).forEach(function (booking) {
        let isChangedBookingDuration = (booking.duration === null ? service.duration : booking.duration) !== service.duration

        let servicePrice = $this.getBookingServicePrice(service, booking)

        // for old bookings use price from booking
        if (booking.payments.length > 0) {
           if (['approved', 'pending'].includes(booking.status)) {
              totalBookings += $this.getBookingPrice(booking, isChangedService, isChangedService || isChangedBookingDuration ? servicePrice : booking.price, booking.aggregatedPrice)
           }
        }
        // for new bookings use price from service
        else if (!isList) {
          totalBookings += $this.getBookingPrice(booking, true, servicePrice, service.aggregatedPrice)
        }
      })

      return formatPrice ? this.getFormattedPrice(
        totalBookings >= 0 ? totalBookings : 0,
        !this.$root.settings.payments.hideCurrencySymbolFrontend
      ) : (totalBookings >= 0 ? totalBookings : 0)
    },

    getBookingPrice (booking, isNewBooking, servicePrice, aggregatedPrice) {
      let extrasPriceTotal = 0

      booking.extras.forEach(function (extra) {
        if (typeof extra.selected === 'undefined' || extra.selected === true) {
          let aggregatedExtraPrice = extra.aggregatedPrice === null ? aggregatedPrice : extra.aggregatedPrice

          extrasPriceTotal += extra.price * extra.quantity * (aggregatedExtraPrice ? booking.persons : 1)
        }
      })

      let servicePriceTotal = (isNewBooking ? servicePrice : booking.price) * (aggregatedPrice ? booking.persons : 1)
      let subTotal = servicePriceTotal + extrasPriceTotal
      let discountTotal = (subTotal / 100 * (booking.coupon ? booking.coupon.discount : 0)) + (booking.coupon ? booking.coupon.deduction : 0)

      return discountTotal > subTotal ? 0 : subTotal - discountTotal
    },

    getPackagePrice (pack, key) {
      let coupon = pack.bookings[key].packageCustomerService.packageCustomer.coupon
      let total = pack.bookings[key].packageCustomerService.packageCustomer.price
      let discountTotal = (total / 100 * (coupon ? coupon.discount : 0)) + (coupon ? coupon.deduction : 0)

      return discountTotal > total ? 0 : total - discountTotal
    }
  }
}
