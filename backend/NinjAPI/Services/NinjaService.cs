using System.Collections.Generic;
using System.Linq;
using NinjAPI.DAL;
using NinjAPI.Models;

namespace NinjAPI.Services
{
    /// <summary>
    /// Domain layer that requests data and handles business logic.
    /// </summary>
    public class NinjaService : INinjaService
	{
		private readonly INinjaDA _ninjaDA;

		public NinjaService(INinjaDA ninjaDA) {
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
			var wordList = buzzwords.Split(',').ToList();
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

			int ninjaWordIndex = numValOfWord % (ninjaWords.Count - 1);

			ninjaWord = ninjaWords[ninjaWordIndex];

			return ninjaWord;
		}
	}
}