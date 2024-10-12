class Cafe extends Place {
  public Cafe(ReservationMethod reservationMethod) {
    super(reservationMethod);
  }

  @Override
  public String reserveTable(String date, int guests) {
    return "Кафе: " + reservationMethod.reserve(date, guests);
  }
}
