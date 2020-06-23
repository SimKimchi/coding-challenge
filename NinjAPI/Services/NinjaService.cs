using NinjAPI.DAL;
using NinjAPI.Models;
using NinjAPI.Utility;
using System.Collections.Generic;
using System.Linq;

namespace NinjAPI.Services
{
  /// <summary>
  /// Domain layer that requests data and handles business logic.
  /// </summary>
  public class NinjaService : INinjaService
  {
    private readonly INinjaDA _ninjaDA;

    public NinjaService(INinjaDA ninjaDA)
    {
      _ninjaDA = ninjaDA;
    }

    /// <summary>
    /// Creates and returns a ninja with a unique name.
    /// </summary>
    /// <param name="buzzwords">A comma-separated buzzword list.</param>
    public NinjaModel CreateNinja(string buzzwords)
    {
      var ninjaName = GenerateNinjaName(buzzwords);

      return new NinjaModel(ninjaName);
    }

    private string GenerateNinjaName(string buzzwords)
    {
      var ninjaName = "";
      var wordList = ToolBox.CreateWordList(buzzwords);
      var lastBuzzword = wordList.Last();

      wordList.Remove(lastBuzzword);

      foreach (string buzzword in wordList)
      {
        ninjaName += SelectNinjaWord(buzzword, _ninjaDA.GetNinjaAdjectives()) + " ";
      }

      ninjaName += SelectNinjaWord(lastBuzzword, _ninjaDA.GetNinjaNames());

      return ninjaName;
    }

    /// <summary>
    /// Selects and returns a ninja word from the provided list based on the integer value of the buzzword.
    /// 1 - Adds up the ASCII base 10 value of each of the buzzword's characters.
    /// 2 - Divides the sum by the amount of words in the provided list.
    /// 3 - Uses the rest of the division as an index to select a word from the list.
    /// </summary>
    /// <param name="buzzword">The input buzzword.</param>
    /// <param name="ninjaWords">The provided ninja words, either adjectives or names.</param>
    private string SelectNinjaWord(string buzzword, List<string> ninjaWords)
    {
      string ninjaWord;
      int numValOfWord = 0;

      foreach (char c in buzzword)
      {
        numValOfWord += c;
      }

      int ninjaWordIndex = numValOfWord % ninjaWords.Count;

      ninjaWord = ninjaWords[ninjaWordIndex];

      return ninjaWord;
    }
  }
}
