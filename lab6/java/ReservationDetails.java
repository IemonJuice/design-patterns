public class ReservationDetails {
  private String bookingDate;
  private String time;
  private int people;

  public ReservationDetails(String bookingDate, String time, int people) {
    this.bookingDate = bookingDate;
    this.time = time;
    this.people = people;
  }

  public String getBookingDate() {
    return bookingDate;
  }

  public String getTime() {
    return time;
  }

  public int getPeople() {
    return people;
  }
}
