using System.Collections.Generic;
using System.Linq;

namespace NinjAPI.Utility
{
  public static class ToolBox
  {
    /// <summary>
    /// Removes unwanted characters, removes capitalizations and split words into a list.
    /// </summary>
    /// /// <param name="buzzwords">A comma-separated buzzword list.</param>
    public static List<string> CreateWordList(string buzzwords)
    {
      var charsToRemove = new string[] { " ", "-", ".", "+", "#", "/", "_" };

      foreach (var c in charsToRemove)
      {
        buzzwords = buzzwords.Replace(c, string.Empty);
      }

      return buzzwords
          .ToLower()
          .Split(',')
          .ToList();
    }
  }
}
