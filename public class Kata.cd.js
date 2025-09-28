public class Kata
{
  public static string HoopCount(int n)
  {
    // Turnary operator 
    // Condition ? "Returns if true" : "Return if false";
    return n >= 10
      ? "Great, now move on to tricks"
      : "Keep at it until you get it";
  }
}


// Create a constant and use it

// public class Kata
// {
//   public static string HoopCount(int n)
//   {
//     const int HOPS_LIMIT = 10;
//     return n >= HOPS_LIMIT
//       ? "Great, now move on to tricks"
//       : "Keep at it until you get it";
//   }
// }