class PhoneReservation implements ReservationMethod {
  @Override
  public String reserve(String date, int guests) {
    return "Бронювання через телефон на " + guests + " гостей, дата: " + date + ".";
  }
}