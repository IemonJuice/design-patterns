class OnlineReservation implements ReservationMethod {
  @Override
  public String reserve(String date, int guests) {
    return "Бронювання через інтернет на " + guests + " гостей, дата: " + date + ".";
  }
}
