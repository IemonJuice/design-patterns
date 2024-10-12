public class CafeReservationService implements ReservationService {
  @Override
  public String reserve(String date, int guests) {
    return "Кафе: Столик заброньовано на " + guests + " гостей, дата: " + date;
  }
}
