using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace ninj_api.Controllers
{
    [Route("/ninjify")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET ninjify/buzz,words
        public ActionResult<string> Get(string x)
        {
            if (string.IsNullOrEmpty(x)) {
                return null;
            }

            List<string> buzzwords = x.Split(',').ToList();
            string lastBuzzword = buzzwords.Last();
            string ninjaName = "";
            buzzwords.Remove(lastBuzzword);

            foreach(string buzzword in buzzwords) {
                ninjaName += getNinjaAdjective(buzzword) + " ";
            }

            ninjaName += getNinjaName(lastBuzzword);

            return ninjaName;
        }

        private readonly List<string> ninjaNames = new List<string> {
            "Sekiro",
            "Akali",
            "Sasuke",
            "Hashirama",
            "Kennen",
            "Minato",
            "Zed",
            "Shen",
            "Genji",
            "Hanzo"
        };

        private readonly List<string> ninjaAdjectives = new List<string> {
            "Silent",
            "Deadly",
            "Sharp",
            "Clever",
            "Sneaky",
            "Mysterious",
            "Resourceful",
            "Dangerous",
            "Swift",
            "Vengeful"
        };

        private string getNinjaAdjective(string buzzword) {
            string adjective = getNinjaWord(buzzword, ninjaAdjectives);

            return adjective;
        }

        private string getNinjaName(string buzzword) {
            string name = getNinjaWord(buzzword, ninjaNames);

            return name;
        }

        private string getNinjaWord(string buzzword, List<string> ninjaWords) {
            string ninjaWord;
            int numValOfWord = 0;

            foreach(char c in buzzword) {
                numValOfWord += c;
            }

            int ninjaWordIndex = numValOfWord % (ninjaWords.Count - 1);

            ninjaWord = ninjaWords[ninjaWordIndex];

            return ninjaWord;
        }
    }
}
