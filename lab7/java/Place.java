abstract class Place {
  protected ReservationMethod reservationMethod;

  public Place(ReservationMethod reservationMethod) {
    this.reservationMethod = reservationMethod;
  }

  public abstract String reserveTable(String date, int guests);
}
