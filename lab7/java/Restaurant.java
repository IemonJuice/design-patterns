class Restaurant extends Place {
  public Restaurant(ReservationMethod reservationMethod) {
    super(reservationMethod);
  }

  @Override
  public String reserveTable(String date, int guests) {
    return "Ресторан: " + reservationMethod.reserve(date, guests);
  }
}