using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using NinjAPI.Constants;
using NinjAPI.DTO;
using NinjAPI.Models;

namespace NinjAPI.Services
{
	public class NinjaService : INinjaService
	{
		public NinjaModel createNinja(string buzzwords)
		{
			var wordList = buzzwords.Split(',').ToList();
			var lastBuzzword = wordList.Last();
			var ninjaName = "";

			wordList.Remove(lastBuzzword);

			var ninjaDTO = getNinjaDTO();

			foreach (string buzzword in wordList)
			{
				ninjaName += GenerateNinjaWord(buzzword, ninjaDTO.NinjaAdjectives) + " ";
			}

			ninjaName += GenerateNinjaWord(lastBuzzword, ninjaDTO.NinjaNames);

			return new NinjaModel(ninjaName);
		}

		private NinjaDTO getNinjaDTO()
		{
			NinjaDTO ninjaDTO;

			using (StreamReader sr = new StreamReader(Path.Combine(Environment.CurrentDirectory, FilePaths.NinjaDB)))
			{
				string json = sr.ReadToEnd();
				ninjaDTO = JsonConvert.DeserializeObject<NinjaDTO>(json);
			}

			return ninjaDTO;
		}

		private string GenerateNinjaWord(string buzzword, List<string> ninjaWords)
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